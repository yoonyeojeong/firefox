import React, { useState } from "react";
import "../css/AdminQnAContent.css";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import axios from "axios";

function AdminQnAContent() {
  const navigate = useNavigate();
  const { qna_id } = useParams();
  const [qna] = useFetch("http://localhost:5000/api/adminQnA/" + qna_id);
  const [qnaComment] = useFetch(
    "http://localhost:5000/api/adminQnAComment/" + qna_id
  );
  const [comment, setComment] = useState({
    qna_id: "",
    user_id: "",
    content: "",
  });
  const handleInputChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const addComment = () => {
    const url = "/api/adminQnA";
    const formData = new FormData();

    formData.append("qna_id", qna[0].qna_id);
    formData.append("user_id", qna[0].user_id);
    formData.append("content", comment.content);

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    return axios.post(url, formData, config);
  };
  const completeAnswer = () => {
    const url = "/api/adminQnAComment";
    const formData = new FormData();
    formData.append("status", "완료");
    formData.append("qna_id", qna[0].qna_id);
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
      addComment().then((res) => {
        console.log(res.data);
      });
      setComment({
        qna_id: "",
        user_id: "",
        content: "",
      });
      completeAnswer().then((res) => {
        console.log(res.data);
      });
      alert("답변이 등록되었습니다.");
      setTimeout(window.location.reload(), 1000);
    } else {
      alert("답변등록을 취소하였습니다.");
    }
  };

  const goToList = () => {
    navigate("/admin/qna");
  };
  console.log("qnaComment : ", qnaComment);

  return (
    <div className="adminQnAcontent">
      <div className="adminQnAcontent_box">
        <div className="adminQnAcontent_form">
          <h2 className="adminQnAcontent_title">문의사항 이름 문의사항 제목</h2>
          <span className="adminQnAcontent_span">
            작성자&nbsp;&nbsp;&nbsp; {qna && qna[0].user_id}
          </span>
          <span className="adminQnAcontent_span">|</span>
          <span className="adminQnAcontent_span">
            작성일&nbsp;&nbsp;&nbsp;{qna && qna[0].created_at}
          </span>
          <span className="adminQnAcontent_span">|</span>
          <span className="adminQnAcontent_span">
            문의유형&nbsp;&nbsp;&nbsp; {qna && qna[0].category}
          </span>
          <hr className="adminQnAcontent_hr1" />
          <p className="adminQnAcontent_content">{qna && qna[0].content}</p>
          <hr className="adminQnAcontent_hr2" />
          {qnaComment && qnaComment.length > 0 ? (
            qnaComment.map((item) => {
              return (
                <>
                  <p className="adminQnAcontent_p" key={item.qna_comment_id}>
                    {item.content}
                  </p>
                  <hr className="adminQnAcontent_hr3" />
                </>
              );
            })
          ) : (
            <>
              <p className="adminQnAcontent_p">
                아직 답변이 등록되지 않았습니다.
              </p>
              <hr className="adminQnAcontent_hr3" />
            </>
          )}

          <p className="adminQnAcontent_comment_p">관리자 답변</p>
          <div className="adminQnAcontent_comment_form">
            <form onSubmit={handleSubmit}>
              <textarea
                name="content"
                value={comment.content}
                id="adminQnAcontent_comment"
                placeholder="답변을 입력하세요"
                onChange={handleInputChange}
              />
              <button className="adminQnAcontent_btn2" type="submit">
                등록
              </button>
            </form>
          </div>
          <hr className="adminQnAcontent_hr3" />
          <div className="adminQnAcontent_btn_form">
            <button className="adminQnAcontent_btn" onClick={goToList}>
              목록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminQnAContent;
