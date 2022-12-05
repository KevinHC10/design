import React,{useState, useEffect} from "react";
import styled from "styled-components";
import withSize from "../Container/withSize";
import { viewSize } from "../styles/theme";
import CoinInfoHeader from "../components/Main/CoinInfoHeader";
import ChartDataConsole from "../components/Main/ChartDataConsole";
import MainChart from "../components/Main/MainChart";
import Orderbook from "../components/Main/Orderbook";
import OrderInfo from "../components/Main/OrderInfo";
import TradeList from "../components/Main/TradeList";
import CoinList from "../components/Main/CoinList";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";


import icon1 from './../assets/images/favicon/apple-icon-57x57.png';
import icon2 from './../assets/images/favicon/apple-icon-60x60.png';
import icon3 from './../assets/images/favicon/apple-icon-72x72.png';
import icon4 from './../assets/images/favicon/apple-icon-76x76.png';
import icon5 from './../assets/images/favicon/apple-icon-114x114.png';
import icon6 from './../assets/images/favicon/apple-icon-120x120.png';
import icon7 from './../assets/images/favicon/apple-icon-144x144.png';
import icon8 from './../assets/images/favicon/apple-icon-152x152.png';
import icon9 from './../assets/images/favicon/apple-icon-180x180.png';
import icon10 from './../assets/images/favicon/android-icon-192x192.png';
import icon11 from './../assets/images/favicon/favicon-32x32.png';
import icon12 from './../assets/images/favicon/favicon-96x96.png';
import icon13 from './../assets/images/favicon/favicon-16x16.png';
import icon14 from './../assets/images/favicon/manifest.json';
import icon15 from  "./../assets/images/favicon/ms-icon-144x144.png"
import logo from "./../assets/images/dark-logo.png";
import l_logo from "./../assets/images/light-logo.png";
import kr_flag from "./../assets/images/flags/kr.jpg";
import us_flag from "./../assets/images/flags/us.jpg";
import features_04 from "./../assets/images/features/features-04.png";
import features_05 from "./../assets/images/features/features-05.png";
import features_06 from "./../assets/images/features/features-06.png";
import img_06 from "./../assets/images/news/img-06.jpg";
import img_11 from "./../assets/images/news/img-11.jpg";
import img_05 from "./../assets/images/news/img-05.jpg";
import app from "./../assets/images/app.png";
import swiper from "./../assets/libs/swiper/swiper-bundle.min.css";
import btp_min from "./../assets/css/bootstrap.min.css";
import icon_min from "./../assets/css/icons.min.css"; 
import customer from "./../assets/css/customer.css";



