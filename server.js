//import goods_img_02 from "./client/src/images/goods/uniform_02.jpg";
//import goods_img_03 from "./client/src/images/goods/bat_01.jpg";
//import goods_img_01 from "./client/src/images/goods/uniform_01.jpg";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/product", (req, res) => {
  res.send([
    {
      num: 1,
      name: "1번상품",
      price: 10000,
      category: "의류",
      //goods_img: goods_img_01,
    },
    {
      num: 2,
      name: "2번상품",
      price: 8000,
      category: "의류",
      // goods_img: goods_img_02,
    },
    {
      num: 3,
      name: "3번상품",
      price: 3000,
      category: "기념상품",
      // goods_img: goods_img_03,
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
