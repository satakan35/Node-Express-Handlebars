var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    //hint:orm.all()
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
    //hint:orm.create()
  },
  update: function(objColVals, condition, cb) {
    // var condition = "id=" + id;
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
    //hint:orm.update
  }
};

module.exports = burger;
