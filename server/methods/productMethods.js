Meteor.methods({

//--------------------------------------------- Enviar comentario

submitComment: function(comment,proId){

    check(comment , String);
    check(proId , String);

    var comment = {
                    username: Meteor.user().username,
                    createAt: new Date(),
                    comment: comment,
                    positive: 0
                  };

    Comments.update(
        { _id: proId }, //en el carrito del usuario
        {
            $addToSet: { comments: comment }, //añadimos el producto a la tabla basket
        }
    );

    return false;
},

//--------------------------------------------- Votar producto

upvoteProduct: function(proId){
    check(proId, String);
    updateVotes(Meteor.userId(),proId,1,'positive');
    return false;
},

downvoteProduct: function(proId){
    check(proId, String);
    updateVotes(Meteor.userId(),proId,-1,'negative');
    return false;
}

});

//--------------------- Funciones

var updateVotes = function(userId,proId,vote,type){

    var queryFind ;
    var queryUpdate ;
    var queryRemove ;
    var userAlreadyVote ;
    var vote_ = vote;

    if ( type === 'positive' ){
        queryFind = { _id: proId,
                        positiveUpvoters: {$ne: userId}
                    };
        queryUpdate = { positiveUpvoters: userId };

        userAlreadyVote = Products.update(
        { _id: proId,
          negativeUpvoters: userId
        },
        {
            $pull: {
                'negativeUpvoters': userId
            }
        });

        if ( userAlreadyVote > 0 ){
            ++vote_;
        }

    }else{
        queryFind = { _id: proId,
                      negativeUpvoters: {$ne: userId}
                    };
        queryUpdate = { negativeUpvoters: userId };

        userAlreadyVote = Products.update(
        { _id: proId,
          positiveUpvoters: userId
        },
        {
            $pull: {
                'positiveUpvoters': userId
            }
        });

        if ( userAlreadyVote > 0 ){
            --vote_;
        }

    }

    Products.update(
        queryFind,
        {
            $addToSet: queryUpdate,
            $inc: { votes: vote_ }
        }
    );

};
