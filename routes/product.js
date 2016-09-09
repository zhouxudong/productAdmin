"use strict";
var express = require('express');
var multiparty = require("multiparty");
var fs = require("fs");
var path = require("path");
var router = express.Router();

var Z_Util = require("../bin/common.js");
var conn = require("../bin/db/DBHelper");
var productHelper = require("../bin/productHelper");

//获取商品列表
router.get("/list", (req, res, next) => {
    var sql = `SELECT * FROM product`;
    conn(sql, rows => {
        var res_data = {
            list: rows,
            total: rows.length
        }
        res.json({response_data: res_data});
    })
})
//添加商品
router.get("/add", (req, res, next) => {
    var name = req.param("name"),
        name_en = req.param("name_en"),
        name_es = req.param("name_es"),
        descript_en = req.param("descript_en"),
        descript_es = req.param("descript_es"),
        pid = req.param("category"),
        otime = new Date().toLocaleDateString(),
        thumb = req.param("thumb");

    var sql = `insert into product (name, name_en, name_es, descript_en, descript_es, pid, thumb, otime)
                values ('${name}', '${name_en}', '${name_es}', '${descript_en}', '${descript_es}', '${pid}', '${thumb}', '${otime}')`;
    conn(sql, rows => {
        res.json({response_data:{status: "OK"}});
    })
})
//商品详情
router.get("/info", (req, res, next) => {
    var id = req.param("id");
    var sql = `select * from product where id = ${id}`;
    conn(sql, rows => {
        var data = {
            response_data: rows[0]
        }
        res.json(data);
    })
})
//上架商品
router.get("/online", (req, res, next) => {
    var id = req.param("id");
    var sql = `update product set status = 1 where id = ${id}`;
    conn(sql, rows => {
        res.json({response_data:{status: "OK"}});
    })
})
//下架商品
router.get("/offline", (req, res, next) => {
    var id = req.param("id");
    var sql = `update product set status = 2 where id = ${id}`;
    conn(sql, rows => {
        res.json({response_data:{status: "OK"}});
    })
})
//上传商品图片
router.post("/imgupload", (req, res, next) => {
    var form = new multiparty.Form({uploadDir: "./uploads/images/"});

    form.parse(req, (err, fields, files) => {
        var filesTmp = JSON.stringify(files, null, 2);
        if(err){
            console.log("parse error: " + err);
        } else {
            var inputFile = files['file'][0];
            var uploadedPath = inputFile.path;

            var dstPath = './uploads/images/' + Z_Util.getRandomNameByPath(uploadedPath);
            fs.rename(uploadedPath, dstPath, function(err){
                if(err){
                    console.log("rename error: " + err);
                } else {
                    console.log("rename ok");
                }
            })
        }
        res.json({response_data:{src: dstPath.substring(1)}});
    })
})

module.exports = router;