i18n.setDefaultLanguage('es_ES');

if (Meteor.isClient) {
    var language = navigator.userLanguage || navigator.languages[0];

    if (language.match(/en/)) {
        language = 'en_US';
    } /*else {
        language = 'es_ES';
    }*/

    i18n.setLanguage(language);
}

