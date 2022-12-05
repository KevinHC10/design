import axios from "axios";
import {useState, useEffect} from "react";
import {Row, Col, Button} from "antd";
import moment from "moment";
import './orderlist.scss';

const OrderList = (props) => {

  const history = props.history;
  const [orderList, setOrderList] = useState([]);

  const getOrderList = async () => {
    const res = await axios.get('http://localhost:8083/api/order/list');
    setOrderList(res.data);
  }

  useEffect(() => {
    getOrderList();
    props.setMenu('/orderlist')
  }, [props]);


  return (
    <div className="orderlist-wrapper">    
      {
        orderList.map((item) =>
          <div className="order" key={item.id}
               onClick={() => {
                 history.push("/orderview/${item.id}")
               }}
          >
            <Row>
              <Col span={6} >{item.coin_name}</Col>
              <Col className="text-right" span={6} >{item.user.username}</Col>
              <Col className="text-right" span={6}>
                {moment(item.created).format('YYYY-MM-DD')}
              </Col>
            </Row>
            <hr/>
          </div>
        )
      }

    </div>
  );
}

export default OrderList;