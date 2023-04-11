import React, { useState } from "react";
import "../css/QnA.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function QnA({ user_id }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const toMyQnA = () => {
    navigate("/mypage/myQnA");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/qna`, {
        user_id,
        title,
        content,
        category,
      })
      .then(() => {
        toMyQnA();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="QnA">
      <div className="QnA_box">
        <div className="QnA_form">
          <h2 className="QnA_title">문의사항</h2>
          <span className="QnA_span">처리상태 </span>
          <span className="QnA_span">|</span>
          <span className="QnA_span">
            어떤 점이 궁금하신가요?
            <select
              name="option"
              id="QnA_option"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="">선택</option>
              <option value="상품">상품</option>
              <option value="주문">주문</option>
              <option value="교환">교환</option>
              <option value="환불">환불</option>
            </select>
          </span>
          <hr className="QnA_hr1" />
          <form onSubmit={handleSubmit}>
            <input
              className="QnA_comment_title"
              type="text"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <textarea
              name=""
              id="QnA_comment"
              placeholder="문의사항을 입력하세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="QnA_comment_form">
              <button type="submit" className="QnA_btn2">
                등록
              </button>
            </div>
          </form>
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
