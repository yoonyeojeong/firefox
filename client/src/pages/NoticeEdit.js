import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function NoticeEdit() {
  // URL 파라미터에서 id 추출
  const { id } = useParams();

  // 상태 변수 선언
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // GET 요청 보내기
  useEffect(() => {
    axios
      .get(`/api/notices/${id}`)
      .then((response) => {
        const { title, content } = response.data;
        setTitle(title);
        setContent(content);
      })
      .catch((error) => {
        console.error(error);
        alert("공지사항 조회에 실패했습니다.");
      });
  }, [id]);

  // 입력 양식 제출 처리 함수
  const handleSubmit = (event) => {
    event.preventDefault();

    // 서버에 PUT 요청 보내기
    axios
      .put(`/api/notices/${id}`, { title, content })
      .then((response) => {
        console.log(response.data);
        alert("공지사항이 수정되었습니다.");
      })
      .catch((error) => {
        console.error(error);
        alert("공지사항 수정에 실패했습니다.");
      });
  };

  return (
    <div>
      <h2>공지사항 수정</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">제목:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">내용:</label>
          <textarea
            id="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
        <button type="submit">수정</button>
      </form>
    </div>
  );
}

export default NoticeEdit;
