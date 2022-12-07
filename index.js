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


// shop-page
app.get("/product2", function (req,res) {
    const sql = "select * from nhom2_product";
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});

// home-page
app.get("/product-feature", function (req,res) {
    const sql = "select * from nhom2_product where id in (1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56, 61, 66, 71, 76, 81, 86, 91, 96, 101, 106, 111, 116, 121, 126, 131, 136, 141, 145)";
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});
app.get("/product-cookwear", function (req,res) {
    const sql = "SELECT * FROM `nhom2_product` WHERE category_id IN (SELECT id FROM `nhom2_category2` where id_category = 1)";
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});
app.get("/product-appliances", function (req,res) {
    const sql = "SELECT * FROM `nhom2_product` WHERE category_id IN (SELECT id FROM `nhom2_category2` where id_category = 3)";
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});
app.get("/productcookwear-cookingpost", function (req,res) {
    const sql = "SELECT * FROM `nhom2_product` WHERE category_id = 2";
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});
app.get("/productcookwear-fryingpans", function (req,res) {
    const sql = "SELECT * FROM `nhom2_product` WHERE category_id = 3";
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});
app.get("/productcookwear-cookwearsets", function (req,res) {
    const sql = "SELECT * FROM `nhom2_product` WHERE category_id = 4";
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});
app.get("/productcookwear-blenders", function (req,res) {
    const sql = "SELECT * FROM `nhom2_product` WHERE category_id = 13";
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});
app.get("/productcookwear-electrickettles", function (req,res) {
    const sql = "SELECT * FROM `nhom2_product` WHERE category_id = 18";
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});
app.get("/productcookwear-toasters", function (req,res) {
    const sql = "SELECT * FROM `nhom2_product` WHERE category_id = 20";
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});
app.get("/productcookwear-bestseller", function (req,res) {
    const sql = "SELECT * FROM `nhom2_product` WHERE id in (47, 78, 82, 88)";
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});
app.get("/productappliances-bestseller", function (req,res) {
    const sql = "SELECT * FROM `nhom2_product` WHERE id in (66, 106, 112, 117)";
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});
// product-page
app.get("/product-detail", function (req,res) {
    const lh =req.query.id;
    const sql = "select * from nhom2_product where id ="+lh;
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});
app.get("/product-detail1", function (req,res) {
    const lh =req.query.id;
    const sql = "select * from nhom2_product a inner join nhom2_galery b on a.id = b.product_id where a.id ="+lh;
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});
// search-page
app.get("/search-product", function (req,res) {
    const key = req.query.key;
    const sql = `select * from nhom2_product where title like '%${key}%' order by title asc`;
    conn.query(sql, function (err, data) {
        res.send(data)
    })
});

