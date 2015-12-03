Template.advancedOptions.helpers({
  types: function () {
    var result = ReactiveMethod.call("typesGetter");
    console.log(result);
    if(_.isObject(result)){
      if(_.isArray(result.data)){
        return result.data;
      } else {
        return [];
      }
    } else {
      return [];
    }
  },
  colours: function () {
    var result = ReactiveMethod.call("coloursGetter");
    console.log(result);
    if(_.isObject(result)){
      if(_.isArray(result.data)){
        return result.data;
      } else {
        return [];
      }
    } else {
      return [];
    }
  }
});