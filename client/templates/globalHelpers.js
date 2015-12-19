Template.registerHelper('getName', function(proId){
    return Products.findOne({_id:proId}).name;
});

Template.registerHelper('getPrice', function(proId){
    return Products.findOne({_id:proId}).price;
})
