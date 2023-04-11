import React, { useState } from "react";
import "../css/BoardPost.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BoardPost({ user_id }) {
  const navigate = useNavigate();
  const [content, setContent] = useState({
    user_id: user_id,
    TITLE: "",
    CONTENTS: "",
  });

  const goList = () => {
    navigate(-1);
  };
  const handleInputChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };
  const addContent = () => {
    const url = "/api/board";
    const formData = new FormData();
    formData.append("TITLE", content.TITLE);
    formData.append("CONTENTS", content.CONTENTS);
    formData.append("user_id", content.user_id);

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    return axios.post(url, formData, config);
  };
  const handleSubmit = (e) => {
    if (window.confirm("등록하시겠습니까?")) {
      e.preventDefault();
      addContent().then((res) => {
        console.log(res.data);
      });
      setContent({
        user_id: user_id,
        TITLE: "",
        CONTENTS: "",
      });
      alert("게시글을 등록하였습니다.");
      setTimeout(window.location.reload(), 1000);
    } else {
      alert("등록을 취소하였습니다.");
    }
  };
  return (
    <div className="boardpost">
      <div className="boardpost_form">
        <form onSubmit={handleSubmit}>
          <h2 className="boardpost_title">게시글 작성</h2>
          <div className="boardpost_name">
            <p>제목</p>
            <input
              type="text"
              placeholder="글 제목"
              name="TITLE"
              value={content.TITLE}
              onChange={handleInputChange}
            />
          </div>
          <div className="boardpost_content">
            <p>내용</p>
            <textarea
              placeholder="내용을 입력하세요"
              name="CONTENTS"
              value={content.CONTENTS}
              onChange={handleInputChange}
            />
          </div>
          <button className="boardpost_button" type="submit">
            저장하기
          </button>
          <button className="boardpost_button" type="button" onClick={goList}>
            목록으로
          </button>
        </form>
      </div>
    </div>
  );
}

export default BoardPost;
