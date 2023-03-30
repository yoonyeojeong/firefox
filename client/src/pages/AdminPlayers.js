import { useState, useEffect } from "react";
import "../css/AdminPlayers.css";
import { MdOutlineCancelPresentation } from "react-icons/md";

function AdminPlayers() {
  const [players, setPlayers] = useState([]);
  const [inputValues, setInputValues] = useState({
    major_num: "",
    major_name: "",
    major_age: "",
    major_position: "",
  });

  useEffect(() => {
    fetch("/api/major_players")
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.log(error));
  }, []);

  function handleDelete() {
    const major_num = Number(inputValues.major_num);
    fetch(`/api/major_players/${major_num}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log(response);
        // 성공적으로 삭제됨을 알리는 메시지 표시
        setPlayers(players.filter((player) => player.major_num !== major_num));
        setInputValues({
          major_num: "",
          major_name: "",
          major_age: "",
          major_position: "",
        });
      })
      .catch((error) => {
        console.log(error);
        // 오류 발생 시 오류 메시지 표시
      });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/api/major_players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValues),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        // 성공적으로 등록됨을 알리는 메시지 표시
        setPlayers([...players, inputValues]);
        setInputValues({
          major_num: "",
          major_name: "",
          major_age: "",
          major_position: "",
        });
      })
      .catch((error) => {
        console.log(error);
        // 오류 발생 시 오류 메시지 표시
      });
  }

  return (
    <div className="adminplayers">
      <h2 className="adminplayers_title">선수 등록</h2>
      <form onSubmit={handleSubmit}>
        <div className="adminplayers_enrollment">
          <label>
            <span>등번호: </span>
            <input
              className="adminplayers_input"
              type="text"
              name="major_num"
              value={inputValues.major_num}
              onChange={handleInputChange}
            />
          </label>

          <label>
            <span>이름: </span>
            <input
              className="adminplayers_input"
              type="text"
              name="major_name"
              value={inputValues.major_name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            <span>나이: </span>
            <input
              className="adminplayers_input"
              type="text"
              name="major_age"
              value={inputValues.major_age}
              onChange={handleInputChange}
            />
          </label>

          <label>
            <span>포지션: </span>
            <input
              className="adminplayers_input"
              type="text"
              name="major_position"
              value={inputValues.major_position}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button className="adminplayers_btn" type="submit">
            등록
          </button>
        </div>
      </form>
      <h2 className="adminplayers_title">선수 삭제</h2>
      <input
        type="text"
        name="major_num"
        placeholder="삭제할 선수 번호를 입력하세요"
        value={inputValues.major_num}
        onChange={handleInputChange}
      />
      <button className="adminplayers_btn1" onClick={handleDelete}>
        삭제
      </button>
      <h2 className="adminplayers_title">선수 목록</h2>
      <div className="adminplayers_list">
        <table className="adminplayers_table">
          <thead>
            <tr className="adminplayers_table_tr">
              <th>선수 번호</th>
              <th>선수 이름</th>
              <th>선수 나이</th>
              <th>선수 포지션</th>
              <th>방출</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr className="adminplayers_table_tr" key={player.major_num}>
                <td>{player.major_num}</td>
                <td>{player.major_name}</td>
                <td>{player.major_age}</td>
                <td>{player.major_position}</td>
                <td>
                  <button onClick={handleDelete(player.major_num)}>
                    <MdOutlineCancelPresentation />
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
