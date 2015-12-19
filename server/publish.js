//------------------------------------------- Publicar coleciones

// All products

Meteor.publish('products', function( ){
    return Products.find( {} , { sort: {createdAt: -1} , fields: { desc:0 } } );
});


/*
Meteor.publish('products', function( limit ,query ){

    //check( query , String );
    check( limit,  Number );

    return Products.find( query , { sort: {createdAt: -1} , limit: limit, fields: { desc:0 } });
});
*/


//All Prodcuts for configurator
Meteor.publish('configurator_products', function(){
    return Products.find( {} , {  fields: { desc:0 } });
});


// Basket products
Meteor.publish('basket_products', function(){

    //Obtengo carrito de usuario
    // SI tiene productos, obtengo estos productos de la coleccion de productos
    // Pero solo el nombre y el precio que son los datos necesarios
    if ( this.userId !== null ) {

        var userbasket = UserBasket.findOne( { _id: this.userId } , { fields: { basket:1} } );
        var productsBasket = [];
        //Dato de relleno , si no lo pongo la página no carga
        var result = Products.find({},{limit:1, fields: { _id:1 } });

        if ( !_.isEmpty(userbasket.basket ) ){

            _.each(userbasket.basket , function( product ){
                productsBasket.push( { _id: product.proId } );
            });

            result =  Products.find({ $or:  productsBasket  }, { fields: { name:1, price:1 } } );
        }

        return  result;
    }

});

// Basket products
Meteor.publish('purchase_products', function(){

    if ( this.userId !== null ) {

        var userPurchase = Purchase.find( { userId: this.userId } , { fields: { products:1} } ).fetch() ;
        var purchaseProducts = [];
        var result = Products.find({} ,{ limit:1, fields: {_id:1} } );

        if ( !_.isEmpty(userPurchase ) ){

            _.each( userPurchase ,function( arrayProducts ){

                _.each( arrayProducts.products , function( product ){
                    if ( purchaseProducts.indexOf( { _id: product.proId } ) === -1  )
                        purchaseProducts.push( { _id: product.proId } );
                });

            })

            result =  Products.find({ $or:  purchaseProducts  }, { fields: { name:1, price:1 } } );
        }

        return  result;
    }

});

// The product
Meteor.publish('product', function(productId){
    return Products.find(
            {_id: productId},
            {fields: { createdAt:0, type:0, positiveUpvoters:0, negativeUpvoters:0 } }
        );
});

// User basket
Meteor.publish('userBasket', function () {
        return UserBasket.find({_id: this.userId});
});

// User purchase
Meteor.publish('purchase', function () {
        return Purchase.find({userId: this.userId});
});

// Proudct comments
Meteor.publish('comments', function (proId) {
  return Comments.find({_id: proId});
});
