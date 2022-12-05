import axios from "axios";
import React,{useState, useEffect} from "react";
import {Row, Col, Button} from "antd";
import moment from "moment";
import { useDispatch,useSelector } from "react-redux";

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
import img_04 from "./../../assets/images/news/img-04.jpg";
import img_07 from "./../../assets/images/news/img-07.jpg";
import img_08 from "./../../assets/images/news/img-08.jpg";
import img_09 from "./../../assets/images/news/img-09.jpg";
const Coinnews = (props) => {

  const history = props.history;
  const token = useSelector((state) => state.Auth.token);
  const [data, setData] = React.useState([]);
const page = 1;
const bank_type = "deposit";

// console.log(token)
//더미 데이터 호출


  // useEffect(() => {
  //   getCoinnews();
  //   props.setMenu('/Coinnews')
  // }, [props]);


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
        {/* 서브타이틀 */}
        <section className="page-title-box overflow-hidden">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="text-center">
                  <h2 className="mb-3 text-white">코인동향</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 서브타이틀 끝 */}
        {/* 서브타이틀 라인 */}
        <div className="position-relative" style={{ zIndex: 1 }}>
          <div className="shape">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width={1440}
              height={100}
              preserveAspectRatio="none"
              viewBox="0 0 1440 250"
            >
              <g mask='url("#SvgjsMask1025")' fill="none">
                <path
                  d="M 0,168 C 288,153.4 1152,109.6 1440,95L1440 250L0 250z"
                  fill="rgba(255, 255, 255, 1)"
                />
              </g>
              <defs>
                <mask id="SvgjsMask1025">
                  <rect width={1440} height={250} fill="#ffffff" />
                </mask>
              </defs>
            </svg>
          </div>
        </div>
        {/* 서브타이틀 라인 */}
        {/* 코인동향 */}
        <section className="section pt-3">
          <div className="container">
            <div className="row mt-4 pt-4">
              <div className="col-lg-12">
                <h2 className="mb-3 text-white">코인동향</h2>
              </div>
              <div className="col-lg-4">
                <div className="card blog-grid-box shadow-lg border-0 rounded-3 overflow-hidden mb-4">
                  <img
                    src={img_04}
                    alt=""
                    className="img-fluid"
                  />
                  <div className="card-body">
                    <a href="coinnewsview" className="primary-link">
                      <h5 className="mt-3 mb-1 fs-18">주간코인동향</h5>
                    </a>
                    <p className="text-muted mb-2 fs-15">
                      코인 주간 코인 동향 입니다
                    </p>
                    <a
                      href="coinnewsview"
                      className="fs-16 primary-link fw-medium read-more"
                    >
                      더보기+ <i className="uil uil-arrow-right ms-1" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card blog-grid-box shadow-lg border-0 rounded-3 overflow-hidden mb-4">
                  <img
                    src={img_05}
                    alt=""
                    className="img-fluid"
                  />
                  <div className="card-body">
                    <a href="coinnewsview" className="primary-link">
                      <h5 className="mt-3 mb-1 fs-18">주간코인동향</h5>
                    </a>
                    <p className="text-muted mb-2 fs-15">
                      코인 주간 코인 동향 입니다
                    </p>
                    <a
                      href="coinnewsview"
                      className="fs-16 primary-link fw-medium"
                    >
                      더보기+ <i className="uil uil-arrow-right ms-1" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card blog-grid-box shadow-lg border-0 rounded-3 overflow-hidden mb-4">
                  <img
                    src={img_06}
                    alt=""
                    className="img-fluid"
                  />
                  <div className="card-body">
                    <a href="coinnewsview" className="primary-link">
                      <h5 className="mt-3 mb-1 fs-18">주간코인동향</h5>
                    </a>
                    <p className="text-muted mb-2 fs-15">
                      코인 주간 코인 동향 입니다
                    </p>
                    <a
                      href="coinnewsview"
                      className="fs-16 primary-link fw-medium"
                    >
                      더보기+ <i className="uil uil-arrow-right ms-1" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card blog-grid-box shadow-lg border-0 rounded-3 overflow-hidden mb-4">
                  <img
                    src={img_07}
                    alt=""
                    className="img-fluid"
                  />
                  <div className="card-body">
                    <a href="coinnewsview" className="primary-link">
                      <h5 className="mt-3 mb-1 fs-18">주간코인동향</h5>
                    </a>
                    <p className="text-muted mb-2 fs-15">
                      코인 주간 코인 동향 입니다
                    </p>
                    <a
                      href="coinnewsview"
                      className="fs-16 primary-link fw-medium"
                    >
                      더보기+ <i className="uil uil-arrow-right ms-1" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card blog-grid-box shadow-lg border-0 rounded-3 overflow-hidden mb-4">
                  <img
                    src={img_08}
                    alt=""
                    className="img-fluid"
                  />
                  <div className="card-body">
                    <a href="coinnewsview" className="primary-link">
                      <h5 className="mt-3 mb-1 fs-18">주간코인동향</h5>
                    </a>
                    <p className="text-muted mb-2 fs-15">
                      코인 주간 코인 동향 입니다
                    </p>
                    <a
                      href="coinnewsview"
                      className="fs-16 primary-link fw-medium"
                    >
                      더보기+ <i className="uil uil-arrow-right ms-1" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card blog-grid-box shadow-lg border-0 rounded-3 overflow-hidden mb-4">
                  <img
                    src={img_09}
                    alt=""
                    className="img-fluid"
                  />
                  <div className="card-body">
                    <a href="coinnewsview" className="primary-link">
                      <h5 className="mt-3 mb-1 fs-18">주간코인동향</h5>
                    </a>
                    <p className="text-muted mb-2 fs-15">
                      코인 주간 코인 동향 입니다
                    </p>
                    <a
                      href="coinnewsview"
                      className="fs-16 primary-link fw-medium"
                    >
                      더보기+ <i className="uil uil-arrow-right ms-1" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mt-4">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <a
                          className="page-link"
                          href={void(0)}
                          aria-label="Previous"
                        >
                          <i className="uil uil-angle-left-b" />
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href={void(0)}>
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href={void(0)}>
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href={void(0)}>
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href={void(0)}>
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href={void(0)}>
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          href={void(0)}
                          aria-label="Next"
                        >
                          <i className="uil uil-angle-right-b" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 코인동향 끝 */}
      </div>
    </div>
    {/* 컨텐츠 끝*/}
  </div>
  {/* JAVASCRIPT */}
  {/* Switcher Init JS */}
</>
  );
}

export default Coinnews;