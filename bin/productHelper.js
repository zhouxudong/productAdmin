"use strict";
var conn = require("./db/DBHelper");

var getProductTotal = function(pid, status, keyWord){
    var searchField = "1 = 1";
    if(pid) searchField += ` and pid=${pid}`;
    if(status) searchField += ` and status=${status}`;
    if(keyWorld) searchField += ` and name line '%${keyWord}%'`;
    var sql = `select count(id) as count from product where ${searchField}`;
    return new Promise( (resolve, reject) => {
        conn(sql, rows => {
            if(rows['count']){
                resolve({count:　rows['count'], status: true})
            }else{
                reject({key: "count", status: false})
            }
        })
    })

}
var getProductList = function(pid, status, keyWord){
    var searchField = "1 = 1";
    if(pid) searchField += ` and pid=${pid}`;
    if(status) searchField += ` and status=${status}`;
    if(keyWorld) searchField += ` and name line '%${keyWord}%'`;
    var sql = `select * from product where ${searchField}`;
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