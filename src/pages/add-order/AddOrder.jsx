import * as Yup from "yup";
import {Formik, ErrorMessage} from "formik";
import {Form, Input, Button} from 'antd'
import './addorder.scss';
import {jwtUtils} from "../../utils/JwtUtils";
import {useSelector} from "react-redux";
// axios interceptor
import api from "../../utils/api";
import {useEffect} from "react";

const AddOrder = (props) => {

  const token = useSelector((state) => state.Auth.token);
  const history = props.history;

  const validationSchema = Yup.object().shape({
    title: Yup
      .string()
      .required("제목을 입력하세요!"),
    content: Yup
      .string()
      .required("내용을 입력하세요!")
  })
  const submit = async (values) => {
    const {order_price, order_amount,coin_name ,order_type,order_lop} = values;

    const order = {
      order_price: order_price,
      order_amount: order_amount,
      coin_name:coin_name,
      order_type:order_type,
      order_lop:order_lop,
      user_id: jwtUtils.getId(token)
    }
    const res = await api.post('/api/order', order);
    console.log(res);
    history.push("/orderlist");
  }

  useEffect(()=>{
    props.setMenu('/addorder')
  }, [props])

  return (
    <Formik
      initialValues={{
        order_price: "",
        order_amount: "",
        coin_name:"",
        order_type:"",
        order_lop:""
      }}
      validationSchema={validationSchema}
      onSubmit={submit}
    >
      {({values, handleSubmit, handleChange}) => (
        <div className="addorder-wrapper">
          <Form
            layout="vertical"
            autoComplete="off"
            onFinish={handleSubmit}
          >
            <Form.Item className="input-form" label="제목">
              <Input value={values.title} name="title" onChange={handleChange}/>
              <div className="error-message">
                <ErrorMessage name="title"/>
              </div>
            </Form.Item>
            <Form.Item className="textarea-form" label="내용">
              <Input.TextArea value={values.content} name="content" onChange={handleChange}/>
              <div className="error-message">
                <ErrorMessage name="content"/>
              </div>
            </Form.Item>

          </Form>
        </div>
      )}
    </Formik>
  );
}

export default AddOrder;