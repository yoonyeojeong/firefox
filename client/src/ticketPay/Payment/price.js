// price.js
export const calculatePrice = (val1, val2, val3, number, seat) => {
  const selectedSeat = seat.seatNum.find(
    (el) => el.seatGrade === val1 && el.seatName === val2 && el.seatNum === val3
  );
  if (selectedSeat) {
    return parseInt(selectedSeat.price) * parseInt(number);
  }
  return 0;
};
