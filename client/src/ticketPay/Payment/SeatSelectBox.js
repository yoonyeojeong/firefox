// SelectBox.js
import React, { useState } from "react";
import { seat } from "./Seat";
import { calculatePrice } from "./price";
import "../../css/SeatSelectBox.css";

function SelectBox({ number }) {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  const { seatGrade, seatName, seatNum, price } = seat;

  // 가격을 계산하는 함수
  const getPrice = () => {
    return calculatePrice(val1, val2, val3, number, seat);
  };

  return (
    <div>
      <select
        className="SeatSelectBox_select1"
        onChange={(e) => setVal1(e.target.value)}
      >
        <option value="">선택</option>
        {seatGrade.map((el) => {
          return (
            <option key={el.seatGrade} value={el.seatGrade}>
              {el.codNm}
            </option>
          );
        })}
      </select>
      <br />
      <select
        className="SeatSelectBox_select2"
        onChange={(e) => setVal2(e.target.value)}
      >
        <option value="">선택</option>
        {seatName
          .filter((el) => el.seatGrade === val1)
          .map((el) => (
            <option key={el.seatName} value={el.seatName}>
              {el.codNm}
            </option>
          ))}
      </select>
      <br />
      <select
        className="SeatSelectBox_select3"
        onChange={(e) => setVal3(e.target.value)}
      >
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
        {val3 && (
          <span>
            <span className="SeatSelectBox_getPrice">
              {` 티켓 가격은 ${getPrice()}원 입니다.`}
            </span>
          </span>
        )}
      </div>
    </div>
  );
}

export default SelectBox;
