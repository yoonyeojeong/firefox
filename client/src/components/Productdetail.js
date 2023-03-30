import "../css/Shop.css";
import "../css/goods.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Detail() {
  const navigate = useNavigate();
  const [goods, setGoods] = useState([]);
  const [cnt, setCnt] = useState(1);
  const [price, setPrice] = useState(0);
  const { num } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/selectProductDetail?num=" + num)
      .then((res) => {
        console.log(res.data);
        setGoods(res.data);
        setPrice(res.data[0].price);
      });
  }, []);

  const goToCheckout = () => {
    if (true) {
      //login한 상태 확인 필요
      const userId = "cjck12"; //store에 저장한 user id 로 변경해야함
      axios
        .post("http://localhost:5000/api/insertBasket", {
          id: userId,
          num: num,
          NAME: goods[0].NAME,
          category: goods[0].category,
          price: price,
          cnt: cnt,
        })
        .then((res) => {
          navigate("/mypage/checkout");
        });
    } else {
      navigate("/mypage/checkout");
    }
  };
  const buyProduct = () => {
    // navigate('결제화면');
  };
  const upCnt = () => {
    var count = cnt + 1;
    var totalAmount = 0;
    setCnt(cnt + 1);
    totalAmount = count * goods[0].price;
    setPrice(totalAmount);
  };
  const downCnt = () => {
    var count = cnt - 1;
    var totalAmount = 0;
    if (count > 0) {
      setCnt(cnt - 1);
      totalAmount = count * goods[0].price;
      setPrice(totalAmount);
    }
  };
  return (
    <div className="container_shop">
      <div className="item_photo_info_sec">
        {goods.map((good, rowIndex) => (
          <>
            <div className="item_photo_view_box"></div>
            <div className="item_info_box">
              <div className="item_tit_detail_cont">
                <div className="item_detail_tit">
                  <h3>{good.NAME}</h3>
                </div>
                <div className="item_detail_list">
                  <dl className="item_price">
                    <dt>판매가</dt>
                    <dd>
                      <strong>
                        <strong>{good.price}</strong>
                      </strong>
                      원
                    </dd>
                  </dl>
                </div>
                <div className="item_detail_list">
                  <span className="goods_qty">
                    <input className="text" type="text" value={cnt}></input>
                  </span>
                  <button className="btn_up_cnt" onClick={upCnt}>
                    +
                  </button>
                  <button className="btn_up_cnt" onClick={downCnt}>
                    -
                  </button>
                </div>
                <div className="item_price_cont">
                  <div className="item_tatal_box">
                    <dl className="total_amount">
                      <dt>총 합계금액</dt>
                      <dd>
                        <strong className="total_price">
                          {price}
                          <b>원</b>
                        </strong>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="btn_choice_box">
                  <div>
                    <button
                      type="button"
                      className="btn_add_order"
                      onClick={buyProduct}
                    >
                      구매하기
                    </button>
                    <button
                      id="cartBtn"
                      type="button"
                      className="btn_add_cart"
                      onClick={goToCheckout}
                    >
                      장바구니
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
