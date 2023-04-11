// calculatePrice 함수 선언
export const calculatePrice = (V1, V2, V3, number, seat) => {
  // 선택된 좌석 찾기
  const selectedSeat = seat.seatNum.find(
    (el) => el.seatGrade === V1 && el.seatName === V2 && el.seatNum === V3
  );
  // 선택된 좌석이 있으면 가격 계산
  if (selectedSeat) {
    return parseInt(selectedSeat.price) * parseInt(number);
  }
  // 선택된 좌석이 없으면 0 반환
  else {
    return 0;
  }
};
