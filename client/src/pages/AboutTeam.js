import React from "react";
import "../css/common.css";
import "../css/reset.css";
import "../css/AboutTeam.css";
import "../css/main.css";
import logo from "../images/common/teamLogo.png";

function AboutTeam() {
  return (
    <div className="aboutTeam">
      <h1>
        <p> 파이어폭스를</p>
        <p>소개합니다.</p>
      </h1>
      <div className="logo_center">
        <img id="logo" src={logo} alt="파이어폭스 로고" />

        <div className="txt_box">
          <div className="txt_margin">
            <strong className="strong">
              <span className="txt_kosmo_bold">파이어폭스</span>는 코스모를
              연고로 2023년 한국 프로 야구(KBO)의
              <br />
              제11구단으로 출범했습니다.
            </strong>
          </div>
          <div className="txt_margin_bt">
            <p className="txt_kosmo">
              서울 금천구 가산디지털2로 123 월드메르디앙을 홈 구장으로 이용하고
              있으며, 제2구장은 KOSMO에 위치한 열정야구장입니다.
              <br />
              <br />
              보다 많은 분들이 야구를 관람하며 행복을 느낄 수 있도록
              <span className="txt_kosmo_bold"> 파이어폭스</span>는 투혼을 담은
              경기를 위해 최선을 다하고 있습니다.
              <br />
              지속적인 강팀으로 발돋움 하고자 내부 육성 시스템을 정비, 중장기,
              프런트 모두가 함께 노력하고 있습니다.
              <span className="txt_kosmo_bold">파이어폭스</span>
              의 감독 및 코칭 스태프, 선수, 프런트 모두가 함께 노력하고
              있습니다.
              <br />
              <br />늘 응원해주시는 팬들의 성원과 기대에 부응할 수 있도록
              역동적인 경기와 다양한 마케팅을 전개해 팬과 함께 비상하는 구단이
              되겠습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;
