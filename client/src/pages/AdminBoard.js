import React from "react";
import "../css/AdminBoard.css";
// import axios from "axios";
import useFetch from "../hooks/useFetch";

function AdminBoard() {
  const [board_content] = useFetch(
    "http://localhost:5000/api/adminboardcommentlength"
  );

  const deleteBoard = (num) => {
    if (window.confirm("삭제하시겠습니까?")) {
      const url = "/api/board/" + num;
      fetch(url, {
        method: "DELETE",
      });
      alert("삭제되었습니다.");
      window.location.reload();
    } else {
      alert("취소하였습니다.");
    }
  };

  return (
    <div className="adminboard">
      <h2>게시판 관리</h2>
      <div className="adminboard_box">
        <table className="adminboard_table">
          <tbody>
            <tr className="adminboard_table_tr">
              <th>글번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>댓글수</th>
              <th>조회수</th>
              <th>삭제</th>
            </tr>
            {board_content &&
              board_content.map((item) => {
                return (
                  <tr className="adminboard_table_tr" key={item.NUM}>
                    <td className="adminboard_table_td">{item.NUM}</td>
                    <td className="adminboard_table_td2">{item.TITLE}</td>
                    <td className="adminboard_table_td">{item.user_id}</td>
                    <td className="adminboard_table_td">{item.REGDATE}</td>
                    <td className="adminboard_table_td">{item.COUNT}</td>
                    <td className="adminboard_table_td">{item.VIEWS}</td>
                    <td className="adminboard_table_td">
                      <button
                        className="adminboard_btn"
                        onClick={() => deleteBoard(item.NUM)}
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminBoard;
