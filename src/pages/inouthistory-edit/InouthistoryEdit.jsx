import * as Yup from "yup";
import {Formik, ErrorMessage} from "formik";
import {Form, Input, Button} from 'antd'
import './inouthistoryedit.scss';
// axios interceptor
import api from "../../utils/api";
import {useEffect} from "react";

const InouthistoryEdit = (props) => {

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
    const {title, content} = values;

    const inouthistory = {
      id: props.match.params.id,
      title: title,
      content: content,
    }
    const res = await api.put('/api/inouthistory', inouthistory);
    history.push("/inouthistory");
  }
  useEffect(()=>{
    props.setMenu('/inouthistory')
  }, [props])

  return (
    <Formik
      initialValues={{

        title: "",
        content: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submit}
    >
      {({values, handleSubmit, handleChange}) => (
        <div className="inouthistoryedit-wrapper">
          <h1>게시판 수정하기</h1>
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
export default InouthistoryEdit;