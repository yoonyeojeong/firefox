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
} = require("./controller/loginController"); // controller에서 module 가져오기
const { getUsers, joinUs } = require("./controller/userController");
dotenv.config();

// 이미지 업로드를 위한 static 요청
app.use("/image", express.static("./uploads"));
// uploads 폴더가 없다면 uploads폴더를 생성
const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
// 파일 업로드를 위한 multer
const multer = require("multer");
// multer사용시 업로드 경로
const uploads = multer({ dest: "./uploads" });
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

// 이하 로그인 함수
// 토큰을 얻기 위한 access 요청
app.get("/accesstoken", accessToken);
// access token을 갱신하기 위한 요청
app.get("/refreshtoken", refrestToken);
// 로그인을 성공했을때 사용자가 요청하면 토큰에 담겨있는 access 토큰을 전달해주는 역할
app.get("/login/success", loginSuccess);
// 로그인을 위한 post 요청
app.post("/login", login);
// 로그아웃을 위한 post 요청
app.post("/logout", logout);

// 이하 USERS table 함수
// USERS table에서 정보를 불러옴
app.get("/api/users", getUsers);
// WHERE절을 이용한 특정 유저 정보를 불러오는 쿼리문
app.get("/api/user/:user_id", (req, res) => {
  const sql = "SELECT * FROM firefox.USERS WHERE user_id=?";
  const params = [req.params.user_id];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});
// 회원가입을 위한 쿼리문
app.post("/api/users", joinUs);

// 회원정보 수정 쿼리문
app.post("/api/user/:user_id", (req, res) => {
  const sql =
    "UPDATE USERS SET email=?, domain=?, user_name=?, phone_num_head=?, phone_num_middle=?, phone_num_last=?, user_pw=?, user_address=? WHERE user_id=?";
  const user_id = req.params.user_id;
  const email = req.body.email;
  const domain = req.body.domain;
  const user_name = req.body.user_name;
  const phone_num_head = req.body.phone_num_head;
  const phone_num_middle = req.body.phone_num_middle;
  const phone_num_last = req.body.phone_num_last;
  const user_pw = req.body.user_pw;
  const address = req.body.address;
  const params = [
    email,
    domain,
    user_name,
    phone_num_head,
    phone_num_middle,
    phone_num_last,
    user_pw,
    address,
    user_id,
  ];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
    console.log(err);
  });
});

// 회원탈퇴
// app.delete("/api/user/:user_id", (req, res) => {
//   const sql = "DELETE FROM USERS WHERE user_id=?";
//   const params = [req.params.user_id];
//   connection.query(sql, params, (err, rows, fields) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("Server Error");
//     } else {
//       res.send(rows);
//     }
//   });
// });

