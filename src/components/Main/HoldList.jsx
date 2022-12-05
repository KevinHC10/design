import React from "react";
import styled from "styled-components";
import '../css/HoldCoinList.css';
import withTradeListData from "../../Container/withTradeListData";
import withThemeData from "../../Container/withThemeData";
import withLoadingData from "../../Container/withLoadingData";

const St = {
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

const OrderList = ({ theme, selectedTradeListData, isTradeListLoading }) => {
  const marketState = useExchangeState();
  const { data: markets } = marketState.market;

  const userState = useUserState();
  return (
    <div className="Hold__Coin__List">
      <div className="List__Head">
        <div className="Coin__Name">
          <span>코인명</span>
        </div>
        <div className="Coin__Price">
          <span>평가금/보유량</span>
        </div>
        <div className="Coin__Change__Price">
          <span>수익률</span>
        </div>
        <div className="Coin__Average">
          <span>매수가/평균가</span>
        </div>
      </div>
      <div className="Coins">
        {!userState.coin ? (
          <p className="not-hold">보유중인 코인이 없습니다.</p>
        ) : (
          userState.coin.map(list => (
            <HoldCoin
              data={list}
              key={list.fullcode}
              name={
                markets.filter(market => market.market === list.fullcode)[0]
                  .korean_name
              }
              realtimePrice={
                marketState.realtimeData.data.filter(
                  data => data.code === list.fullcode,
                )[0].trade_price
              }
            />
          ))
        )}
      </div>
    </div>
  );
};

export default withTradeListData()(
  withLoadingData()(withThemeData()(React.memo(OrderList)))
);
