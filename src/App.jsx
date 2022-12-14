import React, {useEffect, useState} from 'react';
import {useHistory, Route, Switch} from "react-router-dom";
import {Layout, Menu} from "antd";
import Home from "./pages/main/Main";
import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/signIn/SignIn";
import {useDispatch, useSelector} from "react-redux";
import {setToken} from "./redux/reducers/AuthReducer";
import AddBoard from "./pages/add-board/AddBoard";
import AddInaccount from "./pages/add-inaccount/AddInaccount";
import AddOutaccount from "./pages/add-outaccount/AddOutaccount";
import PrivateRoute from "./routes/PrivateRoute";
import BoardList from "./pages/board-list/BoardList";
import Inaccount from "./pages/in-account/In-account";
import Outaccount from "./pages/out-account/Out-account";
import BoardView from "./pages/board-view/BoardView";
import InaccountView from "./pages/inaccount-view/InaccountView";
import OutaccountView from "./pages/outaccount-view/OutaccountView";
// import InouthistoryView from "./pages/inouthistory-view/InouthistoryView";
import BoardEdit from "./pages/board-edit/BoardEdit";
import InaccountEdit from "./pages/inaccount-edit/InaccountEdit";
import OutaccountEdit from "./pages/outaccount-edit/OutaccountEdit";
// import InouthistoryEdit from "./pages/inouthistory-edit/InouthistoryEdit";
import Main from './pages/Main'
import { startInit } from "./redux/reducers/coinReducer";
import Inouthistory from './pages/tradehistory/Tradehistory';
import Coinnews from './pages/coinnews/Coinnews';
import Customer from './pages/customer/Customer';
import Tradehistory from './pages/inouthistory/Deposithistory';

import './../src/assets/css/app.css';
import './../src/assets/css/app.min.css';
import './../src/assets/css/app.min.css.map';
import icon1 from './../src/assets/images/favicon/apple-icon-57x57.png';
import icon2 from './../src/assets/images/favicon/apple-icon-60x60.png';
import icon3 from './../src/assets/images/favicon/apple-icon-72x72.png';
import icon4 from './../src/assets/images/favicon/apple-icon-76x76.png';
import icon5 from './../src/assets/images/favicon/apple-icon-114x114.png';
import icon6 from './../src/assets/images/favicon/apple-icon-120x120.png';
import icon7 from './../src/assets/images/favicon/apple-icon-144x144.png';
import icon8 from './../src/assets/images/favicon/apple-icon-152x152.png';
import icon9 from './../src/assets/images/favicon/apple-icon-180x180.png';
import icon10 from './../src/assets/images/favicon/android-icon-192x192.png';
import icon11 from './../src/assets/images/favicon/favicon-32x32.png';
import icon12 from './../src/assets/images/favicon/favicon-96x96.png';
import icon13 from './../src/assets/images/favicon/favicon-16x16.png';
import icon14 from './../src/assets/images/favicon/manifest.json';
import icon15 from  "./../src/assets/images/favicon/ms-icon-144x144.png"
import logo from "./../src/assets/images/dark-logo.png";
import l_logo from "./../src/assets/images/light-logo.png";
import kr_flag from "./../src/assets/images/flags/kr.jpg";
import us_flag from "./../src/assets/images/flags/us.jpg";
import features_04 from "./../src/assets/images/features/features-04.png";
import features_05 from "./../src/assets/images/features/features-05.png";
import features_06 from "./../src/assets/images/features/features-06.png";
import img_06 from "./../src/assets/images/news/img-06.jpg";
import img_11 from "./../src/assets/images/news/img-11.jpg";
import img_05 from "./../src/assets/images/news/img-05.jpg";
import app from "./../src/assets/images/app.png";
import swiper from "./../src/assets/libs/swiper/swiper-bundle.min.css";
import btp_min from "./../src/assets/css/bootstrap.min.css";
import icon_min from "./../src/assets/css/icons.min.css"; 
import customer from "./../src/assets/css/customer.css";
import { auto } from '@popperjs/core';
import Coinnewsview from './pages/coinnewsview/Coinnewsview';
import Favask from './pages/favask/Favask';
import Ask from './pages/ask/Ask';
import Wondepwith from './pages/favask/Wondepwith';
import Imaginedepwith from './pages/favask/Imaginedepwith';
import Tradeamount from './pages/favask/Tradeamount';
import Accountlogin from './pages/favask/Accountlogin';
import Other from './pages/favask/Other';
import Mypage from './pages/mypage/Mypage';



