import React from "react";
import "../css/LoginModal.css";

const LoginModal = (props) => {
  const { open, close } = props;

  return (
    <div className={open ? "Login_openModal Login_modal" : "Login_modal"}>
      {open ? (
        <section>
          <main className="Login_Modal_main">{props.children}</main>
          <footer>
            <button className="Login_Modal_close" onClick={close}>
              닫기
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default LoginModal;
