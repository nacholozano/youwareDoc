//------------------------------------------Cargar modal

Template.basket.onRendered(function () {
    $('.modal-trigger').leanModal({
      ready: function() {
            $('.focus-init-modal').focus();
      }
    }
  );

})

Template.basket.onDestroyed(function () {
    $(window).scrollTop(0);
});

//------------------------------------------Events

Template.basket.events({

    //---------------- Cerrar modal al pulsar la cruz
    'click .cerrar-modal': function (event, template) {
        $('#modalDelete').closeModal();
        $('#modalEdit').closeModal();
        $('#modalVerify').closeModal();
    },


    //--------------Abrir modal al pulsar en borrar
    'click .mdi-action-highlight-remove': function (event, template) {
        template.find('#input-code-product').value = event.target.getAttribute('data-remove');
        $('#modalDelete').openModal();
    },

    //-------------- Obtener id del producto
    'click .mdi-editor-mode-edit': function (event, template) {
        template.find('#input-code-product').value = event.target.getAttribute('data-edit');
    },

    //--------------- Borrar el producto al pulsar 'aceptar' en el modal
    'click #modal-boton-borrar': function (event, template) {
        var proId = template.find('#input-code-product').value;
        Meteor.call('removeProductFromBasket',
            proId,
            function (error, result) {
                if (error)
                    Materialize.toast('No se ha podido borrar el producto', 1500);
                else
                    Materialize.toast('Producto borrado', 1500);
            }
        );
    },

    //-------------------- Editar unidades del producto
    'click #modal-boton-editar': function (event, template) {
        var proId = template.find('#input-code-product').value;
        Meteor.call('editProductFromBasket',
            proId,
            parseInt(template.find('#newQuantity').value),
            function (error, result) {
                if (error)
                    Materialize.toast('Error al añadir un producto', 1500);
                else {
                    if (result) {
                        $('#modalEdit').closeModal();
                        Materialize.toast('Unidades modificadas', 1500);
                    } else {
                        Materialize.toast('No se ha podido modicar las unidades. Es posible que no haya suficiente stock', 2300);
                        template.find('#newQuantity').value = '';
                    }
                }
            }
        );
    },

    'click .verifyEmail':function(){
        Meteor.call('verifyEmailYouware');
        $('#modalVerify').closeModal();
    },

    //------------------ Realizar la compra
    'click .purchase': function () {
        Meteor.call('makePurchase',
            function (error, result) {
                if (error)
                    Materialize.toast('En estos momentos no se puede realizar el pedido', 1500);
                else
                    if (result !== 'notVerified' )
                        Materialize.toast('Pedido realizado', 1500);
                    else if ( result === 'notVerified' )
                        $('#modalVerify').openModal();
                    else
                        Materialize.toast('No puedes hacer un pedido de 0€', 1500);
            }
        );
    }

})

//------------------------------------------Helpers

Template.basket.helpers({
    getBasket: function () {
        return this.basketInfo.basket;
    },

    getHayCarrito: function () {
        var total = this.basketInfo.total;
        var notEmpty = false;

        if (total > 0)
            notEmpty = true;
        else
            notEmpty = false;

        return notEmpty;
    },

    getTotal: function () {
        return this.basketInfo.total;
    },

    getVerifyAccount: function(){
        return Meteor.user().emails[0].verified;
    }

})
