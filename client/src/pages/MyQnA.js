import React from "react";
import "../css/MyQnA.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function MyQnA() {
  const navigate = useNavigate();

  const toQnA = () => {
    navigate("/mypage/QnA");
  };
  return (
    <div className="myQnA">
      <div className="myQnA_box">
        <div className="myQnA_form">
          <h2 className="myQnA_title">나의 문의사항 내역 </h2>
          <span className="myQnA_span">나의 문의&nbsp;&nbsp;&nbsp;</span>
          <span className="myQnA_span">|</span>
          <span className="myQnA_span">답변&nbsp;&nbsp;&nbsp;</span>
          <hr className="myQnA_hr1" />
          <table className="myQnA_table">
            <tbody>
              <tr className="myQnA_table_th">
                <th>번호</th>
                <th>제목</th>
                <th>작성일시</th>
                <th>처리상태</th>
              </tr>
              <tr className="myQnA_table_td">
                <td>예시:1</td>
                <td>
                  <Link to="/mypage/myQnAcontents">
                    예시(링크임시): 아니 야구공을 구매했는데 누가 싸인을
                    해놨네요??
                  </Link>
                </td>
                <td>2022-05-25</td>
                <td>처리중</td>
              </tr>
            </tbody>
          </table>

          <hr className="myQnA_hr2" />
          <div className="myQnA_btn_form">
            <button onClick={toQnA} className="myQnA_btn">
              문의하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyQnA;
