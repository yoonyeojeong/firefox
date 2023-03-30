import React from "react";
import "../css/Product.css";
import { Link } from "react-router-dom";

function Product({ num, name, category, price, goods_img }) {
  return (
    <Link to={`/shop/detail/${num}`}>
      <div className="product">
        <div className="product_info">
          <img src={goods_img} alt="" />
          <p>{name}</p>
          <p className="product_price">
            <strong>&#8361; {price}</strong>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Product;
