import React from "react";
import "../css/common.css";
import "../css/reset.css";
import "../css/Subtotal.css";
import "../css/main.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      {/*<CurrencyFormat
        renderText={(value) => (
          <>
            <div className="total_price_anounce">
              총 주문금액 : &nbsp;
              <p className="total_price_color"> &#8361; {value}</p>
            </div>
          </>
        )}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
      />*/}
    </div>
  );
}

export default Subtotal;
