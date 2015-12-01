Template.search.helpers({
  CardLibraryIndex: () => CardLibraryIndex, // instanceof EasySearch.Index

  imageURL: function(){
    return Session.get("imageURL");
  }


});

Template.search.events({
  'click .card':function(){
    console.log(this);
    var src = 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=' + this.multiverseid + '&type=card';
    Session.set('imageURL', src);
  }
});