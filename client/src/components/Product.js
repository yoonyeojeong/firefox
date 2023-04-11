import React from "react";
import "../css/Product.css";
import { Link } from "react-router-dom";

function Product({ num, name, category, price, image }) {
  return (
    <Link to={`/shop/detail/${num}`}>
      <div className="product">
        <div className="product_info">
          <img src={image} alt={name} />
          <p>{name}</p>
          <p className="product_price">
            <strong>
              &#8361; {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </strong>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Product;
