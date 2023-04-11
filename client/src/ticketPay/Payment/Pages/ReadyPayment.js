import React, { useState, useEffect } from "react";
import axios from "axios";
import paylogo from "../../../images/payment/payment_icon_yellow_small.png";
import "../../../css/payment.css";
import { useSelector } from "react-redux";
import { seat } from "../Seat";

// import { response } from "express";
// import { seat } from "../Seat";
// import { setVal1 } from "../../../reducer/paypriceSlice";
// import { useLocation } from "react-router-dom";
// import { seat } from "../ticketPay/Payment/Seat";

function Payment({ user_id }) {
  const price = useSelector((state) => state.pay.price);
  const val1 = useSelector((state) => state.pay.val1);
  const val2 = useSelector((state) => state.pay.val2);
  const val3 = useSelector((state) => state.pay.val3);
  const number = useSelector((state) => state.pay.number);
  const ground = useSelector((state) => state.pay.ground);

  const date = useSelector((state) => state.pay.schedule_date);
  const place = useSelector((state) => state.pay.schedule_place);
  const team = useSelector((state) => state.pay.schedule_team);
  const time = useSelector((state) => state.pay.schedule_time);

  console.log(price);
  console.log(number);
  console.log(val1);
  console.log("date", date);
  console.log("time", typeof new Date(date));

  console.log(team);
  console.log(place);

  // 티켓 이름 const
  const selectedCodNm = (val1, val2, val3) =>
    seat.find(
      (el) =>
        el.seatGrade === val1 && el.seatName === val2 && el.seatNum === val3
    )?.codNm;
  console.log("이거 되면 잔다 = ", selectedCodNm);

  const [inputValues, setInputValues] = useState({
    user_id: user_id,
    ticketHC: number,
    ticketname: val1 + val2 + val3,
    ticketprice: price,
    ticketground: ground,
    ticketdate: date,
    ticketTeam: team,
    ticketTime: time,
  });

  function hadleSubmit() {
    // event.preventDefault(); // 이벤트의 기본 동작을 막는다.

    const url = "/api/ticketImpo"; // 요청을 보낼 URL

    const data = {
      // 요청에 담을 데이터
      user_id: user_id, // 사용자 ID
      ticketHC: inputValues.ticketHC, // 티켓 HC
      ticketname: inputValues.ticketname, // 티켓 이름
      ticketprice: inputValues.ticketprice, // 티켓 가격
      ticketground: inputValues.ticketground, // 경기 장소
      ticketdate: new Date(inputValues.ticketdate), // 경기 날짜
      ticketTeam: inputValues.ticketTeam, // 경기 팀
      ticketTime: inputValues.ticketTime, // 경기 시간
    };
    console.log("이거 실행됐냐");
    const config = {
      // 요청 설정
      headers: {
        "Content-Type": "application/json", // 요청 헤더에 json 형식임을 명시한다
      },
    };

    axios
      .post(url, data, config) // POST 요청을 보낸다.
      .then((response) => {
        // 요청이 성공했을 때 실행되는 함수
        console.log(response.data); // 응답 데이터를 콘솔에 출력한다.
      })
      .catch((error) => {
        // 요청이 실패했을 때 실행되는 함수
        console.log(error); // 에러를 콘솔에 출력한다.
      });
  }

  //카카오페이 const
  const [nextRedirectPcUrl, setNextRedirectPcUrl] = useState("");
  const [tid, setTid] = useState("");

  const params = {
    cid: "TC0ONETIME",
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    item_name: `${val1} ${val2} ${val3}`,
    quantity: 1,
    total_amount: price,
    vat_amount: 200,
    tax_free_amount: 0,
    approval_url: "http://localhost:3000/ticket/payresult/",
    fail_url: "http://localhost:3000/",
    cancel_url: "http://localhost:3000/",
  };
  console.log(params);
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
      console.log("카카오는 보아라", response);
      // const {
      //   data: { next_redirect_pc_url, tid },
      // } = response;
      console.log("data", response.data);

      setNextRedirectPcUrl(response.data.next_redirect_pc_url);
      console.log(response.data.next_redirect_pc_url);
      setTid(response.data.tid);
    });
  }, []);

  console.log("time", time);
  console.log("nextRedirectPcUrl : ", nextRedirectPcUrl);

  return (
    <div className="payment_ticketing">
      <h1>예매 확인</h1>

      <div className="payment_calendar">
        <table className="payment_table">
          <tr className="payment_tr">
            <th className="payment_th"></th>
          </tr>
          <tr className="payment_tr">
            <td>
              경기 날짜: {date} {time}
            </td>
          </tr>
          <tr className="payment_tr">
            <td>경기 팀: {team} </td>
          </tr>
          <tr className="payment_tr">
            <td>경기 장소: {place} </td>
          </tr>
          <tr className="payment_tr">
            <td>인원수: {number} 명</td>
          </tr>
          <tr className="payment_tr">
            <td>
              예매한 좌석 : {val1} {val2} {val3}
            </td>
          </tr>
          <tr className="payment_tr">
            <td>총 금액</td>
            <td>{price}원</td>
          </tr>
        </table>
      </div>
      <p className="pay_p">
        <input type="checkbox" className="input_pay" /> 이용약관 및 개인정보
        제3자 제공사항에 대해 확인하였으며 결제에 동의합니다.
        <br />
        <br />
      </p>
      <button onClick={hadleSubmit}>
        <a href={nextRedirectPcUrl}>
          <img src={paylogo} alt="" />
        </a>
      </button>
    </div>
  );
}

export default Payment;
