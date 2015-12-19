Template.listProd.onDestroyed(function () {
    $(window).scrollTop(0);
});

Template.listProd.onCreated(function () {

    //Verificar cuenta
    if (Accounts._verifyEmailToken)
        Accounts.verifyEmail(Accounts._verifyEmailToken, function (err) {
            if (err)
                if (err.message = 'Verify email link expired [403]')
                    Materialize.toast('El link para verificar tu cuenta ha expirado :(', 1500);
                else
                    Materialize.toast('Has verificado tu cuenta :D', 1700);
        });

    //if ( !Session.get('type') && !Session.get('price') && !Session.get('name') && !Session.get('ramType') && !Session.get('ramQuantity') && !Session.get('graphType') && !Session.get('graphQuantity') &&!Session.get('brand') && !Session.get('') && !Session.get('') && !Session.get('procesorVelocity') && !Session.get('cores') && !Session.get('brandProce') ) {

    // Session vars for filters
    Session.setDefault({
        type: '',
        price: '',
        name: '',

        ramType: [],
        ramQuantity: [],

        graphType: [],
        graphQuantity: [],
        brand: '',

        procesorVelocity: [],
        cores: [],
        brandProce: '',

        /*oldQuery: {},
        newQuery: 0*/
    });

})

//----------------------------------Inicializar componentes

Template.products.onRendered(function () {

    divClone = $(".busqueda").clone();
    // initialize components
    $('select').material_select();
    filters();

})

//----------------------------------- Events

Template.products.events({

    // Añadir producto al carrito
    'click .mdi-content-add': function (event, template) {
        Meteor.call('addToBasket',
            event.target.getAttribute('data-id'), //id objeto elegido
            1, //unidades
            function (error, result) { //Control de resultados
                if (error)
                    Materialize.toast('Error al añadir al carrito', 2000);
                else
                if (result)
                    Materialize.toast('Producto añadido', 1500);
                else
                    Materialize.toast('No hay stock de ese producto', 1500);
            }
        );
    },

    'click .borrarFiltros': function(evet,template){
        Session.set({
            type: '',
            price: '',
            name: '',

            ramType: [],
            ramQuantity: [],

            graphType: [],
            graphQuantity: [],
            brand: '',

            procesorVelocity: [],
            cores: [],
            brandProce: ''
        });

        $(".busqueda").replaceWith(divClone.clone());
        $('select').material_select();
        filters();
    },

    //Guardar el valor de filtro elegido

    // Filtros simples
    'change .select-seccion.initialized': function (event, template) {
        Session.set('type', template.find('.select-seccion.initialized').value);
    },

    'keyup #nombre': function (event, template) {
        Session.set('name', template.find('#nombre').value);
    },

    'change #precio-max, keyup #precio-max': function (event, template) {
        Session.set('price', template.find('#precio-max').value);
    },

    //Filtros complejos

    //RAM
    "change input[name='ramQuantity[]']": function (event, template) {
        getValueFilters('ramQuantity[]', 'ramQuantity', 'int');
    },

    "change input[name='ramType[]']": function (event, template) {
        getValueFilters('ramType[]', 'ramType', 'string');
    },

    //Gráfica
    "change input[name='graphType[]']": function (event, template) {
        getValueFilters('graphType[]', 'graphType', 'string');
    },

    "change input[name='graphQuantity[]']": function (event, template) {
        getValueFilters('graphQuantity[]', 'graphQuantity', 'int');
    },

    'change #comp-graf': function (event, template) {
        Session.set('brand', template.find('#comp-graf').value);
    },

    //Procesadores
    "change input[name='cores[]']": function (event, template) {
        getValueFilters('cores[]', 'cores', 'int');
    },

    "change input[name='procesorVelocity[]']": function (event, template) {
        getValueFilters('procesorVelocity[]', 'procesorVelocity', 'int');
    },

    "change #comp-proce": function (event, template) {
        Session.set('brandProce', template.find('#comp-proce').value);
    }

})

//----------------------------------Helpers

