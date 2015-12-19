Template.motherboardFilterConfigurator.events({

    'change select.motherBoardFilter': function (event, template) {

        var idMotherBoard = template.find('select.motherBoardFilter').value;
        var quantityRAM = 0;

        $(".drawRam").remove();

        if ( idMotherBoard !== '' ) {

            quantityRAM = Products.findOne({
                _id: idMotherBoard
            }, {
                fields: {
                    details: 1
                }
            }).details.quantityRAM;

            for (i = 0; i < quantityRAM; i++) {
                $('.bloque-4').prepend("<div class='drawRam' title='Ranura para la RAM'><img class='svgRam' src='/build_pc/ram.svg' alt=''></div>");
            }

        }

        $('.drawRam').velocity("transition.slideDownIn");
        Session.set('motherBoardRamQuantity',quantityRAM);

    }

});

Template.motherboardFilterConfigurator.helpers({

    //Get getMotherBoard
    getMotherBoard: function () {

        var querySelector = {
            type: 'placaBase',
            stock: {
                $gt: 0
            }
        };
        var queryFields = {
            fields: {
                desc: 0,
                negativeUpvoters: 0,
                positiveUpvoters: 0
            }
        };

        var selectedProcessor = Session.get('procesor');
        var selectedRAM = Session.get('ram');

        if (selectedProcessor !== '') {
            var selectedProcessor = Products.findOne({
                _id: selectedProcessor
            });
            querySelector['details.socket'] = selectedProcessor.details.socket;
        }

        if (selectedRAM !== '') {
            var selectedRAM = Products.findOne({
                _id: selectedRAM
            });

            querySelector['details.RAM'] = selectedRAM.details.typeRAM;
        }

        return Products.find(querySelector, queryFields);
    },

    //Get product image and page
    getImageAndPage: function () {
        return getImageAndPage(Session.get('motherboard'));
    },

    //Get product price and votes
    getDataProduct: function () {
        return getDataProduct(Session.get('motherboard'), ['socket', 'RAM','quantityRAM']);
    },

    //Save configurator inteface values
    getSelectedValue: function (value, varSessionName) {
        return getSelectedValue(value, varSessionName);
    },

    //Ini select after update select's items
    iniSelect: function () {
        iniSelect('select.motherBoardFilter', ['procesor','ram']);
    }

})
