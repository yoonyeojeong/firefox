import "./css/App.css";
import Header from "./Header";
import Article from "./pages/Article";
import Footer from "./Footer";
import AboutTeam from "./pages/AboutTeam";
import AboutCompany from "./pages/AboutCompany";
import AboutHistory from "./pages/AboutHistory";
import AboutPark from "./pages/AboutPark";
import AboutUs from "./pages/AboutUs";
import MajorPlayers from "./pages/Major_players";
import MinorPlayers from "./pages/Minor_players";
import Major from "./pages/Major";
import Minor from "./pages/Minor";
import Notice from "./pages/Notice";
import Board from "./pages/Board";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
import Ticket from "./pages/Ticket";
import Login from "./pages/Login";
import JoinUs from "./pages/JoinUs";
import FindId from "./pages/FindId";
import FindPw from "./pages/FindPw";
import MyInfo from "./pages/MyInfo";
import NeedLogin from "./pages/NeedLogin";
import Checkout from "./pages/Checkout";
import Sidemenu from "./pages/Sidemenu";
import AdminSidemenu from "./pages/AdminSidemenu";
import AdminQnA from "./pages/AdminQnA";
import AdminPlayers from "./pages/AdminPlayers";
import AdminSchedule from "./pages/AdminSchedule";
import AdminGoods from "./pages/AdminGoods";
import AdminUser from "./pages/AdminUser";
import AdminNotice from "./pages/AdminNotice";
import AdminBoard from "./pages/AdminBoard";
import AdminPhoto from "./pages/AdminPhoto";
import Whoops404 from "./pages/Whoops404";
import "./css/reset.css";
import "./css/common.css";
import "./css/main.css";
import { useEffect } from "react";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("Current User : ", user);

      // 로그인 상태라면
      if (authUser) {
        console.log("authUser있음 실행");
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
      // 로그인상태가 아니라면
      else {
        console.log("authUser없음 실행");
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
      console.log("dispatch.user = " + user);
    });
  }, [user]);

  return (
    <BrowserRouter>
      <div className="App">
        {/* Home 화면*/}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Article />
                <Footer />
              </>
            }
          ></Route>

          {/* 구단소개 화면*/}
          <Route
            path="/aboutTeam/aboutTeam"
            element={
              <>
                <Header />
                <AboutTeam />
                <Footer />
              </>
            }
          ></Route>

          {/* 그룹사소개 화면*/}
          <Route
            path="/aboutTeam/aboutCompany"
            element={
              <>
                <Header />
                <AboutCompany />
                <Footer />
              </>
            }
          ></Route>

          {/* HISTORY 화면*/}
          <Route
            path="/aboutTeam/aboutHistory"
            element={
              <>
                <Header />
                <AboutHistory />
                <Footer />
              </>
            }
          ></Route>

          {/* 야구장소개 화면*/}
          <Route
            path="/aboutTeam/aboutPark"
            element={
              <>
                <Header />
                <AboutPark />
                <Footer />
              </>
            }
          ></Route>

          {/* 기획의도 화면*/}
          <Route
            path="/aboutTeam/aboutUs"
            element={
              <>
                <Header />
                <AboutUs />
                <Footer />
              </>
            }
          ></Route>

          {/* 1군 선수 화면*/}
          <Route
            path="/players/major_players"
            element={
              <>
                <Header />
                <MajorPlayers />
                <Footer />
              </>
            }
          ></Route>

          {/* 2군 선수 화면*/}
          <Route
            path="/players/minor_players"
            element={
              <>
                <Header />
                <MinorPlayers />
                <Footer />
              </>
            }
          ></Route>

          {/* 1군 일정 화면*/}
          <Route
            path="/game/major"
            element={
              <>
                <Header />
                <Major />
                <Footer />
              </>
            }
          ></Route>

          {/* 2군 일정 화면*/}
          <Route
            path="/game/minor"
            element={
              <>
                <Header />
                <Minor />
                <Footer />
              </>
            }
          ></Route>

          {/* 공지사항*/}
          <Route
            path="/fan/notice"
            element={
              <>
                <Header />
                <Notice />
                <Footer />
              </>
            }
          ></Route>

          {/* 자유게시판 */}
          <Route
            path="/fan/board"
            element={
              <>
                <Header />
                <Board />
                <Footer />
              </>
            }
          ></Route>

          {/* 갤러리 */}
          <Route
            path="/fan/gallery"
            element={
              <>
                <Header />
                <Gallery />
                <Footer />
              </>
            }
          ></Route>

          {/* SHOP */}
          <Route
            path="/shop"
            element={
              <>
                <Header />
                <Shop />
                <Footer />
              </>
            }
          ></Route>

          {/* Ticket */}
          <Route
            path="/ticket"
            element={
              <>
                <Header />
                <Ticket />
                <Footer />
              </>
            }
          ></Route>

          {/* LOGIN */}
          <Route
            path="/login"
            element={
              <>
                <Header />
                <Login />
                <Footer />
              </>
            }
          ></Route>

          {/* JOIN US */}
          <Route
            path="/joinus"
            element={
              <>
                <Header />
                <JoinUs />
                <Footer />
              </>
            }
          ></Route>

          {/* FindId */}
          <Route
            path="/findid"
            element={
              <>
                <Header />
                <FindId />
                <Footer />
              </>
            }
          ></Route>

          {/* FindPw */}
          <Route
            path="/findpw"
            element={
              <>
                <Header />
                <FindPw />
                <Footer />
              </>
            }
          ></Route>

          {/* MyPage */}
          <Route
            path="/mypage/myinfo"
            element={
              user ? (
                <>
                  <Header />
                  <div className="mypage_layout">
                    <Sidemenu />
                    <MyInfo />
                  </div>

                  <Footer />
                </>
              ) : (
                <>
                  <Header />
                  <NeedLogin />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* 장바구니 페이지 */}
          <Route
            path="/mypage/checkout"
            element={
              user ? (
                <>
                  <Header />
                  <div className="mypage_layout">
                    <Sidemenu />
                    <Checkout />
                  </div>
                  <Footer />
                </>
              ) : (
                <>
                  <Header />
                  <NeedLogin />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* AdminQnA */}
          <Route
            path="/admin/qna"
            element={
              user ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminQnA />
                </div>
              ) : (
                <>
                  <Header />
                  <NeedLogin />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* AdminPlayers (선수관리) */}
          <Route
            path="/admin/players"
            element={
              user ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminPlayers />
                </div>
              ) : (
                <>
                  <Header />
                  <NeedLogin />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* AdminSchedule (일정관리) */}
          <Route
            path="/admin/schedule"
            element={
              user ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminSchedule />
                </div>
              ) : (
                <>
                  <Header />
                  <NeedLogin />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* AdminGoods (굿즈관리) */}
          <Route
            path="/admin/goods"
            element={
              user ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminGoods />
                </div>
              ) : (
                <>
                  <Header />
                  <NeedLogin />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* AdminUser (회원정보보기) */}
          <Route
            path="/admin/user"
            element={
              user ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminUser />
                </div>
              ) : (
                <>
                  <Header />
                  <NeedLogin />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* AdminNotice (공지사항등록) */}
          <Route
            path="/admin/notice"
            element={
              user ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminNotice />
                </div>
              ) : (
                <>
                  <Header />
                  <NeedLogin />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* AdminBoard (게시판관리) */}
          <Route
            path="/admin/board"
            element={
              user ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminBoard />
                </div>
              ) : (
                <>
                  <Header />
                  <NeedLogin />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* AdminPhoto (사진등록) */}
          <Route
            path="/admin/photo"
            element={
              user ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminPhoto />
                </div>
              ) : (
                <>
                  <Header />
                  <NeedLogin />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* Whoops404 */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Whoops404 />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
