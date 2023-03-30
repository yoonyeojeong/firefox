import React, { useState, useEffect } from "react";
import axios from "axios";
import paylogo from "../../../images/payment/payment_icon_yellow_small.png";
import "../../../css/payment.css";

function Payment() {
  const [nextRedirectPcUrl, setNextRedirectPcUrl] = useState("");
  const [tid, setTid] = useState("");
  const [params, setParams] = useState({
    cid: "TC0ONETIME",
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    item_name: "{goods_name}",
    quantity: 1,
    total_amount: 2000,
    vat_amount: 200,
    tax_free_amount: 0,
    approval_url: "http://localhost:3000/PayResult",
    fail_url: "http://localhost:3000/",
    cancel_url: "http://localhost:3000/",
  });

  useEffect(() => {
    axios({
      url: "https://kapi.kakao.com/v1/payment/ready",
      method: "POST",
      headers: {
        Authorization: "KakaoAK 1461caa3c830eaa73cdd9c85314a314e",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params: params,
    }).then((response) => {
      const {
        data: { next_redirect_pc_url, tid },
      } = response;
      setNextRedirectPcUrl(next_redirect_pc_url);
      setTid(tid);
    });
  }, []);

  return (
    <div className="payment_ticketing">
      <h1>예매 확인</h1>
      <div className="payment_calendar">
        <table className="payment_table">
          <tr className="payment_tr">
            <th className="payment_th"></th>
          </tr>
          <tr className="payment_tr">
            <td>경기 날짜 {}</td>
          </tr>
          <tr className="payment_tr">
            <td>인원 {}</td>
          </tr>
          <tr className="payment_tr">
            <td>예매한 좌석 {}</td>
          </tr>
          <tr className="payment_tr">
            <td>총 금액 {}</td>
          </tr>
        </table>
      </div>

      <button>
        <a href={nextRedirectPcUrl}>
          <img src={paylogo} alt="" />
        </a>
      </button>
    </div>
  );
}

export default Payment;
