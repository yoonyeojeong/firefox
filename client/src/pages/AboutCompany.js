import React from "react";
import "../css/AboutCompany.css";
import { Link } from "react-router-dom";

function AboutCompany() {
  return (
    <div className="aboutcompany">
      <div>
        <h4 id="aboutcompany_title">
          파이어폭스 그룹사를
          <br />
          소개합니다.
        </h4>
      </div>
      <div className="aboutCompany_width">
        <span>
          <div className="aboutcompany_div1">
            <table className="aboutcompany_table">
              <tr className="aboutcompany_tr">
                <th className="aboutcompany_th" colSpan="4">
                  제조/건설
                </th>
              </tr>

              <tr className="aboutcompany_tr">
                <td className="aboutcompany_td">
                  <Link to="">(주)KOSMO</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="https://www.samsung.com/sec/">삼성전자</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="https://www.tesla.com/ko_KR/">테슬라</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="https://www.kakaocorp.com/page/">KAKAO</Link>
                </td>
              </tr>
              <tr className="aboutcompany_tr">
                <td className="aboutcompany_td">
                  <Link to="https://www.samsungcnt.com/index.do">
                    삼성물산 주식회사
                  </Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">현대건설(주)</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">대림사업(주)</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">지에스건설(주)</Link>
                </td>
              </tr>
              <tr className="aboutcompany_tr">
                <td className="aboutcompany_td">
                  <Link to="">(주)대우건설</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">(주)포스코건설</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">롯데건설(주)</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">(주)한화건설</Link>
                </td>
              </tr>
              <tr className="aboutcompany_tr">
                <td className="aboutcompany_td">
                  <Link to="">마이크로소프트</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">애플</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">토요타</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">폭스바겐</Link>
                </td>
              </tr>
            </table>
          </div>
        </span>
        <span>
          <div className="aboutcompany_div2">
            <table className="aboutcompany_table">
              <tr className="aboutcompany_tr">
                <th className="aboutcompany_th" colspan="4">
                  금융/서비스/레저
                </th>
              </tr>

              <tr className="aboutcompany_tr">
                <td className="aboutcompany_td">
                  <Link to="">NH농협은행</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">수협은행</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">우리은행</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">신라호텔</Link>
                </td>
              </tr>
              <tr className="aboutcompany_tr">
                <td className="aboutcompany_td">
                  <Link to="">국민은행</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">기업은행</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">저축은행</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">한화호텔&리조트</Link>
                </td>
              </tr>
              <tr className="aboutcompany_tr">
                <td className="aboutcompany_td">
                  <Link to="">하나은행</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">새마을금고</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">코스모은행</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">콘레드서울</Link>
                </td>
              </tr>
              <tr className="aboutcompany_tr">
                <td className="aboutcompany_td">
                  <Link to="">신한은행</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">카카오뱅크</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">우체국</Link>
                </td>
                <td className="aboutcompany_td">
                  <Link to="">글레드여의도</Link>
                </td>
              </tr>
            </table>
          </div>
        </span>
      </div>
    </div>
  );
}

export default AboutCompany;
