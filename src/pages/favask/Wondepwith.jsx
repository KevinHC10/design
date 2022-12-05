import React,{useState, useEffect} from "react";
import 'antd/dist/antd.css';
import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Menu, Space, Table } from 'antd';
import {Row, Col, Button,DatePicker,  Descriptions, PageHeader,  Statistic, Tag } from "antd";
import moment from "moment";

import { useDispatch,useSelector } from "react-redux";
import axios from "axios";

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
import icon14 from '../../assets/images/favicon/manifest.json';
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

const Wondepwith = (props) => {

    return(
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
  {/* 공지사항 view 모달 */}
  <div className="modal fade" id="notice-view" tabIndex={-1}>
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          {/* <h5 class="modal-title" id="join-Terms">공지사항</h5> */}
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="blog-details">
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div className="section-title text-center mb-4 pb-1">
                      <h1 className="title">입금출금 관련 공지해드립니다</h1>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-inline text-muted">
                      <li className="list-inline-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-secondary">
                            <i className="uil uil-user" />
                          </div>
                          <div className="flex-grow-1 ms-1 fw-medium">
                            비트라인
                          </div>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-secondary">
                            <i className="uil uil-calendar-alt" />
                          </div>
                          <div className="flex-grow-1 ms-1 fw-medium">
                            2022-10-04
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6"></div>
                </div>
                <p>
                  <img
                    src={img_05}
                    alt=""
                    className="img-fluid"
                  />
                </p>
                <p className="text-muted">
                  리플사가 발행한 가상자산인 XRP의 가격이 지난 16일부터 급등세를
                  보이기 시작했습니다.
                  <br /> 16일 0.325달러 선을 유지하던 XRP는 3일만인 19일 약 22%
                  급등한 0.39달러에 거래됐습니다. <br />
                  그러나 직후 거시경제 악재 우려에 따라 모든 가상자산이
                  전체적으로 하락하면서 XRP 가격은 같은 날인 19일 0.35달러
                  선까지 후퇴했습니다. <br />
                  다만 전체 가상자산과 비교하면 최근 XRP는 다른 가상자산처럼 큰
                  변동성을 보이고 있는 와중에도 상대적으로 강한 상승세를
                  계속해서 유지하고 있습니다. <br />
                  <br />
                  그렇다면 최근 XRP가 이렇게 강세를 보이고 있는 이유는
                  무엇일까요.
                  <br /> 업계 관계자들은 SEC(미국 증권거래위원회)와 리플랩스의
                  소송전이 마무리될 조짐이 보이면서 XRP가 오른 것이라고 해석하고
                  있습니다. <br />
                  때마침 XRP가 최근 들어 처음 오른 시점인 지난 16일은 뉴욕 남부
                  지방 법원의 연방 법원 데이터베이스에 SEC와 리플랩스의 약식
                  판결 요청 문서가 공개된 날이었습니다. <br />
                  <br />
                  약식 판결이란 담당 판사가 재판에서 법을 위반했다는 판결을
                  내리지 않는 이상 재판을 지지부진하게 끌지 않고 약식으로 소송을
                  마무리하는 것을 의미합니다. <br />
                  앞서 SEC는 지난 2020년 12월 리플랩스의 공동창립자인 브래드
                  갈링하우스와 크리스 라슨을 증권법 위반 혐의로 고소한 바
                  있습니다. <br />
                  이후 SEC와 리플랩스의 소송전이 시작됐으나, 특별한 판결 없이
                  소송이 2년째 이어졌습니다. <br />
                  양측의 이번 약식 판결 요청은 지금까지 이어졌던 지지부진한 소송
                  상황을 끝내기 위한 것으로 보여집니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  </div>
  {/*공지사항 view 모달 끝*/}
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
                  <h2 className="mb-3 text-white">고객센터</h2>
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
        {/* 고객센터 */}
        <section className="section">
          <div className="container">
            <div className="row">
              <ul
                className="nav nav-pills mb-3 justify-content-center mb-4"
                id="pills-tab"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link "
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#customer1"
                    type="button"
                    href="/customer"
                  >
                    공지사항
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#customer2"
                    type="button"
                    href="/ask"
                  >
                    1:1문의
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#customer4"
                    href="/favask"
                  >
                    자주묻는질문
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="customer1">
                <div className="row">
                    <div className="col-lg-3">
                      <div
                        className="nav flex-lg-column flex-row nav-pills faq-menu  me-3 mb-4 mb-lg-0"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <a
                          className="nav-link fs-14 "
                          id="faq1"
                          data-bs-toggle="pill"
                          data-bs-target="#faq01"
                          type="button"
                          href="/favask"
                        >
                          가입/탈퇴
                        </a>
                        <a
                          className="nav-link fs-14 active"
                          id="faq2"
                          data-bs-toggle="pill"
                          data-bs-target="#faq02"
                          type="button"
                          href="/wondepwith"
                        >
                          원화 입금/출금
                        </a>
                        <a
                          className="nav-link fs-14"
                          id="faq3"
                          data-bs-toggle="pill"
                          data-bs-target="#faq03"
                          type="button"
                          href="/imaginedepwith"
                        >
                          가상자산 입금/출금
                        </a>
                        <a
                          className="nav-link fs-14"
                          id="faq4"
                          data-bs-toggle="pill"
                          data-bs-target="#faq04"
                          type="button"
                          href="/tradeamount"
                        >
                          거래/자산
                        </a>
                        <a
                          className="nav-link fs-14"
                          id="faq5"
                          data-bs-toggle="pill"
                          data-bs-target="#faq05"
                          type="button"
                          href="/accountlogin"
                        >
                          계정/로그인/보안
                        </a>
                        <a
                          className="nav-link fs-14"
                          id="faq6"
                          data-bs-toggle="pill"
                          data-bs-target="#faq06"
                          type="button"
                          href="/other"
                        >
                          기타
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div
                        className="tab-content bg-light p-4 rounded-3"
                        id="v-pills-tabContent"
                      >
                        <div className="tab-pane fade show active" id="faq01">
                          <div className="accordion" id="accordionico">
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingSix">
                                <button
                                  className="accordion-button fs-14"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseSix"
                                  aria-expanded="true"
                                  aria-controls="collapseSix"
                                >
                                  원화 입금은 어떻게 하나요?
                                </button>
                              </h2>
                              <div
                                id="collapseSix"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingSix"
                                data-bs-parent="#accordionico"
                              >
                                <div className="accordion-body">
                                  <p className="text-muted mb-0 fs-13">
                                    원화 입금은 본인 명의의 농협 계좌를 등록하고
                                    발급받은 가상계좌로 입금 가능합니다.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item mt-3">
                              <h2
                                className="accordion-header"
                                id="headingSeven"
                              >
                                <button
                                  className="accordion-button collapsed fs-14"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseSeven"
                                  aria-expanded="false"
                                  aria-controls="collapseSeven"
                                >
                                  원화 입/출금 한도가 어떻게 되나요?
                                </button>
                              </h2>
                              <div
                                id="collapseSeven"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingSeven"
                                data-bs-parent="#accordionico"
                              >
                                <div className="accordion-body">
                                  <p className="text-muted mb-0 fs-13">
                                    <img src="assets/images/money-min-max.png" />
                                    <br />
                                    <br />
                                    ※ 최근 3개월 누적 거래금액 100억원 이상 달성
                                    시 자동으로 한도 상향됩니다.
                                    <br />
                                    <br />※ 원화 입출금은 고객 확인 완료 및 은행
                                    계좌연동 이후에 가능합니다.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        {/* 고객센터 끝 */}
      </div>

    </div>
    {/* 컨텐츠 끝*/}
  </div>
  {/* JAVASCRIPT */}
  {/* Switcher Init JS */}
</>
    );
}

export default Wondepwith;