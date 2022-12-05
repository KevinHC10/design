import React, { useCallback } from 'react';
import '../css/Coin.css';
import { useSummaryDispatch } from '../context/ExchangeContext';

const HoldCoin = ({ data, name, realtimePrice }) => {
  const { fullcode, totalPrice, volume } = data;

  //toFixed *번째 자릿수에서 반올림
  // 변동률 내가 산 금액에서 실시간 가격올라가고 내려갈때마다 변동 가격
  const average = parseFloat((totalPrice / data.volume).toFixed(2));
//실시간 가격에 내꺼 추가해서 나눔 
  const earnReturn = ((realtimePrice - average) / realtimePrice) * 100;
  const est = volume * realtimePrice;

  const dispatch = useSummaryDispatch();
  const selectCoin = useCallback(() => {
    dispatch({
      type: 'SELECT_COIN',
      code: fullcode,
      name,
    });
  }, [dispatch, fullcode, name]);
  return (
    <div className="Hold__Coin Coin" onClick={selectCoin}>
      <div className="Coin__Name">
        <p>{name}</p>
        <span>{fullcode}</span>
      </div>
      <div
        className={`Coin__Price ${
          realtimePrice === average
            ? ''
            : realtimePrice > average
            ? 'RISE'
            : 'FALL'
        }`}
      >
        <p>
          {est.toLocaleString()}
          <span>
            {volume.toLocaleString()}&nbsp;
            {fullcode.split('-')[1]}
          </span>
        </p>
      </div>
      <div
        className={`Coin__Change__Price ${
          earnReturn === 0 ? '' : earnReturn > 0 ? 'RISE' : 'FALL'
        }`}
      >
        <p>{earnReturn.toFixed(2)}%</p>
      </div>
      <div className="Coin__Average">
        <p>
          {totalPrice.toLocaleString()}&nbsp;
          <span>
            {average.toLocaleString()} {fullcode.split('-')[0]}
          </span>
        </p>
      </div>
    </div>
  );
};
export default HoldCoin;
