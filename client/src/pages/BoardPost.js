import React from "react";
import "../css/BoardPost.css";

function BoardPost() {
  const handleSubmit = () => {};
  return (
    <div className="boardpost">
      <div className="boardpost_form">
        <form onSubmit={handleSubmit}>
          <h2 className="boardpost_title">게시글 작성</h2>
          <div className="boardpost_name">
            <p>제목</p>
            <input type="text" placeholder="글 제목" />
          </div>
          <div className="boardpost_content">
            <p>내용</p>
            <textarea placeholder="내용을 입력하세요" />
          </div>
          <button className="boardpost_button" type="submit">
            저장하기
          </button>
          <button className="boardpost_button" type="submit">
            목록으로
          </button>
        </form>
      </div>
    </div>
  );
}

export default BoardPost;
