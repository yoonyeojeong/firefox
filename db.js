const fs = require("fs");
const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql2/promise");

// create a connection pool to the RDS instance
const pool = mysql.createPool({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

async function executeQuery(query, params) {
  const connection = await pool.getConnection();
  try {
    const [rows, fields] = await connection.execute(query, params);
    // console.log("rows and params", rows, params);
    return rows;
  } finally {
    connection.release();
  }
}

module.exports = {
  readAllRecords: async function () {
    const query = "SELECT * FROM firefox.USERS";
    const records = await executeQuery(query);
    // console.log("records : ", records);
    return records;
  },
};
