import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/AdminNoticeDetail.css";
import useFetch from "../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";

function AdminNoticeDetail() {
  const { NUM } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice] = useState({
    NUM: "",
    TITLE: "",
    CONTENT: "",
  });

  const [match] = useFetch("http://localhost:5000/api/notice/" + NUM);

  const deleteNotice = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      const url = "/api/notice/" + notice.NUM;
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            alert("공지가 삭제되었습니다.");
            navigate("/admin/notice");
          } else {
            throw new Error("HTTP Error - " + response.status);
          }
        })
        .catch((error) => {
          alert("공지 삭제를 실패하였습니다. 오류 메시지: " + error.message);
        });
    } else {
      alert("공지 삭제를 취소하였습니다.");
    }
  };

  const handleInputChange = (e) => {
    setNotice({ ...notice, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if (window.confirm("수정하시겠습니까?")) {
      e.preventDefault();
      const url = "/api/notice/" + notice.NUM;
      const formData = new FormData();
      formData.append("TITLE", notice.TITLE);
      formData.append("CONTENT", notice.CONTENT);
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      await axios.post(url, formData, config);
      alert("공지가 수정되었습니다.");
      navigate("/admin/notice");
    } else {
      alert("공지 수정을 취소하였습니다.");
    }
  };
  useEffect(() => {
    if (match && match.length > 0) {
      setNotice({
        NUM: match[0].NUM,
        TITLE: match[0].TITLE,
        CONTENT: match[0].CONTENT,
      });
    }
  }, [match]);

  return (
    <div className="adminnoticedetail">
      <form onSubmit={handleSubmit}>
        <h2>공지사항 수정</h2>
        <div className="adminnoticedetail_box">
          <p className="adminnoticedetail_title">제목</p>
          <input
            className="adminnoticedetail_input1"
            type="text"
            placeholder="제목"
            name="TITLE"
            value={notice.TITLE}
            onChange={handleInputChange}
          />
          <p className="adminnoticedetail_title">내용</p>
          <textarea
            className="adminnoticedetail_input2"
            placeholder="내용"
            name="CONTENT"
            value={notice.CONTENT}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="adminnoticedetail_btn_box">
          <button className="adminnoticedetail_btn" type="submit">
            수정
          </button>
          <button className="adminnoticedetail_btn" onClick={deleteNotice}>
            삭제
          </button>
          <button className="adminnoticedetail_btn1">목록(안됨)</button>
        </div>
      </form>
    </div>
  );
}

export default AdminNoticeDetail;
