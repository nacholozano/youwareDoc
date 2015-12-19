Template.ramFilterConfigurator.events({

    'keyup input#ramQuantity': function (event, template) {

        if (Session.get('ram') !== '') {

            var quantity = parseInt(template.find('input#ramQuantity').value);
            Session.update('ramQuantity', quantity);

                if (!isNaN(quantity)) {

                    if (quantity <= Session.get('motherBoardRamQuantity') && quantity > 0) {

                        Session.update('ramQuantity', quantity);

                        if ($('input#ramQuantity').val() !== '') {

                            var element = $('.svgRam');

                            for (i = 0; i < quantity; i++) {
                                element[i].style.visibility = "visible";
                            }

                        } else {
                            borrarRam(event, template);
                        }

                    } else if (quantity === 0 || quantity < 0) {
                        Materialize.toast('No es un número válido', 2100);
                        borrarRam(event, template);
                    } else {
                        Materialize.toast('La placa base no tiene tanto espacio', 2100);
                        borrarRam(event, template);
                    }

                } else {
                    Materialize.toast('Eso no es número', 1500);
                    borrarRam(event, template);
                }

        } else {
            if (template.find('#ramQuantity').value !== '') {
                Materialize.toast('No has seleccionado ninguna RAM', 1500);
                borrarRam(event, template);
            }
        }
    },

    'change select.ramFilter':function(event,template){
        borrarRam(event, template);
    }

});

Template.ramFilterConfigurator.helpers({

    getRamQuantity:function(){
        return Session.get('motherBoardRamQuantity');
    },

    //Get ram
    getRam: function () {

        var querySelector = {
            type: 'ram',
            stock: {
                $gt: 0
            }
        };
        var queryFields = {
            fields: {
                name: 1
            }
        };

        var motherBoard = Session.get('motherboard');

        if (motherBoard !== '') {
            var selectedMotherBoard = Products.findOne({
                _id: motherBoard
            });

            querySelector['details.typeRAM'] = selectedMotherBoard.details.RAM;
        }

        return Products.find(querySelector, queryFields);
    },

    //Get product image and page
    getImageAndPage: function () {
        return getImageAndPage(Session.get('ram'));
    },

    //Get product price and votes
    getDataProduct: function () {
        return getDataProduct(Session.get('ram'), ['typeRAM']);
    },

    //Save configurator inteface values
    getSelectedValue: function (value, varSessionName) {
        return getSelectedValue(value, varSessionName);
    },

    //Ini select after update select's items
    iniSelect: function () {
        iniSelect('select.ramFilter', ['motherboard']);
    }

})



//----------------------------------- FUNCIONES

var borrarRam = function(event, template){
    template.find('input#ramQuantity').value = '';
    var element = $('.svgRam');
    for (i = 0; i < 4; i++) {
        element[i].style.visibility = "hidden";
    }
}

