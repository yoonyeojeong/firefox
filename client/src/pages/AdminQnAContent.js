import React from "react";
import "../css/AdminQnAContent.css";

function AdminQnAContent({ qnd_id, user_id, nick_name }) {
  return (
    <div className="adminQnAcontent">
      <div className="adminQnAcontent_box">
        <div className="adminQnAcontent_form">
          <h2 className="adminQnAcontent_title">문의사항 이름 문의사항 제목</h2>
          <span className="adminQnAcontent_span">
            작성자&nbsp;&nbsp;&nbsp;000
          </span>
          <span className="adminQnAcontent_span">|</span>
          <span className="adminQnAcontent_span">
            작성일&nbsp;&nbsp;&nbsp;0000-00-00
          </span>
          <span className="adminQnAcontent_span">|</span>
          <span className="adminQnAcontent_span">
            문의유형&nbsp;&nbsp;&nbsp; 어쩔
          </span>
          <hr className="adminQnAcontent_hr1" />
          <p className="adminQnAcontent_content">
            어쩌고저쩌고 솰라쏼라 써놨겠지...?
          </p>
          <hr className="adminQnAcontent_hr2" />
          <p className="adminQnAcontent_p">아직 답변이 등록되지 않았습니다.</p>
          <hr className="adminQnAcontent_hr3" />
          <p className="adminQnAcontent_comment_p">관리자 답변</p>
          <div className="adminQnAcontent_comment_form">
            <textarea
              name=""
              id="adminQnAcontent_comment"
              placeholder="답변을 입력하세요"
            />
            <button className="adminQnAcontent_btn2">등록</button>
          </div>
          <hr className="adminQnAcontent_hr3" />
          <div className="adminQnAcontent_btn_form">
            <button className="adminQnAcontent_btn">목록</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminQnAContent;
