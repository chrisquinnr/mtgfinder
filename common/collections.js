CardLibrary = new Mongo.Collection('cardlibrary');

CardLibraryIndex = new EasySearch.Index({
  collection: CardLibrary,
  fields: ['name'],
  engine: new EasySearch.Minimongo()
});