// 이하 자유게시판 쿼리문
// 기본적으로 MySQL은 런던시간 기준이므로 9시간을 더해 서울시간을 구함
app.get("/api/board", (req, res) => {
  connection.query(
    "SELECT NUM, TITLE, CONTENTS, user_id, DATE_FORMAT(DATE_ADD(REGDATE, INTERVAL 9 HOUR),'%y-%m-%d %H:%i') AS REGDATE, VIEWS FROM firefox.BOARD ORDER BY NUM DESC",
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});
// BoardDetail을 위한 쿼리문
app.get("/api/board/:NUM", (req, res) => {
  const sql =
    "SELECT NUM, TITLE, CONTENTS, user_id, DATE_FORMAT(DATE_ADD(REGDATE, INTERVAL 9 HOUR),'%y-%m-%d %H:%i') AS REGDATE, VIEWS FROM firefox.BOARD WHERE NUM=?";
  const params = [req.params.NUM];
  connection.query(sql, params, (err, rows, fields) => {
    if (err) throw err;
    if (rows.length > 0) {
      const views = rows[0].VIEWS + 1; // 기존 조회수에 1을 더해줌
      connection.query(
        "UPDATE firefox.BOARD SET VIEWS=? WHERE NUM=?",
        [views, req.params.NUM],
        (err, result) => {
          if (err) throw err;
          res.send(rows);
        }
      );
    } else {
      res.status(404).send("Not Found");
    }
  });
});
// 게시판 글 등록
app.post("/api/board", (req, res) => {
  const sql = "INSERT INTO BOARD VALUES (null, ?, ?, 0, ?, NOW())";
  const TITLE = req.body.TITLE;
  const CONTENTS = req.body.CONTENTS;
  const user_id = req.body.user_id;
  const params = [TITLE, CONTENTS, user_id];

  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

// 게시판 검색기능을 위한 쿼리문
// 제목으로 찾기
app.get("/api/board/TITLE/:content", (req, res) => {
  const sql = "SELECT * FROM BOARD WHERE TITLE LIKE ?";
  const params = ["%" + req.params.content + "%"];
  connection.query(sql, params, (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
});
// 작성자로 찾기
app.get("/api/board/user_id/:content", (req, res) => {
  const sql = "SELECT * FROM BOARD WHERE user_id LIKE ?";
  const params = ["%" + req.params.content + "%"];
  connection.query(sql, params, (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
});

app.delete("/api/board/:num", (req, res) => {
  const sql = "DELETE FROM boards WHERE num=?";
  const params = [req.params.num];
  connection.query(sql, params, (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
});

app.post("/api/board_comment", (req, res) => {
  const sql = "INSERT INTO BOARD_COMMENT VALUES (null,?, ?, NOW(), ?)";
  const contents = req.body.contents;
  const user_id = req.body.user_id;
  const num = req.body.num;
  console.log("contents : ", contents);
  console.log("user_id : ", user_id);
  console.log("num : ", num);
  if (user_id === null) {
    user_id = "비회원";
  }
  const params = [contents, user_id, num];
  connection.query(sql, params, (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.send(rows);
  });
});

app.get("/api/board_comment/:NUM", (req, res) => {
  const sql =
    "SELECT COMMENT_ID, CONTENTS, DATE_FORMAT(DATE_ADD(REGDATE, INTERVAL 9 HOUR),'%y-%m-%d %H:%i:%s') AS REGDATE, USER_ID FROM BOARD_COMMENT WHERE NUM=?";
  const NUM = [req.params.NUM];
  connection.query(sql, NUM, (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.send(rows);
  });
});

app.get("/api/adminboardcommentlength", (req, res) => {
  const sql =
    "SELECT B.NUM AS NUM, B.TITLE AS TITLE, B.VIEWS AS VIEWS, B.user_id AS user_id,  DATE_FORMAT(DATE_ADD(B.REGDATE, INTERVAL 9 HOUR),'%y-%m-%d %H:%i') AS REGDATE, COUNT(C.NUM) AS COUNT FROM BOARD B LEFT OUTER JOIN BOARD_COMMENT C ON B.NUM=C.NUM GROUP BY B.NUM ORDER BY NUM DESC";
  connection.query(sql, (err, rows, fields) => {
    res.send(rows);
  });
});

///////////////////////////////////////////////////////스케쥴관리////////////////////////////////////////////////////////
app.get("/api/schedules", (req, res) => {
  connection.query(
    "select schedule_id, schedule_date,  schedule_time, schedule_place, schedule_team from firefox.schedules",
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

app.get("/api/schedule", (req, res) => {
  connection.query(
    "select schedule_id, DATE_FORMAT(DATE_ADD(schedule_date, INTERVAL 0 DAY),'%y년 %m월 %d일') AS schedule_date,  schedule_time, schedule_place, schedule_team from firefox.schedules",
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

app.post("/api/schedules", (req, res) => {
  const schedule_id = req.body.schedule_id;
  const schedule_date = req.body.schedule_date;
  const schedule_time = req.body.schedule_time;
  const schedule_place = req.body.schedule_place;
  const schedule_team = req.body.schedule_team;

  const sql =
    "INSERT INTO schedules (schedule_id, schedule_date, schedule_time, schedule_place, schedule_team) VALUES (?, ?, ?, ?, ?)"; // SQL 쿼리문 작성
  connection.query(
    sql,
    [schedule_id, schedule_date, schedule_time, schedule_place, schedule_team],
    (error, results, fields) => {
      if (error) {
        // 에러 발생 시
        console.error(error); // 에러 출력
        res.status(500).send("Error inserting data into database"); // 500 에러 코드와 함께 에러 메시지 전송
      } else {
        // 에러가 없을 시
        res.status(200).send("Data successfully inserted into database"); // 200 성공 코드와 함께 성공 메시지 전송
      }
    }
  );
});

app.delete("/api/schedules/:schedule_id", (req, res) => {
  const schedule_id = req.params.schedule_id;
  console.log("sched :", schedule_id);
  const sql = "DELETE FROM schedules WHERE schedule_id = ?";
  connection.query(sql, [schedule_id], (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      // 에러가 없을 시
      res.sendStatus(200);
    }
  });
});
///////////////////////////////////////////////////////스케쥴관리////////////////////////////////////////////////////////

///////////////////////////// 선수관리 /////////////////////////////////////
// "/api/major_players" 경로로 GET 요청이 들어왔을 때,
app.get("/api/players", (req, res) => {
  connection.query("SELECT * FROM firefox.PLAYERS", (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/players/:LEAGUE", (req, res) => {
  const sql =
    "SELECT NUM, NAME, AGE, BACKNUM, POSITION, LEAGUE, MIDDLE, HIGH, FIRSTTEAM, SECONDTEAM, THIRDTEAM, TALL, WEIGHT, DATE_FORMAT(DATE_ADD(BIRTH, INTERVAL 9 HOUR),'%Y년 %m월 %d일' ) AS BIRTH, IMAGE FROM firefox.PLAYERS WHERE LEAGUE=?";
  const LEAGUE = [req.params.LEAGUE];
  connection.query(sql, LEAGUE, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/players", uploads.single("IMAGE"), (req, res) => {
  let sql = "INSERT INTO PLAYERS VALUES (null, ?,?,?,?, ?,?,?,?, ?,?,?,?,?,?)";
  let IMAGE = "http://localhost:5000/image/" + req.file.filename; // 이미지는 파일 경로로 저장
  let NAME = req.body.NAME;
  let AGE = req.body.AGE;
  let BACKNUM = req.body.BACKNUM;
  let POSITION = req.body.POSITION;
  let LEAGUE = req.body.LEAGUE;
  let MIDDLE = req.body.MIDDLE;
  let HIGH = req.body.HIGH;
  let FIRSTTEAM = req.body.FIRSTTEAM;
  let SECONDTEAM = req.body.SECONDTEAM;
  let THIRDTEAM = req.body.THIRDTEAM;
  let TALL = req.body.TALL;
  let WEIGHT = req.body.WEIGHT;
  let BIRTH = req.body.BIRTH;
  let params = [
    NAME,
    AGE,
    BACKNUM,
    POSITION,
    LEAGUE,
    MIDDLE,
    HIGH,
    FIRSTTEAM,
    SECONDTEAM,
    THIRDTEAM,
    TALL,
    WEIGHT,
    BIRTH,
    IMAGE,
  ];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
    console.log(err);
  });
});

app.delete("/api/players/:NUM", (req, res) => {
  const NUM = [req.params.NUM];
  const sql = "DELETE FROM PLAYERS WHERE NUM = ?";
  connection.query(sql, NUM, (err, rows, fields) => {
    res.send(rows);
  });
});

///////////////////////////// 선수관리 /////////////////////////////////////
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
  const NUM = req.params.NUM;
  const sql = "SELECT * FROM firefox.NOTICE WHERE NUM=?";
  const params = [NUM];
  connection.query(sql, params, function (err, result) {
    if (err) throw err;
    // Update the view count
    const views = result[0].VIEWS + 1;
    const updateSql = "UPDATE NOTICE SET VIEWS=? WHERE NUM=?";
    const updateParams = [views, NUM];
    connection.query(updateSql, updateParams, function (err, result) {
      if (err) throw err;
      // Query the updated data
      connection.query(sql, params, function (err, result) {
        if (err) throw err;
        res.send(result);
      });
    });
  });
});
// Create 기능
app.post("/api/notice", (req, res) => {
  const sql = "INSERT INTO NOTICE VALUES (null, ?,?,NOW(),0)";
  const TITLE = req.body.TITLE;
  const CONTENT = req.body.CONTENT;
  const params = [TITLE, CONTENT];
  connection.query(sql, params, (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server Error");
    } else {
      res.send(rows);
    }
  });
});

// Update 기능
app.post("/api/notice/:NUM", (req, res) => {
  const sql = "UPDATE NOTICE SET TITLE=?, CONTENT=?, REGDATE=? WHERE NUM=?";
  const NUM = req.params.NUM;
  const TITLE = req.body.TITLE;
  const CONTENT = req.body.CONTENT;
  const REGDATE = req.body.REGDATE;
  const params = [TITLE, CONTENT, REGDATE, NUM];
  connection.query(sql, params, (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server Error");
    } else {
      // Query the updated data
      const selectSql = "SELECT * FROM firefox.NOTICE WHERE NUM=?";
      connection.query(selectSql, [NUM], function (err, result) {
        if (err) throw err;
        res.send(result);
      });
    }
  });
});
// Delete 기능
app.delete("/api/notice/:NUM", (req, res) => {
  const sql = "DELETE FROM NOTICE WHERE NUM=?";
  const params = [req.params.NUM];
  connection.query(sql, params, (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server Error");
    } else {
      res.send(rows);
    }
  });
});

// 게시판 검색기능을 위한 쿼리문
// 제목으로 찾기
app.get("/api/notice/TITLE/:content", (req, res) => {
  const sql =
    "SELECT NUM, TITLE, CONTENT, DATE_FORMAT(DATE_ADD(REGDATE, INTERVAL 9 HOUR),'%y-%m-%d %H:%i') AS REGDATE, VIEWS FROM NOTICE WHERE TITLE LIKE ? ORDER BY NUM DESC";
  const params = ["%" + req.params.content + "%"];
  connection.query(sql, params, (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
});

// 이하 상품 관련 쿼리문
// products table에서 정보를 불러옴 - goods 부분
app.get("/api/product", (req, res) => {
  connection.query("SELECT * FROM firefox.products", (err, rows, fields) => {
    res.send(rows);
  });
});

// 상품등록을 위한 쿼리문
app.post("/api/product", uploads.single("image"), (req, res) => {
  let sql = "INSERT INTO products VALUES (null, ?,?,?,?)";
  let image = "http://localhost:5000/image/" + req.file.filename; // 이미지는 파일 경로로 저장
  let name = req.body.name;
  let category = req.body.category;
  let price = req.body.price;
  let params = [image, name, category, price];
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
//////////////////// 관리자 고객문의 파트 ////////////////
app.get("/api/adminQnA", (req, res) => {
  const sql =
    "SELECT qna_id, title, user_id,category, content, status, DATE_FORMAT(DATE_ADD(created_at, INTERVAL 9 HOUR),'%y-%m-%d %H:%i') AS created_at FROM firefox.QNA ORDER BY qna_id DESC";
  connection.query(sql, (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/adminQnA/:qna_id", (req, res) => {
  const sql =
    "SELECT qna_id, title, user_id,category, content, status, DATE_FORMAT(DATE_ADD(created_at, INTERVAL 9 HOUR),'%y-%m-%d %H:%i') AS created_at FROM firefox.QNA WHERE qna_id=?";
  const qna_id = [req.params.qna_id];
  connection.query(sql, qna_id, (err, rows, fields) => {
    console.log(err);
    res.send(rows);
  });
});

app.post("/api/adminQnA", (req, res) => {
  const sql = "INSERT INTO QNA_COMMENT VALUES(null, ?, ?, ?, NOW(), NOW())";
  const qna_id = req.body.qna_id;
  const user_id = req.body.user_id;
  const content = req.body.content;
  const params = [qna_id, user_id, content];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/adminQnAComment/:qna_id", (req, res) => {
  const sql =
    "SELECT qna_comment_id, content, DATE_FORMAT(DATE_ADD(created_at, INTERVAL 9 HOUR),'%y-%m-%d %H:%i') AS created_at FROM firefox.QNA_COMMENT WHERE qna_id=?";
  const qna_id = [req.params.qna_id];
  connection.query(sql, qna_id, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/adminQnAComment", (req, res) => {
  const sql = "UPDATE QNA SET status=? WHERE qna_id=?";
  const status = req.body.status;
  const qna_id = req.body.qna_id;
  console.log("status : ", status);
  console.log("qna_id : ", qna_id);
  const params = [status, qna_id];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

// Create 기능
app.post("/api/qna", (req, res) => {
  const sql =
    "INSERT INTO QNA (user_id, category, title, content) VALUES (?,?,?,?)";
  const user_id = req.body.user_id;
  const category = req.body.category;
  const title = req.body.title;
  const content = req.body.content;
  const params = [user_id, category, title, content];
  connection.query(sql, params, (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server Error");
    } else {
      res.send(rows);
    }
  });
});

// Read 기능
app.get("/api/qna", function (req, res) {
  connection.query("SELECT * FROM QNA", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/api/qna/:user_id", function (req, res) {
  const user_id = [req.params.user_id];
  const sql = "SELECT * FROM QNA WHERE user_id=? ORDER BY qna_id DESC";
  const params = [user_id];
  connection.query(sql, params, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/api/getAdminQnA/:qna_id", (req, res) => {
  const qna_id = [req.params.qna_id];
  const sql = "SELECT * FROM firefox.QNA_COMMENT WHERE qna_id=?";
  connection.query(sql, qna_id, (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/myqna/:qna_id", function (req, res) {
  const qna_id = [req.params.qna_id];
  const sql = "SELECT * FROM firefox.QNA WHERE qna_id=?";
  connection.query(sql, qna_id, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});
////////////////////////////// TICKET ////////////////////////////////////////////
// TICKET (제영) 조회
app.get("/api/ticketImpo", (req, res) => {
  const sql = "SELECT * FROM firefox.TICKET";
  connection.query(sql, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

// TICKET (제영) 데이터 넣기
app.post("/api/ticketImpo", (req, res) => {
  console.log("POST 요청 실행");
  const user_id = req.body.user_id;
  const ticketHC = req.body.ticketHC;
  const ticketname = req.body.ticketname;
  const ticketprice = req.body.ticketprice;
  const ticketground = req.body.ticketground;
  const ticketdate = req.body.ticketdate;
  const ticketTeam = req.body.ticketTeam;
  const ticketTime = req.body.ticketTime;

  const params = [
    user_id,
    ticketHC,
    ticketname,
    ticketprice,
    ticketground,
    ticketdate,
    ticketTeam,
    ticketTime,
  ];
  console.log(params);
  const sql = "INSERT INTO TICKET  VALUES (null,?, ?, ?, ?, ?, ?, ?, ?)"; // SQL 쿼리문 작성
  connection.query(sql, params, (error, results, fields) => {
    if (error) {
      console.error(error); // 에러 출력
      res.status(500).send("Error inserting data into database"); // 500 에러 코드와 함께 에러 메시지 전송
    } else {
      // 에러가 없을 시
      res.status(200).send("Data successfully inserted into database"); // 200 성공 코드와 함께 성공 메시지 전송
    }
  });
});
// payresult
app.get("/api/succesTicketing/:id", (req, res) => {
  const sql = "SELECT * FROM firefox.TICKET WHERE id=?  ";
  const id = [req.params.id];
  connection.query(sql, id, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});
app.get("/api/ticketing/:id", (req, res) => {
  const sql = "SELECT * FROM firefox.TICKET WHERE id=?";
  const id = [req.params.id];
  connection.query(sql, id, (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/myTicket/:user_id", (req, res) => {
  const sql = "SELECT * FROM firefox.TICKET WHERE user_id=?";
  const user_id = [req.params.user_id];
  connection.query(sql, user_id, (err, rows, fields) => {
    res.send(rows);
  });
});

app.delete("/api/myTicket/:id", (req, res) => {
  const sql = "DELETE FROM TICKET WHERE id=?";
  const id = [req.params.id];
  connection.query(sql, id, (err, rows, fields) => {
    res.send(rows);
  });
});

///////////////////////////////// ShopPay /////////////////////////////////
// ShopPAY (제영) 조회
app.get("/api/goodsImpo", (req, res) => {
  const sql = "SELECT * FROM firefox.BASKETS";
  connection.query(sql, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});
console.log("이거 뜨면 데이터 나오는거");
// ShopPAY(제영)
app.post("/api/goodshistory", (req, res) => {
  const user_id = req.body.user_id;
  const num = req.body.num;
  const NAME = req.body.NAME;
  const category = req.body.category;
  const price = req.body.price;
  const cnt = req.body.cnt;
  const params = [user_id, num, NAME, category, price, cnt];

  const sql = "INSERT INTO GOODSHISTORY VALUES (null,?,?,?,?,?,NOW())";
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
    if (err) {
      console.log(err);
    }
  });
});
//ShopPAY삭제(제영)
console.log("콘솔은 들어라 이거 삭제한다.");
app.post("/api/goodsDel/:user_id", (req, res) => {
  const sql = "DELETE FROM BASKETS WHERE user_id=?";
  const params = req.params.user_id;
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});
