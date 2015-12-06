Meteor.startup(function () {

  if (Colours.find({}).count() < 1) {
    var colours = Meteor.call('coloursGetter');
    _.each(colours.data, function ( elem ) {
      Colours.insert({name: elem.toString()});
    });
  }

  if (Types.find({}).count() < 1) {
    var types = Meteor.call('typesGetter');
    _.each(types.data, function ( elem ) {
      Types.insert({name: elem.toString()});
    });
  }

});