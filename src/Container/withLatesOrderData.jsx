import React from "react";
import { useSelector } from "react-redux";

const withLatestCoinData = () => (OriginalComponent) => (props) => {
  const coinListDatas = useSelector((state) => state.Coin.candle.data); // 코인들 데이터

  const latestCoinData = {};

  if (Object.keys(coinListDatas).length > 2) {
    Object.keys(coinListDatas).forEach((OrderCoinName) => {
      latestCoinData[OrderCoinName] = {};
      latestCoinData[OrderCoinName].price =
        coinListDatas[OrderCoinName].candles[
          coinListDatas[OrderCoinName].candles.length - 1
        ].close;

      latestCoinData[OrderCoinName].changeRate24Hour = (
        Math.round(coinListDatas[OrderCoinName].changeRate24Hour * 10000) / 100
      ).toFixed(2);

      latestCoinData[OrderCoinName].changePrice24Hour =
        coinListDatas[OrderCoinName].changePrice24Hour;

      latestCoinData[OrderCoinName].tradePrice24Hour = Math.floor(
        coinListDatas[OrderCoinName].tradePrice24Hour / 1000000
      );
    });
  }

  return <OriginalComponent {...props} latestCoinData={latestCoinData} />;
};

export default withLatestCoinData;
