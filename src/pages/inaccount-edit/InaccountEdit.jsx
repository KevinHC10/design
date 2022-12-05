import * as Yup from "yup";
import {Formik, ErrorMessage} from "formik";
import {Form, Input, Button} from 'antd'
import './inaccountedit.scss';
// axios interceptor
import api from "../../utils/api";
import {useEffect} from "react";

const InaccountEdit = (props) => {

  const history = props.history;
  const validationSchema = Yup.object().shape({
    title: Yup
      .string()
      .required("입금요청 금액"),
    content: Yup
      .string()
      .required("")
  })
  const submit = async (values) => {
    const {in_account,content} = values;

    const inaccount = {
      id: props.match.params.id,
      in_account: in_account,
      content: content,
    }
    const res = await api.put('/api/inaccount', inaccount);
    history.push("/inaccount");
  }
  useEffect(()=>{
    props.setMenu('/inaccount')
  }, [props])

  return (
    <Formik
      initialValues={{

        in_account: "",
        content: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submit}
    >
      {({values, handleSubmit, handleChange}) => (
        <div className="inaccountedit-wrapper">
          <h1>입금신청</h1>
          <Form
            layout="vertical"
            autoComplete="off"
            onFinish={handleSubmit}
          >
            <Form.Item className="input-form" label="입금액">
              <Input value={values.account} name="in_account" onChange={handleChange}/>
              <div className="error-message">
                <ErrorMessage name="in_account"/>
              </div>
            </Form.Item>
            <Form.Item className="textarea-form" label="내용">
              <Input.TextArea value={values.content} name="content" onChange={handleChange}/>
              <div className="error-message">
                <ErrorMessage name="content"/>
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
export default InaccountEdit;