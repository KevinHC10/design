import axios from "axios";
import React,{useEffect} from "react";
import {Button,Form, Input} from "antd";
import './in-account.scss';
import './table.css';
import { useDispatch,useSelector } from "react-redux";

import * as Yup from "yup";
import {Formik, ErrorMessage} from "formik";



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
import swiper from "./../../assets/libs/swiper/swiper-bundle.min.css";
import btp_min from "./../../assets/css/bootstrap.min.css";
import icon_min from "./../../assets/css/icons.min.css"; 
import customer from "./../../assets/css/customer.css";

import './../../assets/css/app.css';
import './../../assets/css/app.min.css';
import './../../assets/css/app.min.css.map';



import api from "../../utils/api";

const InaccountList = (props) => {

  const history = props.history;
  const token = useSelector((state) => state.Auth.token);

  const validationSchema = Yup.object().shape({
    amount: Yup
      .string()
      .required("금액을 입력하세요"),

  })
  const submit = async (values) => {
    const {amount, content} = values;

    const inaccount = {
      amount: amount,
      token : token
    }
    const res = await api.post('https://coinapi.tpnet.io/deposit', inaccount)
                alert('입금신청이 완료되었습니다.');
    console.log(res);
    console.log(amount);
    history.push("/inaccount");
  }

  useEffect(()=>{
    props.setMenu('/InaccountList')
  }, [props])


    // history.push("/inaccount");
  



  // console.log(token)
  //더미 데이터 호출
    // useEffect(() => {
    //     axios.post('https://coinapi.tpnet.io/depositHistory',{token,page,limit})
    //         .then(res => setData(res.data.data))
    //         .catch(err => console.log(err));
    // },[] );
  
    // const variableTableRows = [];
    // if (data.length > 0) {
    //   for (let i = 0; i < data.length; i++) {
    //     variableTableRows.push(
    //       <tr key={data[i].bank_idx}>
    //         <td>{data[i].bank_idx}</td>
    //         <td>{data[i].bank_user_idx}</td>
    //         <td>{data[i].bank_regDate}</td>
    //         <td>{data[i].bank_procDate}</td>
    //         <td>{data[i].bank_holdDate}</td>
    //         <td>{data[i].bank_amount}</td>
    //       </tr>
    //     );
    //   }
    // };




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
          <section className="page-title-box overflow-hidden">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="text-center">
                    <h2 className="mb-3 text-white">입금</h2>
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
          {/* 입출금 */}
          <section className="section">
            <div className="container">
              <div className="row">
                <ul
                  className="nav nav-pills mb-3 justify-content-center mb-4"
                  id="pills-tab"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#deposit"
                      type="button"
                    >
                      입금신청
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                  <a
                  className="nav-link"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#deposit"
                  type="button"
                  href="/outaccount"
                  >
                    출금신청
                  </a>
                </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#history"
                      type="button"
                      href="/tradehistory"
                    >
                      입출금내역
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="deposit">
                    <form className="contact-form" method="post">
                      <div className="row">
                        <div className="col-lg-3 px-0">
                          <div className="border p-3 h-100 bg-glay d-flex align-items-center">
                            <div>
                              <div className="fs-13">입금은행</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-9 px-0">
                          <div className="border p-3 h-100">
                            <div>
                              <div className="fs-13">국민은행</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 px-0">
                          <div className="border p-3 h-100 bg-glay d-flex align-items-center">
                            <div>
                              <div className="fs-13">입금계좌번호</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-9 px-0">
                          <div className="border p-3 h-100">
                            <div>
                              <div className="fs-13">54515-52-55885</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 px-0">
                          <div className="border p-3 h-100 bg-glay d-flex align-items-center">
                            <div>
                              <div className="fs-13">예금주</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-9 px-0">
                          <div className="border p-3 h-100">
                            <div>
                              <div className="fs-13">홍길동</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 px-0">
                          <div className="border p-3 h-100 bg-glay d-flex align-items-center">
                            <div>
                              <div className="fs-13">입금금액</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-9 px-0">
                          <div className="border p-3 h-100 pt-0 pb-0">
                            <div className="d-flex flex-row align-items-center">

                            <Formik
                              initialValues={{
                                amount: "",
                              }}
                              validationSchema={validationSchema}
                              onSubmit={submit}
                            >
                              {({values, handleSubmit, handleChange}) => (
                                <div className="AddInaccount-wrapper">
                                  <Form
                                    layout="vertical"
                                    autoComplete="off"
                                    onFinish={handleSubmit}
                                  >
                                    <Form.Item className="input-form" label="입금신청금액">
                                      <Input value={values.amount} name="amount" onChange={handleChange}/>
                                      <div className="error-message">
                                        <ErrorMessage name="amount"/>
                                      </div>
                                    </Form.Item>
                                    <Form.Item>
                                      <Button type="primary" htmlType="submit">
                                        Submit
                                      </Button>
                                    </Form.Item>
                                  </Form>
                                </div>
                              )}
                            </Formik>
                            </div>
                          </div>
                        </div>

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 입출금 끝 */}
        </div>

      </div>
      {/* 컨텐츠 끝*/}
    </div>
    {/* JAVASCRIPT */}
    <script src="./../../assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    {/* Switcher Init JS */}
    <script src="./../../assets/js/pages/switcher.init.js"></script>
  </>
  );
}

export default InaccountList;