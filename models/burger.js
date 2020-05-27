var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    //hint:orm.all()
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("burgers", ["burger_name","devoured"], [name,false], function(res) {
      cb(res);
    });
    //hint:orm.create()
  },
  update: function(id, cb) {
     var condition = "id=" + id;
    orm.update("burgers", {devoured:true}, condition, cb );
    //hint:orm.update
  }
};

module.exports = burger;
