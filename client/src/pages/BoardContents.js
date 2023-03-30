import React from "react";
import "../css/BoardContents.css";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BoardContents() {
  const { NUM } = useParams();
  const [content] = useFetch("http://localhost:5000/api/board/" + NUM);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="boardcontents">
      <div className="boardcontents_box">
        {content &&
          content.map((item) => {
            return (
              <div className="boardcontents_form">
                <h2 className="boardcontents_title">{item.TITLE}</h2>
                <span className="boardcontents_span">
                  작성자&nbsp;&nbsp;&nbsp;{item.user_id}
                </span>
                <span className="boardcontents_span">|</span>
                <span className="boardcontents_span">
                  작성일&nbsp;&nbsp;&nbsp;{item.REGDATE}
                </span>
                <span className="boardcontents_span">|</span>
                <span className="boardcontents_span">
                  조회수&nbsp;&nbsp;&nbsp;{item.VIEWS}
                </span>
                <hr className="boardcontents_hr1" />
                <p className="boardcontents_content">{item.CONTENTS}</p>
                <hr className="boardcontents_hr2" />
                <div className="boardcontents_btn_form">
                  <button className="boardcontents_btn" onClick={goBack}>
                    목록
                  </button>
                </div>
                <p className="boardcontents_comment_p">댓글 000 개</p>
                <div className="boardcontents_comment_form">
                  <textarea
                    name=""
                    id="boardcontents_comment"
                    placeholder="댓글을 입력하세요"
                  />
                  <button className="boardcontents_btn2">등록</button>
                </div>
                <hr className="boardcontents_hr3" />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default BoardContents;
