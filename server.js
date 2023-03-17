//import goods_img_02 from "./client/src/images/goods/uniform_02.jpg";
//import goods_img_03 from "./client/src/images/goods/bat_01.jpg";
//import goods_img_01 from "./client/src/images/goods/uniform_01.jpg";

const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

connection.connect();

const multer = require("multer");
const upload = multer({ dest: "./upload" });

app.get("/api/product", (req, res) => {
  connection.query("SELECT * FROM product.products", (err, rows, fields) => {
    res.send(rows);
  });
});

app.use("./client/firefox/src/images/goods", express.static("./upload"));

app.post(
  "/api/product",
  upload.single("image", (req, res) => {
    let sql = "INSERT INTO product.products VALUES (null,?,?,?)";
    let goods_img = "/goods/" + req.file.filename;
    let name = req.body.name;
    let price = req.body.price;
    let category = req.body.category;
    let params = [goods_img, name, category, price];
    connection.query(sql, params, (err, rows, fields) => {
      res.send(rows);
      console.log(err);
    });
  })
);

app.listen(port, () => console.log(`Listening on port ${port}`));
