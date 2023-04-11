import React, { useState, useEffect } from "react";
import "../css/Shop.css";
import Product from "../components/Product";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

function Shop() {
  const [goods, setGoods] = useState([]);
  let newList = [];
  useEffect(() => {
    axios.get("http://localhost:5000/api/product").then((res) => {
      setGoods(res.data);
    });
  }, []);

  for (let i = 0; i < goods.length; i += 4) {
    newList.push(goods.slice(i, i + 4));
  }
  const searchApi = (category) => {
    //api 호출
    axios
      .get("http://localhost:5000/api/selectProduct?category=" + category)
      .then((res) => {
        setGoods(res.data);
      });
  };

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
            <button
              className="product_category_button"
              id="all"
              onClick={(e) => searchApi("")}
            >
              {" "}
              전 체
            </button>
          </li>
          <li className="product_category_li">
            <button
              className="product_category_button"
              id="a"
              onClick={(e) => searchApi("a")}
            >
              {" "}
              유니폼
            </button>
          </li>
          <li className="product_category_li">
            <button
              className="product_category_button"
              id="b"
              onClick={(e) => searchApi("b")}
            >
              {" "}
              모 자
            </button>
          </li>
          <li className="product_category_li">
            <button
              className="product_category_button"
              id="c"
              onClick={(e) => searchApi("c")}
            >
              {" "}
              의 류
            </button>
          </li>
          <li className="product_category_li">
            <button
              className="product_category_button"
              id="d"
              onClick={(e) => searchApi("d")}
            >
              {" "}
              잡 화
            </button>
          </li>
          <li className="product_category_li">
            <button
              className="product_category_button"
              id="e"
              onClick={(e) => searchApi("e")}
            >
              {" "}
              기념상품
            </button>
          </li>
        </ul>
      </div>

      {newList.map((row, rowIndex) => (
        <div className="shop_row" key={rowIndex}>
          {row.map((item, itemIndex) => (
            <Product
              key={item.num}
              num={item.num}
              name={item.NAME}
              category={item.category}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Shop;
