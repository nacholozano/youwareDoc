//-----------------------------------------Events

Template.sideNav.events({

    // ------- Mensaje al salir de tu cuenta
    'click .a-logout': function(event,template){
        Meteor.logout(function(error){
            if(error)
                Materialize.toast('Error al salir de tu cuenta', 2000);
            else
                Materialize.toast('Has salido de tu cuenta', 2000);

        });
    }
})

//---------------------------------------Inicializar componente

Template.sideNav.onRendered(function(){

    /*Side nav*/
    $(".button-collapse").sideNav({
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });

});
