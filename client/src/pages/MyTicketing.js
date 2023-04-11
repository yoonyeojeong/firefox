import React from "react";
import "../css/MyTicketing.css";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import axios from "axios";

function MyTicketing({ user_id }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [ticket] = useFetch("http://localhost:5000/api/ticketing/" + id);
  const [user] = useFetch("http://localhost:5000/api/user/" + user_id);
  const goList = () => {
    navigate(-1);
  };

  const deleteTicket = (id) => {
    if (window.confirm("예매를 취소하시겠습니까?")) {
      const url = "/api/myTicket/" + id;
      fetch(url, {
        method: "DELETE",
      });
      alert("예매를 취소하였습니다.");
      navigate("/");
    } else {
      alert("신중히 생각해주세요.");
    }
  };

  return (
    <div className="myticketing">
      <div className="myticketing_box">
        <p>나의 예매내역</p>
        <table className="myticketing_content_box">
          <tr>
            <td className="myticketing_txt">예매번호</td>
            <td className="myticketing_txt_left">{ticket && ticket[0].id}</td>
          </tr>
          <tr>
            <td className="myticketing_txt">휴대폰</td>
            <td className="myticketing_txt_left">
              {user && user[0].phone_num_head}-
              {user && user[0].phone_num_middle}-
              {user && user[0].phone_num_last}
            </td>
          </tr>
          <tr>
            <td className="myticketing_txt">예매자</td>
            <td className="myticketing_txt_left">
              {user && user[0].user_name}
            </td>
          </tr>
          <tr>
            <td className="myticketing_txt">장소</td>
            <td className="myticketing_txt_left">
              {ticket && ticket[0].ticketground}
            </td>
          </tr>
          <tr>
            <td className="myticketing_txt">관람일시</td>
            <td className="myticketing_txt_left">
              {ticket && new Date(ticket[0].ticketdate).toLocaleDateString()}{" "}
              &nbsp;
              {ticket && ticket[0].ticketTime}
            </td>
          </tr>

          <tr>
            <td className="myticketing_txt">매수</td>
            <td className="myticketing_txt_left">
              {ticket && ticket[0].ticketHC}인
            </td>
          </tr>
        </table>
        <br />
        <div className="myticketing_button_box">
          <button
            className="myticketing_button1"
            onClick={() => {
              deleteTicket(ticket && ticket[0].id);
            }}
          >
            예매취소
          </button>
          <button className="myticketing_button" onClick={goList}>
            목록
          </button>
        </div>
      </div>
    </div>
  );
}
export default MyTicketing;
