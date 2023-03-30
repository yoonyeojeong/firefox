const fs = require("fs"); // 파일 관리를 위한 fs 사용
const express = require("express"); // express를 사용한 백엔드 사용
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser"); // req.body를 읽어오기 위한 body-parser
const app = express(); // express 사용시 상수 app으로 사용
const dotenv = require("dotenv"); // 환경변수 사용을 위한 dotenv 설치
const cors = require("cors"); // PORT간 통신을 위한 cors 사용
const {
  login,
  accessToken,
  refrestToken,
  loginSuccess,
  logout,
} = require("./controller"); // controller에서 module 가져오기
dotenv.config();

// 이하 app.use
// GET, POST, DELETE 요청에 대한 허용
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(express.json()); // json middle ware 설치
app.use(cookieParser()); // cookie를 사용하여 JWT사용
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/image", express.static("./upload")); // 이미지 업로드를 위한 static 요청

// 서버 통신을 위한 listen 함수 실행
app.listen(process.env.PORT, () => {
  console.log(`server.js is on ${process.env.PORT}`);
});
const data = fs.readFileSync("./database.json"); // db 접속정보를 data에 담기
const conf = JSON.parse(data); // data를 json으로 변환
const mysql = require("mysql"); // mysql 사용

// database.json파일의 정보로 mysql에 접속
const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

connection.connect(); // mysql 접속 실행
// 파일 업로드 경로 설정
const uploadDir = "./upload";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
// 파일 업로드를 위한 multer
const multer = require("multer");
// multer사용시 업로드 경로
const upload = multer({ dest: "upload/" });

// 이하 쿼리문
// 이하 get 요청
// products table에서 정보를 불러옴 - goods 부분
app.get("/api/product", (req, res) => {
  connection.query("SELECT * FROM firefox.products", (err, rows, fields) => {
    res.send(rows);
  });
});
// USERS table에서 정보를 불러옴 - user 부분
app.get("/api/users", (req, res) => {
  connection.query("SELECT * FROM firefox.USERS", (err, rows, fields) => {
    // 로그인 정보 확인을 위해 외부(index.js)에서 userData 확인을 위한 export
    const userDatabase = rows;
    module.exports = userDatabase;
    res.send(rows); // 응답을 받는 부분

    //console.log(userDatabase);
  });
});