Template.listProd.helpers({

    //Get isNewQuery
   /* isNewQuery: function(){
        return Session.get('newQuery');
    },*/

    // Get query
    getProducts: function () {

        // Get data for filter
        var type = Session.get('type');
        var price = Session.get('price');
        var name = Session.get('name');

        //Query
        var query = {};

        //Modify query
        //type
        if (type !== '') {
            query.type = type;

            //complex filters
            switch (type) {
            case 'ram':
                filtrarProducto('ramQuantity', 'quantity', query);
                filtrarProducto('ramType', 'typeRAM', query);
                break;
            case 'procesadores':
                filtrarProducto('cores', 'cores', query);

                if (Session.get('brandProce') !== '')
                    query['details.brand'] = Session.get('brandProce');

                var proceVel = Session.get('procesorVelocity');

                if (  proceVel.length > 1){

                    var arrayVel = [];
                    var aux =  {};

                    _.each(proceVel,function( velocity ){
                        aux['details.velocity'] = { $lt: velocity };
                        arrayVel.push( aux ) ;
                    });

                    query.$or = arrayVel;

                }else if( proceVel.length === 1 ){
                    query['details.velocity'] = { $lt: proceVel[0] } ;
                }

                break;
            case 'graficas':
                filtrarProducto('graphType', 'graphType', query);
                filtrarProducto('graphQuantity', 'graphQuantity', query);

                if (Session.get('brand') !== '')
                    query['details.brand'] = Session.get('brand');

                break;
            }
        }

        //price
        if (price !== '' && price > 0)
            query.price = {
                $lte: parseInt(price)
            };

        //name
        if (name !== '')
            query.name = {
                $regex: name,
                $options: 'i'
            };

        //Launch query
        var result = Products.find(query, {
            sort: {
                createdAt: -1
            }
        });
        /*
        if ( Session.get('oldQuery') !== query ){
            Session.set('newQuery',1);
            Session.set('oldQuery',query);
        }*/

        //return JSON.stringify(query);

        return result;
    }
})


//-------------------- FUNCIONES --------------------------------


// Filtrar los productos
var filtrarProducto = function (variable, field, query) {

    var values = Session.get(variable);

    if (values.length !== 0) {
        if (values.length == 1)
            query['details.' + field] = values[0];
        else {
            var arrayValues = [];

            _.each(values, function (Value) {

                var aux = {};
                aux['details.' + field] = Value;
                arrayValues.push(aux);
            });

            query.$or = arrayValues;
        }
    }
}

// Dar valor a las variables de sesion
var getValueFilters = function (inputName, sessionVar, valueType) {
    var values = [];

    if (valueType === 'int')
        $("input[name='" + inputName + "']:checked").each(function () {
            values.push(parseInt($(this).val()));
        });
    else
        $("input[name='" + inputName + "']:checked").each(function () {
            values.push($(this).val());
        });

    Session.set(sessionVar, values);
}

var filters = function() {
        /* Guardo su posicion porque se podria usar muchas veces */
        var $ram = $('.filtro-ram');
        var $proce = $('.filtro-proce');
        var $graf = $('.filtro-graficas');
        var $select = $('.select-seccion.initialized');
        var $fondoLetra = $('.fondo-filtro');

        // Ocultar o mostrar filtros cuando sea necesario
        $select.on('change', function () {
            switch ($select.val()) {
            case 'ram':
                $ram.show(400);
                $proce.hide(400);
                $graf.hide(400);
                opacidad($fondoLetra, 0, 400);
                break;
            case 'procesadores':
                $proce.show(400);
                $ram.hide(400);
                $graf.hide(400);
                opacidad($fondoLetra, 0, 400);
                break;
            case 'graficas':
                $graf.show(400);
                $ram.hide(400);
                $proce.hide(400);
                opacidad($fondoLetra, 0, 400);
                break;
            case 'placaBase':
                $graf.hide(400);
                $ram.hide(400);
                $proce.hide(400);
                opacidad($fondoLetra, 0.15, 400);
                break;
            default:
                $graf.hide(400);
                $ram.hide(400);
                $proce.hide(400);
                opacidad($fondoLetra, 0.15, 400);
                break;
            }
        });
    };

/* Cambiar opacidad ,lo uso para ver 'espacio para filtro' en pantallas medianas */
var opacidad = function(elemento, opacidad, velocidad) {
    elemento.velocity({
        opacity: opacidad
    }, velocidad);
}
