var searchInput = new ReactiveVar;

Template.search.helpers({
  searchResponse:function(){
    var result = ReactiveMethod.call('cardFetcher', searchInput.get(), false);
    console.log(result);

    if(result && result.statusCode === 200){
      return result.data;
    }
  }
});

Template.search.events({
  'keyup .searchinput':function(){
    var text = $('.searchinput').val();
    if(text.length > 3){
      searchInput.set(text)
    } else {
      searchInput.set(false)
    }

  }
});