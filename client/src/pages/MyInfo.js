import React from "react";
import "../css/common.css";
import "../css/reset.css";
import "../css/MyInfo.css";
import "../css/main.css";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../components/StateProvider";
import { auth } from "../firebase";

function MyInfo() {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const repass = () => {
    alert("비밀번호가 변경되었습니다. 다시 로그인하세요.");
    // 로그아웃 함수자리
    auth.signOut();
    navigate("/");
  };
  const rename = () => {
    alert("이름 바꾸지마");
  };

  return (
    <div className="myinfo">
      <div className="myinfo_box">
        <p>회원정보 수정</p>
        <table className="myinfo_content_box">
          <tr>
            <td>이메일변경</td>
            <td className="myinfo_txt_left" colspan="2">
              cjck12@naver.com
              <button className="myinfo_button">이메일변경</button>
            </td>
          </tr>
          <tr>
            <td>이름</td>
            <td className="myinfo_txt_left" colspan="2">
              윤여정
              <button className="myinfo_button" onClick={rename}>
                개명하셨다면? 이름변경
              </button>
            </td>
          </tr>
          <tr>
            <td>휴대폰번호</td>
            <td className="myinfo_txt_left" colspan="2">
              01032568310
              <button className="myinfo_button">휴대폰 번호 변경</button>
            </td>
          </tr>
          <tr>
            <td rowspan="3">비밀번호 변경</td>
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
              <button className="myinfo_button" onClick={repass}>
                비밀번호 변경
              </button>
            </td>
          </tr>
          <tr>
            <td>배송지</td>
            <td className="myinfo_txt_left" colspan="2">
              주소지 입력 칸
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyInfo;
