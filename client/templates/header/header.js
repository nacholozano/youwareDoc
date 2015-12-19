//-------------------------------Inicializar componentes

Template.header.onRendered(function(){

iniMatCompApp();

function iniMatCompApp(){

    /* Dropdown */
    $('.dropdown-button').dropdown({
        inDuration: 200,
        outDuration: 200,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on click
        alignment: 'right', // Aligns dropdown to left or right edge (works with constrain_width)
        gutter: 0, // Spacing from edge
        belowOrigin: true // Displays dropdown below the button
    });
}

});


//-------------------------------Events

Template.header.events({

    // ------- Mensaje al salir de tu cuenta
    'click .a-logout': function(event,template){
        Meteor.logout(function(error){
            if (error)
                Materialize.toast('Error al salir', 2000);
            else{
                Materialize.toast('Has salido de tu cuenta', 2000);
                /*Session.set({
                    motherBoardRamQuantity: 0,
                    procesor: '',
                    procesorPower: '',
                    motherboard: '',
                    ram: '',
                    ramQuantity: ''
                });*/
            }
        });
    }
})
