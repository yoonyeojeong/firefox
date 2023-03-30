import React, { useState } from "react";
import "../css/JoinUs.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function JoinUs() {
  const [confirm_pw, setConfirm_pw] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_id: "",
    user_pw: "",
    user_name: "",
    gender: "",
    birthday: "",
    email: "",
    domain: "",
    phone_num_head: "",
    phone_num_middle: "",
    phone_num_last: "",
    user_address: "",
  });

  const addUser = () => {
    const url = "/api/users";
    const newFormData = new FormData();

    newFormData.append("user_id", formData.user_id);
    newFormData.append("user_pw", formData.user_pw);
    newFormData.append("user_name", formData.user_name);
    newFormData.append("gender", formData.gender);
    newFormData.append("birthday", formData.birthday);
    newFormData.append("email", formData.email);
    newFormData.append("domain", formData.domain);
    newFormData.append("phone_num_head", formData.phone_num_head);
    newFormData.append("phone_num_middle", formData.phone_num_middle);
    newFormData.append("phone_num_last", formData.phone_num_last);
    newFormData.append("user_address", formData.user_address);

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    return axios.post(url, newFormData, config);
  };

  const JoinUsForm = (e) => {
    if (window.confirm("회원가입을 완료하시겠습니까?")) {
      e.preventDefault();
      addUser().then((res) => {
        console.log(res.data);
      });
      setFormData({
        user_id: "",
        user_pw: "",
        user_name: "",
        gender: "",
        birthday: "",
        email: "",
        domain: "",
        phone_num_head: "",
        phone_num_middle: "",
        phone_num_last: "",
        user_address: "",
      });
      alert("회원가입이 완료되었습니다.");
      navigate("/");
    } else {
      alert("회원가입이 취소되었습니다.");
    }
  };
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="join_us">
      <h1 className="join_us_title">회원가입</h1>
      <h4>파이어폭스의 회원이 되어주세요!</h4>
      <form onSubmit={JoinUsForm}>
        {/* 아이디 */}
        <div className="join_us_user_id">
          <p>아이디</p>
          <input
            className="join_us_form"
            type="text"
            name="user_id"
            value={formData.user_id}
            placeholder="  ID"
            onChange={handleInputChange}
          />
        </div>
        {/* 비밀번호 */}
        <div className="join_us_user_pw">
          <p>비밀번호</p>
          <input
            className="join_us_form"
            type="password"
            name="user_pw"
            value={formData.user_pw}
            placeholder="  Password"
            onChange={handleInputChange}
          />
        </div>
        {/* 비밀번호 확인 */}
        <div className="join_us_user_pw">
          <p>비밀번호 확인</p>
          <input
            className="join_us_form"
            type="password"
            placeholder="  Password"
            value={confirm_pw}
            onChange={(e) => setConfirm_pw(e.target.value)}
          />
        </div>
        {/* 비밀번호 확인 메세지 */}
        {formData.user_pw === confirm_pw && confirm_pw && formData.user_pw ? (
          <p className="temp1">비밀번호가 일치합니다</p>
        ) : (
          <p className="temp1">비밀번호가 일치하지않습니다.</p>
        )}
        {/* 회원이름 */}
        <div className="join_us_user_name">
          <p>이름</p>
          <input
            className="join_us_form"
            type="text"
            name="user_name"
            value={formData.user_name}
            placeholder="  ex) 홍길동"
            onChange={handleInputChange}
          />
        </div>
        {/* 성별 */}
        <div className="join_us_user_gender">
          <p>성별</p>
          <ul>
            <li>
              <input
                className="join_radio"
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleInputChange}
                defaultChecked={true}
              />
              &nbsp;&nbsp;남성 &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                className="join_radio"
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleInputChange}
              />
              &nbsp;&nbsp;여성
            </li>
          </ul>
        </div>
        {/* 회원 생년월일 */}
        <div className="join_us_user_bd">
          <p>생년월일</p>
          <input
            className="join_us_form"
            type="text"
            name="birthday"
            value={formData.birthday}
            placeholder=" 6자리로 입력해주세요.  ex) 860101"
            onChange={handleInputChange}
          />
        </div>
        {/* 회원 이메일 */}
        <div className="join_us_user_email">
          <p>이메일</p>
          <div onChange={handleInputChange}>
            <input
              className="join_us_form_e"
              type="text"
              name="email"
              value={formData.email}
            />
            &nbsp;&nbsp;@&nbsp;&nbsp;
            <select
              className="join_us_form_e"
              name="domain"
              value={formData.domain}
              onChange={handleInputChange}
            >
              <option value="">선택</option>
              <option value="naver.com">naver.com</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="daum.net">daum.net</option>
              <option value="gmail.com">gmail.com</option>
            </select>
          </div>
        </div>
        {/* 회원 전화번호 */}
        <div className="join_us_user_num">
          <p>전화번호</p>
          <div>
            <select
              className="join_us_form_num"
              name="phone_num_head"
              value={formData.phone_num_head}
              onChange={handleInputChange}
            >
              <option value="">선택하기</option>
              <option value="010">010</option>
              <option value="011">011</option>
            </select>
            &nbsp;&nbsp;-&nbsp;&nbsp;
            <input
              className="join_us_form_num"
              type="text"
              name="phone_num_middle"
              value={formData.phone_num_middle}
              onChange={handleInputChange}
            />
            &nbsp;&nbsp;-&nbsp;&nbsp;
            <input
              className="join_us_form_num"
              type="text"
              name="phone_num_last"
              value={formData.phone_num_last}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* 회원 주소 */}
        <div className="join_us_user_address">
          <p>주소</p>
          <input
            className="join_us_form"
            type="text"
            name="user_address"
            value={formData.user_address}
            onChange={handleInputChange}
          />
        </div>
        <div className="div_button1">
          <button type="submit" className="button1">
            회원가입 하기
          </button>
        </div>
      </form>
      <br />
      <div className="joinus_button">
        <span className="login_txt_q">
          로그인 화면으로 돌아가고 싶으신가요?&nbsp;&nbsp;&nbsp;
        </span>
        <Link to="/joinus">
          <button className="button2" type="button">
            LOGIN
          </button>
        </Link>
      </div>
    </div>
  );
}
export default JoinUs;
