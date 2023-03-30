import React from "react";
import "../css/Major_players.css";
import useFetch from "../hooks/useFetch.js";

function Major_player({ num, name, age, position, major_img }) {

  return (
    <div className="major_num">
      {num}
      <img src={major_img} alt="" />
      <p>{name}</p>
      <p>{age}</p>
      <p>{position}</p>
    </div>
  );
}

function Major_players() {
  const [major] = useFetch("http://localhost:5000/api/major_players");

  return (
    <div className="Major_player">
      {major &&
        major.map((p) => {
          return (
            <Major_player
              key={p.major_num}
              name={p.major_name}
              num={p.major_num}
              age={p.major_age}
              position={p.major_position} />
          );
        })}
    </div>
  );
}

export default Major_players;