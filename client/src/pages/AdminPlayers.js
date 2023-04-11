/* eslint-disable */
import { useState } from "react";
import "../css/AdminPlayers.css";
import axios from "axios";
import { ImCancelCircle } from "react-icons/im";
import useFetch from "../hooks/useFetch";

function AdminPlayers() {
  const [players, setPlayers] = useState({
    NAME: "",
    AGE: "",
    BACKNUM: "",
    POSITION: "",
    LEAGUE: "",
    MIDDLE: "",
    HIGH: "",
    FIRSTTEAM: "",
    SECONDTEAM: "",
    THIRDTEAM: "",
    TALL: "",
    WEIGHT: "",
    BIRTH: "",
    file: null,
    filename: "",
  }); // players 상태값과 setPlayers 함수를 생성하고, 초기값은 빈 배열로 설정한다.

  const [playerList] = useFetch("/api/players");

  const handleDelete = (BACKNUM) => {
    if (window.confirm("삭제하시겠습니까?")) {
      const url = "/api/players/" + BACKNUM;
      fetch(url, {
        method: "DELETE",
      });
      alert("삭제되었습니다.");
      window.location.reload();
    } else {
      alert("취소하였습니다.");
    }
  };

  const addPlayer = () => {
    const url = "/api/players";
    const formData = new FormData();

    formData.append("NAME", players.NAME);
    formData.append("AGE", players.AGE);
    formData.append("BACKNUM", players.BACKNUM);
    formData.append("POSITION", players.POSITION);
    formData.append("LEAGUE", players.LEAGUE);
    formData.append("MIDDLE", players.MIDDLE);
    formData.append("HIGH", players.HIGH);
    formData.append("FIRSTTEAM", players.FIRSTTEAM);
    formData.append("SECONDTEAM", players.SECONDTEAM);
    formData.append("THIRDTEAM", players.THIRDTEAM);
    formData.append("TALL", players.TALL);
    formData.append("WEIGHT", players.WEIGHT);
    formData.append("BIRTH", players.BIRTH);
    formData.append("IMAGE", players.file);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(url, formData, config);
  };

  const handleInputChange = (e) => {
    setPlayers({ ...players, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (window.confirm("등록하시겠습니까?")) {
      e.preventDefault();
      addPlayer().then((res) => {
        console.log(res.data);
      });
      setPlayers({
        NAME: "",
        AGE: "",
        BACKNUM: "",
        POSITION: "",
        LEAGUE: "",
        MIDDLE: "",
        HIGH: "",
        FIRSTTEAM: "",
        SECONDTEAM: "",
        THIRDTEAM: "",
        TALL: "",
        WEIGHT: "",
        BIRTH: "",
        file: null,
        filename: "",
      });
      alert("선수등록이 완료되었습니다.");
      setTimeout(window.location.reload(), 1000);
    } else {
      alert("선수등록을 취소하였습니다.");
    }
  };
  const handleImageChange = (e) => {
    setPlayers({
      ...players,
      file: e.target.files[0],
      filename: e.target.value,
    });
  };
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

  return (
    <div className="adminplayers">
      <h2 className="adminplayers_title">선수 등록</h2>
      <form onSubmit={handleSubmit}>
        <div className="adminplayers_enrollment">
          <table className="adminplayers_table1">
            <tbody>
              <tr>
                <td>등 번호</td>
                <td className="adminplayers_input">
                  <input
                    type="number"
                    max="100"
                    onChange={handleInputChange}
                    name="BACKNUM"
                    value={players.BACKNUM}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>선수 이름</td>
                <td className="adminplayers_input">
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="NAME"
                    value={players.NAME}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>나이</td>
                <td className="adminplayers_input">
                  <input
                    type="number"
                    max="100"
                    onChange={handleInputChange}
                    name="AGE"
                    value={players.AGE}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>생년월일</td>
                <td className="adminplayers_input">
                  <input
                    type="date"
                    onChange={handleInputChange}
                    name="BIRTH"
                    value={players.BIRTH}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>포지션</td>
                <td className="adminplayers_input">
                  <select
                    name="POSITION"
                    id="POSITION"
                    value={players.POSITION}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">선택하기</option>
                    <option value="1">투수</option>
                    <option value="2">포수</option>
                    <option value="3">1루수</option>
                    <option value="4">2루수</option>
                    <option value="5">3루수</option>
                    <option value="6">외야수</option>
                    <option value="7">중견수</option>
                    <option value="8">유격수</option>
                    <option value="9">좌익수</option>
                    <option value="10">우익수</option>
                    <option value="11">지명타자</option>
                    <option value="12">대타</option>
                    <option value="13">대주자</option>
                    <option value="14">감독</option>
                    <option value="15">코치</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>소속 리그</td>
                <td className="adminplayers_input">
                  <select
                    name="LEAGUE"
                    id="LEAGUE"
                    value={players.LEAGUE}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">선택하기</option>
                    <option value="1">1군</option>
                    <option value="2">2군</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>출신 중학교</td>
                <td className="adminplayers_input">
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="MIDDLE"
                    value={players.MIDDLE}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>출신 고등학교</td>
                <td className="adminplayers_input">
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="HIGH"
                    value={players.HIGH}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>경력1</td>
                <td className="adminplayers_input">
                  <select
                    name="FIRSTTEAM"
                    id="FIRSTTEAM"
                    value={players.FIRSTTEAM}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">선택하기</option>
                    <option value="1">한화 이글스</option>
                    <option value="2">SSG 랜더스</option>
                    <option value="3">두산 베어스</option>
                    <option value="4">롯데 자이언츠</option>
                    <option value="5">KT 위즈</option>
                    <option value="6">KIA 타이거즈</option>
                    <option value="7">LG 트윈스</option>
                    <option value="8">NC 다이노스</option>
                    <option value="9">삼성 라이온즈</option>
                    <option value="10">키움 히어로즈</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>경력2</td>
                <td className="adminplayers_input">
                  <select
                    name="SECONDTEAM"
                    id="SECONDTEAM"
                    value={players.SECONDTEAM}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">선택하기</option>
                    <option value="1">한화 이글스</option>
                    <option value="2">SSG 랜더스</option>
                    <option value="3">두산 베어스</option>
                    <option value="4">롯데 자이언츠</option>
                    <option value="5">KT 위즈</option>
                    <option value="6">KIA 타이거즈</option>
                    <option value="7">LG 트윈스</option>
                    <option value="8">NC 다이노스</option>
                    <option value="9">삼성 라이온즈</option>
                    <option value="10">키움 히어로즈</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>경력3</td>
                <td className="adminplayers_input">
                  <select
                    name="THIRDTEAM"
                    id="THIRDTEAM"
                    value={players.THIRDTEAM}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">선택하기</option>
                    <option value="1">한화 이글스</option>
                    <option value="2">SSG 랜더스</option>
                    <option value="3">두산 베어스</option>
                    <option value="4">롯데 자이언츠</option>
                    <option value="5">KT 위즈</option>
                    <option value="6">KIA 타이거즈</option>
                    <option value="7">LG 트윈스</option>
                    <option value="8">NC 다이노스</option>
                    <option value="9">삼성 라이온즈</option>
                    <option value="10">키움 히어로즈</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>키</td>
                <td className="adminplayers_input">
                  <input
                    type="number"
                    max="250"
                    onChange={handleInputChange}
                    name="TALL"
                    value={players.TALL}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>몸무게</td>
                <td className="adminplayers_input">
                  <input
                    type="number"
                    max="200"
                    onChange={handleInputChange}
                    name="WEIGHT"
                    value={players.WEIGHT}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>선수 사진</td>
                <td className="adminplayers_input_file">
                  <input
                    type="file"
                    onChange={handleImageChange}
                    name="IMAGE"
                    file={players.file}
                    value={players.filename}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <br />
          <div className="adminplayers_btn_form">
            <button className="adminplayers_btn" type="submit">
              등록
            </button>
          </div>
        </div>
      </form>
      <h2 className="adminplayers_title">선수 목록</h2>
      <div className="adminplayers_list">
        <table className="adminplayers_table">
          <thead>
            <tr className="adminplayers_table_tr">
              <th>선수 번호</th>
              <th>선수 이름</th>
              <th>선수 나이</th>
              <th>선수 포지션</th>
              <th>소속 리그</th>
              <th>선수 방출</th>
            </tr>
          </thead>
          <tbody>
            {playerList &&
              playerList.map((player) => (
                <tr className="adminplayers_table_tr" key={player.NUM}>
                  <td>{player.BACKNUM}</td>
                  <td>{player.NAME}</td>
                  <td>{player.AGE}</td>
                  <td>{changePositionName(player.POSITION)}</td>
                  <td>{player.LEAGUE}군</td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(player.NUM)}
                      className="player_delete_button"
                    >
                      <ImCancelCircle />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPlayers;
