import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/AdminSchedule.css";

function AdminSchedule() {
  const [schedules, setSchedules] = useState([]);
  const [formData, setFormData] = useState({
    schedule_id: "",
    schedule_date: "",
    schedule_time: "",
    schedule_place: "",
    schedule_team: "",
  });

  useEffect(() => {
    axios.get("/api/schedules").then((response) => {
      // 날짜 오름차순으로 정렬
      const sortedSchedules = response.data.sort((a, b) => {
        const dateA = new Date(a.schedule_date);
        const dateB = new Date(b.schedule_date);
        return dateA - dateB;
      });
      setSchedules(sortedSchedules);
    });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/api/schedules", formData).then((response) => {
      console.log(response);
      setSchedules((prevSchedules) => [...prevSchedules, formData]);
      setFormData({
        schedule_id: "",
        schedule_date: "",
        schedule_time: "",
        schedule_place: "",
        schedule_team: "",
      });
    });
  };

  const handleDelete = (schedule_id) => {
    axios
      .delete("/api/schedules/" + schedule_id)
      .then((response) => {
        if (response.status === 200) {
          setSchedules(
            schedules.filter((schedule) => schedule.schedule_id !== schedule_id)
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="adminschedule">
      <h2>일정 관리</h2>

      <div className="adminschedule_box1">
        <div className="adminschedule_box_title">일정 입력</div>
        <div className="adminschedule_body">
          <form onSubmit={handleSubmit}>
            <div className="adminschedule_form">
              <label>
                <span>경기날짜 :</span>
                <span className="">
                  <input
                    type="date"
                    name="schedule_date"
                    value={formData.schedule_date}
                    onChange={handleInputChange}
                  />
                </span>
              </label>
              <br />
              <label>
                <span>경기시간 :</span>
                <span>
                  <input
                    type="time"
                    name="schedule_time"
                    value={formData.schedule_time}
                    onChange={handleInputChange}
                  />
                </span>
              </label>
            </div>

            <div className="admin_control">
              <label>
                상대팀 :
                <br />
                <select
                  className="adminschedule_selet"
                  name="schedule_team"
                  value={formData.schedule_team}
                  onChange={handleInputChange}
                >
                  <option value="">선택</option>
                  <option value="SSG">SSG</option>
                  <option value="KT">KT</option>
                  <option value="NC">NC</option>
                  <option value="LG">LG</option>
                  <option value="기아">기아</option>
                  <option value="두산">두산</option>
                  <option value="삼성">삼성</option>
                  <option value="롯데">롯데</option>
                  <option value="한화">한화</option>
                </select>
              </label>
            </div>

            <div className="adminschedule_form">
              <label>
                장소(구장) :
                <br />
                <select
                  className="adminschedule_selet"
                  name="schedule_place"
                  value={formData.schedule_place}
                  onChange={handleInputChange}
                >
                  <option value="">선택</option>
                  <option value="파이어폭스">홈 경기장</option>
                  <option value="Enemy">상대팀 경기장</option>
                </select>
              </label>
            </div>
            <button type="submit" className="adminschedule_btn">
              일정추가
            </button>
          </form>
        </div>
        <table className="adminschedule_table">
          <thead>
            <tr className="adminschedule_th">
              <th>경기날짜</th>
              <th>시간</th>
              <th>상대팀</th>
              <th>장소(구장)</th>
              <th>삭제</th>
            </tr>
            {schedules &&
              schedules
                .sort(
                  (a, b) =>
                    new Date(a.schedule_date) - new Date(b.schedule_date)
                )
                .map((schedule) => (
                  <tr className="adminschedule_td" key={schedule.schedule_id}>
                    <td>
                      {new Date(schedule.schedule_date).toLocaleDateString(
                        "ko-KR"
                      )}
                    </td>
                    <td>{schedule.schedule_time}</td>
                    <td>{schedule.schedule_team}</td>
                    <td>{schedule.schedule_place}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(schedule.schedule_id)}
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                ))}
          </thead>
        </table>
      </div>
    </div>
  );
}

export default AdminSchedule;
