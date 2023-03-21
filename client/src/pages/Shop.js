import React from "react";
import "../css/Shop.css";
import Product from "../components/Product";
import { FaSearch } from "react-icons/fa";
import useFetch from "../hooks/useFetch";

function Shop() {
  const [goods] = useFetch("http://localhost:5000/api/product");

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
        {goods &&
          goods.map((p) => {
            return (
              <Product
                key={p.num}
                num={p.num}
                name={p.name}
                category={p.category}
                price={p.price}
                goods_img={p.goods_img}
              />
            );
          })}
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
