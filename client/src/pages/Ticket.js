import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../css/common.css";
import "../css/reset.css";
import "../css/Ticket.css";
import "../css/main.css";

import Ticket_Modal from "../ticketPay/Payment/Payment_Ticket_Modal";

function Ticket() {
  // useState를 사용하여 open 상태를 변경한다. (open 일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const moveToTicketing = () => {
    navigate("/ticket/ticketing");
  };
  return (
    <div className="ticket_page">
      <h1>TICKET</h1>
      <div className="anounce_ment">
        <p>2023 시즌 파이어폭스</p>
        <br />
        <p> 홈경기 티켓 예매 안내</p>
      </div>
      <React.Fragment>
        <button onClick={openModal} className="reservation" type="button">
          예매하기
        </button>
        {/* header 부분에 텍스트를 입력한다. */}
        <Ticket_Modal open={modalOpen} close={closeModal} header="날짜 선택">
          {/*여기에 글쓰면 경기 날짜 선택 할 코드 쓰면 됨*/}
          <div className="ticketing_calendar">
            <table className="ticketing_table">
              <tr className="ticketing_tr">
                <th className="ticketing_th">경기 일시</th>
                <th className="ticketing_th">경기명</th>
                <th className="ticketing_th">경기장</th>
                <th className="ticketing_th">티켓 예매</th>
              </tr>
              <tr className="ticketing_tr">
                <td className="ticketing_td">경기 날짜</td>
                <td className="ticketing_td">한화 이글스 vs 파이어 폭스</td>
                <td className="ticketing_td">FireFox KosmoPark</td>
                <td className="ticketing_td">
                  <button className="ticketing_btn" onClick={moveToTicketing}>
                    선택
                  </button>
                </td>
              </tr>
              <tr className="ticketing_tr">
                <td className="ticketing_td">경기 날짜</td>
                <td className="ticketing_td">두산 베어스 vs 파이어 폭스</td>
                <td className="ticketing_td">FireFox KosmoPark</td>
                <td className="ticketing_td">
                  <button className="ticketing_btn" onClick={moveToTicketing}>
                    선택
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </Ticket_Modal>
      </React.Fragment>
      <div className="ticket_reserve">
        <table className="reserve_table">
          <tr className="reserve_tr">
            <td className="ticket_title" colspan="6">
              · 티켓예매
            </td>
          </tr>
          <tr className="reserve_tr">
            <th className="reserve_th">구 분</th>
            <th className="reserve_th">예매오픈</th>
            <th className="reserve_th">예매 수량</th>
            <th className="reserve_th">예매 마감</th>
            <th className="reserve_th">예매취소 기한</th>
            <th className="reserve_th">비 고</th>
          </tr>

          <tr className="reserve_tr">
            <td className="reserve_td">일반예매</td>
            <td className="reserve_td">경기 D-7 오전 11시</td>
            <td className="reserve_td">
              <p>1인/8매</p>
              <br />
              <p> (2회)</p>
            </td>
            <td className="reserve_td">경기시작 전</td>
            <td className="reserve_td">경기시작 2시간 전</td>
            <td className="reserve_td"> </td>
          </tr>
          <tr className="reserve_tr">
            <td className="reserve_td">선 예매</td>
            <td className="reserve_td" colspan="5">
              미 운영
            </td>
          </tr>
        </table>
      </div>

      <div className="reserve_place">
        <table className="reserve_table">
          <tr className="reserve_tr">
            <td className="ticket_title">· 예매처</td>
          </tr>
          <tr className="ticket_text_left">
            <th>&nbsp; 파이어폭스 홈페이지, 티켓링크(홈페이지, 앱)</th>
          </tr>
          <tr className="ticket_text_left">
            <td>
              &nbsp; ※ 현장 매표소 정상 운영 및 지류 티켓 발권 가능(무인 발권
              운영)
            </td>
          </tr>
        </table>
      </div>
      {/*  · 정규리그 티켓요금 - 일반석 */}
      <div className="league_fee_normal">
        <table className="fee_normal_table">
          <tr className="reserve_tr">
            <td className="ticket_title" colspan="6">
              · 정규리그 티켓요금 - 일반석
            </td>
            <td className="reserve_title_explain" colspan="4">
              * 휴일 기준 : 금, 토, 일, 공휴일 ( 단위 : 원 / 1인 기준 )
            </td>
          </tr>
          <tr className="fee_normal_tr">
            <th
              className="fee_normal_th"
              colspan="3"
              rowspan="2"
              id="left-line-none-th"
            >
              구 분
            </th>
            <th className="fee_normal_th" colspan="2">
              성 인
            </th>
            <th className="fee_normal_th" colspan="2">
              학 생
            </th>
            <th className="fee_normal_th" colspan="2">
              어린이
            </th>
            <th className="fee_normal_th">비 고</th>
          </tr>
          <tr className="fee_normal_tr">
            <th className="fee_normal_th">평일</th>
            <th className="fee_normal_th">휴일</th>
            <th className="fee_normal_th">평일</th>
            <th className="fee_normal_th">휴일</th>
            <th className="fee_normal_th">평일</th>
            <th className="fee_normal_th">휴일</th>
            <th className="fee_normal_th"></th>
          </tr>
          <tr className="fee_normal_tr">
            <td className="fee_normal_td" rowspan="6" id="left-line-none-td">
              <p>일</p>
              <br />
              <p>반</p>
              <br />
              <p>석</p>
            </td>
            <td className="fee_normal_td" rowspan="2">
              <p>내</p>
              <p>야</p>
            </td>
            <td className="fee_normal_td">내야지정석(1F)</td>
            <td className="fee_normal_td">11,000</td>
            <td className="fee_normal_td">14,000</td>
            <td className="fee_normal_td" rowspan="2">
              5,000
            </td>
            <td className="fee_normal_td">7,000</td>
            <td className="fee_normal_td" rowspan="2">
              3,000
            </td>
            <td className="fee_normal_td" rowspan="2">
              4,000
            </td>
            <td className="fee_normal_td" rowspan="2"></td>
          </tr>
          <tr className="fee_normal_tr">
            <td className="fee_normal_td">내야지정석(2F)</td>
            <td className="fee_normal_td">11,000</td>
            <td className="fee_normal_td">12,000</td>
            <td className="fee_normal_td">6,000</td>
          </tr>
          <tr className="fee_normal_tr">
            <td className="fee_normal_td" rowspan="2">
              <p>외</p>
              <p>야</p>
            </td>
            <td className="fee_normal_td">외야커플석</td>
            <td className="fee_normal_td" rowspan="2">
              9,000
            </td>
            <td className="fee_normal_td" rowspan="2">
              10,000
            </td>
            <td className="fee_normal_td" rowspan="2">
              4,000
            </td>
            <td className="fee_normal_td" rowspan="2">
              5,000
            </td>
            <td className="fee_normal_td" rowspan="2">
              2,000
            </td>
            <td className="fee_normal_td" rowspan="2">
              3,000
            </td>
            <td className="fee_normal_td" rowspan="2"></td>
          </tr>
          <tr className="fee_normal_tr">
            <td className="fee_normal_td">외야지정석</td>
          </tr>
          <tr className="fee_normal_tr">
            <td className="fee_normal_td" colspan="2" rowspan="2">
              기타(할인)
            </td>
            <td className="fee_normal_td" colspan="6" id="fee_normal_etc_1">
              &nbsp;복지, 경로, 다자녀 카드 소지자 : 50%
            </td>

            <td className="fee_normal_td" rowspan="2"></td>
          </tr>
          <tr className="fee_normal_tr">
            <td className="fee_normal_td" colspan="6" id="fee_normal_etc_2">
              &nbsp;키즈클럽 : 어린이 가입자 본인 외야지정석 무료입장
            </td>
          </tr>
        </table>
      </div>

      {/*  · 정규리그 티켓요금 - 특화석 */}
      <div className="ticket_reserve">
        <table className="reserve_table">
          <tr className="reserve_tr">
            <td className="ticket_title" colspan="4">
              · 정규리그 티켓요금 - 특화석
            </td>
            <td className="reserve_title_explain" colspan="2">
              * 휴일 기준 : 금, 토, 일, 공휴일 ( 단위 : 원 / 1인 기준 )
            </td>
          </tr>
          <tr className="reserve_tr">
            <th className="reserve_th" colspan="3">
              구 분
            </th>
            <th className="reserve_th">평 일</th>
            <th className="reserve_th">휴 일</th>
            <th className="reserve_th">비 고</th>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special_line_none" rowspan="20">
              특<br />
              <br />
              화<br />
              <br />
              석<br />
            </td>
            <td className="fee_special" rowspan="6">
              <p>중</p>
              <br />
              <p>앙</p>
            </td>
            <td className="fee_special">포수후면석</td>
            <td className="fee_special">45,000</td>
            <td className="fee_special">55,000</td>
            <td className="fee_special"></td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special">포수후면TV존</td>
            <td className="fee_special">50,000</td>
            <td className="fee_special">60,000</td>
            <td className="fee_special"></td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special">중앙탁자석</td>
            <td className="fee_special">28,000</td>
            <td className="fee_special">33,000</td>
            <td className="fee_special"></td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special">중앙탁자석A</td>
            <td className="fee_special">33,000</td>
            <td className="fee_special">35,000</td>
            <td className="fee_special"></td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special">중앙가족석</td>
            <td className="fee_special">
              25,000
              <br />
              (5인석 125,000)
            </td>
            <td className="fee_special">
              30,000
              <br />
              (5인석 150,000)
            </td>
            <td className="fee_special"></td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special">미니박스(1인)</td>
            <td className="fee_special">40,000</td>
            <td className="fee_special">45,000</td>
            <td className="fee_special">4,6,7,8인실</td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special" rowspan="8">
              <p>내</p>
              <br />
              <p>야</p>
            </td>
            <td className="fee_special">내야응원단석</td>
            <td className="fee_special">13,000</td>
            <td className="fee_special">16,000</td>
            <td className="fee_special"></td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special">내야탁자석</td>
            <td className="fee_special">25,000</td>
            <td className="fee_special">30,000</td>
            <td className="fee_special"></td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special">내야하단탁자석</td>
            <td className="fee_special">15,000</td>
            <td className="fee_special">18,000</td>
            <td className="fee_special"></td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special">
              중앙메디칼존
              <br />
              (내야커플석)
            </td>
            <td className="fee_special">
              22,000
              <br />
              (2인석 44,000)
            </td>
            <td className="fee_special">
              25,000
              <br />
              (2인석 50,000)
            </td>
            <td className="fee_special"></td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special">VIP커플석</td>
            <td className="fee_special">
              50,000
              <br />
              (2인석 100,000)
            </td>
            <td className="fee_special">
              60,000
              <br />
              (2인석 120,000)
            </td>
            <td className="fee_special"></td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special">덕아웃지정석</td>
            <td className="fee_special">12,000</td>
            <td className="fee_special">15,000</td>
            <td className="fee_special"></td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special">익사이팅존</td>
            <td className="fee_special">20,000</td>
            <td className="fee_special">25,000</td>
            <td className="fee_special"></td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special">익사이팅커플석</td>
            <td className="fee_special">
              20,000
              <br />
              (2인석 40,000)
            </td>
            <td className="fee_special">
              22,000
              <br />
              (2인석 44,000)
            </td>
            <td className="fee_special"></td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special" rowspan="5">
              <p>외</p>
              <br />
              <p>야</p>
            </td>
            <td className="fee_special">불펜지정석</td>
            <td className="fee_special">12,000</td>
            <td className="fee_special">15,000</td>
            <td className="fee_special"></td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special">외야라운지석</td>
            <td className="fee_special">
              20,000
              <br />
              (4인석 80,000 / 2인석 40,000)
            </td>
            <td className="fee_special">
              25,000
              <br />
              (4인석 100,000 / 2인석 50,000)
            </td>
            <td className="fee_special"></td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special">스테이인터뷰존</td>
            <td className="fee_special">
              30,000
              <br />
              (6인석 180,000)
            </td>
            <td className="fee_special">
              25,000
              <br />
              (6인석 210,000)
            </td>
            <td className="fee_special">신규좌석</td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special">잔디석</td>
            <td className="fee_special">
              9,000
              <br />
              (2인석 18,000 / 4인석 36,000)
            </td>
            <td className="fee_special">
              25,000
              <br />
              (2인석 20,000 / 4인석 40,000)
            </td>
            <td className="fee_special"></td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special">필드박스(1인)</td>
            <td className="fee_special" colspan="2">
              40,000
            </td>
            <td className="fee_special">8,10,15 인실</td>
          </tr>
          <tr className="reserve_tr">
            <td className="fee_special" colspan="2">
              스카이박스(1인)
            </td>
            <td className="fee_special" colspan="2">
              60,000
            </td>
            <td className="fee_special">10,15 인실</td>
          </tr>
        </table>
      </div>

      <div className="reserve_place">
        <table className="reserve_table">
          <tr className="reserve_tr">
            <td className="ticket_title">· 예매처</td>
          </tr>
          <tr className="ticket_text_left">
            <th>&nbsp; - 파이어폭스 홈페이지</th>
          </tr>
          <tr className="ticket_text_left">
            <th>&nbsp; - 티켓링크 (홈페이지/앱)</th>
          </tr>
          <tr className="ticket_text_left">
            <td>
              &nbsp; ※ 현장 매표소 정상 운영 및 지류 티켓 발권 가능(무인 발권
              운영)
            </td>
          </tr>
        </table>
      </div>

      <div className="reserve_place">
        <table className="reserve_table">
          <tr className="reserve_tr">
            <td className="ticket_title">· 관람안내</td>
          </tr>
          <tr className="ticket_text_left">
            <th>&nbsp; - 현장 매표소 정상 운영</th>
          </tr>
          <tr className="ticket_text_left">
            <th>&nbsp; - 좌석 내 음식물 취식 가능</th>
          </tr>
        </table>
      </div>

      <div className="reserve_place">
        <table className="reserve_table">
          <tr className="reserve_tr">
            <td className="ticket_title">· 키즈클럽 (외야지정석 무료입장)</td>
          </tr>
          <tr className="ticket_text_left">
            <th>&nbsp; - 종합안내소에서 파이어폭스 앱 혹은 멤버십 카드로</th>
          </tr>
          <tr className="ticket_text_left">
            <th>
              &nbsp;&nbsp;&nbsp; 확인 후 무료티켓 수령(키즈클럽 어린이 본인
              한정)
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Ticket;
