import React from "react";
import "../css/common.css";
import "../css/reset.css";
import "../css/Shop.css";
import "../css/main.css";
import Product from "./Product";
import { FaSearch } from "react-icons/fa";

function Shop() {
  const goods_num = 0;
  const goods_name = "1번";
  const goods_price = 10000;
  return (
    <div className="shop">
      <div className="search_field">
        <div className="product_search">
          <input
            className="product_search_input"
            type="text"
            placeholder="검색하기"
          />
          <button className="search_icon">
            <FaSearch />
          </button>
        </div>
        <ul className="product_category_ul">
          <li className="product_category_li">
            <button className="product_category_button"> 전 체</button>
          </li>
          <li className="product_category_li">
            <button className="product_category_button"> 유니폼</button>
          </li>
          <li className="product_category_li">
            <button className="product_category_button"> 모 자</button>
          </li>
          <li className="product_category_li">
            <button className="product_category_button"> 의 류</button>
          </li>
          <li className="product_category_li">
            <button className="product_category_button"> 잡 화</button>
          </li>
          <li className="product_category_li">
            <button className="product_category_button"> 기념상품</button>
          </li>
        </ul>
      </div>
      <div className="shop_row">
        <Product num={goods_num} name={goods_name} price={goods_price} />
        <Product num={2} name="2번상품" price={3000} />
        <Product />
        <Product />
      </div>
      <div className="shop_row">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Shop;
