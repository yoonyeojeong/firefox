import React from "react";
import "../css/common.css";
import "../css/reset.css";
import "../css/Product.css";
import "../css/main.css";
import { useStateValue } from "./StateProvider";

function Product({ num, name, category, price, goods_img }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        num: num,
        name: name,
        category: category,
        price: price,
        goods_img: goods_img,
      },
    });
    console.log("장바구니 확인 : ", basket);
  };
  return (
    <div className="product">
      <div className="product_info">
        <img src={goods_img} alt="" />
        <p>{name}</p>
        <p className="product_price">
          <strong>&#8361; {price}</strong>
        </p>
        <button onClick={addToBasket}>담 기</button>
      </div>
    </div>
  );
}

export default Product;
