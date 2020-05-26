var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  //hint: burger.all
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// post route -> back to index
  //hint: burger.create
  router.post("/burgers", function(req, res) {
    res.redirect("burgers"); 
    });
  
  router.post("/burgers", function(req,res) {
    burger.create(function(data) 
    {var hbsObject = { burgers:data
    };
    res.render("index", hbrObject);
  }
    )
  });

// put route -> back to index
  //hint: burger.update()
  router.put("/burgers", function(req, res) {
    res.redirect("burgers", function(req, res)
    
  });

  router.post("/burgers", function(req,res) {
    burger.update(function(data) 
    {var hbsObject = { burgers:data
    };
    res.render("index", hbrObject);
  }
    )
  });
module.exports = router;