const St = {
    
  MainContentContainer: styled.div`
    display: block;
    justify-content: center;
    max-width: 1200px;
    margin: 2rem auto 4rem auto;
    width: 100%;
    height: 100%;
    max-height: 100%;
    
  `,
  divx: styled.div`
    flex: auto;
    flex-direction: row;
    display: flex;
    gap: .5rem;
    padding: .5rem;
    box-sizing: border-box;

  `,
  listx: styled.div`
    width: fit-content;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    
  `,
  ChartAndTradeContainer: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 950px;
    height: fit-content;
    flex: 7;
    overflow: hidden;

  `,
  HiddenH2: styled.h2`
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0, 0);
    clip-path: polygon(0, 0);
    overflow: hidden;
    text-indent: -9999px;
  `,
  MainChartContainer: styled.div`
    width: 100%;
    height: 500;
  `,
  TradeInfoContainer: styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
    
  `,
  TradeOrderContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    min-width: 180px;
    margin-left: 10px;
   
  `,
    TradeHistory: styled.div`
      margin-top: 1rem;
      width: 100%;
      height: 250px;
      gap: 1rem;
      overflow: auto;
      position: relative;

      &::-webkit-scrollbar {
        width: 5px;
        background-color: white;
        border-radius: 5rem;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.middleGray};
        border-radius: 5rem;
      }

    `,
    xtable: styled.table`
      width: 100%;
      height: 100%;
      background-color: black;


    `,
    thead: styled.thead`
      margin-bottom: 1rem !important;
      width: 100%;
      
      position: sticky;
    `,
    tr: styled.tr`
      background-color: white;
      position: sticky;
      
      th{
        position: sticky !important;
        font-size: .8rem;
        font-weight: 600 !important;
        color: black !important;
        padding: 1rem 0 !important;
        margin: 0 0 1rem 0 !important;
      }
    `,

    tbody: styled.tbody`
      height: auto;
      overflow: auto;
      tr {
        :nth-child(odd){
          background-color: rgb(249,250,252);
        }
        :nth-child(even){
          background-color: white;
        }
      }
      td {
        font-size: .8rem;
        padding: .5rem 0;
      }
    `,
    td_buy: styled.td`
      color: rgb(18,97,196);
      font-weight: 700 !important;
    `,
    td_sell: styled.td`
      color: rgb(210,79,69);
      font-weight: 700 !important;
    `,
};




const Main = ({ match, widthSize, heightSize }) => {
  const isRootURL = match.path === "/market";
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
      let ttype = data[i].transaction_type;
      let isBuy = ttype == "BUY" ? true : false;
      
      if(isBuy ==true){
        variableTableRows.push(
          <tr key={data[i].transaction_idx}>
            <St.td_buy>{data[i].transaction_type}</St.td_buy>
            <td>{data[i].transaction_symbol}</td>
            <td>{data[i].transaction_credit}</td>
            <td>{data[i].transaction_amount}</td>
            <td>{data[i].transaction_basic_amount}</td>
            <td>{tstamp}</td>
          </tr>
        );
      }else{
        variableTableRows.push(
          <tr key={data[i].transaction_idx}>
            <St.td_sell>{data[i].transaction_type}</St.td_sell>
            <td>{data[i].transaction_symbol}</td>
            <td>{data[i].transaction_credit}</td>
            <td>{data[i].transaction_amount}</td>
            <td>{data[i].transaction_basic_amount}</td>
            <td>{tstamp}</td>
          </tr>
        );
      }
     
      
      


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
            href="./../assets/css/app.min.css"
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
    <div className="main-content"
      style={
        {
          display: "block",
          padding: "1rem 0",
          height: "fit-content"
        }
      }
    >
      <div className="page-content">
        {/* 거래소 */}

          <St.MainContentContainer>
        
            <St.divx>
              <St.ChartAndTradeContainer isRootURL={isRootURL}>
                <St.HiddenH2>차트 및 주문 정보 창</St.HiddenH2>
                
                <CoinInfoHeader />

                <ChartDataConsole />

                <St.MainChartContainer>
                  <MainChart />
                </St.MainChartContainer>
                
                <St.TradeInfoContainer>
                  <Orderbook />
                  <St.TradeOrderContainer>
                    <OrderInfo />
                    {/* <HoldCoin /> */}
                    <TradeList />
                  </St.TradeOrderContainer>
                </St.TradeInfoContainer>

                <St.TradeHistory>
                  <St.xtable class="table">
                        <St.thead>
                          <St.tr>
                            <th>Type</th>
                            <th>Symbol</th>
                            <th>Credit</th>
                            <th>Amount</th>
                            <th>Basic Amount</th>
                            <th>Date</th>
                          </St.tr>
                        </St.thead>
                        <St.tbody>
                          {variableTableRows}
                        </St.tbody>
                      </St.xtable>
                </St.TradeHistory>

              </St.ChartAndTradeContainer>
              <St.listx>
              <CoinList
                widthSize={`100%`}
                heightSize={`auto`}
              />
              </St.listx>
              
              
            </St.divx>
            
            
            
            
      </St.MainContentContainer>


        {/* 거래소 끝 */}
      </div>
    </div>
    {/* 컨텐츠 끝*/}
  </div>
  {/* JAVASCRIPT */}
  {/* Switcher Init JS */}
  
</>
  );
};

export default (React.memo(Main));