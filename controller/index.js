const userDatabase = require("../tempdata.js");
const jwt = require("jsonwebtoken");

// module 생성
const login = (req, res, next) => {
  //console.log("index.js userDatabase : ", userDatabase);
  const { user_id } = req.body;

  const userInfo = userDatabase.filter((item) => {
    return item.user_id === user_id;
  })[0];
  if (!userInfo) {
    res.status(403).json("Not Authorized");
  } else {
    try {
      // access Token 발급
      const accessToken = jwt.sign(
        { user_id: userInfo.user_id, user_name: userInfo.user_name },
        process.env.ACCESS_SECRET,
        { expiresIn: "1h", issuer: "About Tech" }
      );
      // refresh Token 발급
      const refreshToken = jwt.sign(
        {
          user_id: userInfo.user_id,
          user_name: userInfo.user_name,
        },
        process.env.REFRESH_SECRET,
        { expiresIn: "24h", issuer: "About Tech" }
      );
      // token 전송
      res.cookie("accessToken", accessToken, {
        secure: false,
        httpOnly: true,
      });

      res.cookie("refreshToken", refreshToken, {
        secure: false,
        httpOnly: true,
      });

      res.status(200).json("LOGIN SUCCESS!!");
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

const accessToken = (req, res) => {
  try {
    const token = req.cookies.accessToken;
    const data = jwt.verify(token, process.env.ACCESS_SECRET);
    const userData = userDatabase.filter((item) => {
      return item.user_id === data.user_id;
    })[0];
    const { user_pw, ...others } = userData;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};
// accessToken 갱신
const refrestToken = (req, res) => {
  try {
    const token = req.cookies.refreshToken;
    const data = jwt.verify(token, process.env.REFRESH_SECRET);
    const userData = userDatabase.filter((item) => {
      return item.user_id === data.user_id;
    })[0];

    // accessToken 새로 발급
    const accessToken = jwt.sign(
      { user_id: userData.user_id, user_name: userData.user_name },
      process.env.ACCESS_SECRET,
      { expiresIn: "1m", issuer: "About Tech" }
    );

    res.cookie("accessToken", accessToken, {
      secure: false,
      httpOnly: true,
    });

    res.status(200).json("Access Token 재발급");
  } catch (error) {
    res.status(500).json(error);
  }
};

const loginSuccess = (req, res) => {
  try {
    const token = req.cookies.accessToken;
    const data = jwt.verify(token, process.env.ACCESS_SECRET);

    const userData = userDatabase.filter((item) => {
      return item.user_id === data.user_id;
    })[0];

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
};
const logout = (req, res) => {
  try {
    res.cookie("accessToken", "");
    res.status(200).json("Logout Success");
  } catch (error) {
    console.log("error!!!");
    res.status(500).json(error);
  }
};

module.exports = {
  login,
  accessToken,
  refrestToken,
  loginSuccess,
  logout,
};
