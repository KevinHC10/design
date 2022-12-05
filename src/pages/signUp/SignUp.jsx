import * as Yup from "yup";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {Formik, ErrorMessage} from "formik";
import {Form, Input, Button} from 'antd'
import "./signup.scss";
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from "react";

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

const SignUp = (props) => {

  const history = props.history;

  const validationSchema = Yup.object().shape({
    email: Yup
      .string()
      // .email("올바른 이메일 형식이 아닙니다!")
      .required("이메일을 입력하세요!"),
    username: Yup
      .string()
      .required("이름을 입력하세요!"),
    password: Yup
      .string()
      .required("패스워드를 입력하세요!"),
    userphone: Yup
      .string()
      .required("핸드폰번호를 입력하세요!"),
    password2: Yup
      .string()
      .oneOf([Yup.ref('password'), null],
        '비밀번호가 일치하지 않습니다')
      .required("필수 입력 값입니다!")
  })
  const submit = async (values) => {
    console.log(values);
    const {email, password, username,userphone} = values;
    try {
      await axios.post('https://coinapi.tpnet.io/signUp', {email, password, username,userphone});
      toast.success('회원등록 완료하였습니다. 로그인 하세요', {
        position: "top-center",
        autoClose: 2000
      });
      window.setTimeout(()=>{
        history.push('/signin');
      }, 2000);
    } catch(e) {
      toast.error(<div>회원가입이 완료되었습니다.<br/>로그인 페이지로 이동합니다!</div>, {
        position: "top-center",
      });
    }
  }

  useEffect(()=>{
    props.setMenu('/signup');
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
    <div className="main-content">
      <div className="page-content">
        {/* 회원가입 */}
        <div className="bg-auth">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="card auth-form">
                  <div className="card-body p-4">
                    <div className="text-center mb-4">
                      <h4 className="mb-1">회원가입</h4>
                    </div>
                    <form action="/">
                      <div className="row mb-3">
                        <div className="form-floating col-12 col-sm-8">
                          <input
                            type="text"
                            className="form-control"
                            id="join-id"
                            placeholder="아이디"
                          />
                          <label className="form-label" htmlFor="join-id">
                            * 아이디
                          </label>
                        </div>
                        <div className="col-12 col-sm-4 pt-2 pt-sm-0">
                          <button
                            type="submit"
                            className="btn btn-sub btn-primary btn-hover w-100"
                          >
                            중복체크
                          </button>
                        </div>
                        <div className="fs-13 mt-2">
                          영문자, 숫자만 입력 가능, 최소 5자 이상 입력하세요.
                        </div>
                      </div>
                      <div className="row mb-3 mt-4">
                        <div className="form-floating col-12">
                          <input
                            type="password"
                            className="form-control"
                            id="join-password"
                            placeholder="비밀번호"
                          />
                          <label className="form-label" htmlFor="join-password">
                            * 비밀번호
                          </label>
                        </div>
                        <div className="form-floating col-12 mt-2">
                          <input
                            type="password"
                            className="form-control"
                            id="join-password"
                            placeholder="비밀번호 확인"
                          />
                          <label className="form-label" htmlFor="join-password">
                            * 비밀번호 확인
                          </label>
                        </div>
                        <div className="fs-13 mt-2">
                          최소 8자 이상 입력해주세요.
                        </div>
                      </div>
                      <div className="row mb-3 mt-4">
                        <div className="form-floating col-12">
                          <input
                            type="text"
                            className="form-control"
                            id="join-name"
                            placeholder="예금주"
                          />
                          <label className="form-label" htmlFor="join-name">
                            * 예금주
                          </label>
                        </div>
                        <div className="col-12 col-sm-6 mt-2">
                          <select className="form-select">
                            <option selected="">직접입력</option>
                            <option value={1}>국민</option>
                            <option value={2}>우리</option>
                            <option value={3}>신한</option>
                          </select>
                        </div>
                        <div className="form-floating col-12 col-sm-6 mt-2">
                          <input
                            type="text"
                            className="form-control"
                            id="join-bank"
                            placeholder="은행명"
                          />
                          <label className="form-label" htmlFor="join-bank">
                            * 은행명
                          </label>
                        </div>
                        <div className="form-floating col-12 mt-2">
                          <input
                            type="text"
                            className="form-control"
                            id="join-bank-num"
                            placeholder="출금 계좌번호"
                          />
                          <label className="form-label" htmlFor="join-bank-num">
                            출금 계좌번호
                          </label>
                        </div>
                        <div className="fs-13 mt-2">
                          타인 계좌번호 출금불가, 실명 은행계좌로만 출금이
                          됩니다.
                        </div>
                        <div className="fs-13 mt-1">
                          출금계좌 변경은 고객센터 1:1문의로 문의바랍니다.
                        </div>
                      </div>
                      <div className="row mb-3 mt-4">
                        <div className="form-floating col-12 col-sm-8">
                          <input
                            type="email"
                            className="form-control"
                            id="join-email"
                            placeholder="이메일"
                          />
                          <label className="form-label" htmlFor="join-email">
                            * 이메일
                          </label>
                        </div>
                        <div className="col-12 col-sm-4 mt-2 mt-sm-0">
                          <button
                            type="submit"
                            className="btn btn-sub btn-primary btn-hover w-100"
                          >
                            중복체크
                          </button>
                        </div>
                        <div className="form-floating col-12 mt-2">
                          <input
                            type="text"
                            className="form-control"
                            id="join-phone"
                            placeholder="휴대폰번호"
                          />
                          <label className="form-label" htmlFor="join-phone">
                            * 휴대폰번호
                          </label>
                        </div>
                        <div className="form-floating col-12 col-sm-8 mt-2">
                          <input
                            type="text"
                            className="form-control"
                            id="join-referral"
                            placeholder="추천코드"
                          />
                          <label className="form-label" htmlFor="join-referral">
                            추천코드
                          </label>
                        </div>
                        <div className="col-12 col-sm-4 mt-2">
                          <button
                            type="submit"
                            className="btn btn-sub2 btn-primary btn-hover w-100 fs-13"
                          >
                            추천코드 인증
                          </button>
                        </div>
                        <div className="fs-13 mt-2">
                          추천코드가 없을 시 가입할 수 없습니다.
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                          />
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#join-Terms"
                            className="float-end cursor fs-16"
                          >
                            자세히보기
                          </a>
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            이용약관 동의
                          </label>
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-sub btn-primary btn-hover w-100"
                        >
                          회원가입
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 회원가입 끝 */}
      </div>

    </div>
    {/* 컨텐츠 끝*/}
  </div>
  {/* JAVASCRIPT */}
  {/* Switcher Init JS */}
</>
  );
}

export default SignUp;