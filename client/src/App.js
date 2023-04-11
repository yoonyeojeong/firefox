import "./css/App.css";
import Header from "./Header"; // 홈페이지 헤더 부분
import Article from "./pages/Article"; // 홈페이지 메인화면
import Footer from "./Footer"; // 홈페이지 Footer 부분
import AboutTeam from "./pages/AboutTeam"; // 팀 소개 화면
import AboutCompany from "./pages/AboutCompany"; // 그룹사 소개 화면
import AboutHistory from "./pages/AboutHistory"; // 팀원 소개 화면
import AboutPark from "./pages/AboutPark"; // 야구장 소개 화면
import AboutUs from "./pages/AboutUs"; // 기획의도 화면
import MajorPlayers from "./pages/Major_players"; // 1군 선수 소개
import MinorPlayers from "./pages/Minor_players"; // 2군 선수 소개
import Major from "./pages/Major"; // 1군 경기 일정
import Minor from "./pages/Minor"; // 2군 경기 일정
import Notice from "./pages/Notice";
import NoticeDetail from "./pages/NoticeDetail";
import NoticeSearch from "./pages/NoticeSearch";
import Board from "./pages/Board";
import BoardPost from "./pages/BoardPost";
import BoardContents from "./pages/BoardContents";
import BoardSearch from "./pages/BoardSearch";
import Shop from "./pages/Shop";
import ProductDetail from "./components/Productdetail";
import Ticket from "./pages/Ticket";
import Payment from "./ticketPay/Payment/Pages/ReadyPayment";
import PayResult from "./ticketPay/Payment/Pages/PayResult";
import Ticketing from "../src/pages/Ticketing";
import QnA from "./pages/QnA";
import MyQnA from "./pages/MyQnA";
import MyQnAContents from "./pages/MyQnAContents";
import MyTicket from "./pages/MyTicket";
import MyTicketing from "../src/pages/MyTicketing";
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
import axios from "axios";

