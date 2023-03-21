import React from "react";
import "../css/CheckoutProduct.css";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { useStateValue } from "../components/StateProvider";

function CheckoutProduct({ num, name, price, goods_img }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      num: num,
      name: name,
      price: price,
      goods_img: goods_img,
    });
  };
  return (
    <div className="checkout_product">
      <img className="checkout_product_img" src={goods_img} alt="" />

      <div className="checkout_product_info">
        <p className="checkout_product_name">{name}</p>
        <p className="checkout_product_price">
          <strong>&#8361; {price}</strong>
        </p>
      </div>
      <button
        onClick={removeFromBasket}
        type="button"
        className="checkout_product_close"
      >
        <MdOutlineCancelPresentation />
      </button>
    </div>
  );
}

export default CheckoutProduct;
