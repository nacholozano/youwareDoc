//--------------- Configuración el router

Router.configure({
    layoutTemplate: 'index', // página inicial
    notFoundTemplate: 'notFound', // página error 404
    loadingTemplate: 'loading', // plantilla de carga
});

//---------------- Mapeo

Router.map(function () {

    this.route('help',{
        path: '/help'
    });
    this.route('webMap');
    this.route('login');
    this.route('signUp');
    this.route('signMobile');
    this.route('settings');

    this.route('configurator', {
        waitOn: function () {
                return Meteor.subscribe('configurator_products');
            }
    });

    this.route('basket', {
        waitOn: function () {
            return [
                    Meteor.subscribe('userBasket'),
                    Meteor.subscribe('basket_products')
                   ];
        },
        data: function () {
            return {
                basketInfo: UserBasket.findOne({})
            };
        }
    });

    this.route('purchase', {
        waitOn: function () {
            return [
                    Meteor.subscribe('purchase'),
                    Meteor.subscribe('purchase_products')
                   ];
        },
        data: function () {
            return {
                purchaseInfo: Purchase.find({})
            };
        }
    });

    this.route("product", {
        path: 'product=:_id',
        waitOn: function () {
            return [
                   Meteor.subscribe('product', this.params._id),
                   Meteor.subscribe('purchase', Meteor.userId()),
                   Meteor.subscribe('comments', this.params._id)
                   ];
        },
        data: function () {
            return Products.findOne(this.params._id);
        }
    });

    this.route('products', {
        path: '/',
        //path: '/:limit?',
        waitOn: function(){
            return Meteor.subscribe('products') ;
        }/*,
        subscriptions: function () {
            var limit = parseInt(this.params.limit) || 2;
            var query = this.params.query;

            console.log(query);

            if ( this.params.isNew ){
                limit = 2;
            }

            this.productsSubs = Meteor.subscribe('products', limit, query );
        },
        data: function () {
            var limit = parseInt(this.params.limit) || 2;
            var showButton = true;

            if ( Products.find({}).count() < limit )
                showButton = false;

            return {
                limit: limit+2,
                showButton: showButton,
                ready: this.productsSubs.ready,
                filterProducts: Products.find({})
            };
        }*/
    });
});

//------------ Si no estás logueado , te redirige a la página de login

var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function (pause) {
        if (!Meteor.userId()) {
            Router.go('login');
        } else {
            this.next();
        }
    }
};

// esa comprobación solo funciona en estas páginas
Router.onBeforeAction(OnBeforeActions.loginRequired, {
    only: ['settings', 'basket', 'purchase', 'configurator']
});

//---------------- Mostrar símbolo de carga en el cliente

if (Meteor.isClient) {
    // Keep showing the launch screen on mobile devices until we have loaded
    // the app's data
    dataReadyHold = LaunchScreen.hold();

    // Show the loading screen on desktop
    Router.onBeforeAction('loading', {
        except: ['login', 'signUp', 'signMobile']
    });
}
