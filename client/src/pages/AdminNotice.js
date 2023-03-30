import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/AdminNotice.css";
import useFetch from "../hooks/useFetch";
import AdminNoticeDetail from "./AdminNoticeDetail";

function AdminNotice() {
  const navigate = useNavigate();
  const [notices] = useFetch("http://localhost:5000/api/notice");
  const [content, setContent] = useState({
    TITLE: "",
    CONTENT: "",
  });

  const addNotice = () => {
    const url = "/api/notice";
    const formData = new FormData();
    formData.append("TITLE", content.TITLE);
    formData.append("CONTENT", content.CONTENT);

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    return axios.post(url, formData, config);
  };

  const deleteNotice = (NUM) => {
    if (window.confirm("삭제하시겠습니까?")) {
      const url = "/api/notice/" + NUM;
      fetch(url, {
        method: "DELETE",
      });
      alert("공지가 삭제되었습니다.");
      window.location.reload();
    } else {
      alert("공지 삭제를 취소하였습니다.");
    }
  };

  const handleInputChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (window.confirm("등록하시겠습니까?")) {
      e.preventDefault();
      addNotice().then((res) => {
        console.log(res.data);
      });
      setContent({
        name: "",
        price: "",
        category: "",
        filename: "",
        file: null,
      });
      alert("공지가 등록되었습니다.");
      window.location.reload();
    } else {
      alert("공지등록을 취소하였습니다.");
    }
  };

  return (
    <div className="adminnotice">
      <h2>공지사항 관리</h2>
      <div className="adminnotice_box">
        <form onSubmit={handleSubmit}>
          <p className="adminnotice_title">제목</p>
          <input
            className="adminnotice_input1"
            type="text"
            placeholder="제목"
            name="TITLE"
            value={content.TITLE}
            onChange={handleInputChange}
          />
          <br />
          <p className="adminnotice_title">내용</p>
          <textarea
            className="adminnotice_input2"
            type="text"
            placeholder="내용을 입력해주세요"
            name="CONTENT"
            value={content.CONTENT}
            onChange={handleInputChange}
          ></textarea>
          <button className="adminnotice_btn" type="submit">
            작성
          </button>
        </form>
      </div>
      <h2>공지사항 목록</h2>
      <div className="adminnotice_box">
        <table className="adminnotice_table">
          <thead>
            <tr className="adminnotice_table_tr">
              <th>글번호</th>
              <th>제목</th>
              <th>작성일</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {notices &&
              notices.map((item) => (
                <tr className="adminnotice_table_tr" key={item.NUM}>
                  <td className="adminnotice_table_td">{item.NUM}</td>
                  <td className="adminnotice_table_td">{item.TITLE}</td>
                  <td className="adminnotice_table_td">{item.REGDATE}</td>
                  <td className="adminnotice_table_td">
                    <button
                      onClick={() => navigate("/admin/notice/" + item.NUM)}
                      className="adminnotice_btn1"
                    >
                      수정
                    </button>
                  </td>
                  <td className="adminnotice_table_td">
                    <button
                      onClick={() => deleteNotice(item.NUM)}
                      className="adminnotice_btn1"
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AdminNotice;
