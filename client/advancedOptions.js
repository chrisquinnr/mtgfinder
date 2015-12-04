Template.advancedOptions.helpers({
  types: function () {
    var result = ReactiveMethod.call("typesGetter");
    console.log(result);
    if (_.isObject(result)) {
      if (_.isArray(result.data)) {
        return result.data;
      } else {
        return [];
      }
    } else {
      return [];
    }
  },
  colors: function () {
    var result = ReactiveMethod.call("coloursGetter");
    console.log(result);
    if (_.isObject(result)) {
      if (_.isArray(result.data)) {
        return result.data;
      } else {
        return [];
      }
    } else {
      return [];
    }
  }
});

Template.typeOptions.events({
  'click .typeOption': function () {
    var opts = options.get();
    opts.type = this.toString();
    options.set(opts);
  },
  'click .clearType':function(){
    var opts = options.get();
    opts.type = false;
    options.set(opts);
  }
});

Template.colourOptions.events({
  'click .colourOption': function () {
    var opts = options.get();
    opts.color = this.toString();
    options.set(opts);
  },
  'click .clearColor':function(){
    var opts = options.get();
    opts.color = false;
    options.set(opts);
  }
});