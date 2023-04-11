import React from "react";
import "../css/MyQnA.css";
import { useNavigate, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function MyQnA({ user_id }) {
  const navigate = useNavigate();
  const [qnaList] = useFetch("http://localhost:5000/api/qna/" + user_id);

  const toQnA = () => {
    navigate("/mypage/QnA");
  };

  return (
    <div className="myQnA">
      <div className="myQnA_box">
        <div className="myQnA_form">
          <h2 className="myQnA_title">나의 문의사항 내역</h2>
          <span className="myQnA_span">나의 문의</span>
          <span className="myQnA_span">|</span>
          <span className="myQnA_span">답변</span>
          <hr className="myQnA_hr1" />
          <table className="myQnA_table">
            <thead>
              <tr className="myQnA_table_th">
                <th>번호</th>
                <th>제목</th>
                <th>작성일시</th>
                <th>처리상태</th>
              </tr>
            </thead>
            <tbody>
              {qnaList &&
                qnaList.map((qna) => (
                  <tr key={qna.qna_id} className="myQnA_table_td">
                    <td>{qna.qna_id}</td>
                    <td>
                      <Link to={`/mypage/myQnAcontents/${qna.qna_id}`}>
                        {qna.title}
                      </Link>
                    </td>
                    <td>{new Date(qna.created_at).toLocaleDateString()}</td>
                    <td
                      className={
                        qna.status === "완료" ? "complete" : "beforeComment"
                      }
                    >
                      {qna.status === "완료" ? "답변완료" : "처리중"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <hr className="myQnA_hr2" />
          <div className="myQnA_btn_form">
            <button className="myQnA_btn" onClick={toQnA}>
              문의 등록
            </button>
          </div>
          <hr className="myQnA_hr2" />
        </div>
      </div>
    </div>
  );
}

export default MyQnA;
