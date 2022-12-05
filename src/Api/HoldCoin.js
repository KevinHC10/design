import React from "react";
import styled from "styled-components";
import Decimal from "decimal.js";
import moment from "moment-timezone";

import HoldCoinList from "./HoldCoinList";
import Loading from "../Global/Loading";

import withTradeListData from "../../Container/withTradeListData";
import withThemeData from "../../Container/withThemeData";
import withLoadingData from "../../Container/withLoadingData";
import withSelectedCoinPrice from "../../Container/withSelectedCoinPrice";

const St = {
  Price: styled.strong`
  color: ${({ priceColor }) => priceColor};
  font-size: 1rem;
  font-weight: 800;

  @media ${({ theme }) => theme.mobileS} {
    font-size: 0.6rem;
  }
`,
PriceUnit: styled.span`
font-size: 0.9rem;
font-weight: 500;
padding-left: 5px;
`,

  Container: styled.article`
    width: 100%;
    height: 100%;
    background-color: white;
    margin-top: 10px;
    @media ${({ theme }) => theme.mobileM} {
      margin-top: 0;
    }
  `,
  HiddenH3: styled.h3`
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0, 0);
    clip-path: polygon(0, 0);
    overflow: hidden;
    text-indent: -9999px;
  `,
  TradeListUL: styled.ul`
    overflow-y: scroll;
    scrollbar-color: ${(props) => props.scrollColor};
    scrollbar-width: thin;
    scrollbar-base-color: ${(props) => props.scrollColor};
    &::-webkit-scrollbar {
      width: 5px;
      background-color: white;
      border-radius: 5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.scrollColor};
      border-radius: 5rem;
    }
    height: 320px;
  `,
  TradeListTitle: styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 25px;
    background-color: ${({ theme }) => theme.lightGray1};
    font-size: 0.9rem;

    @media ${({ theme }) => theme.mobileS} {
      font-size: 0.6rem;
    }
  `,
  TitleListItem: styled.li`
    width: 20%;

    min-width: 58px;
    text-align: ${({ textAlign }) => textAlign || "center"};
    @media ${({ theme, mobileSNone }) => (mobileSNone ? theme.mobileS : true)} {
      display: none;
    }

    @media ${({ theme, mobileMNone }) => (mobileMNone ? theme.mobileM : true)} {
      display: none;
    }

    @media ${({ theme, mobileSNone }) => mobileSNone || theme.mobileS} {
      width: 50%;
    }
  `,
};



const TradeList = ({ theme, selectedTradeListData, isTradeListLoading,price,changeRate24Hour }) => {
  const priceColor = changeRate24Hour > 0 ? theme.priceUp : theme.priceDown;
  const test=price;
  return (
    
    <St.Container>
      <St.HiddenH3>실시간 체결내역</St.HiddenH3>
      <St.TradeListTitle bgColor={theme.lightGray1}>
        <St.TitleListItem mobileSNone={true} textAlign={"center"}>
          체결시간
        </St.TitleListItem>
        <St.TitleListItem>체결가격</St.TitleListItem>
        <St.TitleListItem>체결량</St.TitleListItem>
        <St.TitleListItem mobileMNone={true} textAlign={"right"}>
          체결금액
        </St.TitleListItem>
      </St.TradeListTitle>
      <St.TradeListUL scrollColor={theme.middleGray}>
        {isTradeListLoading || !selectedTradeListData ? (
          <Loading />
        ) : (
          <St.Price priceColor={priceColor}>
          {(test*7.21).toLocaleString()}
        </St.Price>
        )}
      </St.TradeListUL>
    </St.Container>
  );
};

export default withTradeListData()(
  withSelectedCoinPrice()(withLoadingData()(withThemeData()(React.memo(TradeList))))
);
