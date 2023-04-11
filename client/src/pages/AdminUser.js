import React from "react";
import "../css/AdminUser.css";
import useFetch from "../hooks/useFetch";

function AdminUser() {
  const [user] = useFetch("http://localhost:5000/api/users");
  return (
    <div className="adminuser">
      <h2>회원 관리</h2>

      <div className="adminuser_box1">
        <div className="adminuser_box_title">회원 정보 입력</div>
        <div className="adminuser_body">
          <form>
            <div className="adminuser_form">
              <label>
                이름:
                <input
                  type="text"
                  className="admin_control1"
                  id="name"
                  name="name"
                />
              </label>
              <br />
            </div>
            <div className="adminuser_form">
              <label>
                전화번호:
                <br />
                <input
                  type="text"
                  className="admin_control1"
                  id="phone"
                  name="phone"
                />
              </label>
            </div>

            <div className="adminuser_form">
              <label>
                이메일:
                <input
                  type="text"
                  className="admin_control1"
                  id="email"
                  name="email"
                />
              </label>
            </div>
            <button type="submit" className="adminuser_btn">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="adminuser_box2">
        <div className="adminuser_box_title">회원 명단 출력</div>
        <div className="adminuser_body">
          <table className="adminuser_tatle">
            <thead>
              <tr className="adminuser_tatle_tr">
                <th>회원번호</th>
                <th>ID</th>
                <th>이름</th>
                <th>전화번호</th>
                <th>이메일</th>
              </tr>
              {user &&
                user.map((item) => {
                  return (
                    <tr className="adminuser_tatle_tr" key={item.user_num}>
                      <td>{item.user_num}</td>
                      <td>{item.user_id}</td>
                      <td>{item.user_name}</td>
                      <td>
                        {item.phone_num_head}-{item.phone_num_middle}-
                        {item.phone_num_last}
                      </td>
                      <td>
                        {item.email}@{item.domain}
                      </td>
                    </tr>
                  );
                })}
            </thead>
            <tbody></tbody>
          </table>

          <form className="adminuser_form1">
            <button className="adminuser_btn">
              Count <span className="badge"></span>
            </button>

            <div className="adminuser_form1">
              <select className="admin_control2" name="skey">
                <option value="all">전체</option>
                <option value="name">이름</option>
                <option value="phone">전화번호</option>
                <option value="email">이메일</option>
              </select>
            </div>
            <div className="adminuser_form1">
              <input
                type="svalue"
                className="admin_control3"
                id="svalue"
                name="svalue"
              />
            </div>
            <button type="submit" className="adminuser_btn">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminUser;
