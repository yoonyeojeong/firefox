import React, { useState } from "react";
import "../css/BoardContents.css";
import useFetch from "../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function BoardContents({ user_id }) {
  const navigate = useNavigate();
  const { NUM } = useParams();
  const [content] = useFetch("http://localhost:5000/api/board/" + NUM);
  const [comment, setComment] = useState({
    user_id: user_id,
    content: "",
    num: "",
  });

  const [registered_comment] = useFetch(
    "http://localhost:5000/api/board_comment/" + NUM
  );

  const handleInputChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const addComment = () => {
    const url = "/api/board_comment";
    const data = {
      user_id: user_id,
      contents: comment.content,
      num: NUM,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return axios.post(url, data, config);
  };

  const handleSubmit = async (e) => {
    if (user_id) {
      e.preventDefault();

      if (window.confirm("등록하시겠습니까?")) {
        try {
          const res = await addComment();
          console.log(res.data);

          setComment({
            user_id: "",
            content: "",
            num: NUM,
          });

          alert("댓글을 등록하였습니다.");
          window.location.reload();
        } catch (error) {
          console.error(error);
          alert("댓글 등록에 실패했습니다.");
        }
      } else {
        alert("댓글등록을 취소하였습니다.");
      }
    } else {
      alert("로그인이 필요합니다.");
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="boardcontents">
      <div className="boardcontents_box">
        <div className="boardcontents_form">
          <h2 className="boardcontents_title">{content && content[0].TITLE}</h2>
          <span className="boardcontents_span">
            작성자&nbsp;&nbsp;&nbsp;{content && content[0].user_id}
          </span>
          <span className="boardcontents_span">|</span>
          <span className="boardcontents_span">
            작성일&nbsp;&nbsp;&nbsp;{content && content[0].REGDATE}
          </span>
          <span className="boardcontents_span">|</span>
          <span className="boardcontents_span">
            조회수&nbsp;&nbsp;&nbsp;{content && content[0].VIEWS + 1}
          </span>
          <hr className="boardcontents_hr1" />
          <p className="boardcontents_content">
            {content && content[0].CONTENTS}
          </p>
          <hr className="boardcontents_hr2" />
          {registered_comment && registered_comment.length > 0 ? (
            registered_comment.map((item) => {
              return (
                <>
                  <p className="Boardcontent_p">
                    작성자 : {item.USER_ID} / 등록일 : {item.REGDATE}
                  </p>
                  <p className="Boardcontent_p" key={item.COMMENT_ID}>
                    댓글 : {item.CONTENTS}
                  </p>
                  <hr className="Boardcontent_hr3" />
                </>
              );
            })
          ) : (
            <>
              <p className="Boardcontent_p">첫 댓글을 달아주세요.</p>
              <hr className="Boardcontent_hr3" />
            </>
          )}
          <div className="boardcontents_btn_form">
            <br />
            <button className="boardcontents_btn" onClick={goBack}>
              목록
            </button>
          </div>
          <p className="boardcontents_comment_p">
            댓글 {registered_comment && registered_comment.length}개
          </p>
          <div className="boardcontents_comment_form">
            <form onSubmit={handleSubmit}>
              <textarea
                name="content"
                id="boardcontents_comment"
                placeholder="답변을 입력하세요"
                onChange={handleInputChange}
              />
              <button className="boardcontents_btn2" type="submit">
                등록
              </button>
            </form>
          </div>
          <hr className="boardcontents_hr3" />
        </div>
      </div>
    </div>
  );
}

export default BoardContents;
