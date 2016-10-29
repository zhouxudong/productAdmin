"use strict";
var express = require('express');
var router = express.Router();
var moment = require("moment")

var Z_Util = require("../bin/common.js");
var conn = require("../bin/db/DBHelper");

router.get("/add", (req, res, next) => {
    var title = req.param("title");
    var tags = req.param("tags");
    var content = req.param("content");
    var currtime = moment().format("YYYY-MM-DD HH:mm:ss");

    var sql = `insert into news_info (title,tags,content,ctime) values ('${title}','${tags}','${content}','${currtime}')`;
    console.log(sql);

    conn(sql, rows => {
        res.json({response_data: {status: "ok"}})
    })

})
router.get("/list", (req, res, next) => {
    var sql = `select * from news_info`;

    conn(sql, rows => {
        res.json({response_data: rows})
    })
})
router.get("/info", (req, res, next) => {
    var id = req.param("id");
    var sql = `select * from news_info where id = ${id}`;
    conn(sql, rows => {
        res.json({response_data: rows[0]});
    })
})
router.get("/edit", (req, res, next) => {
    var id = req.param("id");
    var title = req.param("title");
    var tags = req.param("tags");
    var content = req.param("content");

    var sql = `update news_info set title='${title}',tags='${tags}',content='${content}' where id = ${id}`

    conn(sql, rows => {
        res.json({response_data: "ok"});
    })
})
/*上架*/
router.get("/on", (req, res, next) => {
    var id = req.param("id");
    var sql = `update news_info set status = 1 where id = ${id}`;

    conn(sql, rows => {
        res.json({response_data: "ok"});
    })
})
/*上架*/
router.get("/off", (req, res, next) => {
    var id = req.param("id");
    var sql = `update news_info set status = 2 where id = ${id}`;

    conn(sql, rows => {
        res.json({response_data: "ok"});
    })
})
module.exports = router;