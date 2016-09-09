var express = require("express");
var router = express.Router();
var user = require("./user");
var task = require("./task");
var product = require("./product");
var category = require("./category");

router.use("/user", user);
router.use("/task", task);
router.use("/product", product);
router.use("/category",category);

module.exports = router;