const {Header, Content} = Layout;

const App = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const [menu, setMenu] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const token = useSelector((state) => state.Auth.token);
  // console.log(token)
  useEffect(() => {
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [token]);
  useEffect(() => {
    dispatch(startInit());
  }, [dispatch]);
  const logout = () => {
    dispatch(setToken(''))
  }

  return (
    <Layout>
      <Header>
      <Menu style={{width: auto,textAlign: "match-parent",backgroundColor: "#001529", color: "#fff", border: "1"}}
              mode="horizontal"
              selectedKeys={[Menu]}
        >
            <Menu.Item
              key="/"
              onClick={() => {
                history.push('/');
              }}
            >
            <a className="navbar-brand text-dark fw-bold me-auto">
              <img src={l_logo} />
            </a>
            </Menu.Item>

            <Menu.Item
              key="market"
              onClick={() => {
                history.push('/market');
              }}
            >
              ?????????
            </Menu.Item>
            <Menu.Item
              key="/coinnews"
              onClick={() => {
                history.push('/coinnews')
              }}
            >
              ????????????
            </Menu.Item>
            <Menu.Item
              key="/inouthistory"
              onClick={() => {
                history.push('/inouthistory')
              }}
            >
              ????????????
            </Menu.Item>
            <Menu.Item
              key="/inaccount"
              onClick={() => {
                history.push('/inaccount')
              }}
            >
              ???/????????????
            </Menu.Item>

            <Menu.Item
              key="/customer"
              onClick={() => {
                history.push('/customer')
              }}
            >
              ????????????
            </Menu.Item>
            <Menu.Item
              key="/mypage"
              onClick={() => {
                history.push('/mypage')
              }}
            >
              ????????????
            </Menu.Item>

            {
              isAuth ? (
                <Menu.Item
                  key="logout"
                  onClick={() => {
                    logout();
                    history.push('/');
                  }}
                >
                  ????????????
                </Menu.Item>
              ) : (
                <>
                  <Menu.Item
                    key="/signin"
                    onClick={() => {
                      history.push('/login');
                    }}
                  >
                    ?????????
                  </Menu.Item>
                  <Menu.Item
                    key="/signup"
                    onClick={() => {
                      history.push('/join');
                    }}
                  >
                    ????????????
                  </Menu.Item>
                  </>
              )
            }
       
      </Menu>
      </Header>
      <Content>
        <Switch
          style={
            {
              height: "fit-content;"
            }
          }
        >
          <Route exact path="/" render={(props) => <Home setMenu={setMenu} {...props}/>}/>
          <Route path="/join" render={(props) => <SignUp setMenu={setMenu} {...props}/>}/>
          <Route path="/login" render={(props) => <SignIn setMenu={setMenu} {...props}/>}/>
          <Route path="/boardlist" render={(props) => <BoardList setMenu={setMenu} {...props}/>}/>
          <Route exact path="/market" render={(props) => <Main setMenu={setMenu} {...props}/>}/>
          <Route exact path="/trade" render={(props) => <Main setMenu={setMenu} {...props}/>}/>
          <Route exact path="/coinnews" render={(props) => <Coinnews setMenu={setMenu} {...props}/>}/>
          <Route exact path="/customer" render={(props) => <Customer setMenu={setMenu} {...props}/>}/>
          <Route exact path="/coinnewsview" render={(props) => <Coinnewsview setMenu={setMenu} {...props}/>}/>
          <Route exact path="/tradehistory" render={(props) => <Tradehistory setMenu={setMenu} {...props}/>}/>
          <Route exact path="/ask" render={(props) => <Ask setMenu={setMenu} {...props}/>}/>
          <Route exact path="/favask" render={(props) => <Favask setMenu={setMenu} {...props}/>}/>
          <Route exact path="/wondepwith" render={(props) => <Wondepwith setMenu={setMenu} {...props}/>}/>
          <Route exact path="/imaginedepwith" render={(props) => <Imaginedepwith setMenu={setMenu} {...props}/>}/>
          <Route exact path="/tradeamount" render={(props) => <Tradeamount setMenu={setMenu} {...props}/>}/>
          <Route exact path="/accountlogin" render={(props) => <Accountlogin setMenu={setMenu} {...props}/>}/>
          <Route exact path="/other" render={(props) => <Other setMenu={setMenu} {...props}/>}/>
          {/* <Route path="/inouthistory" render={(props) => <Inouthistory setMenu={setMenu} {...props}/>}/> */}
          <Route path="/boardview/:id" render={(props) => <BoardView setMenu={setMenu} {...props}/>}/>
          <Route path="/inaccountview/:id" render={(props) => <InaccountView setMenu={setMenu} {...props}/>}/>
          <Route path="/outaccountview/:id" render={(props) => <OutaccountView setMenu={setMenu} {...props}/>}/>
          {/* <Route path="/inouthistoryview/:id" render={(props) => <InouthistoryView setMenu={setMenu} {...props}/>}/> */}
          <PrivateRoute path="/addboard" setMenu={setMenu} component={AddBoard}/>
          <PrivateRoute path="/mypage" setMenu={setMenu} component={Mypage}/>
          <PrivateRoute path="/addinaccount" setMenu={setMenu} component={AddInaccount}/>
          <PrivateRoute path="/addoutaccount" setMenu={setMenu} component={AddOutaccount}/>
          <PrivateRoute path="/inaccount" setMenu={setMenu} component={Inaccount}/>
          <PrivateRoute path="/outaccount" setMenu={setMenu} component={Outaccount}/>
          <PrivateRoute path="/inouthistory"setMenu={setMenu} component={Inouthistory}/>
          <PrivateRoute path="/boardedit/:id" setMenu={setMenu} component={BoardEdit}/>
          <PrivateRoute path="/inaccountedit/:id" setMenu={setMenu} component={InaccountEdit}/>
          <PrivateRoute path="/outaccountedit/:id" setMenu={setMenu} component={OutaccountEdit}/>
          {/* <PrivateRoute path="/Inouthistoryedit/:id" setMenu={setMenu} component={InouthistoryEdit}/>    */}

        </Switch>

       {/* ?????? */}
<>
  {/* ?????? ?????? ??????*/}
  <div className="position-relative" style={{ zIndex: 1 }}>
    <div className="footer-shape">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#001236"
          fillOpacity={1}
          d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        />
      </svg>
    </div>
  </div>
  {/* ?????? ?????? ?????? ???*/}
  {/* ?????? */}
  <section className="bg-footer overflow-hidden">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="footer-item mt-4 mt-lg-0 me-lg-5">
            <div className="mb-2">
              <img
                src={logo}
                alt=""
                className="footer-dark-logo"
              />
              <img
                src={l_logo}
                alt=""
                className="footer-light-logo"
              />
            </div>
            <p className="footer-content text-white">
              ??????????????? ?????? ???????????? ?????? ?????? ?????? ????????? ?????? ???????????????
              ????????? ????????? ?????? ????????????.
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-6">
          <div className="footer-item mt-4 mt-lg-0">
            <h6 className="footer-header mb-3">????????????</h6>
            <ul className="list-unstyled footer-list mb-0">
              <li>
                <a href="/customer">????????????</a>
              </li>
              <li>
                <a
                  className="cursor"
                  data-bs-toggle="modal"
                  data-bs-target="#join-Terms"
                >
                  ????????????
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-6">
          <div className="footer-item mt-4 mt-lg-0">
            <h6 className="footer-header mb-3">?????????</h6>
            <ul className="list-unstyled footer-list mb-0">
              <li>
                <a href="/market">?????????</a>
              </li>
              <li>
                <a href="/coinnews">????????????</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-6">
          <div className="footer-item mt-4 mt-lg-0">
            <h6 className="footer-header mb-3">????????????</h6>
            <ul className="list-unstyled footer-list mb-0">
              <li>
                <a href="/inaccount">??????</a>
              </li>
              <li>
                <a href="/outaccount">??????</a>
              </li>
              <li>
                <a href="/inouthistory">????????????</a>
              </li>
              <li>
                <a href="/mypage">????????????</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-6">
          <div className="footer-item mt-4 mt-lg-0">
            <h6 className="footer-header mb-3">????????????(24?????? ??????)</h6>
            <ul className="list-unstyled footer-list mb-0">
              <li>
                <a href="tel:010-0000-0000">
                  <span className="fw-semibold">???????????? : </span>1588-1588
                </a>
              </li>
              <li>
                <a href="">1:1?????? ??????</a>
              </li>
              <li>
                <a href="">???????????? ??????</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="footer-alt">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <p className="text-center fw-medium fs-16 mb-0">
            ?? Copyright ?? BITLINE, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* ?????? ???*/}
  {/*?????????*/}
  <button onClick="topFunction()" id="back-to-top">
    <i className="mdi mdi-arrow-up" />
  </button>
  {/*????????? ???*/}
  {/* ????????? ???*/}
</>
</Content>

    </Layout>
  );
}
export default App;