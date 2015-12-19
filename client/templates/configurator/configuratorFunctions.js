/*getComponent = function(selector, dependenciesArray  ){

};*/

//Obtiene la imagen y página del producto
getImageAndPage = function (proId) {

     var image = '/notImage.png';
     var link = '';
     var name = 'No has seleccionado ningún producto';

     //Obtiena la imagen por su ID
     if (proId !== '') {
         image = '/products/' + proId + '/1.jpg';
         link = '/product=' + proId;

         var name = 'Página del producto '+ Products.findOne({
            _id: proId
        }).name;

     }

     return {
         image: image,
         link: link,
         name: name
     };
 };

//Obtiene los datos del producto
 getDataProduct = function (proId, detailsArray) {

     //Siempre obtengo el precio y los votos
     var fields = { price: 1, votes: 1};

     //Dependiendo del tipo de producto obtengo unos detalles u otros
     _.each(detailsArray,function(detail){
            fields['details.'+detail] = 1;
     });

     return Products.findOne({
         _id: proId
     }, {
         fields: fields
     });
 };

//Obtengo el componente elegido para guardar el estado del configurador
//El componente del 'select' cuyo id coincida con el componente guardado en al variable de sesion es marcado para que aparezca por defeco
getSelectedValue = function (value, varSessionName) {

     var result = '';
     if (value == Session.get(varSessionName))
         result = 'selected';

     return result;
 };

//Recargo el componente del framework después de actualizar su contenido
//Le paso el select para recargar y los que dependen de este
iniSelect = function ( selectClass , dependantsArray  ) {

      var aux ;

      _.each(dependantsArray,function( value ){
            aux = Session.get(value);
      });

        Meteor.setTimeout(function(){
            $(selectClass).material_select()
        }, 20);
 }
