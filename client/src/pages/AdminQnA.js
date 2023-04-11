import React from "react";
import "../css/AdminQnA.css";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function AdminQnA({ qna_id, user_id, nick_name }) {
  const [adminQnA] = useFetch("http://localhost:5000/api/adminQnA");
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
              {adminQnA &&
                adminQnA.map((item) => {
                  return (
                    <tr className="adminQnA_tatle_td" key={item.qna_id}>
                      <td>{item.qna_id}</td>
                      <td>
                        <Link to={`/admin/adminQnAcontent/${item.qna_id}`}>
                          {item.title}
                        </Link>
                      </td>
                      <td>{item.user_id}</td>
                      <td>{item.category}</td>
                      <td>{item.created_at}</td>
                      <td>{item.status}</td>
                    </tr>
                  );
                })}
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
