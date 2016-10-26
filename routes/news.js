"use strict";
var express = require('express');
var router = express.Router();

router.get("/add", (req, res, next) => {
    var title = req.params("title");
    var tags = req.params("title");
    var content = req.params("content");


})

module.exports = router;