Meteor.methods({
  cardFetcher:function(searchText, options){
    if(!searchText && !options){
      return false;
    }
    return HTTP.call("GET", "https://api.deckbrew.com/mtg/cards", {
      params: {
        name: searchText
      }
    });
  },
  typesGetter:function(){
    return HTTP.call("GET", "https://api.deckbrew.com/mtg/types");
  },
  coloursGetter:function(){
    return HTTP.call("GET", "https://api.deckbrew.com/mtg/colors");
  }
});