Meteor.startup(function () {

    //---------------------------- Variable para enviar correo

    process.env.MAIL_URL = 'smtp://postmaster%40sandbox2ff4a6b787074217968e184b6ab22188.mailgun.org:7c08e229226da7284f019ef6aea1225c@smtp.mailgun.org:587/';

    //------------------------ Configuracion de cuentas

    Accounts.onCreateUser(function (options, user) {

        if (options.profile)
            user.profile = options.profile;

        UserBasket.insert({
            _id: user._id,
            total: 0,
            basket: []
        });

        return user;
    });

    //-------------- Configurar correo

    Accounts.emailTemplates.siteName = "Youware";
    Accounts.emailTemplates.from = "Youware <no-reply@youware.com>";
    Accounts.emailTemplates.verifyEmail.subject = function (user) {
        return "Welcome to youware, " + user.username;
    };
    Accounts.emailTemplates.verifyEmail.text  = function (user, url) {
       return "Click the link below to activate your account :D \n\n"
         + url;
    };

    // ----------- Configurar expiración de sesión

    Accounts.config({
        loginExpirationInDays: 1
    });

});
