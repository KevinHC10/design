import * as Yup from "yup";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {Formik, ErrorMessage} from "formik";
import {Form, Input, Button} from 'antd'
import "./singin.scss"
import {useDispatch} from "react-redux";
import {setToken} from "../../redux/reducers/AuthReducer";
import queryString from "query-string";
import {useEffect} from "react";
// async function loginUser(credentials) {
//   return fetch('https://coinapi.tpnet.io/signIn', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }


import './../../assets/css/app.css';
import './../../assets/css/app.min.css';
import './../../assets/css/app.min.css.map';

import icon1 from './../../assets/images/favicon/apple-icon-57x57.png';
import icon2 from './../../assets/images/favicon/apple-icon-60x60.png';
import icon3 from './../../assets/images/favicon/apple-icon-72x72.png';
import icon4 from './../../assets/images/favicon/apple-icon-76x76.png';
import icon5 from './../../assets/images/favicon/apple-icon-114x114.png';
import icon6 from './../../assets/images/favicon/apple-icon-120x120.png';
import icon7 from './../../assets/images/favicon/apple-icon-144x144.png';
import icon8 from './../../assets/images/favicon/apple-icon-152x152.png';
import icon9 from './../../assets/images/favicon/apple-icon-180x180.png';
import icon10 from './../../assets/images/favicon/android-icon-192x192.png';
import icon11 from './../../assets/images/favicon/favicon-32x32.png';
import icon12 from './../../assets/images/favicon/favicon-96x96.png';
import icon13 from './../../assets/images/favicon/favicon-16x16.png';
import icon14 from './../../assets/images/favicon/manifest.json';
import icon15 from  "./../../assets/images/favicon/ms-icon-144x144.png"
import logo from "./../../assets/images/dark-logo.png";
import l_logo from "./../../assets/images/light-logo.png";
import kr_flag from "./../../assets/images/flags/kr.jpg";
import us_flag from "./../../assets/images/flags/us.jpg";
import features_04 from "./../../assets/images/features/features-04.png";
import features_05 from "./../../assets/images/features/features-05.png";
import features_06 from "./../../assets/images/features/features-06.png";
import img_06 from "./../../assets/images/news/img-06.jpg";
import img_11 from "./../../assets/images/news/img-11.jpg";
import img_05 from "./../../assets/images/news/img-05.jpg";
import app from "./../../assets/images/app.png";
import swiper from "./../../assets/libs/swiper/swiper-bundle.min.css";
import btp_min from "./../../assets/css/bootstrap.min.css";
import icon_min from "./../../assets/css/icons.min.css"; 
import customer from "./../../assets/css/customer.css";


const SignIn = (props) => {



  const dispatch = useDispatch();
  const history = props.history;

  const validationSchema = Yup.object().shape({
    user_id: Yup
      .string()
      // .email("올바른 이메일 형식이 아닙니다!")
      .required("이메일을 입력하세요!"),
    user_password: Yup
      .string()
      .required("패스워드를 입력하세요!")
  })
  const submit = async (values) => {
    const {user_id, user_password} = values;
    try {
      const {data} = await axios.post('https://coinapi.tpnet.io/signIn', {user_id, user_password});
      console.log(data.accessToken);
      dispatch(setToken(data.accessToken));
      
      // 원래 페이지로 돌아가는 부분

      const redirectUrl = queryString.parse(history.location.search).redirectUrl;
      if (redirectUrl) {
        history.push(redirectUrl.toString());
      } else {
        history.push('/');
      }
    } catch (e) {
      toast.error(
          <div>로그인에 실패하였습니다!<br/>아이디와 패스워드를 확인해주세요!</div>
      , {
        position: "top-center",
      });
    }
  }


  useEffect(() => {
    props.setMenu('/login');
  }, [props])

  return (
<>
      <meta charSet="utf-8" />
      <title>BITLINE</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content=" " />
      <meta name="keywords" content="" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={icon1} />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={icon2} />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={icon3} />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={icon4} />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={icon5} />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={icon6} />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={icon7} />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={icon8} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={icon9} />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={icon10} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={icon11} />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={icon12} />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={icon13} />
      <link rel="manifest" href={icon14} />
      <meta
        name="msapplication-TileImage"
        content={icon15} />
      {/* Swiper Css */}
      <link rel="stylesheet" href={swiper} />
      {/* Bootstrap Css */}
      <link
        href={btp_min}
        id="bootstrap-style"
        rel="stylesheet"
        type="text/css" />
      {/* Icons Css */}
      <link href={icon_min} rel="stylesheet" type="text/css" />
      {/* App Css*/}
      <link
        href="./../../assets/css/app.min.css"
        id="app-style"
        rel="stylesheet"
        type="text/css" />
      {/* customer Css*/}
      <link href={customer} rel="stylesheet" type="text/css" />
      {/* 이용약관 모달 */}
      <div className="modal fade" id="join-Terms" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="join-Terms">
                이용약관
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">이용약관 내용</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                확인완료
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 이용약관 모달 끝*/}
  <div>

      {/* 컨텐츠 시작*/}
      <Formik
      initialValues={{
        user_id: "",
        user_password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submit}
    >
            {({values, handleSubmit, handleChange}) => (

          <Form
            layout="vertical"
            autoComplete="off"
            onFinish={handleSubmit}
          >

      <div className="main-content">
        <div className="page-content">
          {/* 로그인 */}
          <div className="bg-auth">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="card auth-form">
                  <div className="card-body p-4">
                    <div className="text-center mb-4">
                        <h4 className="mb-1">LOGIN</h4>
                        <p className="fs-13">
                          <i className="uil uil-exclamation-circle" /> 로그인하는
                          사이트의 주소가 아래와 같은지 확인하세요.
                        </p>
                        <p className="fs-14">
                          <i className="uil uil-lock-alt" />{" "}
                          https://www.bitline.com
                        </p>
                      </div>
                      <Form.Item className="input-form" label="Email">
                        <div className="mb-3">
                          <label htmlFor="user_id" className="form-label">
                            아이디
                          </label>
                          <Input value={values.user_id} name="user_id" onChange={handleChange}/>
                          <div className="error-message">
                            <ErrorMessage name="user_id"/>
                          </div>
                        </div>
                        </Form.Item>
                        <Form.Item className="input-form" label="Password">
                        <div className="mb-3">
                          <label htmlFor="user_password" className="form-label">
                            비밀번호
                          </label>
                          <Input.Password value={values.user_password} name="user_password" onChange={handleChange}/>
                          <div className="error-message">
                          <ErrorMessage name="user_password"/>
                          </div>
                        </div>
                        </Form.Item>
                        <div className="mb-4">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="pass-find"
                            />
                            <a
                              href="forgot-password"
                              className="float-end fs-16"
                            >
                              비밀번호찾기
                            </a>
                            <label
                              className="form-check-label"
                              htmlFor="pass-find"
                            >
                              기억하기
                            </label>
                          </div>
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary btn-hover w-100"
                          >
                            로그인
                          </button>
                        </div>
                        
                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          회원이 아니신가요 ?{" "}
                          <a
                            href="/join"
                            className="fw-medium text-success text-decoration-underline"
                          >
                            {" "}
                            회원가입{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 로그인 끝 */}
        </div>
        </div>
        </Form>
        )}
      </Formik>
    </div>
    {/* JAVASCRIPT */}
    {/* Switcher Init JS */}
    
  </>
            
  );
}

export default SignIn;