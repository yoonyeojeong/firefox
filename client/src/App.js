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
import NoticeDetail from "./pages/NoticeDetail";
import Board from "./pages/Board";
import BoardPost from "./pages/BoardPost";
import BoardContents from "./pages/BoardContents";
import BoardSearch from "./pages/BoardSearch";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
import ProductDetail from "./components/Productdetail";
import Ticket from "./pages/Ticket";
import Payment from "./ticketPay/Payment/Pages/RadyPayment";
import Ticketing from "../src/pages/Ticketing";
import QnA from "./pages/QnA";
import MyQnA from "./pages/MyQnA";
import MyQnAContents from "./pages/MyQnAContents";
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
import AdminQnAContent from "./pages/AdminQnAContent";
import AdminPlayers from "./pages/AdminPlayers";
import AdminSchedule from "./pages/AdminSchedule";
import AdminGoods from "./pages/AdminGoods";
import AdminUser from "./pages/AdminUser";
import AdminNotice from "./pages/AdminNotice";
import AdminNoticeDetail from "./pages/AdminNoticeDetail";
import AdminBoard from "./pages/AdminBoard";
import AdminPhoto from "./pages/AdminPhoto";
import Whoops404 from "./pages/Whoops404";
import "./css/reset.css";
import "./css/common.css";
import "./css/main.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.Auth.token);
  console.log("app.js token : ", token);

  const [user, setUser] = useState();
  const [isAdmin, setIsAdmin] = useState(); // 관리자 페이지 들어가려면 useState(1)로 설정하고 테스트
  const [isLogin, setIsLogin] = useState(); // 마이 페이지 들어가려면 useState(1)로 설정하고 테스트

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

          {/* 공지사항 내용*/}
          <Route
            path="/fan/notice/:NUM"
            element={
              <>
                <Header />
                <NoticeDetail />
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

          {/* 자유게시판 글찾기 */}
          <Route
            path="/fan/board/:option/:content"
            element={
              <>
                <Header />
                <BoardSearch />
                <Footer />
              </>
            }
          ></Route>

          {/* 자유게시판 글쓰기 */}
          <Route
            path="/fan/board/post"
            element={
              <>
                <Header />
                <BoardPost />
                <Footer />
              </>
            }
          ></Route>

          {/* 자유게시판 글 내용 */}
          <Route
            path="/fan/board/contents/:NUM"
            element={
              <>
                <Header />
                <BoardContents />
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
          {/* 상품상세 */}
          <Route
            path="/shop/detail/:num"
            element={
              <>
                <Header />
                <ProductDetail />
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

          {/* Payment */}
          <Route
            path="/ticket/payment"
            element={
              <>
                <Header />
                <Payment />
                <Footer />
              </>
            }
          ></Route>
          {/* Ticketing */}
          <Route
            path="/ticket/ticketing"
            element={
              <>
                <Header />
                <Ticketing />
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
              isLogin ? (
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

          {/* 회원 QnA 페이지 */}
          <Route
            path="/mypage/QnA"
            element={
              isLogin ? (
                <>
                  <Header />
                  <div className="mypage_layout">
                    <Sidemenu />
                    <QnA />
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
              isAdmin ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminQnA />
                </div>
              ) : (
                <>
                  <Header />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* 회원 MyQnA (상세) */}
          <Route
            path="/mypage/myQnA"
            element={
              isLogin ? (
                <>
                  <Header />
                  <div className="mypage_layout">
                    <Sidemenu />
                    <MyQnA />
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

          {/* 회원 MyQnA (답변확인페이지) */}
          <Route
            path="/mypage/myQnAcontents"
            element={
              isLogin ? (
                <>
                  <Header />
                  <div className="mypage_layout">
                    <Sidemenu />
                    <MyQnAContents />
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
          {/* AdminQnAContent */}
          <Route
            path="/admin/adminQnAcontent"
            element={
              isAdmin ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminQnAContent />
                </div>
              ) : (
                <>
                  <Header />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* AdminPlayers (선수관리) */}
          <Route
            path="/admin/players"
            element={
              isAdmin ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminPlayers />
                </div>
              ) : (
                <>
                  <Header />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* AdminSchedule (일정관리) */}
          <Route
            path="/admin/schedule"
            element={
              isAdmin ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminSchedule />
                </div>
              ) : (
                <>
                  <Header />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* AdminGoods (굿즈관리) */}
          <Route
            path="/admin/goods"
            element={
              isAdmin ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminGoods />
                </div>
              ) : (
                <>
                  <Header />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* AdminUser (회원정보보기) */}
          <Route
            path="/admin/user"
            element={
              isAdmin ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminUser />
                </div>
              ) : (
                <>
                  <Header />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* AdminNotice (공지사항등록) */}
          <Route
            path="/admin/notice"
            element={
              isAdmin ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminNotice />
                </div>
              ) : (
                <>
                  <Header />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* AdminNoticeDetail (공지사항 수정시 내용) */}
          <Route
            path="/admin/notice/:NUM"
            element={
              isAdmin ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminNoticeDetail />
                </div>
              ) : (
                <>
                  <Header />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* AdminBoard (게시판관리) */}
          <Route
            path="/admin/board"
            element={
              isAdmin ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminBoard />
                </div>
              ) : (
                <>
                  <Header />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          ></Route>

          {/* AdminPhoto (사진등록) */}
          <Route
            path="/admin/photo"
            element={
              isAdmin ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminPhoto />
                </div>
              ) : (
                <>
                  <Header />
                  <Whoops404 />
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
