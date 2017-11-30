var Stack = function() {
  this.storage = "";
};

Stack.prototype.push = function(val) {
  this.storage = `-${val}`
};

Stack.prototype.pop = function() {
  this.storage = this.storage.split('-').slice(0, this.storage.split('-'
  ).length - 1);
};

Stack.prototype.size = function() {
  return this.storage.split('-').length - 1
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("RedBeans");
