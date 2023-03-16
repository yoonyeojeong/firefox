import React from "react";
import "../css/common.css";
import "../css/reset.css";
import "../css/Checkout.css";
import "../css/main.css";
import Subtotal from "../components/Subtotal";
import { BsCart4 } from "react-icons/bs";
import { useStateValue } from "../components/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
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
          {basket.map((item) => (
            <CheckoutProduct
              num={item.num}
              name={item.name}
              goods_img={item.goods_img}
              price={item.price}
            />
          ))}
        </div>

        <div className="bottom_total_price">
          <Subtotal />
        </div>

        <div className="checkout_buttons">
          <button className="continue_shopping">계속 쇼핑하기</button>
          <button className="buy_button">구매하기</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
