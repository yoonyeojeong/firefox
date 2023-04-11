import React, { useState } from "react";
import "../css/Board.css";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const initialSearchData = () => {
  return {
    option: "TITLE",
    content: "",
  };
};

function BoardSearch({ user_id }) {
  const { option, content } = useParams();
  const navigate = useNavigate();
  const goPosting = () => {
    navigate("/fan/board/post");
  };
  // 임시 아이디
  const [result] = useFetch(
    `http://localhost:5000/api/board/${option}/${content}`
  );
  const [searchData, setSearchData] = useState(() => initialSearchData());

  const handleInputChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const searchContent = () => {
    if (searchData.content === "") {
      alert("검색어를 입력하세요");
    } else if (searchData.option === "TITLE") {
      navigate(`/fan/board/TITLE/${searchData.content}`);
    } else if (searchData.option === "user_id") {
      navigate(`/fan/board/user_id/${searchData.content}`);
    }
  };

  return (
    <div className="board">
      <h1 id="board_title">파이어폭스 팬 여러분의 소통공간</h1>
      <div className="board_div">
        <table className="board_table">
          <tbody>
            <tr>
              <td colSpan="5" className="board_search">
                <form onSubmit={searchContent}>
                  <select
                    name="option"
                    className="board_select"
                    onChange={handleInputChange}
                  >
                    <option value="TITLE">제목</option>
                    <option value="user_id">작성자</option>
                  </select>
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
            <tr className="board_table_title_tr">
              <th className="board_table_title">NO</th>
              <th className="board_table_title">제목</th>
              <th className="board_table_title">작성자</th>
              <th className="board_table_title">작성일</th>
              <th className="board_table_title">조회수</th>
            </tr>

            {result &&
              result.map((item) => {
                return (
                  <tr className="board_table_title_td" key={item.NUM}>
                    <td>{item.NUM}</td>

                    <td className="board_Link_td">
                      <Link to={`/fan/board/contents/${item.NUM}`}>
                        {item.TITLE}
                      </Link>
                    </td>

                    <td>{item.user_id}</td>
                    <td>{item.REGDATE}</td>
                    <td>{item.VIEWS}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="board_button_div">
          <button onClick={goPosting} className="board_button">
            작성하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoardSearch;
