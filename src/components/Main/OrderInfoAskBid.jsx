import react, { useCallback,useMemo } from "react";
import { useDispatch,useSelector } from "react-redux";
import styled from "styled-components";
import {
  changeAmountAndTotalPrice,
  changePriceAndTotalPrice,
  changeTotalPriceAndAmount,
} from "../../redux/reducers/coinReducer";
// import OrderInfoTradeList from "./OrderInfoTradeList";
import Axios from 'axios';
import { Formik, Form, useField } from "formik";
import "@palmerhq/radio-group/styles.css"; // use the default styles
import * as Yup from "yup";
import {useEffect, useState} from 'react';
import { Select,Radio } from 'antd';
// import { userSetter } from "core-js/fn/symbol";


const St = {
  Container: styled.section`
    width: 100%;
    height: 50%;
    background-color: white;
  `,
  OrderTypeContainer: styled.div`
    display: flex;
    height: 40px;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.lightGray2};

    @media ${({ theme }) => theme.mobileS} {
      font-size: 0.8rem;
    }
  `,
  OrderType: styled.button`
    width: 33.33%;
    height: 100%;
    background-color: white;
    border: none;
    border-bottom: 3px solid
      ${({ borderBottom }) => borderBottom || "tranceparent"};
    outline: 0;
    font-weight: 900;
    color: ${({ fontColor }) => fontColor || "black"};
  `,
  OrderInfoContainer: styled.div`
    width: 100%;
    padding: 15px;
    padding-top: 0;

    @media ${({ theme }) => theme.mobileS} {
      padding: 5px;
    }
  `,
  OrderInfoDetailContainer: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 38px;
    margin-top: 15px;

    @media ${({ theme }) => theme.mobileS} {
      font-size: 0.6rem;
      margint-right: 10px;
    }
  `,
  OrderInfoDetailTitle: styled.span`
    display: block;
    width: 30%;
    margin-top: 15px;
    min-width: 52px;
    max-width: 100px;
    font-size: 0.8rem;
    font-weight: 600;
    color: black;
    margin-left: 5px;
    margin-right: 5px;
  `,
  OrderInfoDetailTitle2: styled.span`
  // display: block;
  // width: 30%;
  margin-top: 15px;
  // min-width: 52px;
  // max-width: 100px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #666;
  margin-left: 230px;
  // margin-right: 0px;
`,
OrderInfoDetailTitle3: styled.span`
// display: block;
// width: 30%;
margin-top: 15px;
// min-width: 52px;
// max-width: 100px;
font-size: 0.8rem;
font-weight: 600;
color: #666;
margin-left: 230px;
// margin-right: 0px;
@media ${({ theme, mobileSNone }) => mobileSNone || theme.mobileS} {
  display : none
}
`,
  OrderInfoInputContainer: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `,
  OrderInfoInput: styled.input`
    width: ${({ width }) => width || "100%"};
    height: 100%;
    margin: 0;
    padding: 5px;
    padding-right: 15px;
    border: 1px solid ${({ theme }) => theme.lightGray2};
    text-align: right;
    font-size: 0.95rem;
    font-weight: ${({ fontWeight }) => fontWeight};
    @media ${({ theme }) => theme.mobileS} {
      font-size: 0.6rem;
    }
  `,
  Button: styled.button`
    width: ${({ width }) => width || "50px"};
    min-width: ${({ minWidth }) => minWidth};
    height: ${({ height }) => height || "38px"};
    margin-right: ${({ marginRight }) => marginRight};
    background-color: ${({ bgColor }) => bgColor || "tranceparent"};
    border: none;
    border-top: 1px solid ${({ borderColor }) => borderColor || "tranceparent"};
    border-right: 1px solid
      ${({ borderColor }) => borderColor || "tranceparent"};
    border-bottom: 1px solid
      ${({ borderColor }) => borderColor || "tranceparent"};
    outline: none;
    color: ${({ fontColor }) => fontColor || "black"};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: 900;
    cursor: pointer;
  `,
  PossibleAmount: styled.span`
    display: block;
    width: 100%;
    text-align: right;
    font-size: 1.2rem;
    font-weight: 600;
    @media ${({ theme }) => theme.mobileS} {
      font-size: 1rem;
    }
  `,
  Unit: styled.span`
    margin-left: 5px;
    font-size: 0.8rem;
    font-weight: 500;
  `,
  FALL :styled.span`
    color: #7878e3 !important;
  `,
  RISE :styled.span`
    color: #f14f4f !important;
  `,
  OrderBtnContainer: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 50px;

    @media ${({ theme }) => theme.mobileS} {
      font-size: 0.8rem;
    }
  `,
};





const OrderInfoAskBid = ({
  theme,
  selectedAskBidOrder,
  coinSymbol,
  orderPrice,
  orderAmount,
  orderTotalPrice,
}) => {
  const dispatch = useDispatch();
  const changePrice = useCallback(
    (e) =>
      dispatch(
        changePriceAndTotalPrice(
          parseInt(e.target.value.replace(/[^0-9-.]/g, ""))
        )
      ),
    [dispatch]
  );
  const token = useSelector((state) => state.Auth.token);

  const changeAmount = useCallback(
    (e) => {
      dispatch(
        changeAmountAndTotalPrice(e.target.value.replace(/[^0-9-.]/g, ""))
      );
    },
    [dispatch]
  );
  const changeTotalPrice = useCallback(
    (e) =>
      dispatch(
        changeTotalPriceAndAmount(
          parseInt(e.target.value.replace(/[^0-9-.]/g, ""))
        )
      ),
    [dispatch]
  );
 
// console.log(token)
  const submitinsertsu = () => {
    Axios.post('https://coinapi.tpnet.io/buy', {
      token: token,
      orderAmount: orderAmount,
      leverage : Selected,
      coinname : coinSymbol
    }).then(() => {
      alert('주문이 완료되었습니다.')
      console.log(coinSymbol);
    })
  };
// console.log(token)
  const submitinsertdo = () => {
    Axios.post('https://coinapi.tpnet.io/sell', {
      token: token,
      orderAmount: orderAmount,
      leverage : Selected,
      coinname : coinSymbol
    }).then(() => {
      alert('주문이 완료되었습니다.');
      console.log(coinSymbol);
    })
  };

  const [listening, setListening] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);

  const [meventSource, msetEventSource] = useState(undefined);

  let eventSource = undefined;
 
  useEffect(() => {
    // console.log("매번 실행되는지");
    // console.log("listening", listening);

    if (!listening) {
      eventSource = new EventSource("https://coinapi.tpnet.io/eventStream/token",{method :"POST"}); //구독

      //msetEventSource(new EventSource("http://localhost:8088/sse"));
      msetEventSource(eventSource); 

      //Custom listener
      // eventSource.addEventListener("Progress", (event) => {
      //   const result = JSON.parse(event.data);
      //   console.log("received:", result);
      //   setData(result.user_balance)
      // });



      eventSource.onopen = event => {
        console.log("connection opened");
      };

      eventSource.onmessage = event => {
        const result = JSON.parse(event.data);
        // console.log("result", result);
        setData(old => [...old, result]);
        setValue(result.user_balance);
      };

      eventSource.onerror = event => {
        console.log(event.target.readyState);
        if (event.target.readyState === EventSource.CLOSED) {
          console.log("eventsource closed (" + event.target.readyState + ")");
        }
        eventSource.close();
      };

      setListening(true);
    }});

    // const sseForUsers = new EventSource("https://coinapi.tpnet.io/eventStream");
    
    // sseForUsers.onopen = (e) => {
    //   console.log("SSE 3 Connected !");
    // };
    
    // sseForUsers.addEventListener("user-list-event", (event) => {
    //   const jsonData = JSON.parse(event.data);
    //   setUsers(jsonData);
    //   console.log(jsonData)
    // });
    
    // sseForUsers.onerror = (error) => {
    //   console.log("SSE For Users error", error);
    //   sseForUsers.close();
    // }
    
    // const [Balance, setBalance] = useState([]);
    // const evtSource = new EventSource("https://coinapi.tpnet.io/eventStream");
    // const eventList = document.querySelector('ul');

    // evtSource.addEventListener('message', (e) => {
    //   const newElement = document.createElement("li");
    //   setBalance(e.data.user_balance)
    //   newElement.textContent = `message: ${e.data}`;
    //   eventList.push(newElement);
    //   console.log(newElement);
    // });
 

      // eventSource.onmessage = (e)=>{updateCurrentStatus(JSON.parse(e.data))};

  // const updateCurrentStatus = (user) => {
  //     setAmount(user.user_balance);
      
  //   };
  
  
  // });
  // const eventSource = new EventSource("https://coinapi.tpnet.io/eventStream")
  // // eventSource.onmessage = (e)=>updateCurrentStatus(JSON.parse(e.data));
  // const [Balance, setAmount] = useState();
  // const updateCurrentStatus = (user) => {
  //     setAmount(user.user_balance);
      
  //   };
  // const InaccountAdd = (props) => {

    // const [Balance, setBalance] = useState([]);
  //   const [isModalVisible, setIsModalVisible] = useState(false);
  //   const token = useSelector((state) => state.Auth.token);
  
  //   // 댓글 가져오기
  // useEffect(() => {
  //   const sse = new EventSource('https://coinapi.tpnet.io/eventStream');

  //     setBalance(data.user_balance)
  //     // process the data here,
  //     // then pass it to state to be rendered
  //   });
  //   sse.onmessage = e => getRealtimeData(JSON.parse(e.data));
  //   sse.onerror = () => {
  //     // error log here 
      
  //     sse.close();
  //   }
  // });

  // const es = new EventSource("https://coinapi.tpnet.io/eventStream", {withCredentials: true});
  // const es = new EventSource("https://coinapi.tpnet.io/eventStream");
  // const [Balance, setDonation] = useState(0);
  // const test = useCallback(()=>es.addEventListener("message", (event) => {
    

  //   // console.log(event.data.getAttribute('user_balance'));
  //   setDonation(event.data);
    

  // }));
  // console.log(Balance);
  // es.addEventListener("error", (event) => {
  //   if (event.type === "error") {
  //     console.error("Connection error:", event.message);
  //   } else if (event.type === "exception") {
  //     console.error("Error:", event.message, event.error);
  //   }
  // });
  
  // es.addEventListener("close", (event) => {
  //   console.log("Close SSE connection.");
  // });


  // const [donation, setDonation] = useState();

  // useEffect(() => {
  //   const source = new EventSource("https://coinapi.tpnet.io/eventStream");

  //   source.addEventListener('message', (e) => {
  //     const data = JSON.parse(e.data);
  //     setDonation(data.user_balance);
  //   });

  //   source.addEventListener('error', (e) => {
  //     console.error('Error: ',  e);
  //   })});
  // const balance = donation;
  const selectList = [1, 5, 10, 20];
  const [Selected, setSelected] = useState(1);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const order=orderPrice ? (orderPrice*Selected).toLocaleString() : "";
  
  // const onChange = (value) => {
  //   console.log('changed', value);
  // };
  
  const volume=orderAmount ? orderAmount.toLocaleString() : "";

  return (

    <St.OrderInfoContainer theme={theme}>
          <St.OrderInfoDetailContainer>
          <St.OrderInfoDetailTitle>주문구분</St.OrderInfoDetailTitle>
          <Formik
            initialValues={{ color: "" }}
            validationSchema={Yup.object().shape({
              color: Yup.string().required()
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
          >
            <Form>
               <Radio.Group
                defaultValue="a"
                size="small"
                style={{
                  marginTop: 16,
                  
                }}
              >
                <Radio.Button value="a">지정가</Radio.Button>
                <Radio.Button value="b">시장가</Radio.Button>
                <Radio.Button value="c">예약 지정가</Radio.Button>
              </Radio.Group>
            </Form>
          </Formik>
          </St.OrderInfoDetailContainer>

          <St.OrderInfoDetailContainer>
            <St.OrderInfoDetailTitle>주문가능</St.OrderInfoDetailTitle>
            <St.PossibleAmount>
                  {value*Selected}
              <St.Unit>
                {selectedAskBidOrder === "bid" ? "KRW" : "KRW"}
              </St.Unit>
            </St.PossibleAmount>
          </St.OrderInfoDetailContainer>
          <St.OrderInfoDetailContainer>
            <St.OrderInfoDetailTitle>
              {selectedAskBidOrder === "bid" ? "매수가격" :selectedAskBidOrder === "ask"?"매도가격": "청산가격"}
            </St.OrderInfoDetailTitle>
            <St.OrderInfoInputContainer>
              <St.OrderInfoInput
                onChange={changePrice}
                value={order}
                fontWeight={800}
                placeholder={0}

              />
              <St.Button
                bgColor={theme.lightGray}
                borderColor={theme.lightGray2}
                fontColor={"#666"}
                fontSize={"1.1rem"}
                // onClick={incrementCount}
              >
                +
              </St.Button>
              <St.Button
                bgColor={theme.lightGray}
                borderColor={theme.lightGray2}
                fontColor={"#666"}
                fontSize={"1.1rem"}
                // onClick={decrementCount}
              >
                -
              </St.Button>
            </St.OrderInfoInputContainer>
          </St.OrderInfoDetailContainer>
          <St.OrderInfoDetailContainer>
            <St.OrderInfoDetailTitle>주문수량</St.OrderInfoDetailTitle>
            <St.OrderInfoInput
              onChange={changeAmount}
              value={volume}
              placeholder={0}
            />
          </St.OrderInfoDetailContainer>
          <St.OrderInfoDetailContainer>
            <St.OrderInfoDetailTitle>주문총액</St.OrderInfoDetailTitle>
            <St.OrderInfoInput
              onChange={changeTotalPrice}
              value={orderTotalPrice ? (orderTotalPrice*Selected).toLocaleString() : ""}
              placeholder={0}
            />
          </St.OrderInfoDetailContainer>
          <St.OrderInfoDetailContainer>
          <St.OrderInfoDetailTitle>레버리지</St.OrderInfoDetailTitle>
          <select onChange={handleSelect} value={Selected}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
          <span>배 (최대 20배)</span>
          
          </St.OrderInfoDetailContainer>
          <St.OrderInfoDetailTitle3>최소주문금액: 10,000KRW/수수료: 0.3%</St.OrderInfoDetailTitle3>
          <St.OrderBtnContainer>
      {selectedAskBidOrder === "bid"
        ? <St.Button
          width={"30%"}
          minWidth={"70px"}
          marginRight={"5px"}
          bgColor={theme.deepBlue}
          fontSize={"0.9rem"}
          fontColor={"white"}
          onClick={changeTotalPrice}
        >
          초기화
        </St.Button>
        : 
        <St.Button
        width={"30%"}
        minWidth={"70px"}
        marginRight={"5px"}
        bgColor={theme.deepBlue}
        fontSize={"0.9rem"}
        fontColor={"white"}
        onClick={changeTotalPrice}
      >
        초기화
      </St.Button>
      
      }
        {selectedAskBidOrder === "bid" 
        ? <St.Button
        width={"65%"}
        bgColor={theme.priceUp}
        fontSize={"1rem"}
        fontColor={"white"}
        className="submit-button"
        onClick={submitinsertsu}
      >
        매수
      </St.Button> 
        : 
        <St.Button
        width={"65%"}
        bgColor={theme.priceDown}
        fontSize={"1rem"}
        fontColor={"white"}
        className="submit-button"
        onClick={submitinsertdo}
        
      >
        매도
      </St.Button> 
      }
        
      </St.OrderBtnContainer>

      

    </St.OrderInfoContainer>
  );
};

export default react.memo(OrderInfoAskBid);
