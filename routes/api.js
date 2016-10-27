var express = require("express");
var router = express.Router();
var user = require("./user");
var task = require("./task");
var product = require("./product");
var category = require("./category");
var news = require("./news");

router.use("/user", user);
router.use("/task", task);
router.use("/product", product);
router.use("/category",category);
router.use("/news", news);

module.exports = router;