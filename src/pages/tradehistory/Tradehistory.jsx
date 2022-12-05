import React,{useState, useEffect} from "react";
import 'antd/dist/antd.css';
import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Menu, Space, Table } from 'antd';
import {Row, Col, Button,DatePicker,  Descriptions, PageHeader,  Statistic, Tag } from "antd";
import Demo from "./demo";
import moment from "moment";
import './tradehistory.scss';
import './table.css';
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

import crypto from './crypto.mp4';

const Inouthistory = (props) => {

  const history = props.history;
  const token = useSelector((state) => state.Auth.token);
  const [data, setData] = React.useState([]);
  const page = 1;
  useEffect(() => {
    axios.post('https://coinapi.tpnet.io/transactionHistory',{token,page})
        .then(res => setData(res.data.data))
        .catch(err => console.log(err));
  },[] );

  const variableTableRows = [];
  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      let tstamp = data[i].transaction_regDate;

      variableTableRows.push(
        <tr key={data[i].transaction_idx}>
          <td>{data[i].transaction_idx}</td>
          <td>{data[i].transaction_user_idx}</td>
          <td>{data[i].transaction_symbol}</td>
          <td>{data[i].transaction_type}</td>
          <td>{data[i].transaction_credit}</td>
          <td>{data[i].transaction_amount}</td>
          <td>{data[i].transaction_basic_amount}</td>
          <td>{tstamp}</td>
        </tr>
      );
    }
}
// console.log(token)
//더미 데이터 호출

  // useEffect(() => {
  //   getInaccountList();
  //   props.setMenu('/inaccountlist')
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
        <section className="page-title-box-history overflow-hidden">
          
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="text-center">
                  <h2 className="mb-3 text-white">거래내역</h2>
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
        <section className="section thistory">

          <div className="wrapper-history">

            <div class="parent">

              <div class="div1">
                <div className="item-normal">
                  <div className="title">
                    <p className="tn">매수가능금액</p>
                  </div>
                  <div className="content">
                    <p className="cn">28,671,140</p> <span className="krw"> KRW</span>
                  </div>
                </div>
              </div>

              <div class="div2">
                <div className="item-normal">
                  <div className="title">
                    <p className="tn">매도가능금액</p>
                  </div>
                  <div className="content">
                    <p className="cn">28,671,140</p> <span className="krw"> KRW</span>
                  </div>
                </div>
              </div>

              <div class="div3">
                  <div className="item-normal">
                    <div className="title">
                      <p className="tn">고객 예탁금</p>
                    </div>
                    <div className="content">
                      <p className="cn">1,333,557</p> <span className="krw"> KRW</span>
                    </div>
                  </div>
              </div>

              <div class="div4">
                <div className="item-normal">
                  <div className="title">
                    <p className="tn">총 보유자산</p>
                  </div>
                  <div className="content">
                    <p className="cn" id="setprimary">28,671,140</p> <span className="krw"> KRW</span>
                  </div>
                </div>
              </div>

              <div class="div5">
                <div className="item-normal">
                  <div className="title">
                    <p className="tn">총 보유금액</p>
                  </div>
                  <div className="content">
                    <p className="cn">0</p> <span className="krw"> KRW</span>
                  </div>
                </div>
              </div>

              <div class="div6">
                <div className="item-normal">
                  <div className="title">
                    <p className="tn">총 평가금액</p>
                  </div>
                  <div className="content">
                    <p className="cn">0</p> <span className="krw"> KRW</span>
                  </div>
                </div>
              </div>

              <div class="div7">
                <div className="item-normal">
                  <div className="title">
                    <p className="tn">총 평가순위</p>
                  </div>
                  <div className="content">
                    <p className="cn">0</p> <span className="krw"> KRW</span>
                  </div>
                </div>
              </div>

              <div class="div8">
                <div className="item-normal">
                  <div className="title">
                    <p className="tn">레버리지</p>
                  </div>
                  <div className="content">
                    <p className="cn">1</p> <span className="krw"> KRW</span>
                  </div>
                </div>
              </div>

              <div class="div9">
                <div className="item-normal">
                  <div className="title">
                    <p className="tn">수수료</p>
                  </div>
                  <div className="content">
                    <p className="cn">0</p> <span className="krw"> KRW</span>
                  </div>
                </div>
              </div>

              <div class="div10">
                <div className="item-normal">
                  <div className="title">
                    <p className="tn">로스컷금액</p>
                  </div>
                  <div className="content">
                    <p className="cn">0</p> <span className="krw"> KRW</span>
                  </div>
                </div>
              </div>

              <div class="div11">
                <div className="item-normal">
                  <div className="title">
                    <p className="tn">총 평가수익률</p>
                  </div>
                  <div className="content">
                    <p className="cn">0</p> <span className="krw"> KRW</span>
                  </div>
                </div>
              </div>

              <div class="div12">
                <div className="item-normal">
                  <div className="title">
                    <p className="tn">* KRW로 환산한 추정값</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="table-wrapper">
                    <div className="header">

                      <div className="filter">
                        <p className="tn">Filter</p>
                        <input type="date" className="inputdate" id="start" min={"2022-01-01"} max={new Date().toLocaleDateString('en-ca')}/>
                        <p>-</p>
                        <input type="date" className="inputdate" id="end" min={"2022-01-01"} max={new Date().toLocaleDateString('en-ca')}/>
                        <button>Set Filter</button>
                      </div>

                      <div className="pnl">
                        <div className="title">
                          <p className="tn">Realized P/L</p>
                        </div>
                        <div className="content">
                          <p className="cn">10,000,000</p>
                          <span className="krw"> KRW</span>
                        </div>
                      </div>

                    </div>
                    <div className="table-container">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>TXID</th>
                            <th>UID</th>
                            <th>Symbol</th>
                            <th>Type</th>
                            <th>Credit</th>
                            <th>Amount</th>
                            <th>Basic Amount</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {variableTableRows}
                        </tbody>
                      </table>


                      <div class="history-pagination">
                        <ul class="page">
                          <li class="page__btn"></li>
                          <li class="page__numbers active"> 1</li>
                          <li class="page__numbers">2</li>
                          <li class="page__numbers">3</li>
                          <li class="page__numbers">4</li>
                          <li class="page__numbers">5</li>
                          <li class="page__numbers">6</li>
                          <li class="page__btn"></li>
                        </ul>
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

export default Inouthistory;