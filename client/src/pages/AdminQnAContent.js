import React from "react";
import "../css/AdminQnAContent.css";

function AdminQnAContent({ qnd_id, user_id, nick_name }) {
  return (
    <div className="qna_content_box">
      <div className="qna_title">글 제목 : QnA Title</div>
      <div className="qna_content">글 내용 : QnA Content</div>
    </div>
  );
}

export default AdminQnAContent;
