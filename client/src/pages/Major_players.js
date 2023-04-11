import React from "react";
import "../css/Major_players.css";
import useFetch from "../hooks/useFetch";

function MajorPlayer({
  NAME,
  AGE,
  BACKNUM,
  POSITION,
  MIDDLE,
  HIGH,
  FIRSTTEAM,
  SECONDTEAM,
  THIRDTEAM,
  TALL,
  WEIGHT,
  BIRTH,
  IMAGE,
}) {
  return (
    <div className="major_num">
      <p className="major_num_p">{NAME}</p>
      <img src={IMAGE} alt={NAME} />
      <div>
        <table className="major_num_table">
          <tbody>
            <tr className="major_num_tr">
              <th>NO</th>
              <td>{BACKNUM}</td>
            </tr>
            <tr className="major_num_tr">
              <th>포지션</th>
              <td>{changePositionName(POSITION)}</td>
            </tr>
            <tr className="major_num_tr">
              <th>생년월일</th>
              <td>{BIRTH}</td>
            </tr>
            <tr className="major_num_tr">
              <th>신장/체중</th>
              <td>
                {TALL}cm/{WEIGHT}kg
              </td>
            </tr>
            <tr className="major_num_tr">
              <th>경력</th>
              <td>
                {MIDDLE}-{HIGH}
                <br />
                {changeTeamName(FIRSTTEAM)}-{changeTeamName(SECONDTEAM)}-
                {changeTeamName(THIRDTEAM)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const changeTeamName = (num) => {
  switch (num) {
    case "1":
      return "한화 이글스";
    case "2":
      return "SSG 랜더스";
    case "3":
      return "두산 베어스";
    case "4":
      return "롯데 자이언츠";
    case "5":
      return "KIA 타이거즈";
    case "6":
      return "LG 트윈스";
    case "7":
      return "NC 다이노스";
    case "8":
      return "삼성 라이온즈";
    case "9":
      return "키움 히어로즈";
    case "10":
      return "KT 위즈";
    default:
      return "한화 이글스";
  }
};

const changePositionName = (num) => {
  switch (num) {
    case 1:
      return "투수";
    case 2:
      return "포수";
    case 3:
      return "1루수";
    case 4:
      return "2루수";
    case 5:
      return "3루수";
    case 6:
      return "외야수";
    case 7:
      return "중견수";
    case 8:
      return "유격수";
    case 9:
      return "좌익수";
    case 10:
      return "우익수";
    case 11:
      return "지명타자";
    case 12:
      return "대타";
    case 13:
      return "대주자";
    case 14:
      return "감독";
    case 15:
      return "코치";
    default:
      return "코치";
  }
};

function MajorPlayers() {
  const [player] = useFetch("http://localhost:5000/api/players/1");

  return (
    <div className="Major_player">
      <div className="Major_player_box">
        <h3>선수단 소개 (1군)</h3>
        {player &&
          player.map((item) =>
            // major_team이 0인 경우에만 선수를 출력
            {
              return (
                <MajorPlayer
                  key={item.NUM}
                  NAME={item.NAME}
                  AGE={item.AGE}
                  BACKNUM={item.BACKNUM}
                  POSITION={item.POSITION}
                  LEAGUE={item.LEAGUE}
                  MIDDLE={item.MIDDLE}
                  HIGH={item.HIGH}
                  FIRSTTEAM={item.FIRSTTEAM}
                  SECONDTEAM={item.SECONDTEAM}
                  THIRDTEAM={item.THIRDTEAM}
                  TALL={item.TALL}
                  WEIGHT={item.WEIGHT}
                  BIRTH={item.BIRTH}
                  IMAGE={item.IMAGE}
                />
              );
            }
          )}
      </div>
    </div>
  );
}

export default MajorPlayers;
