import React, { useState, useEffect } from "react";
import "../css/NoticeDetail.css";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NoticeDetail() {
  const { NUM } = useParams();
  const [notices] = useFetch("http://localhost:5000/api/notice/" + NUM);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="noticedetail">
      <div className="noticedetail_box">
        {notices &&
          notices.map((item) => {
            return (
              <div className="noticedetail_form">
                <h2 className="noticedetail_title">{item.TITLE}</h2>
                <span className="noticedetail_span">
                  작성일&nbsp;&nbsp;&nbsp;{item.REGDATE}
                </span>
                <span className="noticedetail_span">|</span>
                <span className="noticedetail_span">
                  조회수&nbsp;&nbsp;&nbsp;{item.VIEWS}
                </span>
                <hr className="noticedetail_hr1" />
                <p className="noticedetail_content">{item.CONTENT}</p>
                <hr className="noticedetail_hr2" />
                <div className="noticedetail_btn_form">
                  <button className="noticedetail_btn" onClick={goBack}>
                    목록
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default NoticeDetail;
