import "../css/Checkout.css";
import { BsCart4 } from "react-icons/bs";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const [basket, setBasket] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [CheckList, setCheckList] = useState([]);
  const [price, setPrice] = useState(0);
  const userId = "cjck12"; //store에 저장한 user id 로 변경해야함
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/selectBasket?userId=" + userId)
      .then((res) => {
        setBasket(res.data);
        let total = 0;
        res.data.map((item, i) => {
          itemList[i] = item.id;
          total = total + item.price;
        });
        setPrice(total);
        setCheckList(itemList);
      });
  }, []);

  // 체크박스 전체 선택
  const onChangeAll = (e) => {
    // 체크할 시 CheckList에 id 값 전체 넣기, 체크 해제할 시 CheckList에 빈 배열 넣기
    let list = e.target.checked ? itemList : [];
    let total = 0;
    setCheckList(list);
    basket.map((item, i) => {
      list.map((chk, i) => {
        if (chk == item.id) {
          total = total + item.price;
        }
      });
    });
    setPrice(total);
  };

  const onChangeEach = (e, id) => {
    // 체크할 시 CheckList에 id값 넣기
    let list = null;
    let total = 0;
    if (e.target.checked) {
      list = [...CheckList, id];
      setCheckList(list);
      // 체크 해제할 시 CheckList에서 해당 id값이 `아닌` 값만 배열에 넣기
    } else {
      list = CheckList.filter((checkedId) => checkedId !== id);
      setCheckList(list);
    }
    basket.map((item, i) => {
      list.map((chk, i) => {
        if (chk == item.id) {
          total = total + item.price;
        }
      });
    });
    setPrice(total);
  };
  const deleteBasket = (e, id) => {
    axios
      .post("http://localhost:5000/api/deleteBasket", {
        id: id,
        userId: userId,
      })
      .then((res) => {
        let list = CheckList.filter((checkedId) => checkedId !== id);
        setCheckList(list);
        axios
          .get("http://localhost:5000/api/selectBasket?userId=" + userId)
          .then((res) => {
            setBasket(res.data);
            let total = 0;
            res.data.map((item, i) => {
              itemList[i] = item.id;
              list.map((chk, i) => {
                if (chk == item.id) {
                  total = total + item.price;
                }
              });
            });
            setPrice(total);
          });
      });
  };
  const goShop = () => {
    navigate("/shop");
  };
  const buyProduct = () => {
    // navigate('결제화면');
  };
  return (
    <div className="checkout">
      <div className="checkout_box">
        <div className="checkout_header">
          <div className="checkout_basket_icon">
            <BsCart4 />
            &nbsp; 장바구니
          </div>
          <div className="total_amount">총 상품개수 : {basket?.length}</div>
        </div>

        <div className="checkout_list">
          <table style={{ width: "-webkit-fill-available" }}>
            <thead>
              <tr>
                <th style={{ width: 10 + "%" }}>
                  {" "}
                  <input
                    type="checkbox"
                    id="save_id"
                    onChange={onChangeAll}
                    checked={CheckList.length === itemList.length}
                  />
                </th>
                <th>상품정보</th>
                <th style={{ width: 10 + "%" }}>수량</th>
                <th style={{ width: 10 + "%" }}>금액</th>
                <th style={{ width: 10 + "%" }}>삭제</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((product, productIndex) => (
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      id="save_id"
                      onChange={(e) => onChangeEach(e, product.id)}
                      checked={CheckList.includes(product.id)}
                    />
                  </td>
                  <td>{product.NAME}</td>
                  <td>{product.cnt}</td>
                  <td>{product.price}</td>
                  <td>
                    <button onClick={(e) => deleteBasket(e, product.id)}>
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bottom_total_price">
          <div className="total_amount">총 합계금액 : {price}</div>
        </div>

        <div className="checkout_buttons">
          <button className="continue_shopping" onClick={goShop}>
            계속 쇼핑하기
          </button>
          <button className="buy_button" onClick={buyProduct}>
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
