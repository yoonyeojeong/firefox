import React from "react";
import "../css/Major_players.css";
import useFetch from "../hooks/useFetch.js";

function Major_players() {
  const [major] = useFetch("http://localhost:5000/api/major_players");

  return (
    <div className="major_players">
      {major &&
        major.map((p) => {
          return (
            <div key={p.major_num}>
              <p>Name: {p.major_name}</p>
              <p>Back Number: {p.major_num}</p>
              <p>Age: {p.major_age}</p>
              <p>Position: {p.major_position}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Major_players;