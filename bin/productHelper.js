"use strict";
var conn = require("./db/DBHelper");

var getProductTotal = function(option){
    console.log("getProductTotal");
    var pid = option.pid,
        status = option.status,
        keyWord = option.keyWord;


    var searchField = "1 = 1";
    if(pid) searchField += ` and pid=${pid}`;
    if(status) searchField += ` and status=${status}`;
    if(keyWord) searchField += ` and name like '%${keyWord}%'`;

    var sql = `select count(id) as count from product where ${searchField}`;
    console.log("sql : " + sql);
    return new Promise( (resolve, reject) => {
        conn(sql, rows => {
            if(rows[0]){
                resolve({count:　rows[0]['count'], status: true})
            }else{
                reject({key: "count", status: false})
            }
        })
    })

}
var getProductList = function(option){

    console.log("getProductList");
    var pid = option.pid,
        status = option.status,
        keyWord = option.keyWord,
        curr = option.curr,
        pages = option.pages || 10;

    var searchField = "1 = 1";
    if(pid) searchField += ` and product.pid=${pid}`;
    if(status) searchField += ` and product.status=${status}`;
    if(keyWord) searchField += ` and product.name like '%${keyWord}%'`;
    searchField += ` and product.pid = category.id limit ${(curr-1)*pages}, ${pages}`
    var sql = `select product.*,category.name as category_name from product,category where ${searchField}`;
    console.log("sql : " + sql);
    return new Promise( (resolve, reject) => {
        conn(sql, rows => {
            if(rows.length > 0){
                resolve({list:　rows, status: true})
            }else{
                reject({key: "list", status: false})
            }
        })
    })
}

const productHelper = {
    getProductTotal: getProductTotal,
    getProductList: getProductList
}

module.exports = productHelper;