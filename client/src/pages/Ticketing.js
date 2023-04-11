import React from "react";
// import SelectBox from "../ticketPay/Payment/SeatSelectBox";
import { useNavigate } from "react-router-dom";
import Ground from "../images/Ground/FireFoxGround.png";
import GroundSeat from "../images/Ground/GroundSeat.PNG";
import { seat } from "../ticketPay/Payment/Seat";
import { calculatePrice } from "../ticketPay/Payment/price";
// import { setNumber } from "../reducer/seatNumSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  getPriceValue,
  setVal1,
  setVal2,
  setVal3,
  setSeat,
  setNumber,
} from "../reducer/paypriceSlice";
import "../css/Ticketing.css";
function Ticketing() {
  const dispatch = useDispatch(); // useDispatch hook을 사용하여 Redux store에 action을 dispatch하는 함수를 가져옴

  const navigate = useNavigate(); // useNavigate hook을 사용하여 React Router의 navigate 함수를 가져옴

  //인원수 const
  const value1 = useSelector((state) => state.pay.val1); // Redux store에서 pay.val1 값을 가져옴
  const value2 = useSelector((state) => state.pay.val2); // Redux store에서 pay.val2 값을 가져옴
  const value3 = useSelector((state) => state.pay.val3); // Redux store에서 pay.val3 값을 가져옴
  const number = useSelector((state) => state.pay.number); // Redux store에서 pay.number 값을 가져옴

  console.log("selectedValue = ", number); // number 값을 console에 출력

  const { seatGrade, seatName, seatNum, price, codNm } = seat; // seat 객체에서 seatGrade, seatName, seatNum, price, codNm 값을 가져옴

  const getPrice = () => {
    // getPrice 함수 정의
    return calculatePrice(value1, value2, value3, number, seat); // calculatePrice 함수를 호출하여 가격을 계산하고 반환
  };
  const moveToPayment = () => {
    // getPrice 함수를 호출하여 가격 값을 가져온다.
    const priceValue = getPrice();
    // seatGrade 값을 설정한다.
    dispatch(setSeat(seatGrade));
    // seatName 값을 설정한다.
    dispatch(setSeat(seatName));
    // seatNum 값을 설정한다.
    dispatch(setSeat(seatNum));
    // getPriceValue 함수를 호출하여 가격 값을 저장한다.
    dispatch(getPriceValue(priceValue));
    // "/ticket/payment" 경로로 이동한다.
    navigate("/ticket/payment");
  };
  console.log(getPrice());
  console.log("val1 = ", seatGrade);
  console.log("val2 = ", seatName);
  console.log("val3 = ", seatNum);
  return (
    <div className="Ticketing_reservation">
      <div className="Ticketing_div">
        <h2 className="Ticketing_title">티켓 예매처</h2>
        <div className="Ticketing_img_box">
          <img className="Ticketing_img1" src={Ground} alt="" />
          <img className="Ticketing_img2" src={GroundSeat} alt="" />
        </div>
        <div className="Ticketing_div_box">
          <span className="Ticketing_span">인원수</span>
          <select
            className="Ticketing_select1"
            onChange={(e) => dispatch(setNumber(e.target.value))}
          >
            <option value="0">인원 수</option>
            <option value="1"> 1</option>
            <option value="2"> 2</option>
            <option value="3"> 3</option>
            <option value="4"> 4</option>
            <option value="5"> 5</option>
            <option value="6"> 6</option>
            <option value="7"> 7</option>
            <option value="8"> 8</option>
            <option value="9"> 9</option>
            <option value="10"> 10</option>
          </select>
          <br />
          <div className="Ticketing_row">
            <span className="Ticketing_span2">좌석</span>
            {/*select 태그에 onChange 이벤트를 추가하고, 선택된 값을 setVal1
              액션으로 dispatch 한다.*/}
            <span className="Ticketing_row">
              <select onChange={(e) => dispatch(setVal1(e.target.value))}>
                {/*첫 번째 option 태그는 선택지가 없는 경우이다.*/}
                <option value="">선택</option>
                {/*seatGrade 배열을 map 함수로 순회하며 option 태그를 생성한다.*/}
                {seatGrade.map((el) => {
                  return (
                    // 각 option 태그는 seatGrade 값을 value로 가지며, codNm 값을 텍스트로 가진다.
                    <option key={el.seatGrade} value={el.seatGrade}>
                      {el.codNm}
                    </option>
                  );
                })}
              </select>
              <select onChange={(e) => dispatch(setVal2(e.target.value))}>
                <option value="">선택</option>
                {seatName
                  .filter((el) => el.seatGrade === value1)
                  .map((el) => (
                    <option key={el.seatName} value={el.seatName}>
                      {el.codNm}
                    </option>
                  ))}
              </select>
              <select onChange={(e) => dispatch(setVal3(e.target.value))}>
                <option value="">선택</option>
                {seatNum
                  .filter(
                    (el) => el.seatGrade === value1 && el.seatName === value2
                  )
                  .map((el) => (
                    <option key={el.seatNum} value={el.seatNum}>
                      {el.codNm}
                    </option>
                  ))}
              </select>
              <div>
                {value3 && (
                  <span>
                    <span>{`가격 : ${getPrice()} 원`}</span>
                  </span>
                )}
              </div>
            </span>
          </div>
        </div>
        <button className="Ticketing_btn" onClick={moveToPayment}>
          예매하기
        </button>
      </div>
    </div>
  );
}
export default Ticketing;
