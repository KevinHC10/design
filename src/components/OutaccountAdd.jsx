import {useState, useEffect} from "react";
import {Row, Col, Button, Modal, Input, Form} from "antd";
import {Formik, ErrorMessage} from "formik";
import {jwtUtils} from "../utils/JwtUtils";
import moment from "moment";
import {useSelector} from "react-redux";
import "./OutaccountAdd.scss";
// axios interceptor
import api from "../utils/api";
import axios from "axios";
import * as Yup from "yup";

const {TextArea} = Input;

const OutaccountAdd = (props) => {

  const [comments, setComments] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const token = useSelector((state) => state.Auth.token);

  // 댓글 가져오기
  useEffect(() => {
    getComments(Number(props.outaccout_id));
  }, [props.outaccout_id]);

  const getComments = async (outaccout_id) => {
    const res = await axios.get(`http://localhost:8083/api/comment/list?outaccout_id=${outaccout_id}`);
    setComments(res.data)
  }

  // 댓글 추가하기, 댓글 추가하는 api는 인증 미들웨어가 설정되어 있으므로
  // HTTP HEADER에 jwt-token 정보를 보내는 interceptor 사용
  const submit = async (values) => {

    const comment = {
      outaccout_id: props.outaccout_id,
      out_account: values.out_account,
      user_id: jwtUtils.getId(token)
    }
    // axios interceptor 사용 : 로그인한 사용자만 쓸 수 있다!
    const res = await api.post('/api/comment', out_account);
    window.location.reload();
  }

  // Modal 관련 코드
  const goSignin = () => {
    setIsModalVisible(false);
    // 로그인 후 돌아올 수 있게 현재 경로 세팅
    props.history.push(`/signin?redirectUrl=${props.history.location.pathname}`);
  }
  const handleCancel = () => {
    setIsModalVisible(false);
  }
  // 로그인을 하지 않은 상태에서 댓글 입력 창을 클릭하면 Modal이 열림.
  const isSignin = () => {
    if (!jwtUtils.isAuth(token)) {
      setIsModalVisible(true);
    }
  }

  return (
    <div className="comments-wrapper">
      {/*댓글 추가 부분*/}
      <Formik
        initialValues={{
          out_account: ""
        }}
        validationSchema={
          Yup.object().shape({
            out_account: Yup
              .string()
              .required("내용을 입력하세요!")
          })
        }
        onSubmit={submit}
      >
        {({values, handleSubmit, handleChange}) => (
          <div className="add-comment">
            <h1>댓글 쓰기</h1>
            <Form
              layout="vertical"
              autoComplete="off"
              onFinish={handleSubmit}
            >
              <div className="comment-input">
                <TextArea
                  value={values.content} name="content"
                  onChange={handleChange} showCount maxLength={20}
                  onClick={isSignin}
                />
                <ErrorMessage name="content" className="error-message"/>
              </div>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  댓글 등록
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </Formik>

      {/*댓글 목록 보여주기 부분*/}
      <h1 style={{fontWeight:"bold"}}>댓글 목록</h1>
      <div className="comment-list">
        {comments.map((item) =>
          <div key={item.id}>
            <Row justify="space-between">
              <Col>작성자: {item.user.username}</Col>
              <Col>{moment(item.created).format('YYYY-MM-DD')}</Col>
            </Row>
            <div className="comment-content">{item.out_account}</div>
            <hr/>
          </div>
        )}
      </div>
      <Modal title="로그인이 필요합니다"
             visible={isModalVisible} onOk={goSignin}
             onCancel={handleCancel}
      >
        <p>로그인 하시겠습니까?</p>
      </Modal>

    </div>

  );
}
export default OutaccountAdd;