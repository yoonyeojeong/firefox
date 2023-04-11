import React, { useState } from "react";
import "../css/Notice.css";
import { FaSearch } from "react-icons/fa";
import useFetch from "../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
const initialSearchData = () => {
  return {
    option: "TITLE",
    content: "",
  };
};

function Notice() {
  const navigate = useNavigate();
  const [notices] = useFetch("http://localhost:5000/api/notice");
  const [searchData, setSearchData] = useState(() => initialSearchData());
  const searchContent = () => {
    if (searchData.content === "") {
      alert("검색어를 입력하세요");
    } else if (searchData.option === "TITLE") {
      navigate(`/fan/notice/TITLE/${searchData.content}`);
    }
  };
  const handleInputChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  return (
    <div className="notice">
      <div className="notice_box">
        <h1 id="notice_title">파이어폭스의 이야기 들어주세요!</h1>
        <table className="notice_table">
          <tbody>
            <tr>
              <td colSpan="5" className="notice_search">
                <form onSubmit={searchContent}>
                  <span>제목</span>
                  <input
                    className="board_search_txt"
                    type="text"
                    placeholder="검색하기"
                    name="content"
                    onChange={handleInputChange}
                  />
                  <button type="submit">
                    <FaSearch />
                  </button>
                </form>
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
                    <td>{item.VIEWS}</td>
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
