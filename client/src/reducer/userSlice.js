import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user_name: "",
    user_id: "",
    isLogin: null,
  },
  reducer: {
    // login 성공 시
    loginUser: (state, action) => {
      // name, id에 API값 받아오기
      state.user_name = action.payload.user_name;
      state.user_id = action.payload.user_id;
      // state 변화를 알림
      return state;
    },
    // login 실패 시
    clearUser: (state) => {
      // name, id 값을 비워줌
      state.user_name = "";
      state.user_id = "";
      // state 변화를 알림
      return state;
    },
  },
});

export const { loginUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
