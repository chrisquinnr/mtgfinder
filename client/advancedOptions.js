Template.advancedOptions.helpers({
  types: function () {
    return Types.find({}).fetch();
  },
  colors: function () {
    return Colours.find({}).fetch();
  }
});

Template.typeOptions.events({
  'click .typeOption': function () {
    var opts = options.get();
    opts.type = this.toString();
    optionsObject.set(opts);
  },
  'click .clearType': function () {
    var opts = options.get();
    opts.type = false;
    optionsObject.set(opts);
  }
});

Template.colourOptions.events({
  'click .colourOption': function () {
    var opts = options.get();
    opts.color = this.toString();
    optionsObject.set(opts);
  },
  'click .clearColor': function () {
    var opts = options.get();
    opts.color = false;
    optionsObject.set(opts);
  }
});