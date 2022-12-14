import React from "react";
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
const St = {
  MainContentContainer: styled.div`
    display: flex;
    justify-content: center;
    max-width: 1500px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 50px;
    width: 100%;
    height: 100%;
    

    @media ${({ theme }) => theme.tablet} {
      margin-top: 0;
      margin-bottom: 0;
      max-width: 100%;
    }
  `,
  ChartAndTradeContainer: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    max-width: 950px;

    @media ${(props) => (props.isRootURL ? props.theme.tablet : true)} {
      display: none;
    }
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
    @media ${({ theme }) => theme.mobileM} {
      margin-top: 0;
    }
  `,
  TradeOrderContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    min-width: 180px;
    margin-left: 10px;
    @media ${({ theme }) => theme.mobileM} {
      margin-left: 0;
      border: 2px solid ${({ theme }) => theme.lightGray1};
      /* border-top: 1px solid ${({ theme }) => theme.lightGray1};
      border-bottom: 1px solid ${({ theme }) => theme.lightGray1};
      border-left: 1px solid ${({ theme }) => theme.lightGray1}; */
    }
  `,
};

const Main = ({ match, widthSize, heightSize }) => {
  const isRootURL = match.path === "/market";

  return (
    <>

      <St.MainContentContainer>
        {
          // ?????? ??? ?????? ?????? ?????? ?????? ?????????????????? tablet ??????????????? ?????????, ?????? ???????????? ?????? ???????????? ?????????
          ((isRootURL && widthSize > viewSize.tablet) || !isRootURL) && (
            <St.ChartAndTradeContainer isRootURL={isRootURL}>
              <St.HiddenH2>?????? ??? ?????? ?????? ???</St.HiddenH2>
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
              
            </St.ChartAndTradeContainer>
          )
        }
        {
          // ?????? ????????? ?????? ?????? ??????????????????, ?????? ???????????? ????????????  tablet ??????????????? ???  ???????????? ?????????
          (isRootURL || (!isRootURL && widthSize > viewSize.tablet)) && (
            <CoinList
              widthSize={widthSize}
              heightSize={heightSize}
              isRootURL={isRootURL}
            />
          )
        }
      </St.MainContentContainer>

    </>
  );
};

export default withSize()(React.memo(Main));
