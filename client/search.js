searchInput = new ReactiveVar;

searchObject = {
  set: function(value){
    if(value.length > 3){
      searchInput.set(value)
    } else {
      searchInput.set(false)
    }
  },
  get: function(){
    return searchInput.get();
  }
};

options = new ReactiveVar({});

optionsObject = {
  set: function(value){
    var opts = self.get();
    if(_.inArray(value, opts)){
      var index = opts.indexOf(value);
      if(index > -1){
        opts.splice(index, 1);
      }
    } else{
      opts.push(value);
    }
  },
  get: function(){
    return options.get();
  }
};

advanced = new ReactiveVar;

Template.search.helpers({
  searchResponse:function(){
    var result = ReactiveMethod.call('cardFetcher', searchObject.get(), optionsObject.get());
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
    searchObject.set($('.searchinput').val());
  },
  'click .advancedToggle':function(){
    if(advanced.get() === true){
      advanced.set(false)
    } else {
      advanced.set(true);
    }
  }

});