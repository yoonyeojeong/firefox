import { createSlice } from "@reduxjs/toolkit";
// import setNumber from "./actions/seatNumActions";

export const seatSlice = createSlice({
  // 좌석 정보를 담는 객체
  name: "seat",
  // 초기 상태값
  initialState: {
    val1: "", // 첫번째 선택 값
    val2: "", // 두번째 선택 값
    val3: "", // 세번째 선택 값
    seatGrade: "", // 좌석 등급
    seatName: "", // 좌석 이름
    seatNum: "", // 좌석 번호
    price: "", // 좌석 가격
    number: 0, // 선택한 좌석 수
    calculatePrice: 0, // 계산된 가격
    ground: "FIREFOX HOME 경기장", // 경기장 이름
    schedule_id: "",
    schedule_team: "",
    schedule_date: "",
    schedule_place: "",
    schedule_time: "",
  },
  reducers: {
    setVal1: (state, action) => {
      state.val1 = action.payload;
      return state;
    },
    setVal2: (state, action) => {
      state.val2 = action.payload;
      return state;
    },
    setVal3: (state, action) => {
      state.val3 = action.payload;
      return state;
    },
    setSeat: (state, action) => {
      state.seatGrade = action.payload.seatGrade;
      state.seatName = action.payload.seatName;
      state.seatNum = action.payload.seatNum;
      state.price = action.payload.price;
      return state;
    },
    setCalculatePrice: (state, action) => {
      state.calculatePrice = action.payload;
      return state;
    },
    getPriceValue: (state, action) => {
      state.price = action.payload;
      return state;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
      return state;
    },
    setGround: (state) => {
      state.ground = "FIREFOX HOME 경기장";
      return state;
    },
    setInitialState: (state) => {
      // 초기 상태값 설정
      state.val1 = "";
      state.val2 = "";
      state.val3 = "";
      state.seatGrade = "";
      state.seatName = "";
      state.seatNum = "";
      state.price = "";
      state.number = 0;
      state.calculatePrice = 0;
      state.ground = "FIREFOX HOME 경기장";
      // 초기 상태값 반환
      return state;
    },
    setSchedule: (state, action) => {
      state.schedule_id = action.payload.schedule_id;
      state.schedule_date = action.payload.schedule_date;
      state.schedule_time = action.payload.schedule_time;
      state.schedule_team = action.payload.schedule_team;
      state.schedule_place = action.payload.schedule_place;

      return state;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(setNumber, (state, action) => {
  //     state.seat_number = action.payload; // action.payload 값을 상태에 저장
  //   });
  // },
});
export const {
  setVal1,
  setVal2,
  setVal3,
  setSeat,
  setCalculatePrice,
  getPriceValue,
  setNumber,
  setGround,
  setInitialState,
  setSchedule,
} = seatSlice.actions;

export default seatSlice.reducer;
