import React from "react";
import "../css/Whoops404.css";
import { useNavigate } from "react-router-dom";

function Shop() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="whoops404_page">
      <div className="whoops404msg_div">
        <p> 존재하지 않는 페이지입니다</p>
        <button className="whoops_back_button" type="button" onClick={goBack}>
          뒤로가기
        </button>
      </div>
    </div>
  );
}

export default Shop;
