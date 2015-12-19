Meteor.methods({

    //--------------------------------------------Añadir producto al carrito - OK

    addToBasket: function (proId, quantity) {
        //construcción del nuevo producto

        check( proId, String );
        check( parseInt(quantity) , Number );

        var pro = Products.findOne({
            _id: proId
        });
        var stock = pro.stock;
        var add = false;
        var user = Meteor.userId();

        if (stock >= quantity) {
            add = true;

            var exists = UserBasket.find({
                _id: Meteor.userId(),
                "basket.proId": proId
            }).count();

            if (exists == 0) {

                var newPro = {
                    proId: proId,
                    quantity: quantity,
                    subtotal: pro.price * quantity,
                    createAt: new Date()
                };

                //actualizar carrito con nuevo producto
                UserBasket.update({
                        _id: Meteor.userId()
                    }, //en el carrito del usuario
                    {
                        $addToSet: {
                            basket: newPro
                        }, //añadimos el producto a la tabla basket
                        $inc: {
                            total: pro.price * quantity
                        } //y aumentamos el total
                    }
                    /*,
                                    function(){

                                        Meteor.setTimeout(function(){

                                        },5000);
                                    }*/
                );

            } else {
                //actualizar carrito con nuevo producto
                UserBasket.update({
                        _id: Meteor.userId(),   // Nos vamos a la cesta del usuario
                        "basket.proId": proId   // En su tabla de productos buscamos el producto
                    },
                    {
                        $inc: {
                            total: pro.price * quantity, // aumentamos el total
                            'basket.$.subtotal': quantity * pro.price,
                            'basket.$.quantity': quantity, // aumentamos la cantidad
                            // basket --> tabla de productos del usuario
                            // $ --> hacemos referencia la producto que buscamos antes
                            // quantity --> el campo para modificar la cantidad

                        }
                    }
                );
            }

            //actualizar stock
            updatePro(proId, -quantity);
        }

        return add;
    },

    //--------------------------------------------Quitar producto del carrito - OK

    removeProductFromBasket: function (proId) {

        check( proId , String );

        //COGER DATOS DEL PRODUCTO DE LA BASE DE DATOS
        var basketOBJ = UserBasket.findOne({
            _id: Meteor.userId()
        }).basket;

        var length = basketOBJ.length;
        var subtotal = 0;
        var quantity = 0;

        //buscar el subtotal: cantidad * precio
        for (var i = 0; i < length; i++) {
            if (basketOBJ[i].proId == proId) {
                subtotal = basketOBJ[i].subtotal;
                quantity = basketOBJ[i].quantity;
                i = length;
            }
        }
        //actualizar datos
        UserBasket.update({
                _id: Meteor.userId()
            }, //en el carrito del usuario
            {
                $pull: {
                    'basket': {
                        proId: proId //quitamos el producto de la tabla basket
                    }
                },
                $inc: {
                    total: -parseInt(subtotal)
                }
            });

        //actualizar stock
        updatePro(proId, parseInt(quantity));
    },

    //--------------------------------------------Realizar compra - OK

    makePurchase: function () {

        var resultado = true;

        if (Meteor.user().emails[0].verified) {

            var total = UserBasket.findOne({
                _id: Meteor.userId()
            }).total;

            if (total > 0) {
                var basket = UserBasket.findOne({
                    _id: Meteor.userId()
                }).basket;
                var newPurchase = {
                    userId: Meteor.userId(),
                    createdAt: new Date(),
                    total: total,
                    estado: false,
                    products: basket
                };

                Purchase.insert(newPurchase);
                UserBasket.update({
                    _id: Meteor.userId()
                }, {
                    basket: [],
                    total: 0
                });
            } else {
                resultado = false;
            }

        } else {
            resultado = 'notVerified';
        }

        return resultado;
    },

    //-------------------------------------------- Editar cantidades - OK
    editProductFromBasket: function (proId, newQuantity) {

        check( proId , String );
        check( newQuantity , Number );

        var success = false;

        //Compruebo que el numero de unidades nuevo es mayor que cero
        if (newQuantity > 0) {

            var product = Products.findOne({
                _id: proId
            });

            //Compruebo que el stock que mayor o igual que las unidades elegidas
            if (product.stock >= newQuantity) {

                //Obtener carrito del usuario
                var basket = UserBasket.findOne({
                    _id: Meteor.userId(),
                });

                //buscar el producto en el carrito del usuario
                var basketProduct = _.find(basket.basket, function (pro) {
                    return pro.proId == proId;
                });

                //Obtener precio del producto
                var productInfo = Products.findOne({
                    _id: proId
                }, {
                    price: 1
                });

                var pricePro = productInfo.price;
                var subtotalPro = basketProduct.subtotal;

                //Actualizr stock del producto
                updatePro(proId, basketProduct.quantity - newQuantity);

                //Actualizar información del carrito del usuario
                var affectedRow = UserBasket.update({
                    _id: Meteor.userId(),
                    'basket.proId': proId
                }, {
                    $set: {
                        'basket.$.quantity': newQuantity,
                        'basket.$.subtotal': newQuantity * pricePro,
                    },
                    $inc: {
                        total: -subtotalPro + (newQuantity * pricePro)
                    }
                });

                if (affectedRow > 0) {
                    success = true;
                }

            }

        }
        return success;
    },

    //---------------------- Email de verificacion

    verifyEmailYouware: function(){
        Accounts.sendVerificationEmail(Meteor.user()._id);
    }

});

//--------------------------------- Funciones

var updatePro = function (_id, quant) {
    Products.update({
        _id: _id
    }, {
        $inc: {
            stock: quant
        }
    })
};
