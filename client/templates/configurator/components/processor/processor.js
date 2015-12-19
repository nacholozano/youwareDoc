Template.procesorFilterConfigurator.events({

    'change select.procesorFilter':function(){

        if ( $('select.procesorFilter').val() === '' ){
            $('.procesor-fan').velocity("transition.shrinkOut",{duration:400});
        }else{
            $('.procesor-fan')
                .velocity("transition.shrinkOut",{duration:400})
                .velocity("transition.shrinkIn",{duration:400});
        }
    },

    'change select.procesorPower':function(){
        $('.procesor-fan').velocity("transition.shrinkOut",{duration:400});
    }

});

Template.procesorFilterConfigurator.helpers({

     //Get procesor
     getProcesor: function () {

         var querySelector = {type: 'procesadores', stock: {$gt: 0} };
         var queryFields = {fields: { name: 1} };

         var procesorPower = Session.get('procesorPower');
         console.log(Session.get('procesorPower'));
         var motherboard = Session.get('motherboard');

         if ( procesorPower !== '' )
            querySelector['details.power'] = procesorPower;

         if ( motherboard !== '' ){
            var selectedMotherBoard = Products.findOne({_id:motherboard});
             querySelector['details.socket'] = selectedMotherBoard.details.socket ;
         }

         return Products.find(querySelector,queryFields);
     },

    //Get product image and page
    getImageAndPage:function(){
        return getImageAndPage(Session.get('procesor'));
    },

    //Get product price and votes
    getDataProduct:function(){
        return getDataProduct(Session.get('procesor'), ['socket'] );
    },

    //Save configurator inteface values
    getSelectedValue:function(value, varSessionName){
        return getSelectedValue(value, varSessionName);
    },

    //Ini select after update select's items
    iniSelect: function(){
         iniSelect ( 'select.procesorFilter' , ['procesorPower','motherboard'] );
    }

})
