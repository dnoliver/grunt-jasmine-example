App = function(){
  this.name = "App";
};

App.prototype.setName = function(name){
  this.name = name;
};

App.prototype.getName = function(){
  return this.name;
};
