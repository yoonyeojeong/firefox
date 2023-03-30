const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;
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

const uploadDir = "./upload";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
connection.connect();

const multer = require("multer");
const upload = multer({ dest: "upload/" });

app.get("/api/product", (req, res) => {
  connection.query("SELECT * FROM firefox.products", (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/users", (req, res) => {
  connection.query("SELECT * FROM firefox.USERS", (err, rows, fields) => {
    res.send(rows);
  });
});

app.use("/image", express.static("./upload"));

app.post("/api/product", upload.single("image"), (req, res) => {
  const sql = "INSERT INTO products VALUES (null, ?,?,?,?)";
  const image = "/image/" + req.body.filename;
  const name = req.body.name;
  const category = req.body.category;
  const price = req.body.price;
  const params = [image, name, category, price];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
    console.log(err);
  });
});

app.post("/api/users", (req, res) => {
  const sql = "INSERT INTO USERS VALUES (null, ?,?,?,?,?,?,?,?,?,?,?,0)";
  const user_id = req.body.user_id;
  const user_pw = req.body.user_pw;
  const user_name = req.body.user_name;
  const gender = req.body.gender;
  const birthday = req.body.birthday;
  const email = req.body.email;
  const domain = req.body.domain;
  const phone_num_head = req.body.phone_num_head;
  const phone_num_middle = req.body.phone_num_middle;
  const phone_num_last = req.body.phone_num_last;
  const user_address = req.body.user_address;

  const params = [
    user_id,
    user_pw,
    user_name,
    gender,
    birthday,
    email,
    domain,
    phone_num_head,
    phone_num_middle,
    phone_num_last,
    user_address,
  ];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
    console.log(err);
  });
});

app.delete("/api/product/:num", (req, res) => {
  const sql = "DELETE FROM products WHERE num=?";
  const params = [req.params.num];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/logout", (req, res) => {
  const sql = "UPDATE USERS SET isLogin=0";
  const params = [req.params.user_num];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/login/:user_id", (req, res) => {
  const sql = "UPDATE USERS SET isLogin=1 WHERE user_id=?";
  const user_id = req.body.user_id;
  const user_pw = req.body.user_pw;
  const params = [user_id, user_pw];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/major_players", (req, res) => {
  connection.query(
    "select * from firefox.major_players",
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
        return;
      } else {
        console.log(err);
      }
    }
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));