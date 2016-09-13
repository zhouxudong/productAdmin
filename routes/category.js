var express = require('express');
var router = express.Router();

var Z_Util = require("../bin/common.js");
var conn = require("../bin/db/DBHelper");

router.get("/list", (req, res, next) => {
    var parent_id = req.param("parent_id");
    if(!parent_id) parent_id = 0;
    var sql = `SELECT * FROM category where parent_id = ${parent_id}`;
    conn(sql, rows => {
        var res_data = {
            list: rows,
            total: rows.length
        }
        res.json({response_data: res_data});
    })
})
router.get("/info", (req, res, next) => {
    var id = req.param("id");
    if(!id) res.json({error_code:123,msg:"ID 不能为空"});
    var sql = `select * from category where id = ${id}`
    conn(sql, rows => {
        var data = {
            response_data: rows[0]
        }
        res.json(data);
    })
})

router.get("/add", (req, res, next) => {
    var name = req.param("name"),
        name_en = req.param("name_en"),
        name_es = req.param("name_es"),
        status = req.param("status"),
        parent_id = req.param("parent_id"),
        ctime = new Date().toLocaleDateString();
    var sql = `insert into category (name, name_en, name_es, parent_id, ctime)
                values ("${name}", "${name_en}", "${name_es}", ${parent_id}, "${ctime}")`

    conn(sql, rows => {
        res.json({response_data: rows});
    })
})
router.get("/edit", (req, res, next) => {
    var name = req.param("name"),
        name_en = req.param("name_en"),
        name_es = req.param("name_es"),
        status = req.param("status"),
        id = req.param("id"),
        otime = new Date().toLocaleDateString();
    var sql = `update category set name="${name}",name_en="${name_en}",name_es="${name_es}",otime="${otime}" where id=${id}`;

    conn(sql, rows => {
        res.json({response_data: "ok"});
    })
})
router.get("/delete", (req, res, next) => {
    var id = req.param("id");
    var sql = `delete from category where id = ${id}`;

    conn(sql, rows => {
        res.json({response_data: "ok"});
    })
})

router.get("/parents", (req, res, next) => {
    var id = req.param("id");
    var categorys = [];

    (function(id,categorys,res){
        var thisFn = arguments.callee;
        var sql = `select * from category where parent_id = (select parent_id from category where id = ${id})`;
        conn(sql, rows => {
            categorys.push({list: rows,curr:id});
            var parentID = rows[0].parent_id;
            if(parentID == 0){
                res.json({response_data: categorys.reverse()})
            }else {
                thisFn(parentID,categorys,res);
            }
        })

    })(id,categorys,res)

})

module.exports = router;