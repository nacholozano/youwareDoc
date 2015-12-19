Template.settings.events({
    'submit .modify': function(event,template){
        Meteor.call('modifyUser',
            template.find('#username').value,
            template.find('#password').value,
            template.find('#email').value,
            template.find('#verify-password').value,
            function(error,result){

            }
        );

        return false;

    }
})