function App() {
  const [isAdmin, setIsAdmin] = useState(); // 관리자 페이지 들어가려면 useState(1)로 설정하고 테스트
  const [isLogin, setIsLogin] = useState(); // 마이 페이지 들어가려면 useState(1)로 설정하고 테스트
  const [user_id, setUser_id] = useState();

  useEffect(() => {
    try {
      axios({
        url: "http://localhost:5000/login/success",
        method: "GET",
        withCredentials: true,
      })
        .then((result) => {
          if (result.data) {
            setIsLogin(true);
            console.log("로그인상태");
            setUser_id(result.data.user_id);
            if (result.data.user_id === "admin") {
              setIsAdmin(true);
            }
          }
        })
        .catch((error) => {
          console.log("로그아웃상태");
          setIsLogin(false);
          setIsAdmin(false);
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log("App.js isLogin? ", isLogin);
  console.log("App.js user_id? : ", user_id);
  return (
    <BrowserRouter>
      <div className="App">
        {/* Home 화면*/}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header isLogin={isLogin} />
                <Article />
                <Footer />
              </>
            }
          />

          {/*//////////// FireFOX 메뉴 ////////////*/}
          {/* 구단소개, 그룹사 소개, HISTORY, 야구장 소개, 기획 의도 */}
          {/* 사용된 Component */}
          {/* AboutTeam, AboutCompany, AboutHistory, AboutPark, AboutUs */}

          {/* 구단소개 화면*/}
          <Route
            path="/aboutTeam/aboutTeam"
            element={
              <>
                <Header isLogin={isLogin} />
                <AboutTeam />
                <Footer />
              </>
            }
          />

          {/* 그룹사소개 화면*/}
          <Route
            path="/aboutTeam/aboutCompany"
            element={
              <>
                <Header isLogin={isLogin} />
                <AboutCompany />
                <Footer />
              </>
            }
          />

          {/* HISTORY 화면*/}
          <Route
            path="/aboutTeam/aboutHistory"
            element={
              <>
                <Header isLogin={isLogin} />
                <AboutHistory />
                <Footer />
              </>
            }
          />

          {/* 야구장소개 화면*/}
          <Route
            path="/aboutTeam/aboutPark"
            element={
              <>
                <Header isLogin={isLogin} />
                <AboutPark />
                <Footer />
              </>
            }
          />

          {/* 기획의도 화면*/}
          <Route
            path="/aboutTeam/aboutUs"
            element={
              <>
                <Header isLogin={isLogin} />
                <AboutUs />
                <Footer />
              </>
            }
          />

          {/* 1군 선수 화면*/}
          <Route
            path="/players/major_players"
            element={
              <>
                <Header isLogin={isLogin} />
                <MajorPlayers />
                <Footer />
              </>
            }
          />

          {/* 2군 선수 화면*/}
          <Route
            path="/players/minor_players"
            element={
              <>
                <Header isLogin={isLogin} />
                <MinorPlayers />
                <Footer />
              </>
            }
          />

          {/* 1군 일정 화면*/}
          <Route
            path="/game/major"
            element={
              <>
                <Header isLogin={isLogin} />
                <Major />
                <Footer />
              </>
            }
          />

          {/* 2군 일정 화면*/}
          <Route
            path="/game/minor"
            element={
              <>
                <Header isLogin={isLogin} />
                <Minor />
                <Footer />
              </>
            }
          />

          {/* 공지사항*/}
          <Route
            path="/fan/notice"
            element={
              <>
                <Header isLogin={isLogin} />
                <Notice />
                <Footer />
              </>
            }
          />

          {/* 공지사항 내용*/}
          <Route
            path="/fan/notice/:NUM"
            element={
              <>
                <Header isLogin={isLogin} />
                <NoticeDetail />
                <Footer />
              </>
            }
          />
          {/* 공지사항 글찾기 */}
          <Route
            path="/fan/notice/TITLE/:content"
            element={
              <>
                <Header isLogin={isLogin} />
                <NoticeSearch />
                <Footer />
              </>
            }
          />

          {/* 자유게시판 */}
          <Route
            path="/fan/board"
            element={
              <>
                <Header isLogin={isLogin} />
                <Board user_id={user_id} />
                <Footer />
              </>
            }
          />

          {/* 자유게시판 글찾기 */}
          <Route
            path="/fan/board/:option/:content"
            element={
              <>
                <Header isLogin={isLogin} />
                <BoardSearch user_id={user_id} />
                <Footer />
              </>
            }
          />

          {/* 자유게시판 글쓰기 */}
          <Route
            path="/fan/board/post"
            element={
              <>
                <Header isLogin={isLogin} />
                <BoardPost user_id={user_id} />
                <Footer />
              </>
            }
          />

          {/* 자유게시판 글 내용 */}
          <Route
            path="/fan/board/contents/:NUM"
            element={
              <>
                <Header isLogin={isLogin} />
                <BoardContents user_id={user_id} />
                <Footer />
              </>
            }
          />

          {/* SHOP */}
          <Route
            path="/shop"
            element={
              <>
                <Header isLogin={isLogin} />
                <Shop />
                <Footer />
              </>
            }
          />
          {/* 상품상세 */}
          <Route
            path="/shop/detail/:num"
            element={
              <>
                <Header isLogin={isLogin} />
                <ProductDetail userId={user_id} />
                <Footer />
              </>
            }
          />

          {/* Ticket */}
          <Route
            path="/ticket"
            element={
              <>
                <Header isLogin={isLogin} />
                <Ticket isLogin={isLogin} />
                <Footer />
              </>
            }
          />

          {/* Payment */}
          <Route
            path="/ticket/payment"
            element={
              <>
                <Header isLogin={isLogin} />
                <Payment user_id={user_id} />
                <Footer />
              </>
            }
          />
          {/* Payresult */}
          <Route
            path="/ticket/payresult"
            element={
              <>
                <Header isLogin={isLogin} />
                <PayResult user_id={user_id} />
                <Footer />
              </>
            }
          />
          {/* Ticketing */}
          <Route
            path="/ticket/ticketing"
            element={
              <>
                <Header isLogin={isLogin} />
                <Ticketing user_id={user_id} />
                <Footer />
              </>
            }
          />

          {/* JOIN US */}
          <Route
            path="/joinus"
            element={
              <>
                <Header isLogin={isLogin} />
                <JoinUs />
                <Footer />
              </>
            }
          />

          {/* FindId */}
          <Route
            path="/findid"
            element={
              !isLogin ? (
                <>
                  <Header isLogin={isLogin} />
                  <FindId />
                  <Footer />
                </>
              ) : (
                <>
                  <Header isLogin={isLogin} />
                  <Article />
                  <Footer />
                </>
              )
            }
          />

          {/* FindPw */}
          <Route
            path="/findpw"
            element={
              !isLogin ? (
                <>
                  <Header isLogin={isLogin} />
                  <FindPw />
                  <Footer />
                </>
              ) : (
                <>
                  <Header isLogin={isLogin} />
                  <Article />
                  <Footer />
                </>
              )
            }
          />

          {/* MyPage */}
          <Route
            path="/mypage/myinfo"
            element={
              isLogin ? (
                !isAdmin ? (
                  <>
                    <Header isLogin={isLogin} />
                    <div className="mypage_layout">
                      <Sidemenu />
                      <MyInfo user_id={user_id} />
                    </div>
                    <Footer />
                  </>
                ) : (
                  <div className="admin_layout">
                    <AdminSidemenu />
                    <AdminQnA />
                  </div>
                )
              ) : (
                <>
                  <Header isLogin={isLogin} />
                  <NeedLogin />
                  <Footer />
                </>
              )
            }
          />

          {/* 장바구니 페이지 */}
          <Route
            path="/mypage/checkout"
            element={
              isLogin ? (
                !isAdmin ? (
                  <>
                    <Header isLogin={isLogin} />
                    <div className="mypage_layout">
                      <Sidemenu />
                      <Checkout userId={user_id} />
                    </div>
                    <Footer />
                  </>
                ) : (
                  <div className="admin_layout">
                    <AdminSidemenu />
                    <AdminQnA />
                  </div>
                )
              ) : (
                <>
                  <Header isLogin={isLogin} />
                  <NeedLogin />
                  <Footer />
                </>
              )
            }
          />

          {/* MyTicketing 나의 티켓예매  */}
          <Route
            path="/mypage/myticket"
            element={
              isLogin ? (
                <>
                  <Header isLogin={isLogin} />
                  <div className="mypage_layout">
                    <Sidemenu />
                    <MyTicket user_id={user_id} />
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
          />
          {/* MyTicketing 나의 티켓예매  */}
          <Route
            path="/mypage/myticketing/:id"
            element={
              isLogin ? (
                <>
                  <Header isLogin={isLogin} />
                  <div className="mypage_layout">
                    <Sidemenu />
                    <MyTicketing user_id={user_id} />
                  </div>
                  <Footer />
                </>
              ) : (
                <>
                  <Header isLogin={isLogin} />
                  <NeedLogin />
                  <Footer />
                </>
              )
            }
          />

          {/* 회원 QnA 페이지 */}
          <Route
            path="/mypage/QnA"
            element={
              isLogin ? (
                <>
                  <Header isLogin={isLogin} />
                  <div className="mypage_layout">
                    <Sidemenu />
                    <QnA user_id={user_id} />
                  </div>
                  <Footer />
                </>
              ) : (
                <>
                  <Header isLogin={isLogin} />
                  <NeedLogin />
                  <Footer />
                </>
              )
            }
          />

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
                  <Header isLogin={isLogin} />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          />

          {/* 회원 MyQnA (상세) */}
          <Route
            path="/mypage/myQnA"
            element={
              isLogin ? (
                <>
                  <Header isLogin={isLogin} />
                  <div className="mypage_layout">
                    <Sidemenu />
                    <MyQnA user_id={user_id} />
                  </div>
                  <Footer />
                </>
              ) : (
                <>
                  <Header isLogin={isLogin} />
                  <NeedLogin />
                  <Footer />
                </>
              )
            }
          />

          {/* 회원 MyQnA (답변확인페이지) */}
          <Route
            path="/mypage/myQnAcontents/:qna_id"
            element={
              isLogin ? (
                <>
                  <Header isLogin={isLogin} />
                  <div className="mypage_layout">
                    <Sidemenu />
                    <MyQnAContents user_id={user_id} />
                  </div>
                  <Footer />
                </>
              ) : (
                <>
                  <Header isLogin={isLogin} />
                  <NeedLogin />
                  <Footer />
                </>
              )
            }
          />
          {/* AdminQnAContent */}
          <Route
            path="/admin/adminQnAcontent/:qna_id"
            element={
              isAdmin ? (
                <div className="admin_layout">
                  <AdminSidemenu />
                  <AdminQnAContent />
                </div>
              ) : (
                <>
                  <Header isLogin={isLogin} />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          />

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
                  <Header isLogin={isLogin} />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          />

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
                  <Header isLogin={isLogin} />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          />

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
                  <Header isLogin={isLogin} />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          />

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
                  <Header isLogin={isLogin} />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          />

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
                  <Header isLogin={isLogin} />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          />

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
                  <Header isLogin={isLogin} />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          />

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
                  <Header isLogin={isLogin} />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          />

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
                  <Header isLogin={isLogin} />
                  <Whoops404 />
                  <Footer />
                </>
              )
            }
          />

          {/* Whoops404 */}
          <Route
            path="/*"
            element={
              <>
                <Header isLogin={isLogin} />
                <Whoops404 />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
