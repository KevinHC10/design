import axios from "axios";
import {useState, useEffect} from "react";
import {Row, Col, Button, Card, Modal} from "antd";
import {jwtUtils} from "../../utils/JwtUtils";
import moment from "moment";
import './outaccountview.scss';
import {useSelector} from "react-redux";
// axios interceptor
import api from "../../utils/api";
// 댓글 컴포넌트
import Comments from "../../components/Comments";

const OutaccountView = (props) => {

  const [outaccount, setOutaccount] = useState({
    title: "",
    content: "",
    created: "",
    user: {
      id: "",
      username: ""
    }
  })
  const token = useSelector((state) => state.Auth.token);

  useEffect(() => {
    getOutaccount(props.match.params.id);
    props.setMenu('/outaccount');
  }, [props]);

  const getOutaccount = async (id) => {
    const res = await axios.get(`http://localhost:8083/api/outaccount/${id}`);
    setOutaccount(res.data);
  }

  // Modal 관련 코드
  const [isModalVisible, setIsModalVisible] = useState(false);
  // Modal 띄우기
  const showModal = () => {
    setIsModalVisible(true);
  };
  // Modal에서 OK를 클릭했을 경우
  const deleteOutaccount = async () => {
    // interceptor 사용
    const res = await api.delete(`/api/outaccount/${props.match.params.id}`)
    setIsModalVisible(false);
    props.history.goBack();
  };
  // Modal에서 Cancel을 클릭했을 경우
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (

    <div className="outaccountview-wrapper">
      {
        /*
          해당 글의 작성자가 로그인을 했을 때만 수정, 삭제 버튼이 보이게 하자.
          로그인을 한 사용자의 jwt-token에서 user의 ID를 추출한 후,
          Outaccount(해당 글)의 user의 ID를 비교했을 때 같으면 수정, 삭제 버튼이 보이게 한다.
          ID는 DB에 저장되어 있는 유저의 고유 번호이다.
         */
        jwtUtils.isAuth(token) && jwtUtils.getId(token) === outaccount.user.id &&

        <Row justify="end">
          <Col style={{marginRight: "5px"}}>
            <Button size="large" type="primary"
                    onClick={()=>{
                      props.history.push("/outaccountedit/${props.match.params.id}")
                    }}
            >
              수정하기
            </Button>
          </Col>
          <Col>
            <Button
              size="large" type="primary"
              onClick={showModal}
              danger
            >
              삭제하기
            </Button>
          </Col>
          <Modal title="Delete Outaccount" visible={isModalVisible} onOk={deleteOutaccount} onCancel={handleCancel}>
            <p>정말 삭제하시겠습니까?</p>
          </Modal>
        </Row>
      }
      <Row className="writer-date" justify="space-between">
        <Col>작성자: {outaccount.user.username}</Col>
        <Col>{moment(outaccount.created).format('YYYY-MM-DD')}</Col>
      </Row>
      <Card title={outaccount.title}>
        <p>{outaccount.content}</p>
      </Card>
      {/* 댓글 컴포넌트 추가 */}
      <Comments outaccount_id={props.match.params.id} history={props.history}/>
    </div>

  );
}

export default OutaccountView;