app.get("/api/users/:user_id", (req, res) => {
  const sql = "SELECT * FROM firefox.USERS WHERE user_id=?";
  const params = [req.params.user_id];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/board", (req, res) => {
  connection.query(
    "SELECT NUM, TITLE, CONTENTS,user_id, DATE_FORMAT(DATE_ADD(REGDATE, INTERVAL 9 HOUR),'%y-%m-%d %H:%i') AS REGDATE, VIEWS FROM firefox.BOARD ORDER BY NUM DESC",
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

app.get("/api/board/:NUM", (req, res) => {
  const sql =
    "SELECT NUM, TITLE, CONTENTS,user_id, DATE_FORMAT(DATE_ADD(REGDATE, INTERVAL 9 HOUR),'%y-%m-%d %H:%i') AS REGDATE, VIEWS FROM firefox.BOARD WHERE NUM=?";
  const params = [req.params.NUM];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/board/TITLE/:content", (req, res) => {
  const sql = "SELECT * FROM BOARD WHERE TITLE LIKE ?";
  const params = [req.params.content];
  connection.query(sql, "%" + params + "%", (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/board/user_id/:content", (req, res) => {
  const sql = "SELECT * FROM BOARD WHERE user_id LIKE ?";
  const params = [req.params.content];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});
// 토큰을 얻기 위한 access 요청
app.get("/accesstoken", accessToken);
// access token을 갱신하기 위한 요청
app.get("/refreshtoken", refrestToken);
// 로그인을 성공했을때 사용자가 요청하면 토큰에 담겨있는 access 토큰을 전달해주는 역할
app.get("/login/success", loginSuccess);

// 이하 post 요청
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
// 로그인을 위한 post 요청
app.post("/login", login);

// 로그아웃을 위한 post 요청
app.post("/logout", logout);

///////////////////////////////////////////////////////////////////////////
/////////////////////////// 임시 로그인 ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////
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

app.post("/api/major_players", (req, res) => {
  const player = req.body;
  connection.query(
    "INSERT INTO firefox.major_players SET ?",
    player,
    (err, result) => {
      if (!err) {
        res.send(`Player with ID ${result.insertId} has been added.`);
      } else {
        console.log(err);
      }
    }
  );
});

app.delete("/api/major_players/:major_num", (req, res) => {
  const major_num = req.params.major_num;
  const sql = "DELETE FROM firefox.major_players WHERE major_num = ?";
  connection.query(sql, [major_num], (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

// Read 기능
app.get("/api/notice", function (req, res) {
  connection.query(
    "SELECT NUM, TITLE, CONTENT, DATE_FORMAT(DATE_ADD(REGDATE, INTERVAL 9 HOUR),'%y-%m-%d %H:%i') AS REGDATE, VIEWS FROM firefox.NOTICE ORDER BY NUM DESC",
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.get("/api/notice/:NUM", function (req, res) {
  const NUM = [req.params.NUM];
  connection.query(
    "SELECT NUM, TITLE, CONTENT, DATE_FORMAT(DATE_ADD(REGDATE, INTERVAL 9 HOUR),'%y-%m-%d %H:%i') AS REGDATE, VIEWS FROM firefox.NOTICE WHERE NUM=?",
    NUM,
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
});

// Create 기능
app.post("/api/notice", (req, res) => {
  const sql = "INSERT INTO NOTICE VALUES (null, ?,?,NOW(),0)";
  const TITLE = req.body.TITLE;
  const CONTENT = req.body.CONTENT;
  const params = [TITLE, CONTENT];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
    console.log(err);
  });
});

// Update 기능
app.post("/api/notice/:NUM", (req, res) => {
  const sql = "UPDATE NOTICE SET TITLE=?, CONTENT=? WHERE NUM=?";
  const NUM = req.params.NUM;
  const TITLE = req.body.TITLE;
  const CONTENT = req.body.CONTENT;
  const params = [TITLE, CONTENT, NUM];
  connection.query(sql, params, (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server Error");
    } else {
      res.send(rows);
    }
  });
});

// Delete 기능(권한 제한)
app.delete("/api/notice/:NUM", (req, res) => {
  const sql = "DELETE FROM NOTICE WHERE NUM=?";
  const params = [req.params.NUM];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
    console.log(err);
  });
});

//shop (예지)
app.get("/api/selectProduct", (req, res) => {
  let sql = "SELECT * FROM firefox.products WHERE category=?";
  const params = [req.query.category];
  if (req.query.category == "") {
    sql = "SELECT * FROM firefox.products";
  }
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

//shop (예지)
app.get("/api/selectProductDetail", (req, res) => {
  const sql = "SELECT * FROM firefox.products WHERE num=?";
  const params = [req.query.num];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/Basket/:user_id", (req, res) => {
  const sql = "SELECT * FROM firefox.BASKETS WHERE user_id=?";
  const user_id = [req.params.user_id];
  connection.query(sql, user_id, (err, rows, fields) => {
    res.send(rows);
  });
});
//shop (예지)
app.post("/api/insertBasket", (req, res) => {
  const sql =
    "INSERT INTO firefox.BASKETS (`user_id`, `num`, `NAME`, `category`, `price`, `cnt`) VALUES (?,?,?,?,?,?)";
  const user_id = req.body.id;
  const num = req.body.num;
  const NAME = req.body.NAME;
  const category = req.body.category;
  const price = req.body.price;
  const cnt = req.body.cnt;

  const params = [user_id, num, NAME, category, price, cnt];
  console.log(params);
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

//shop (예지)
app.get("/api/selectBasket", (req, res) => {
  let sql = "SELECT * FROM firefox.BASKETS WHERE user_id=?";
  const params = [req.query.userId];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});
//shop (예지)
app.post("/api/deleteBasket", (req, res) => {
  const sql = "DELETE FROM firefox.BASKETS WHERE id=? AND user_id=?";
  const id = req.body.id;
  const user_id = req.body.userId;
  const params = [id, user_id];
  console.log(params);
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});
