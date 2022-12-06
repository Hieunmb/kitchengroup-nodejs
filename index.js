const express= require("express");
const app = express();
const PORT= process.env.PORT || 5001;
const mysql = require("mysql");

app.listen(PORT,function (){
    console.log("server is running...");
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const config ={
    host: '139.180.186.20',
    port:3306,
    user:'t2207a',
    password:'t2207a123',
    database:'t2207a',
    multipleStatements:true
};
const conn=mysql.createConnection(config);

app.get("/", function (req,res){
    const sql ="select * from nhom2_product";
    conn.query(sql,function (err,data){
        res.send(data)
    })
});
app.get("/product", function (req,res) {
    const sql = "select * from nhom2_product limit 0,16";
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});
app.get("/product-detail", function (req,res) {
    const lh =req.query.id;
    const sql = "select * from nhom2_product where id ="+lh;
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});
app.get("/product-detail1", function (req,res) {
    const sql = "select * from nhom2_product a inner join nhom2_galery b on a.id = b.product_id";
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});
app.get("/product-title", function (req,res) {
    const q=req.query.q;
    const sql = `select * from nhom2_product where title like '%${q}%'`;
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});app.get("/count-product", function (req,res) {
    const sql ="select count(*) as id from nhom2_product";
    conn.query(sql,function (err,data){
        res.send(data)
    })
});app.get("/count-brand", function (req,res) {
    const sql ="select count(*) as id from nhom2_brand";
    conn.query(sql,function (err,data){
        res.send(data)
    })
});app.get("/count-category", function (req,res) {
    const sql ="select count(*) as id from nhom2_category2";
    conn.query(sql,function (err,data){
        res.send(data)
    })
});