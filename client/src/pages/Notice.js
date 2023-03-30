import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Notice.css";
import { FaSearch } from "react-icons/fa";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Notice() {
  const [notices] = useFetch("http://localhost:5000/api/notice");

  return (
    <div className="notice">
      <div className="notice_box">
        <h1 id="notice_title">파이어폭스의 이야기 들어주세요!</h1>
        <table className="notice_table">
          <tbody>
            <tr>
              <td colSpan="5" className="notice_search">
                <span>제목</span>
                <input
                  className="notice_search_txt"
                  type="text"
                  placeholder="제목으로 검색하기"
                />
                <FaSearch />
              </td>
            </tr>

            <tr className="notice_table_title_th">
              <th>NO</th>
              <th>제목</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
            {notices &&
              notices.map((item) => {
                return (
                  <tr className="notice_table_title_td" key={item.NUM}>
                    <td>{item.NUM}</td>
                    <td>
                      <Link to={`/fan/notice/${item.NUM}`}>{item.TITLE}</Link>
                    </td>
                    <td>{item.REGDATE}</td>
                    <td>여기 채워줘야함</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Notice;
