import React from "react";
import "../css/AdminBoard.css";

function AdminBoard() {
  return (
    <div className="adminboard">
      <h2>게시판 관리</h2>
      <div className="adminboard_box">
        <table className="adminboard_table">
          <tr className="adminboard_table_tr">
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>댓글</th>
            <th>조회수</th>
            <th>삭제</th>
          </tr>
          <tr className="adminboard_table_tr">
            <td className="adminboard_table_td">1</td>
            <td className="adminboard_table_td2">
              일빠 먹음 ㅅㄱ 다들 탑승 ㄱㄱ
            </td>
            <td className="adminboard_table_td">야동의 모든것</td>
            <td className="adminboard_table_td">2020-03-21 00:12:03</td>
            <td className="adminboard_table_td">5000</td>
            <td className="adminboard_table_td">60000</td>
            <td className="adminboard_table_td">
              <button className="adminboard_btn">삭제</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default AdminBoard;
