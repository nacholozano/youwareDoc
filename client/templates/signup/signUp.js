Template.signUp.onRendered(function(){
    document.getElementById('username').focus();
})

//------------------------------------------------------ Events

Template.signUp.events({

    //---------------------Registrar usuario

    'submit .form-signup': function(event, template){
        Meteor.call('creatingUser',
           template.find('#username').value,
           template.find('#email').value,
           template.find('#password').value,
           function (error, result) {
              if (error) {

                  if(error.reason === "Email already exists."){
                    Materialize.toast('Email ocupado', 1600);
                    template.find('#email').value = '';
                  }else if(error.reason === "Username already exists."){
                    Materialize.toast('Nombre ocupado', 1600);
                    template.find('#username').value = '';
                  }
              } else {
                Router.go('login');
                Materialize.toast('Te has registrado con éxito', 1600);

              }
           }
        );
        return false;
    }
});
