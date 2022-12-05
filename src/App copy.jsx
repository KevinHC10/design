import React, {useEffect, useState} from 'react';
import {useHistory, Route, Switch} from "react-router-dom";
import {Layout, Menu} from "antd";
import Home from "./pages/home/Home";
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
import TradehistoryList from './pages/in-out-history/In-out-history';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const {Header, Footer, Content} = Layout;

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
        <Menu style={{width: "100%",textAlign: "center",backgroundColor: "#001529", color: "#fff", border: "0"}}
              mode="horizontal"
              selectedKeys={[menu]}
        >
          <>
            <Menu.Item
              key="/"
              onClick={() => {
                history.push('/');
              }}
            >
              Home
            </Menu.Item>

            <Menu.Item
              key="market"
              onClick={() => {
                history.push('/market');
              }}
            >
              거래소
            </Menu.Item>
            <Menu.Item
              key="/boardlist"
              onClick={() => {
                history.push('/boardlist')
              }}
            >
              공지사항
            </Menu.Item>
            <Menu.Item
              key="/inouthistory"
              onClick={() => {
                history.push('/inouthistory')
              }}
            >
              거래내역
            </Menu.Item>
            <Menu.Item
              key="/inaccount"
              onClick={() => {
                history.push('/inaccount')
              }}
            >
              입금신청
            </Menu.Item>
            <Menu.Item
              key="/outaccount"
              onClick={() => {
                history.push('/outaccount')
              }}
            >

              출금신청
            </Menu.Item>

            <Menu.Item
              key="/addboard"
              onClick={() => {
                history.push('/addboard');
              }}
            >
              1:1상담
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
                  로그아웃
                </Menu.Item>
              ) : (
                <>
                  <Menu.Item
                    key="/signin"
                    onClick={() => {
                      history.push('/signin');
                    }}
                  >
                    로그인
                  </Menu.Item>
                  <Menu.Item
                    key="/signup"
                    onClick={() => {
                      history.push('/signup');
                    }}
                  >
                    회원가입
                  </Menu.Item>
                </>
              )
            }

          </>

        </Menu>
      </Header>
      <Content>
        <Switch>
          <Route exact path="/" render={(props) => <Home setMenu={setMenu} {...props}/>}/>
          <Route path="/signup" render={(props) => <SignUp setMenu={setMenu} {...props}/>}/>
          <Route path="/signin" render={(props) => <SignIn setMenu={setMenu} {...props}/>}/>
          <PrivateRoute path="/addboard" setMenu={setMenu} component={AddBoard}/>
          <PrivateRoute path="/addinaccount" setMenu={setMenu} component={AddInaccount}/>
          <PrivateRoute path="/addoutaccount" setMenu={setMenu} component={AddOutaccount}/>
          <Route path="/boardlist" render={(props) => <BoardList setMenu={setMenu} {...props}/>}/>
          <PrivateRoute path="/inaccount" setMenu={setMenu} component={Inaccount}/>
          <PrivateRoute path="/outaccount" setMenu={setMenu} component={Outaccount}/>
          {/* <PrivateRoute path="/inouthistory"setMenu={setMenu} component={Inouthistory}/> */}
          <Route path="/inouthistory" render={(props) => <TradehistoryList setMenu={setMenu} {...props}/>}/>
          <Route path="/boardview/:id" render={(props) => <BoardView setMenu={setMenu} {...props}/>}/>
          <Route path="/inaccountview/:id" render={(props) => <InaccountView setMenu={setMenu} {...props}/>}/>
          <Route path="/outaccountview/:id" render={(props) => <OutaccountView setMenu={setMenu} {...props}/>}/>
          {/* <Route path="/inouthistoryview/:id" render={(props) => <InouthistoryView setMenu={setMenu} {...props}/>}/> */}
          <PrivateRoute path="/boardedit/:id" setMenu={setMenu} component={BoardEdit}/>
          <PrivateRoute path="/inaccountedit/:id" setMenu={setMenu} component={InaccountEdit}/>
          <PrivateRoute path="/outaccountedit/:id" setMenu={setMenu} component={OutaccountEdit}/>
          {/* <PrivateRoute path="/Inouthistoryedit/:id" setMenu={setMenu} component={InouthistoryEdit}/>    */}
          <Route exact path="/market" render={(props) => <Main setMenu={setMenu} {...props}/>}/>
          <Route exact path="/trade" render={(props) => <Main setMenu={setMenu} {...props}/>}/>
        </Switch>
      </Content>
      <Footer style={{textAlign: "center", fontWeight: "bold", backgroundColor: "#001529", color: "#fff"}}>Copyright © 2022 BITLINE. ALL RIGHTS RESERVED.</Footer>
    </Layout>
  );
}
export default App;