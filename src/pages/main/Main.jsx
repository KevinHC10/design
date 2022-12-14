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

import crypto from './crypto6.mp4';
import crypto_img from './crypto.PNG';

// import bootstrap from "./../../assets/libs/bootstrap/js/bootstrap.bundle.min.js";
// import swiperbd from "./../../assets/libs/swiper/swiper-bundle.min.js";
// import swiperini from "./../../assets/js/pages/switcher.init.js";
// import apexcharts from "./../../assets/libs/apexcharts/apexcharts.min.js";
// import tablechart from "./../../assets/js/pages/table-chart.init.js";
// import buysell from "./../../assets/js/pages/buy-sell.init.js";


const Main = (props) => {

  const history = props.history;
  const token = useSelector((state) => state.Auth.token);
  console.log(token)
  const [data, setData] = React.useState([]);
const page = 1;
const bank_type = "deposit";


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
      {/* ???????????? ?????? */}
      <div className="modal fade" id="join-Terms" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="join-Terms">
                ????????????
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">???????????? ??????</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                ????????????
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ???????????? ?????? ???*/}
      <div>
        {/* ????????? ??????*/}
        <div className="main-content">
          {/* ???????????? ?????? */}
          <section className="bg-home3">
          <video  autoPlay loop muted poster={crypto_img}>
      <source src={crypto} type="video/mp4"/>
      <strong>Your browser does not support the video tag.</strong>
    </video>
  <div className="bg-overlay" />
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="text-center text-white">
          <h1 className="mb-4 text-white fw-bold">?????? ???????????? ????????? ?????? ????????? ?????? ?????????</h1>
          <p className="lead para-desc mx-auto text-white-50 mt-3">
            ???????????? ????????? ??????????????? ????????? ????????? ?????? ????????? ???????????????.
          </p>
          <div className="mt-4 pt-2">
            <a href="/market" className="btn btn-primary btn-hover">
              ????????? ???????????? <i className="mdi mdi-arrow-right ms-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

          <div className="position-relative" style={{ zIndex: 1 }}>
            <div className="shape">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                <path
                  fill="#FFFFFF"
                  fillOpacity={1}
                  d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" />
              </svg>
            </div>
          </div>
          {/* ???????????? ?????? ???*/}
          {/* ?????? ?????? ????????????*/}
          {/* ?????? ?????? ???????????? ???*/}
          {/* ?????? ?????? top*/}
          <section className="section pt-3">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="section-title text-center mb-5 pb-2">
                    <h4 className="title">?????? TOP ????????????</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="table-responsive">
                    <table className="table table-hover align-middle">
                      <thead>
                        <tr className="text-muted">
                          <th scope="col">Symbol</th>
                          <th scope="col">Coin Name</th>
                          <th scope="col">Price($)</th>
                          <th scope="col">Trand(%)</th>
                          <th scope="col">Chart</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table-item box-shadow-md">
                          <td>
                            <h6 className="fw-medium mb-0">
                              Bitcoin{" "}
                              <span className="fw-normal text-muted">(BTC)</span>
                            </h6>
                          </td>
                          <td>
                            <div className="avatar-xs d-flex bg-soft-warning text-warning justify-content-center rounded-circle align-items-center">
                              <i className="cf cf-btc fs-5" />
                            </div>
                          </td>
                          <td>$42542.25</td>
                          <td className="text-success">
                            02.25% <i className="mdi mdi-arrow-up" />
                          </td>
                          <td style={{ width: 150 }}>
                            <div id="chart1" />
                          </td>
                          <td>
                            <a
                              href="/market"
                              className="btn btn-primary btn-sm"
                            >
                              ????????????
                            </a>
                          </td>
                        </tr>
                        <tr className="table-item box-shadow-md">
                          <td>
                            <h6 className="fw-medium mb-0">
                              Ethereum{" "}
                              <span className="fw-normal text-muted">(ETH)</span>
                            </h6>
                          </td>
                          <td style={{ width: 150 }}>
                            <div className="avatar-xs d-flex bg-soft-info text-info justify-content-center rounded-circle align-items-center">
                              <i className="cf cf-eth fs-5" />
                            </div>
                          </td>
                          <td>$1,851.35</td>
                          <td className="text-danger">
                            01.30% <i className="mdi mdi-arrow-down" />
                          </td>
                          <td style={{ width: 150 }}>
                            <div id="chart2" />
                          </td>
                          <td>
                            <a
                              href="/market"
                              className="btn btn-primary btn-sm"
                            >
                              ????????????
                            </a>
                          </td>
                        </tr>
                        <tr className="table-item box-shadow-md">
                          <td>
                            <h6 className="fw-medium mb-0">
                              Litecoin{" "}
                              <span className="fw-normal text-muted">(LTC)</span>
                            </h6>
                          </td>
                          <td style={{ width: 150 }}>
                            <div className="avatar-xs d-flex bg-soft-success text-success justify-content-center rounded-circle align-items-center">
                              <i className="cf cf-ltc fs-5" />
                            </div>
                          </td>
                          <td>$875.10</td>
                          <td className="text-success">
                            01.65% <i className="mdi mdi-arrow-up" />
                          </td>
                          <td style={{ width: 150 }}>
                            <div id="chart3" />
                          </td>
                          <td>
                            <a
                              href="/market"
                              className="btn btn-primary btn-sm"
                            >
                              ????????????
                            </a>
                          </td>
                        </tr>
                        <tr className="table-item box-shadow">
                          <td>
                            <h6 className="fw-medium mb-0">
                              Monero{" "}
                              <span className="fw-normal text-muted">(XMR)</span>
                            </h6>
                          </td>
                          <td style={{ width: 150 }}>
                            <div className="avatar-xs d-flex bg-soft-blue text-blue justify-content-center rounded-circle align-items-center">
                              <i className="cf cf-xmr fs-5" />
                            </div>
                          </td>
                          <td>$1240.21</td>
                          <td className="text-danger">
                            02.15% <i className="mdi mdi-arrow-down" />
                          </td>
                          <td style={{ width: 150 }}>
                            <div id="chart4" />
                          </td>
                          <td>
                            <a
                              href="/market"
                              className="btn btn-primary btn-sm"
                            >
                              ????????????
                            </a>
                          </td>
                        </tr>
                        <tr className="table-item box-shadow">
                          <td>
                            <h6 className="fw-medium mb-0">
                              Ripple{" "}
                              <span className="fw-normal text-muted">(XRP)</span>
                            </h6>
                          </td>
                          <td style={{ width: 150 }}>
                            <div className="avatar-xs d-flex bg-soft-orange text-orange justify-content-center rounded-circle align-items-center">
                              <i className="cf cf-xrp fs-5" />
                            </div>
                          </td>
                          <td>$1,315.15</td>
                          <td className="text-danger">
                            01.12% <i className="mdi mdi-arrow-down" />
                          </td>
                          <td style={{ width: 150 }}>
                            <div id="chart5" />
                          </td>
                          <td>
                            <a
                              href="/market"
                              className="btn btn-primary btn-sm"
                            >
                              ????????????
                            </a>
                          </td>
                        </tr>
                        <tr className="table-item box-shadow">
                          <td>
                            <h6 className="fw-medium mb-0">
                              Auroracoin{" "}
                              <span className="fw-normal text-muted">(AUR)</span>
                            </h6>
                          </td>
                          <td style={{ width: 150 }}>
                            <div className="avatar-xs d-flex bg-soft-info text-info justify-content-center rounded-circle align-items-center">
                              <i className="cf cf-aur fs-5" />
                            </div>
                          </td>
                          <td>$3,659.33</td>
                          <td className="text-success">
                            02.02% <i className="mdi mdi-arrow-up" />
                          </td>
                          <td style={{ width: 150 }}>
                            <div id="chart6" />
                          </td>
                          <td>
                            <a
                              href="/market"
                              className="btn btn-primary btn-sm"
                            >
                              ????????????
                            </a>
                          </td>
                        </tr>
                        <tr className="table-item box-shadow">
                          <td>
                            <h6 className="fw-medium mb-0">
                              Potcoin{" "}
                              <span className="fw-normal text-muted">(PTC)</span>
                            </h6>
                          </td>
                          <td style={{ width: 150 }}>
                            <div className="avatar-xs d-flex bg-soft-blue text-blue justify-content-center rounded-circle align-items-center">
                              <i className="cf cf-ptc fs-5" />
                            </div>
                          </td>
                          <td>$9,124.32</td>
                          <td className="text-danger">
                            02.85% <i className="mdi mdi-arrow-down" />
                          </td>
                          <td style={{ width: 150 }}>
                            <div id="chart7" />
                          </td>
                          <td>
                            <a
                              href="/market"
                              className="btn btn-primary btn-sm"
                            >
                              ????????????
                            </a>
                          </td>
                        </tr>
                        <tr className="table-item box-shadow">
                          <td>
                            <h6 className="fw-medium mb-0">
                              Aichain{" "}
                              <span className="fw-normal text-muted">(AIT)</span>
                            </h6>
                          </td>
                          <td style={{ width: 150 }}>
                            <div className="avatar-xs d-flex bg-soft-success text-success justify-content-center rounded-circle align-items-center">
                              <i className="cf cf-ait fs-5" />
                            </div>
                          </td>
                          <td>$2,336.84</td>
                          <td className="text-success">
                            01.34% <i className="mdi mdi-arrow-up" />
                          </td>
                          <td style={{ width: 150 }}>
                            <div id="chart8" />
                          </td>
                          <td>
                            <a
                              href="/market"
                              className="btn btn-primary btn-sm"
                            >
                              ????????????
                            </a>
                          </td>
                        </tr>
                        <tr className="table-item box-shadow">
                          <td>
                            <h6 className="fw-medium mb-0">
                              Auroracoin{" "}
                              <span className="fw-normal text-muted">(ARC)</span>
                            </h6>
                          </td>
                          <td style={{ width: 150 }}>
                            <div className="avatar-xs d-flex bg-soft-orange text-orange justify-content-center rounded-circle align-items-center">
                              <i className="cf cf-arc fs-5" />
                            </div>
                          </td>
                          <td>$2,112.85</td>
                          <td className="text-success">
                            03.12% <i className="mdi mdi-arrow-up" />
                          </td>
                          <td style={{ width: 150 }}>
                            <div id="chart9" />
                          </td>
                          <td>
                            <a
                              href="/market"
                              className="btn btn-primary btn-sm"
                            >
                              ????????????
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="text-center mt-4">
                    <a href="/market" className="text-primary fw-medium">
                      ????????? <i className="uil uil-arrow-right ms-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ?????? ?????? top ???*/}
          {/* ?????? ????????????*/}
          <section className="section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="section-title text-center mb-5">
                    <h4 className="title">
                      ????????? ???????????? ???????????? 24?????? ????????????
                    </h4>
                    <p className="desc-content text-muted">
                      ????????? ?????? ????????? ??????????????? ?????? ?????? ????????? ???????????????
                      ???????????????.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="card bg-gradient-light border-0 mt-4">
                    <div className="card-body text-center">
                      <div className="my-4">
                        <img
                          src={features_04}
                          alt=""
                          className="img-fluid" />
                      </div>
                      <div className="mt-4 pt-2">
                        <h2>????????????</h2>
                        <p className="text-muted">
                          ??????????????? ???????????? ?????? ?????? ?????? ????????? ?????? ????????????
                          ???????????? ????????? ????????? ?????? ????????? ???????????? ??????
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card bg-gradient-light border-0 mt-4">
                    <div className="card-body text-center">
                      <div className="my-4">
                        <img
                          src={features_05}
                          alt=""
                          className="img-fluid" />
                      </div>
                      <div className="mt-4 pt-2">
                        <h2>????????????</h2>
                        <p className="text-muted">
                          ???????????? ?????? ??? 24?????? ???????????? OTP?????? ???????????? ?????????
                          ????????? ???????????? ??????????????? 2?????? ??????
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card bg-gradient-light border-0 mt-4">
                    <div className="card-body text-center">
                      <div className="my-4">
                        <img
                          src={features_06}
                          alt=""
                          className="img-fluid" />
                      </div>
                      <div className="mt-4 pt-2">
                        <h2>????????? ??????</h2>
                        <p className="text-muted">
                          ??????????????? '?????? ?????? ??????'??? ????????? ?????? ???????????? ??????,
                          ?????? ?????? ????????? ???????????? ???????????? ????????????.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ?????? ???????????? ???*/}
          {/* ?????? ???????????????*/}
          <section className="bg-cta bg-dark pt-5 pb-5">
            <div className="bg-overlay" />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="section-title text-center">
                    <h4 className="title text-white">??????????????? ???????????????</h4>
                    <p className="desc-content text-white-50">
                      ???????????? ?????? ???????????? ???????????? ??????????????? ????????? ????????????
                      ISMS-P ??? ISO ???????????? ???????????? ?????? ????????? ????????? ???????????????
                    </p>
                    <div className="mt-4 pt-2">
                      <a href="/join" className="btn btn-primary btn-hover">
                        ???????????? <i className="uil uil-arrow-right ms-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ?????? ??????????????? ???*/}
          {/* ?????? ????????????*/}
          <section className="section bg-gradient-light">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="section-title text-center mb-5">
                    <h4 className="title">????????????</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="blog-box shadow-lg rounded overflow-hidden mb-lg-0 mb-4">
                    <img
                      src={img_06}
                      alt=""
                      className="img-fluid rounded-top" />
                    <div className="p-3">
                      <a href={void(0)} className="primary-link">
                        <h5 className="fw-medium mb-3">??? ????????? ?????? ??????</h5>
                      </a>
                      <ul className="list-inline fs-15 mb-2">
                        <li className="list-inline-item text-muted">
                          <i className="uil uil-calendar-alt me-1" /> 2022-03-01
                        </li>
                        <li className="list-inline-item text-muted">
                          <i className="uil uil-user me-1" /> ????????????
                        </li>
                      </ul>
                      <div className="mt-3">
                        <a
                          href={void(0)}
                          className="text-primary fw-medium"
                        >
                          ????????? <i className="uil uil-angle-right-b ms-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="blog-box shadow-lg rounded overflow-hidden mb-lg-0 mb-4">
                    <img
                      src={img_11}
                      alt=""
                      className="img-fluid rounded-top" />
                    <div className="p-3">
                      <a href={void(0)} className="primary-link">
                        <h5 className="fw-medium mb-3">
                          ?????? ???????????? ????????? ??????????
                        </h5>
                      </a>
                      <ul className="list-inline fs-15 mb-2">
                        <li className="list-inline-item text-muted">
                          <i className="uil uil-calendar-alt me-1" /> 2022-02-01
                        </li>
                        <li className="list-inline-item text-muted">
                          <i className="uil uil-user me-1" /> ????????????
                        </li>
                      </ul>
                      <div className="mt-3">
                        <a
                          href={void(0)}
                          className="text-primary fw-medium"
                        >
                          ????????? <i className="uil uil-angle-right-b ms-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="blog-box shadow-lg rounded overflow-hidden mb-lg-0 mb-4">
                    <img
                      src={img_05}
                      alt=""
                      className="img-fluid rounded-top" />
                    <div className="p-3">
                      <a href={void(0)} className="primary-link">
                        <h5 className="fw-medium mb-3">
                          SEC vs ??????, ????????? ?????? ??????...
                        </h5>
                      </a>
                      <ul className="list-inline fs-15 mb-2">
                        <li className="list-inline-item text-muted">
                          <i className="uil uil-calendar-alt me-1" /> 2022-01-01
                        </li>
                        <li className="list-inline-item text-muted">
                          <i className="uil uil-user me-1" /> ????????????
                        </li>
                      </ul>
                      <div className="mt-3">
                        <a
                          href={void(0)}
                          className="text-primary fw-medium"
                        >
                          ????????? <i className="uil uil-angle-right-b ms-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ?????? ???????????? ???*/}
          {/* ?????? ???????????? ?????????*/}
          <section className="section" style={{ backgroundColor: "#ebebeb" }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="text-center">
                    <img src={app} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="section-title ms-lg-4 mt-4 mt-lg-0">
                    <h4 className="title">
                      ???????????? ????????? ?????? ????????? ?????? ?????????
                    </h4>
                    <p className="fs-19 text-muted mb-3">
                      ???????????? ???????????? ????????? ??? ????????????
                    </p>
                    <div className="mt-4 pt-2 gap-2 d-flex">
                      <a href="/" className="btn btn-primary btn-hover">
                        <i className="uil uil-apple me-1" /> Apple Store
                      </a>
                      <a href="/" className="btn btn-success btn-hover">
                        <i className="uil uil-google-play me-1" /> Play Store
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ?????? ???????????? ????????? ???*/}
        </div>
        {/* ????????? ???*/}
      </div>

        {/* <script src={bootstrap}></script>


        <script src={swiperbd}></script>


        <script src={swiperini}></script>

        <script src={apexcharts}></script>


        <script src={tablechart}></script>

        <script src={buysell}></script> */}
    </>


);
}

export default Main;