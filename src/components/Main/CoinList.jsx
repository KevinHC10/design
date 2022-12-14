import React from "react";
import styled from "styled-components";
import { searchCoin } from "../../redux/reducers/coinReducer";
import { useDispatch } from "react-redux";

import CoinListItem from "./CoinListItem";
import Loading from "../Global/Loading";

import withThemeData from "../../Container/withThemeData";
import withSelectedOption from "../../Container/withSelectedOption";
import withMarketNames from "../../Container/withMarketNames";
import withLatestCoinData from "../../Container/withLatestCoinData";
import withLoadingData from "../../Container/withLoadingData";

const St = {
  CoinListContainer: styled.article`
    display: flex;
    flex-direction: column;
    flex: auto;
    height: 1731px;
    background-color: white;
    box-sizing: border-box;
    overflow: auto;
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
  CoinSearchContainer: styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.lightGray2};
  `,
  CoinSearchInput: styled.input`
    width: 100%;
    border: none;
    padding: 5px;
    padding-left: 12px;
    &::placeholder {
      font-size: 0.7rem;
      color: gray;
      font-weight: 700;
    }
  `,
  CoinSearchBtn: styled.button`
    width: 30px;
    height: 30px;
    background: url("https://cdn.upbit.com/images/bg.e801517.png") -83px 2px no-repeat;
    background-color: white;
    padding: 10px;
    padding-right: 20px;
    padding-left: 20px;
    border: none;
  `,
  CoinSortContainer: styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid ${({ theme }) => theme.lightGray2};
    font-size: 0.9rem;
    font-weight: 800;
    color: #666666;
  `,
  CoinSortList: styled.li`
    width: ${({ width }) => width || "20%"};
    text-align: ${({ textAlign }) => textAlign || "right"};
    margin-right: ${({ marginRight }) => marginRight || 0};
    font-size: 0.78rem;
  `,
  CoinUl: styled.ul`
    flex: auto;
    background-color: white;
    overflow-y: scroll;
    scrollbar-color: ${({ theme }) => theme.middleGray};
    scrollbar-width: thin;
    scrollbar-base-color: ${({ theme }) => theme.middleGray};
    &::-webkit-scrollbar {
      width: 5px;
      background-color: white;
      border-radius: 5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.middleGray};
      border-radius: 5rem;
    }

    @media ${({ theme }) => theme.desktop} {
      display: block;
      max-width: 400px;
    }
  `,
};

const CoinList = ({
  theme,
  marketNames,
  sortedMarketNames,
  latestCoinData,
  selectedMarket,
  searchCoinInput,
  isMarketNamesLoading,
  isInitCandleLoading,
  heightSize,
  isRootURL,
}) => {
  const dispatch = useDispatch();

  return (
    <St.CoinListContainer isRootURL={isRootURL} heightSize={heightSize - 80}>
      <St.HiddenH3>?????? ?????????</St.HiddenH3>
      <St.CoinSearchContainer>
        <St.CoinSearchInput
          type="search"
          onChange={(e) => dispatch(searchCoin(e.target.value))}
          value={searchCoinInput}
          placeholder={"?????????/????????????"}
        />
        <St.CoinSearchBtn />
      </St.CoinSearchContainer>
      <St.CoinSortContainer>
        <St.CoinSortList width={"50px"} />
        <St.CoinSortList textAlign={"left"}>?????????</St.CoinSortList>
        <St.CoinSortList>?????????</St.CoinSortList>
        <St.CoinSortList>?????????</St.CoinSortList>
        <St.CoinSortList width={"25%"} marginRight={"10px"}>
          ????????????
        </St.CoinSortList>
      </St.CoinSortContainer>
      <St.CoinUl heightSize={heightSize - 140}>
        {isMarketNamesLoading || isInitCandleLoading ? (
          <Loading center={false} />
        ) : (
          sortedMarketNames.map((marketName) => {
            const splitedName = marketName.split("-");
            const enCoinName = splitedName[1] + "/" + splitedName[0];
            const changePrice24Hour =
              latestCoinData[marketName].changePrice24Hour;
            const changeRate24Hour =
              latestCoinData[marketName].changeRate24Hour;
            const tradePrice24Hour =
              latestCoinData[marketName].tradePrice24Hour;
            const price = latestCoinData[marketName].price;
            // const isTraded = latestCoinData[marketName].isTraded;

            const fontColor =
              +changePrice24Hour > 0
                ? theme.strongRed
                : +changePrice24Hour < 0
                ? theme.strongBlue
                : "black";
            return (
              <CoinListItem
                theme={theme}
                marketName={marketName}
                selectedMarket={selectedMarket}
                coinName={marketNames[marketName].korean}
                enCoinName={enCoinName}
                fontColor={fontColor}
                price={price}
                changeRate24Hour={changeRate24Hour + "%"}
                changePrice24Hour={changePrice24Hour}
                tradePrice24Hour={tradePrice24Hour}
                // isTraded={isTraded}
                key={`coinList-${marketName}`}
              />
            );
          })
        )}
      </St.CoinUl>
    </St.CoinListContainer>
  );
};

export default withLatestCoinData()(
  withMarketNames()(
    withSelectedOption()(
      withLoadingData()(withThemeData()(React.memo(CoinList)))
    )
  )
);
