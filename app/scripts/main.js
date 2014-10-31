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

var Book = Backbone.Model.extend({urlRoot : '/books'});
var Library = Backbone.Collection.extend({
  model: Book
});
var lib = new Library();
lib.push(new Book({title: 'war and peace'}));

