"use strict";
var express = require('express');
var multiparty = require("multiparty");
var fs = require("fs");
var path = require("path");
var router = express.Router();

var Z_Util = require("../bin/common.js");
var conn = require("../bin/db/DBHelper");
var productHelper = require("../bin/productHelper");

var getProductTotal = productHelper.getProductTotal;
var getProductList = productHelper.getProductList;

//获取商品列表
router.get("/list", (req, res, next) => {

    var option = {
        pid: req.param("pid") || "",
        status: req.param("status") || "",
        keyWord: req.param("keyWord") || "",
        pages: req.param("pages") || 10,
        curr: req.param("curr") || 1
    }

    Promise.all([
        getProductTotal(option),
        getProductList(option)
    ]).then(function(){
        var responseList = arguments[0];

        var responseObj = {
            count: responseList[0].count,
            list: responseList[1].list
        };

        res.json({response_data: responseObj});
    }).catch(function() {
        var errObj = null;
        for(var err of arguments){
            if(err.status == false){
                errObj = {error_code: 123,errObj: err};
            }
        }
        res.json(errObj)
    })
})
//添加商品
router.get("/add", (req, res, next) => {
    var now = new Date();
    var name = req.param("name"),
        name_en = req.param("name_en"),
        name_es = req.param("name_es"),
        descript_en = req.param("descript_en"),
        descript_es = req.param("descript_es"),
        pid = req.param("pid"),
        bigThumb = req.param("bigThumb"),
        otime = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate(),
        thumb = req.param("thumb");

    var sql = `insert into product (name, name_en, name_es, descript_en, descript_es, pid, thumb, bigThumb, otime)
                values ('${name}', '${name_en}', '${name_es}', '${descript_en}', '${descript_es}', '${pid}', '${thumb}', '${bigThumb}', '${otime}')`;
    conn(sql, rows => {
        res.json({response_data:{status: "OK"}});
    })
})
//跟新商品
router.get("/edit", (req, res, next) => {
    var now = new Date();
    var id = req.param("id"),
        name = req.param("name"),
        name_en = req.param("name_en"),
        name_es = req.param("name_es"),
        descript_en = req.param("descript_en"),
        descript_es = req.param("descript_es"),
        pid = req.param("pid"),
        bigThumb = req.param("bigThumb"),
        otime = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate(),
        thumb = req.param("thumb");

    var sql = `update product set name="${name}",name_en="${name_en}",name_es="${name_es}",descript_en="${descript_en}",
                descript_es="${descript_es}",pid="${pid}",otime="${otime}",thumb="${thumb}",bigThumb="${bigThumb}" where id = ${id}`

    conn(sql, rows => {
        res.json({response_data:{status: "OK"}});
    })
})
//删除商品
router.get("/delete", (req, res, next) => {
    var id = req.param("id");
    var sql = `delete from product where id = ${id}`;
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