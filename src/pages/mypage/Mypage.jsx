import * as Yup from "yup";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {Formik, ErrorMessage} from "formik";
import {Form, Input, Button} from 'antd'
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

import './mypage.scss';

const Mypage = (props) => {


    useEffect(()=>{
        props.setMenu('/mypage');
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


        {/* MAIN CONTAINER */}

        
        <div className="section">
          <div className="wrapper">
            
            <div className="head-title">
              <p className="title">
                My Account
              </p>
            </div>

            <div className="information">
              <div className="title-cont">
                <p className="section-title">
                  Information Management
                </p>
              </div>
              <div className="content-cont">

                <div className="info-cont" id="uname">
                  <div className="title-info-cont">
                    <p className="title-info">
                      Username
                    </p> 
                  </div>
                  <div className="content-info-cont">
                    <p className="content-info">
                      user_id
                    </p>
                    <button>Change</button>
                  </div>
                </div>

                <div className="info-cont" id="email">
                  <div className="title-info-cont">
                    <p className="title-info">
                      E-mail
                    </p> 
                  </div>
                  <div className="content-info-cont">
                    <p className="content-info">
                      user_email
                    </p>
                  </div>
                </div>

                <div className="info-cont" id="name">
                  <div className="title-info-cont">
                    <p className="title-info">
                      Name
                    </p> 
                  </div>
                  <div className="content-info-cont">
                    <p className="content-info" id="not-verified">
                      Customer verification is required
                    </p>
                    <button className="txtbtn">Verify Now</button>
                  </div>
                </div>

                <div className="info-cont" id="phone-num">
                  <div className="title-info-cont">
                    <p className="title-info">
                      Phone Number
                    </p> 
                  </div>
                  <div className="content-info-cont">
                    <p className="content-info" id="verified">
                      Information verified
                    </p>
                    <button className="txtbtn">Verify Now </button>
                  </div>
                </div>

                <div className="info-cont" id="bank-info">
                  <div className="title-info-cont">
                    <p className="title-info">
                      Bank Account
                    </p> 
                  </div>
                  <div className="main-info-cont">

                    <div className="verification-cont">
                      <p className="verification-info" id="not-verified">
                        Bank account verification is required.
                      </p>
                      <button className="txtbtn">Authenticate</button>
                    </div>

                    <div className="content-info-cont">
                      <span className="content-info">
                        <p className="content-title">
                          Bank Name
                        </p>
                        <p className="content-content">
                          Kook Min Bank
                        </p>
                      </span>
                      <span className="content-info">
                        <p className="content-title">
                          Withdrawal Account Number
                        </p>
                        <p className="content-content">
                          5130855712345
                        </p>
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            <div className="settings">
              <div className="title-cont">
                <p className="section-title">
                  Settings
                </p>
              </div>
              <div className="scard-container">
                <div className="setting-card">
                  <div className="scard-header">
                      <p className="scard-title">
                        Password
                      </p>
                      <p className="scard-subtitle">
                        We encourage that you periodically change your password.
                      </p>
                  </div>
                  <div className="scard-options">
                    <button className="hollowbtn">
                        Change Password
                    </button>
                  </div>
                </div>

                <div className="setting-card">
                  <div className="scard-header">
                      <p className="scard-title">
                        Affiliate Code
                      </p>
                      <p className="scard-subtitle">
                        Use this affiliate code to gain commissions for every successful referral.
                      </p>
                  </div>
                  <div className="scard-options">
                    <span className="scard-aff-code-cont">
                      <p className="scard-aff-code">
                        s4Adfg5
                      </p>
                      <a href="" className="copycode">
                        Copy
                      </a>
                    </span>
                    <button className="hollowbtn">
                      Generate new code
                    </button>
                  </div>
                </div>

                <div className="setting-card">
                  <div className="scard-header">
                      <p className="scard-title">
                        Lock Account
                      </p>
                      <p className="scard-subtitle">
                        Lock your account to prevent further hacking damages by restricting all withdrawals and external logins.
                      </p>
                  </div>
                  <div className="scard-options">
                    <button className="hollowbtn">
                      Lock My Account
                    </button>
                  </div>
                </div>
              </div>

            </div>

            <div className="other-options">
              <div className="option">
                <p className="title">
                  Change withdrawal account information
                </p>
                <a href="" className="subtitle">Get assistance from a support</a>
              </div>
              <div className="option">
                <p className="title">
                  General Account-related Inquiries
                </p>
                <a href="" className="subtitle">Contact Support</a>
              </div>
            </div>
          </div>
        </div>
        {/* 정보수정 끝 */}
      </div>
    </div>
    </div>
  {/* JAVASCRIPT */}
  {/* Switcher Init JS */}
</>
  );
}

export default Mypage;