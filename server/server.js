Meteor.methods({
  cardFetcher:function(searchText, options){
    if(!searchText || !options){
      return false;
    }

    console.log(searchText);
    console.log(options);

    var params = {};
    if(searchText){
      params.name = searchText;
    }
    if(options && options.type){
      params.type = options.type;
    }
    if(options && options.color){
      params.color = options.color;

    console.log(params);}

    return HTTP.call("GET", "https://api.deckbrew.com/mtg/cards", {
      params: params
    });
  },
  typesGetter:function(){
    return HTTP.call("GET", "https://api.deckbrew.com/mtg/types");
  },
  coloursGetter:function(){
    return HTTP.call("GET", "https://api.deckbrew.com/mtg/colors");
  }
});