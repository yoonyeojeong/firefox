import React from "react";
import "../css/QnA.css";
import { useNavigate } from "react-router-dom";

function QnA({ qnd_id, user_id, nick_name }) {
  const navigate = useNavigate();

  const toMyQnA = () => {
    navigate("/mypage/myQnA");
  };
  return (
    <div className="QnA">
      <div className="QnA_box">
        <div className="QnA_form">
          <h2 className="QnA_title">문의사항</h2>
          <span className="QnA_span">처리상태&nbsp;&nbsp;&nbsp;</span>
          <span className="QnA_span">|</span>
          <span className="QnA_span">
            어떤 점이 궁금하신가요?&nbsp;&nbsp;&nbsp;
            <select name="option" id="QnA_option">
              <option value="배송">선택</option>
              <option value="배송">상품</option>
              <option value="배송">주문</option>
              <option value="배송">교환</option>
              <option value="배송">환불</option>
            </select>
          </span>
          <hr className="QnA_hr1" />
          <input
            className="QnA_comment_title"
            type="text"
            placeholder="제목을 입력하세요"
          />
          <br />
          <textarea
            name=""
            id="QnA_comment"
            placeholder="문의사항을 입력하세요"
          />
          <div className="QnA_comment_form">
            <button className="QnA_btn2">등록</button>
          </div>
          <p className="QnA_content"></p>
          <hr className="QnA_hr2" />
          <div className="QnA_btn_form">
            <button className="QnA_btn" onClick={toMyQnA}>
              My QnA
            </button>
          </div>

          <hr className="QnA_hr3" />
        </div>
      </div>
    </div>
  );
}

export default QnA;
