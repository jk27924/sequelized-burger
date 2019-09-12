const models = require("../models");

var burger = {
  all: function(cb) {
    models.Burger.findAll({}).then(cb);
  },
  create: function(name, cb) {
    models.Burger.create({ 
      "burger_name": name
    }).then(cb);
  },
  update: function(id, cb) {
    models.Burger.update({
      devoured: true
    }).then(cb);
    
  }
};

module.exports = burger;
