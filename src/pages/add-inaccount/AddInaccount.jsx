import * as Yup from "yup";
import {Formik, ErrorMessage} from "formik";
import {Form, Input, Button} from 'antd'
import './addinaccount.scss';
import {jwtUtils} from "../../utils/JwtUtils";
import {useSelector} from "react-redux";
// axios interceptor
import api from "../../utils/api";
import {useEffect} from "react";

const AddInaccount = (props) => {

  const token = useSelector((state) => state.Auth.token);
  const history = props.history;

  const validationSchema = Yup.object().shape({
    amount: Yup
      .string()
      .required("금액을 입력하세요"),

  })
  const submit = async (values) => {
    const {amount, content} = values;

    const inaccount = {
      amount: amount,
      token : token
    }
    const res = await api.post('https://coinapi.tpnet.io/deposit', inaccount)
                alert('입금신청이 완료되었습니다.');
    console.log(res);
    console.log(amount);
    history.push("/inaccount");
  }

  useEffect(()=>{
    props.setMenu('/AddInaccount')
  }, [props])

  return (
    <Formik
      initialValues={{
        amount: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submit}
    >
      {({values, handleSubmit, handleChange}) => (
        <div className="AddInaccount-wrapper">
          <Form
            layout="vertical"
            autoComplete="off"
            onFinish={handleSubmit}
          >
            <Form.Item className="input-form" label="입금신청금액">
              <Input value={values.amount} name="amount" onChange={handleChange}/>
              <div className="error-message">
                <ErrorMessage name="amount"/>
              </div>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default AddInaccount;