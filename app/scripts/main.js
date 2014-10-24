
var object = {};

_.extend(object, Backbone.Events);

object.on("alert", function(msg) {
  console.log("Triggered " + msg);
});

//object.trigger("alert", "an event");


var Sidebar = Backbone.Model.extend({
  promptColor: function() {
    var cssColor = prompt("Please enter a CSS color:");
    this.set({color: cssColor});
  }
});

window.sidebar = new Sidebar;

sidebar.on('change:color', function(model, color) {
  $('body').css({color: 'white'});
});

//sidebar.promptColor();


function SidebarView() {  }

function MenuView() {  }

var BaseView = Backbone.View.extend({
  // Create a property where we can hold references to subviews
  subviews: {}
});

var ContentView = BaseView.extend({
  initialize: function() {
    this.subviews.sidebar = new SidebarView();
  }
});

var HeaderView = BaseView.extend({
  initialize: function() {
    this.subviews.menu = new MenuView();
  }
});

var content = new ContentView();
var header = new HeaderView();



