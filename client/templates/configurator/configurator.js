Template.listProd.onDestroyed(function () {
    $(window).scrollTop(0);
});

Template.configurator.onCreated(function () {

    // Session vars for filters
/*
    if (!Session.get('procesorPower') && !Session.get('motherboard') && !Session.get('procesor') && !Session.get('motherBoardRamQuantity') && !Session.get('ram') && !Session.get('ramQuantity'))
*/

        Session.set({
        motherBoardRamQuantity: 0,
        procesor: '',
        procesorPower: '',
        motherboard: '',
        ram: '',
        ramQuantity: ''
    });

});

Template.configurator.onRendered(function () {
    $('select').material_select();

    if ( Session.get('procesor') === '' ){
        $('.procesor-fan').hide(0);
    }

});

Template.configurator.events({

    // Get processor power
    'change select.procesorPower': function (event, template) {
        Session.set('procesorPower', $('select.procesorPower').val());
        Session.set('procesor', '');
    },

    // Get processor
    'change select.procesorFilter': function (event, template) {
        Session.set('procesor', $('select.procesorFilter').val());
    },

    // Get motherboard
    'change select.motherBoardFilter': function (event, template) {
        Session.set('motherboard', $('select.motherBoardFilter').val());
    },

    // Get RAM
    'change select.ramFilter': function (event, template) {
        Session.set('ram', $('select.ramFilter').val());
    },

    //Make purchase
    'submit .form-configurator': function (event, template) {

        var componentsInputs = [];

        var motherBoardFilter = template.find('select.motherBoardFilter').value;
        var procesorFilter = template.find('select.procesorFilter').value;
        var ramFilter = template.find('select.ramFilter').value;

        if (motherBoardFilter !== '')
            componentsInputs.push( {proId: motherBoardFilter , quantity:1 } );

        if (procesorFilter !== '')
            componentsInputs.push({proId: procesorFilter , quantity:1 });

        if (ramFilter !== '')
            componentsInputs.push({proId: ramFilter , quantity: $('#ramQuantity').val() });


        if (componentsInputs.length > 0) {
            _.each(componentsInputs, function (product) {

                if ( product.quantity !== '' && product.quantity > 0 ){

                    Meteor.call('addToBasket',
                        product.proId, //id objeto elegido
                        product.quantity, //unidades
                        function (error, result) { //Control de resultados
                            if (error)
                                Materialize.toast('Error al añadir al carrito', 2000);
                            else
                                if (result)
                                    Materialize.toast('Producto añadido', 1500);

                        }
                    );
                }

            });
        } else
            Materialize.toast('No has elegido nada', 1800);

        return false;
    }

})
