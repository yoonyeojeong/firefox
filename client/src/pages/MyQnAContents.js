import React from "react";
import "../css/MyQnAContents.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function MyQnAContents() {
  const navigate = useNavigate();

  const tomyQnA = () => {
    navigate("/mypage/myQnA");
  };
  return (
    <div className="myQnAcontents">
      <div className="myQnAcontents_box">
        <div className="myQnAcontents_form">
          <h2 className="myQnAcontents_title">문의사항 </h2>
          <span className="myQnAcontents_span">작성일&nbsp;&nbsp;&nbsp;</span>
          <span className="myQnAcontents_span">|</span>
          <span className="myQnAcontents_span">처리상태&nbsp;&nbsp;&nbsp;</span>
          <hr className="myQnAcontents_hr1" />
          <h1 className="myQnAcontents_h1">회원이 쓴 문의 제목줄</h1>
          <p className="myQnAcontents_p">
            아니 여기 야구공이 왜 이지랄로 와요? 1개 시켰더니 100개가 왔잖아요
            나를 무시하는건가요??? 뭐예요?? 당장 구단주한테 사과하라고 전하세요
            세상에 정말 기가 맥혀서 ;; 그리고 배송은 왜 이렇게 빨리와요"??? 무슨
            시키고 2시간 만에 와요????
          </p>
          <hr className="myQnAcontents_hr1" />
          <h1 className="myQnAcontents_h1">관리자 답변</h1>
          <p className="myQnAcontents_p">
            안녕하세요 호갱님^^ 먼저 저희 파이어폭스읭 ㅑ구공을 구매해주셔서
            감사합니다 시킨것보다 많이 드렷으면 감사한줄 아시고요 ㅎㅎ
            누군가지고 싶어도 돈 없어서 못사요 ㅎㅎ 그리고 배송 빨리한건
            칭찬해주셔야죠~~~
          </p>
          <hr className="myQnAcontents_hr2" />
          <div className="myQnAcontents_form">
            <button onClick={tomyQnA} className="myQnAcontents_btn">
              목록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyQnAContents;
