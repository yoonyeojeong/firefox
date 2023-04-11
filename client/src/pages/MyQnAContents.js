import React from "react";
import "../css/MyQnAContents.css";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function MyQnAContents({ user_id }) {
  const { qna_id } = useParams();
  const navigate = useNavigate();
  const [myQnAContent] = useFetch("http://localhost:5000/api/myqna/" + qna_id);
  const [adminQnAComment] = useFetch(
    "http://localhost:5000/api/getAdminQnA/" + qna_id
  );

  const toMyQnA = () => {
    navigate("/mypage/myQnA");
  };

  return (
    <div className="myQnAcontents">
      <div className="myQnAcontents_box">
        <div className="myQnAcontents_form">
          <h2 className="myQnAcontents_title">문의사항 </h2>
          <span className="myQnAcontents_span">
            작성일&nbsp;&nbsp;&nbsp;
            {myQnAContent && myQnAContent[0].created_at}
          </span>
          <span className="myQnAcontents_span">|</span>
          <span className="myQnAcontents_span">
            처리상태&nbsp;&nbsp;&nbsp;{myQnAContent && myQnAContent[0].status}
          </span>
          <hr className="myQnAcontents_hr1" />
          <h1 className="myQnAcontents_h1">
            {myQnAContent && myQnAContent[0].title}
          </h1>
          <p className="myQnAcontents_p">
            {myQnAContent && myQnAContent[0].content}
          </p>
          <hr className="myQnAcontents_hr1" />
          <h1 className="myQnAcontents_h1">관리자 답변</h1>
          {adminQnAComment && adminQnAComment.length > 0 ? (
            adminQnAComment.map((item) => {
              return (
                <>
                  <p className="myQnAcontents_p" key={item.qna_comment_id}>
                    {item.content}
                  </p>
                  <hr className="myQnAcontents_hr1" />
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
          <button className="QnA_btn" onClick={toMyQnA}>
            My QnA
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyQnAContents;
