import React from "react";
import "../css/MyTicketing.css";
import { Link } from "react-router-dom";

function MyTicketing() {
  return (
    <div className="myticketing">
      <div className="myticketing_box">
        <p>나의 예매내역</p>
        <table className="myticketing_content_box">
          <tr>
            <td className="myticketing_txt">휴대폰</td>
            <td className="myticketing_txt_left" colspan="2">
              여기 코드 넣어주세요
            </td>
          </tr>
          <tr>
            <td className="myticketing_txt">예매자</td>
            <td className="myticketing_txt_left" colspan="2">
              예매자
            </td>
          </tr>
          <tr>
            <td className="myticketing_txt">관람일시</td>
            <td className="myticketing_txt_left" colspan="2">
              관람일시
            </td>
          </tr>
          <tr>
            <td className="myticketing_txt">예매일시</td>
            <td className="myticketing_txt_left">예매일시</td>
          </tr>
          <tr>
            <td className="myticketing_txt">예매상태</td>
            <td className="myticketing_txt_left">예매상태</td>
          </tr>
          <tr>
            <td className="myticketing_txt">매수</td>
            <td className="myticketing_txt_left">매수</td>
          </tr>
        </table>
        <br />
        <div className="myticketing_button_box">
          <button className="myticketing_button">목록</button>
        </div>
      </div>
    </div>
  );
}
export default MyTicketing;
