Template.product.onDestroyed(function () {
   $(window).scrollTop(0);
});

//------------------------------- Inicializar componentes

Template.product.onRendered(function(){
    $('.slider').slider({full_width: true});
    $('.modal-trigger').leanModal();
    $('.collapsible').collapsible({accordion : false});
})

//-------------------------------Helpers

Template.product.helpers({

     //Get product's id
     getInfoPro: function () {
         Session.set('id',this._id);
         return this;
     },

     //Check if the client has bought the product
     getProductFromPurchase: function(){

         var myProducts = Purchase.find({},{fields: {products:1} });
         var exists = false;
         var array = [];

         myProducts.forEach(function (obj) {

            array = obj.products;

            array.forEach(function(product){

                if ( product.proId == Session.get('id') )
                    exists  = true;
            });


         });
         return exists;
     },

    // Get product's stock
    'getColorStock': function(){
        var color;
        if (this.stock > 8 )
            color = 'green-text';
        else
            color = 'red-text';

        return color;
    },

    // Get product's votes
    'getColorVotes': function(){
        var color = '';
        if (this.votes > 0 )
            color = 'green-text';
        else if ( this.votes < 0 )
            color = 'red-text';

        return color;
    },

    // Get product's comments
    'getComments': function(){
        return Comments.findOne({}).comments.reverse();
    }
})

//-------------------------------Events

Template.product.events({

    //----------- Añadir el producto al carrito
    'submit .addtoBasket': function(event,template) {

        Meteor.call('addToBasket',
           this._id,
           parseInt(template.find('#unidades').value),
           function (error, result) {
              if (error) {
                    Materialize.toast('Error al añadir al carrito', 2000);
                    template.find('#unidades').value = '';
              } else
                    if(result)
                        Materialize.toast('Producto añadido',1500);
                    else
                        Materialize.toast('No hay stock de ese producto',1500);
              }

        );
        return false;
    },

    //-------------------------- Enviar comentario
    'submit .submit-comment':function(event,template){
        Meteor.call('submitComment',
           template.find('#comentario').value,
           this._id,
           function (error, result) {
              if (error)
                    Materialize.toast('Error', 1500);
           }
        );

        template.find('#comentario').value = '';

        return false;
    },

    // upvote product
    'click .upVote':function(event){
        Meteor.call('upvoteProduct',this._id);
    },

    // downvote product
    'click .downVote':function(event){
        Meteor.call('downvoteProduct',this._id);
    }

})
