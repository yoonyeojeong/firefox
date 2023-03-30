import React from "react";
import "../css/AdminQnA.css";
import AdminQnAContent from "./AdminQnAContent";
import { Link } from "react-router-dom";

function AdminQnA({ qna_id, user_id, nick_name }) {
  return (
    <div className="adminQnA">
      <h2>고객문의</h2>

      <div className="adminQnA_box">
        <div className="adminQnA_box_title">회원 문의 목록</div>
        <div className="adminQnA_body">
          <table className="adminQnA_tatle">
            <thead>
              <tr className="adminQnA_tatle_tr">
                <th>글번호</th>
                <th>제목</th>
                <th>ID</th>
                <th>문의유형</th>
                <th>작성일</th>
                <th>처리상태</th>
              </tr>
              <tr className="adminQnA_tatle_td">
                <td>1</td>
                <td>
                  <Link to="/admin/adminQnAcontent">
                    정신차리고 빨리 환불해줘요 죽고싶지 않다면
                  </Link>
                </td>
                <td>아이돌빠</td>
                <td>환불</td>
                <td>2025-12-25</td>
                <td>답변완료</td>
              </tr>
              <tr className="adminQnA_tatle_td">
                <td>1</td>
                <td>asasas8520</td>
                <td>배송</td>
                <td>착짱죽짱</td>
                <td>2011-12-02</td>
                <td>처리중</td>
              </tr>
              <tr className="adminQnA_tatle_td">
                <td>1</td>
                <td>dbsduwjd123</td>
                <td>김첨지</td>
                <td>4</td>
                <td>4</td>
                <td>처리중</td>
              </tr>
            </thead>
            <tbody></tbody>
          </table>

          <form className="adminQnA_form1">
            <button className="adminQnA_btn">
              Count <span className="badge"></span>
            </button>

            <div className="adminQnA_form1">
              <select className="adminQnA_control" name="skey">
                <option value="all">전체</option>
                <option value="name">ID</option>
                <option value="phone">문의유형</option>
                <option value="email">작성일</option>
              </select>
            </div>
            <div className="adminQnA_form1">
              <input
                type="svalue"
                className="adminQnA_control2"
                id="svalue"
                name="svalue"
              />
            </div>
            <button type="submit" className="adminQnA_btn">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminQnA;
