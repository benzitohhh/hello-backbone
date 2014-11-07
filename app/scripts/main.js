// Events example
var Sidebar = Backbone.Model.extend({
  promptColor: function() {
    var cssColor = prompt("Please enter a CSS color:");
    this.set({color: cssColor});
  }
});
var sidebar = new Sidebar;
sidebar.on('change:color', function(model, color) {
  $('body').css({color: 'white'});
});


// Collections example
var Book = Backbone.Model.extend({urlRoot : '/books'});
var Library = Backbone.Collection.extend({
  model: Book
});
var lib = new Library();
//lib.create({ title: "Othello" }); // adds a new Book to collection, tries to save it to server

// Router example
Backbone.history.start(); // start the History object checking routes etc
var Workspace = Backbone.Router.extend({
  routes: {
    "help":                 "help",     // #help
    "search/:query":        "search",   // #search/kiwis
    "search/:query/p:page": "search"    // #search/kiwis/p7
  },
  help: function() { console.log("help!!"); },
  search: function(query, page) { console.log("search!!"); }
});
var w = new Workspace();
//w.navigate("help", { trigger: true } );

// View example
var BookRow = Backbone.View.extend({
  tagName: "li",
  className: "book-row",
  events: {
    "click .icon":          "open",
    "click .button.edit":   "openEditDialog",
    "click .button.delete": "destroy"
  },
  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {

  }
});
var book = new Book({title:"The joy of Hex"});
var bookRow = new BookRow({
  model: book,
  // id: "book-row-" + book.id
  id: "book-row-" + book.cid // hack to make this work for now
});
 
