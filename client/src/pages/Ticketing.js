import React, { useState } from "react";
import SelectBoxTest from "../ticketPay/Payment/SeatSelectBox";
import { useNavigate } from "react-router-dom";
import Ground from "../images/Ground/FireFoxGround.png";
import GroundSeat from "../images/Ground/GroundSeat.PNG";
import "../css/Ticketing.css";

function Ticketing() {
  const navigate = useNavigate();

  const moveToPayment = () => {
    navigate("/ticket/payment");
  };
  //인원수 const
  const [selectedValue, setSelectedValue] = useState("1");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedValue(e.target.value);
  };

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
            value={selectedValue}
            onChange={handleChange}
          >
            <option value="">인원 수</option>
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
            <span className="Ticketing_row">
              <SelectBoxTest number={selectedValue} />
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
