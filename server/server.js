Meteor.startup(function(){
  if(CardLibrary.find({}).count() < 1){
    var myjson = {};
    myjson = JSON.parse(Assets.getText("mtg.json"));
    //console.log(myjson)
    var i = 0
    _.each(myjson, function(print){
      _.each(print.cards, function(cards){

        CardLibrary.insert({
          name: cards.name,
          text: cards.text,
          type: cards.type,
          rarity: cards.rarity,
          multiverseid: cards.multiverseid
        });
        i++;

      });
    });
    console.log(i + ' records inserted');
  } else {
    console.log('Card Library loaded... possibly');
  }

});
