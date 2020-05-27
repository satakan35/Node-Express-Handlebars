var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  //hint: burger.all
  burger.all(function (data) {
   
    res.render("index", {burger_data: data});
  });
});

// post route -> back to index
//hint: burger.create
// router.post("/", function(req, res) {
//   res.redirect("/burgers");
//   });

router.post("/burgers/create", function (req, res) {
  burger.create(req.body.burger_name, function (data) {
   res.redirect("/")
  });
});

// put route -> back to index
//hint: burger.update()


router.put("/burgers/:id", function (req, res) {
  burger.update(req.params.id, function (data) {
    
    res.sendStatus(200) ;
  });
});

module.exports = router;
