// SelectBox.js
import React, { useState } from "react";
import { seat } from "./Seat";
import { calculatePrice } from "./price";
// import ReadyPayment from "../Payment/Pages/ReadyPayment";
// import { useNavigate } from "react-router-dom";

// export default function SelectBox({ number }) {
//   const [val1, setVal1] = useState("");
//   const [val2, setVal2] = useState("");
//   const [val3, setVal3] = useState("");
//   const { seatGrade, seatName, seatNum, price } = seat; // seat 객체에서 seatGrade, seatName, seatNum, price를 가져옴

//   const getPrice = () => { // getPrice 함수 선언
//     return calculatePrice(val1, val2, val3, number, seat); // calculatePrice 함수 호출 후 반환
//   };

//   console.log(getPrice()); // getPrice 함수 호출 결과를 콘솔에 출력

//   // ReadyPayment 컴포넌트로 getPrice 함수를 보내는 코드
//   return (
//     <ReadyPayment getPrice={getPrice} />
//   );
// }
// 가격을 계산하는 함수
// export function GetPrice(number) {
//   const [val1, setVal1] = useState("");
//   const [val2, setVal2] = useState("");
//   const [val3, setVal3] = useState("");
//   const { seatGrade, seatName, seatNum, price } = seat;
// }
export default function SelectBox({ number }) {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  const { seatGrade, seatName, seatNum, price } = seat;
  // const navigate = useNavigate();
  const getPrice = () => {
    // getPrice 함수 선언
    return calculatePrice(val1, val2, val3, number, seat); // calculatePrice 함수 호출 후 반환
  };
  // <ReadyPayment getPrice={getPrice()} />;
  console.log(getPrice());

  return (
    <div>
      <select onChange={(e) => dispatch(getVal1(e.target.value))}>
        <option value="">선택</option>
        {seatGrade.map((el) => {
          return (
            <option key={el.seatGrade} value={el.seatGrade}>
              {el.codNm}
            </option>
          );
        })}
      </select>
      <select onChange={(e) => setVal2(e.target.value)}>
        <option value="">선택</option>
        {seatName
          .filter((el) => el.seatGrade === val1)
          .map((el) => (
            <option key={el.seatName} value={el.seatName}>
              {el.codNm}
            </option>
          ))}
      </select>
      <select onChange={(e) => setVal3(e.target.value)}>
        <option value="">선택</option>
        {seatNum
          .filter((el) => el.seatGrade === val1 && el.seatName === val2)
          .map((el) => (
            <option key={el.seatNum} value={el.seatNum}>
              {el.codNm}
            </option>
          ))}
      </select>
      {/* 가격을 보여주는 요소 */}
      <div>
        가격 :
        {val3 && (
          <span>
            <span>{` ${getPrice()} 원`}</span>
          </span>
        )}
      </div>
    </div>
  );
}
