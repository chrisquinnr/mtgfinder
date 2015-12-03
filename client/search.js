var searchInput = new ReactiveVar;
var advanced = new ReactiveVar;

Template.search.helpers({
  searchResponse:function(){
    var result = ReactiveMethod.call('cardFetcher', searchInput.get(), false);
    console.log(result);

    if(result && result.statusCode === 200){
      return result.data;
    }
  },
  advanced:function(){
    return advanced.get();
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
  },
  'click .advancedToggle':function(){
    if(advanced.get() === true){
      advanced.set(false)
    } else {
      advanced.set(true);
    }
  }

});