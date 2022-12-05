import axios from "axios";
import {useState, useEffect} from "react";
import {Row, Col, Button, Card, Modal} from "antd";
import {jwtUtils} from "../../utils/JwtUtils";
import moment from "moment";
import './inaccountview.scss';
import {useSelector} from "react-redux";
// axios interceptor
import api from "../../utils/api";
// 댓글 컴포넌트
import Comments from "../../components/Comments";

const InaccountView = (props) => {

  const [inaccount, setInaccount] = useState({
    in_account: "",
    content: "",
    created: "",
    user: {
      id: "",
      username: ""
    }
  })
  const token = useSelector((state) => state.Auth.token);

  useEffect(() => {
    getInaccount(props.match.params.id);
    props.setMenu('/inaccount');
  }, [props]);

  const getInaccount = async (id) => {
    const res = await axios.get(`http://localhost:8083/api/inaccount/${id}`);
    setInaccount(res.data);
  }

  // Modal 관련 코드
  const [isModalVisible, setIsModalVisible] = useState(false);
  // Modal 띄우기
  const showModal = () => {
    setIsModalVisible(true);
  };
  // Modal에서 OK를 클릭했을 경우
  const deleteInaccount = async () => {
    // interceptor 사용
    const res = await api.delete(`/api/inaccount/${props.match.params.id}`)
    setIsModalVisible(false);
    props.history.goBack();
  };
  // Modal에서 Cancel을 클릭했을 경우
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (

    <div className="inaccountview-wrapper">
      {
        /*
          해당 글의 작성자가 로그인을 했을 때만 수정, 삭제 버튼이 보이게 하자.
          로그인을 한 사용자의 jwt-token에서 user의 ID를 추출한 후,
          inaccount(해당 글)의 user의 ID를 비교했을 때 같으면 수정, 삭제 버튼이 보이게 한다.
          ID는 DB에 저장되어 있는 유저의 고유 번호이다.
         */
        jwtUtils.isAuth(token) && jwtUtils.getId(token) === inaccount.user.id &&

        <Row justify="end">
          <Col style={{marginRight: "5px"}}>
            <Button size="large" type="primary"
                    onClick={()=>{
                      props.history.push("/inaccountedit/${props.match.params.id}")
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
          <Modal title="Delete Inaccount" visible={isModalVisible} onOk={deleteInaccount} onCancel={handleCancel}>
            <p>정말 삭제하시겠습니까?</p>
          </Modal>
        </Row>
      }
      <Row className="writer-date" justify="space-between">
        <Col>작성자: {inaccount.user.username}</Col>
        <Col>{moment(inaccount.created).format('YYYY-MM-DD')}</Col>
      </Row>
      <Card title={inaccount.title}>
        <p>{inaccount.content}</p>
      </Card>
      {/* 댓글 컴포넌트 추가 */}
      <Comments inaccount_id={props.match.params.id} history={props.history}/>
    </div>

  );
}

export default InaccountView;