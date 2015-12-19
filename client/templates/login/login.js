Template.login.onRendered(function(){
    document.getElementById('username').focus();
})

//------------------------------- Events

Template.login.events({

    //------------ Iniciar sesión

    'submit .form-login': function(event, template){
        Meteor.loginWithPassword(
            template.find('#username').value,
            template.find('#password').value,
            function(error){
                if(error){

                    if(error.reason === "Incorrect password"){
                        Materialize.toast('Contraseña incorrecta', 1600);
                        template.find('#password').value = '';
                    }else if(error.reason === "User not found"){
                        Materialize.toast('Usuario incorrecto', 1600);
                        template.find('#username').value = '';
                        template.find('#password').value = '';
                    }else
                        Materialize.toast('No puedes entrar ahora', 1600);

                }else{
                    Router.go('products');
                    Materialize.toast('Te has logueado con éxito', 1600);
                }
            }
        );
        return false;
    }
});
