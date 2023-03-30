import React from "react";
import "../../css/Payment_Ticket_Modal.css";
// import { useNavigate } from "react-router";

const Ticket_Modal = (props) => {
  // 열기 닫기, 모달 헤더 텍스트를 부모로 부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성 된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header className="Modal_header">
            {header}
            <button className="clase" onClick={close}>
              &times;
            </button>
          </header>
          <main className="Modal_main">{props.children}</main>
          <footer>
            <button className="close" onClick={close}>
              닫기
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Ticket_Modal;
