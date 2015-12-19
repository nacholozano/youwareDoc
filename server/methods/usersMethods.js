Meteor.methods({

//--------------------------------------------Crear usuario - OK

creatingUser: function(username,email,password){
    check(username,String);
    check(password,String);

    //var emailPattern = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    //check(email, Match.test(emailPattern) );

    var userId = Accounts.createUser({username:username,email:email,password:password});
},

//-------------------------------------------- Modificar usuario

modifyUser: function(newName,newPass,newEmail,password){

}

});
