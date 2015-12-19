Template.purchase.onDestroyed(function () {
    $(window).scrollTop(0);
})

Template.purchase.onCreated(function () {
    //Session.set('dateStart', '');
    Session.set('dateEnd', '');
    Session.set('date', new Date() );
})

Template.purchase.onRendered(function () {
    /*$('.datepickerStart').pickadate({
        selectMonths: true,
        selectYears: 2
    });*/
    $('.datepickerEnd').pickadate({
        selectMonths: true,
        selectYears: 2
    });
})

//------------------------------------------ Events

Template.purchase.events({
    /*'change .datepickerStart': function (event, template) {
        $(window).scrollTop(0);
        Session.set('dateStart', template.find('.datepickerStart').value);
    },
    */
    'change .datepickerEnd': function (event, template) {
        $(window).scrollTop(0);
        if ( template.find('.datepickerEnd').value === '' ){
            Session.set('date', new Date() );
        }
        Session.set('dateEnd', template.find('.datepickerEnd').value);
    }

})

//------------------------------------------Helpers

Template.purchase.helpers({
    //Get purchase------------------------------- Funciona pero no lo muestra
    getPurchase: function () {

        //Obtener compra y fecha elegida

        var userPurchase = this.purchaseInfo;
        //var dateStart = Session.get('dateStart');
        var dateEnd = Session.get('dateEnd');

        //Si hay alguna fecha
        if ( /*dateStart !== '' ||*/ dateEnd !== '') {

            //Obtengo día,mes y año por separado en una tabla
            //var splitDateStart = dateStart.split(' ');
            var splitDateEnd = dateEnd.split(' ');

            //Convierto a Int
            var day = parseInt(splitDateEnd[0]);
            var month = getDayMonth(splitDateEnd[1]);
            var year = parseInt(splitDateEnd[2]);

            var date = new Date(year, month, day+1, 0, 0, 0, 0);
            Session.set('date',date);

            //Buscar las compras realizadas en un fecha anterior a la elegida
            userPurchase = Purchase.find({
                createdAt: {
                    $lt: date
                }
            });

            //Si no tiene nada, lo igualo a una tabla vacía para actualizar la plantilla
            //Si lo dejo en 'undefined' el #each no funcionará
            if (userPurchase == undefined)
                userPuchase = [];

        }

        return userPurchase;
    },

    //Check purchase
    getHayCompra: function () {
        var compras = this.purchaseInfo.fetch();
        var notEmpty = false;

        if ( !_.isEmpty( compras ) )
            notEmpty = true;
        else
            notEmpty = false;

        return notEmpty;
    },

    //Get total
    getTotal: function () {
        var compras = this.purchaseInfo.fetch();
        var total = 0;

        if ( Session.get('date') !== new Date() )
            _.each(compras, function (pedido) {
                if ( pedido.createdAt <= Session.get('date')  )
                    total = total + pedido.total;
            });
        else
            _.each(compras, function (pedido) {
                    total = total + pedido.total;
            });

        return total;
    },

})

//-------------------------------- Functions

//Obtener el número de mes
var getDayMonth = function (month) {
    var monthString = month.substring(0, month.length - 1);
    var monthNumber;

    switch (monthString) {
    case 'January':
        monthNumber = 0;
        break;
    case 'February':
        monthNumber = 1;
        break;
    case 'March':
        monthNumber = 2;
        break;
    case 'April':
        monthNumber = 3;
        break;
    case 'May':
        monthNumber = 4;
        break;
    case 'June':
        monthNumber = 5;
        break;
    case 'July':
        monthNumber = 6;
        break;
    case 'August':
        monthNumber = 7;
        break;
    case 'September':
        monthNumber = 8;
        break;
    case 'October':
        monthNumber = 9;
        break;
    case 'November':
        monthNumber = 10;
        break;
    case 'December':
        monthNumber = 11;
        break;
    }

    return monthNumber;
}
