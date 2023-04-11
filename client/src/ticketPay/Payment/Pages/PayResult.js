import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
// import { setInitialState } from "../reducer/paypriceSlice";

function PayResult() {
  const price = useSelector((state) => state.pay.price);
  const val1 = useSelector((state) => state.pay.val1);
  const val2 = useSelector((state) => state.pay.val2);
  const val3 = useSelector((state) => state.pay.val3);
  const number = useSelector((state) => state.pay.number);
  const ground = useSelector((state) => state.pay.ground);
  // const dispatch = useDispatch();
  const navigator = useNavigate();

  const home = () => {
    navigator("/");
  };
  const { id } = useParams();
  const [ticketImpo] = useFetch("/api/succesTicketing/" + id);

  console.log("ticketImpo", ticketImpo);
  return (
    <div>
      <h1>결제가 완료되었습니다.</h1>
      <p>주문 상품</p>
      <div>경기장소 : {ground} </div>
      <div> 티켓 수 : {number}</div>
      <div>
        티켓 명 :{val1}-{val2}-{val3}
      </div>

      <div>가격 : {price}</div>
      <p>감사합니다.</p>
      <button onClick={home}> 홈으로 가기</button>
    </div>
  );
}

export default PayResult;
