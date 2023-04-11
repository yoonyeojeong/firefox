const fs = require("fs");
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

// 모든 유저 정보 불러오기 쿼리문
const getUsers = (req, res) => {
  connection.query("SELECT * FROM firefox.USERS", (err, rows, fields) => {
    res.send(rows); // 응답을 받는 부분
  });
};

// 회원가입 쿼리문
const joinUs = (req, res) => {
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
};

module.exports = {
  getUsers,
  joinUs,
};
