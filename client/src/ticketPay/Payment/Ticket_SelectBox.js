import React, { useState } from "react";

function Ticket_SelectBox() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedValue(e.target.value);
  };

  return (
    <select value={selectedValue} onChange={handleChange}>
      <option value="">인원 수</option>
      <option value="1"> 1</option>
      <option value="2"> 2</option>
      <option value="3"> 3</option>
      <option value="4"> 4</option>
      <option value="5"> 5</option>
      <option value="6"> 6</option>
      <option value="7"> 7</option>
      <option value="8"> 8</option>
      <option value="9"> 9</option>
    </select>
  );
}

export default Ticket_SelectBox;
