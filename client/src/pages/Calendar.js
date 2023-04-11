/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { format, addMonths, subMonths } from "date-fns";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays } from "date-fns";
import "../css/_style.scss";
import axios from "axios";
const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <div className="header row">
      <div className="col col-start">
        <span className="text">
          <span className="left_arrow">
            <Icon icon="bi:arrow-left-circle-fill" onClick={prevMonth} />{" "}
            {/* 이전 달로 이동하는 버튼 */}
          </span>
          <span className="text month">
            {format(currentMonth, "yyyy")}년 {format(currentMonth, "M")}월
            경기일정
          </span>

          <span className="right_arrow">
            <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth} />{" "}
            {/* 다음 달로 이동하는 버튼 */}
          </span>
        </span>
      </div>
    </div>
  );
};
const dayStyle = (day) => {
  if (day === "파이어폭스") {
    return { color: "rgb(192,255,0)" };
  }
};

const RenderDays = () => {
  // 요일 표시
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
    <div className="col" key={d}>
      {d}
    </div>
  ));

  return <div className="days row">{days}</div>;
};

const RenderCells = ({ currentMonth, selectedDate }) => {
  // 해당 월의 시작일과 마지막일, 시작일과 마지막일을 포함한 주의 시작일과 마지막일을 구함
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  // 스케줄 정보를 가져옴
  const [schedules, setSchedules] = useState({});

  useEffect(() => {
    // api를 통해 스케줄 정보를 가져옴
    axios.get("/api/schedules").then((res) => {
      // 날짜별 스케줄 정보를 객체로 저장
      setSchedules(
        res.data.reduce((acc, schedule) => {
          // 스케줄 날짜를 yyyy-MM-dd 형식으로 변환
          const date = format(new Date(schedule.schedule_date), "yyyy-MM-dd");
          // 해당 날짜에 스케줄 정보가 없으면 빈 배열 생성
          if (!acc[date]) {
            acc[date] = [];
          }
          // 해당 날짜에 스케줄 정보 추가
          acc[date].push(schedule);
          return acc;
        }, {})
      );
    });
  }, []);

  const rows = []; // 빈 배열 생성
  let days = []; // 빈 배열 생성
  let day = startDate; // day 변수에 startDate 할당

  while (day <= endDate) {
    // day가 endDate보다 작거나 같을 때까지 반복
    for (let i = 0; i < 7; i++) {
      // 7번 반복
      const formattedDate = format(day, "d"); // day를 "d" 형식으로 포맷팅하여 formattedDate 변수에 할당
      const daySchedules = schedules[format(day, "yyyy-MM-dd")] || []; // daySchedules 변수에 schedules 객체에서 해당 날짜의 일정을 가져온다. 만약 일정이 없다면 빈 배열을 할당한다.

      // 날짜별 스케줄 정보를 표시
      days.push(
        <div
          className={`col cell ${
            // 해당 월의 날짜가 아닌 경우 disabled 스타일 적용
            !isSameMonth(day, monthStart)
              ? "disabled"
              : // 선택된 날짜와 같은 경우 selected 스타일 적용
              isSameDay(day, selectedDate)
              ? "selected"
              : " "
          }`}
          key={day}
        >
          <span className="number">{formattedDate}</span>
          {daySchedules.map((schedule) => (
            <div
              key={schedule.schedule_id}
              className="schedule"
              style={dayStyle(schedule.schedule_place)}
            >
              <br />
              &nbsp;&nbsp;{schedule.schedule_time}
              <br />
              <br />
              vs &nbsp;
              {schedule.schedule_team}
              <br />
              {schedule.schedule_place === "파이어폭스"
                ? "월드 메르디앙 경기장"
                : schedule.schedule_team + " 홈 경기장"}
            </div>
          ))}
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    );
    days = [];
  }

  return <div className="body">{rows}</div>;
};

const Calendar = ({ onChange }) => {
  // 현재 월과 선택된 날짜를 상태로 관리
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    // 이전 월로 변경
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    // 다음 월로 변경
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <div className="calendar">
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <RenderDays />
      <RenderCells currentMonth={currentMonth} selectedDate={selectedDate} />
    </div>
  );
};

export default Calendar;
