import React, { useState } from "react";
import "../css/MyInfo.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import axios from "axios";

function MyInfo({ user_id }) {
  const [user] = useFetch("http://localhost:5000/api/user/" + user_id);
  const navigate = useNavigate();
  const repass = () => {
    alert("비밀번호가 변경되었습니다. 다시 로그인하세요.");
    // 로그아웃 함수자리
    navigate("/");
  };
  const [modifyUser, setModifyUser] = useState({
    email: "",
    domain: "",
    user_name: "",
    phone_num_head: "",
    phone_num_middle: "",
    phone_num_last: "",
    user_pw: "",
    user_address: "",
  });

  const handleInputChange = (e) => {
    setModifyUser({ ...modifyUser, [e.target.name]: e.target.value });
  };
  const [changeEmailState, setChangeEmailState] = useState(false);
  const rename = (e) => {
    e.preventDefault();
    alert("바꾸지마");
  };

  const handleSubmit = () => {};

  return (
    <div className="myinfo">
      <div className="myinfo_box">
        <form onSubmit={handleSubmit}>
          <p>회원정보 수정</p>
          <table className="myinfo_content_box">
            <tbody>
              <tr>
                <td>이메일변경</td>
                <td className="myinfo_txt_left" colSpan="2">
                  {changeEmailState ? (
                    <input
                      type="text"
                      name="email"
                      value={modifyUser.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    `${user && user[0].email}@${user && user[0].domain}`
                  )}
                  <button className="myinfo_button" onClick={(e) => rename(e)}>
                    이메일변경
                  </button>
                </td>
              </tr>
              <tr>
                <td>이름</td>
                <td className="myinfo_txt_left" colSpan="2">
                  {user && user[0].user_name}
                  <button className="myinfo_button" onClick={(e) => rename(e)}>
                    개명하셨다면? 이름변경
                  </button>
                </td>
              </tr>
              <tr>
                <td>휴대폰번호</td>
                <td className="myinfo_txt_left" colSpan="2">
                  {user && user[0].phone_num_head}-
                  {user && user[0].phone_num_middle}-
                  {user && user[0].phone_num_last}
                  <button className="myinfo_button" onClick={(e) => rename(e)}>
                    휴대폰 번호 변경
                  </button>
                </td>
              </tr>
              <tr>
                <td rowSpan="3">비밀번호 변경</td>
                <td className="myinfo_txt_left">현재 비밀번호</td>
                <td className="myinfo_txt_left">
                  <input type="password" />
                </td>
              </tr>
              <tr>
                <td className="myinfo_txt_left" id="myinfo_txt_top1">
                  새 비밀번호
                </td>
                <td className="myinfo_txt_left">
                  <input type="password" />
                  <br />
                  ※ 영문/숫자/특수문자 2가지 이상 조합 (8~20자)
                  <br />※ 3개 이상 연속되거나 동일한 문자/숫자 제외
                </td>
              </tr>
              <tr>
                <td className="myinfo_txt_left" id="myinfo_txt_top2">
                  비밀번호 다시 입력
                </td>
                <td className="myinfo_txt_left">
                  <input type="password" />
                  <br />※ 확인을 위해 새 비밀번호를 다시 입력해주세요
                  <br />
                  <button className="myinfo_button" onClick={(e) => rename(e)}>
                    비밀번호 변경
                  </button>
                </td>
              </tr>
              <tr>
                <td>배송지</td>
                <td className="myinfo_txt_left" colSpan="2">
                  {user && user[0].user_address}
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="button1">
            수정하기
          </button>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="button1"
            onClick={(user_id) => {
              if (window.confirm("정말로 탈퇴하시겠습니까?")) {
                const url = "/api/user/" + user_id;
                fetch(url, {
                  method: "DELETE",
                });
                alert("회원탈퇴가 완료되었습니다.");
                axios({
                  url: "http://localhost:5000/logout",
                  method: "POST",
                  withCredentials: true,
                }).then((result) => {
                  if (result.status === 200) {
                    window.open("/", "_self");
                  }
                });
                navigate("/");
              } else {
                alert("회원탈퇴가 취소되었습니다.");
              }
            }}
          >
            회원탈퇴
          </button>
        </form>
      </div>
    </div>
  );
}

export default MyInfo;
