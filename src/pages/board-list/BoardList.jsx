import axios from "axios";
import {useState, useEffect} from "react";
import {Row, Col, Button} from "antd";
import moment from "moment";
import './boardlist.scss';
import { useDispatch,useSelector } from "react-redux";

const BoardList = (props) => {

  const history = props.history;
  const [boardList, setBoardList] = useState([]);
  const token = useSelector((state) => state.Auth.token);
  const getBoardList = async () => {
    const res = await axios.post('https://coinapi.tpnet.io/eventStream',{token});
    setBoardList(res.data);
    
  }

  useEffect(() => {
    getBoardList();
    props.setMenu('/boardlist')
  }, [props]);


  return (
    <div className="boardlist-wrapper">
      <Row style={{marginBottom: "20px"}} justify="end">
        <Button type="primary"
                onClick={() => {
                  history.push("/addboard");
                }}
        >
          글쓰기
        </Button>
      </Row>
      
      {
        boardList.map((item) =>
          <div className="board" key={item.id}
               onClick={() => {
                 history.push("/boardview/${item.id}")
               }}
          >
            <Row>
              <Col span={12} >{item.title}</Col>
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

export default BoardList;