import React from "react";

import { CRYPTO_COMPARE } from "./keys";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";
import { TickerTape } from "react-ts-tradingview-widgets";
import "./home.css"

import {
  XYPlot,
  Hint,
  LineSeries,
  FlexibleXYPlot,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  AreaSeries
} from "react-vis";

// var formatter = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD"

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
// });


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    times: [],
    high: [],
    low: [],
    chartData: [],
    query: "BTC",
    leaderboard: [],
    addressData: "",
    symbol: ""
  };

  // componentDidMount() {
  //   this.loadChartData();
  // }

  // loadChartData = async () => {
  //   const response = await fetch(
  //     `https://min-api.cryptocompare.com/data/blockchain/histo/day?fsym=${this.state.query}&api_key=${CRYPTO_COMPARE}&limit=30`
  //   );
  //   const data = await response.json();
  //   const bulkData = data.Data.Data;
  //   const dataArray = [];
  //   {
  //     //this needs to be updated to time, active_addresses, average_transaction_value, current_supply, new_addresses,
  //     // symbol, transaction_count, transaction_count_all_time
  //     // bulkData.map((y) =>
  //     //   dataArray.push({
  //     //     time: y.time,
  //     //     active_addresses: y.active_addresses,
  //     //     average_transaction_value: y.average_transaction_value,
  //     //     current_supply: y.current_supply,
  //     //     symbol: y.symbol,
  //     //     transaction_count: y.transaction_count,
  //     //     transaction_count_all_time: y.transaction_count_all_time
  //     //   })
  //     // );
  //     bulkData.map((y) =>
  //       dataArray.push({
  //         x: y.time * 1000,
  //         y: y.transaction_count * y.average_transaction_value
  //       })
  //     );
  //   }
  //   this.setState({ chartData: dataArray });
  //   this.setState({ symbol: this.state.query });
  // };


  render() {
    const { chartData, query, addressData, symbol } = this.state;

    return (
      <div>
        <div className="inputDiv">
          <TradingViewEmbed
              widgetType={widgetType.TICKER_TAPE}
              widgetConfig={{
              showSymbolLogo: true,
              isTransparent: false,
              displayMode: "adaptive",
              colorTheme: "dark",
              autosize: true,
              symbols: [
                {
                  proName: "BITSTAMP:ETHUSD",
                  title: "ETH/USD"
                },
                {
                  proName: "BITSTAMP:BTCUSD",
                  title: "BTC/USD"
                },
                {
                  proName: "BINANCE:BNBUSDT",
                  title: "BNB/USDT"
                },
                {
                  proName: "BINANCE:ADAUSD",
                  title: "ADA/USD"
                },
                {
                  proName: "BINANCE:DOTUSDT",
                  title: "DOT/USDT"
                },
                {
                  proName: "UNISWAP:UNIUSDT",
                  title: "UNI/USDT"
                }
              ]
            }}
          />
        </div>
        {/* <TickerTape colorTheme="dark"></TickerTape> */}
        <div>
          <TradingViewEmbed
            widgetType={widgetType.MARKET_DATA}
            widgetConfig={{
              showSymbolLogo: true,
              // isTransparent: false,
              // autosize: true,
              // displayMode: "adaptive",
              colorTheme: "dark",
              locale: "kr",
              width: "75%",
              // height: "",
              symbolsGroups: [
    {
      "name": "Overview",
      "symbols": [
        {
          "name": "CRYPTOCAP:TOTAL"
        },
        {
          "name": "BITSTAMP:BTCUSD"
        },
        {
          "name": "BITSTAMP:ETHUSD"
        },
        {
          "name": "FTX:SOLUSD"
        },
        {
          "name": "BINANCE:AVAXUSD"
        },
        {
          "name": "COINBASE:UNIUSD"
        }
      ]
    },
    {
      "name": "Bitcoin",
      "symbols": [
        {
          "name": "BITSTAMP:BTCUSD"
        },
        {
          "name": "COINBASE:BTCEUR"
        },
        {
          "name": "COINBASE:BTCGBP"
        },
        {
          "name": "BITFLYER:BTCJPY"
        },
        {
          "name": "CEXIO:BTCRUB"
        },
        {
          "name": "CME:BTC1!"
        }
      ]
    },
    {
      "name": "Ethereum",
      "symbols": [
        {
          "name": "BITSTAMP:ETHUSD"
        },
        {
          "name": "KRAKEN:ETHEUR"
        },
        {
          "name": "COINBASE:ETHGBP"
        },
        {
          "name": "BITFLYER:ETHJPY"
        },
        {
          "name": "BINANCE:ETHBTC"
        },
        {
          "name": "BINANCE:ETHUSDT"
        }
      ]
    },
    {
      "name": "Solana",
      "symbols": [
        {
          "name": "FTX:SOLUSD"
        },
        {
          "name": "BINANCE:SOLEUR"
        },
        {
          "name": "COINBASE:SOLGBP"
        },
        {
          "name": "BINANCE:SOLBTC"
        },
        {
          "name": "HUOBI:SOLETH"
        },
        {
          "name": "BINANCE:SOLUSDT"
        }
      ]
    },
    {
      "name": "Uniswap",
      "symbols": [
        {
          "name": "COINBASE:UNIUSD"
        },
        {
          "name": "KRAKEN:UNIEUR"
        },
        {
          "name": "COINBASE:UNIGBP"
        },
        {
          "name": "BINANCE:UNIBTC"
        },
        {
          "name": "KRAKEN:UNIETH"
        },
        {
          "name": "BINANCE:UNIUSDT"
        }
      ]
    }
  ],
            }}
          />
        </div>
        <div>
          <TradingViewEmbed
            widgetType={widgetType.SYMBOL_OVERVIEW}
            widgetConfig={{
              // showSymbolLogo: true,
              isTransparent: false,
              displayMode: "adaptive",
              colorTheme: "dark",
              chartOnly: false,
              autosize: true,
              // width: 1000,
              // height: 500,
              locale: "kr",
              colorTheme: "light",
              isTransparent: false,
              autosize: false,
              showVolume: true,
              hideDateRanges: false,
              scalePosition: "right",
              scaleMode: "Logarithmic",
              fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
              noTimeScale: true,
              valuesTracking: "1",
              chartType: "area",
              fontColor: "#787b86",
              gridLineColor: "rgba(0, 0, 0, 0.06)",
              lineColor: "#2962ff",
              topColor: "rgba(41, 98, 255, 0.3)",
              bottomColor: "rgba(41, 98, 255, 0)",
              lineWidth: 3,
              container_id: "tradingview_ecda5",
              symbols: [
                [
                  "비트코인",
                  "BINANCE:BTCUSDT|1D"
                ],
                [
                  "이더리움",
                  "BINANCE:ETHUSDT|1D"
                ],
                [
                  "테슬라",
                  "EUREX:TSLF1!|1D"
            
                ]
              ]
            }}
          />
        </div>
      </div>
    );
  }
}







export default Dashboard;
