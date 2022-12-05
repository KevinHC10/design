import styled from "styled-components";
import React, { useContext, useEffect, useRef, useState } from 'react';
import {  Table, Form, Input, Popconfirm } from 'antd';

const St = {

  Container: styled.article`
  width: 100%;
  height: 100%;
  background-color: white;
  margin-top: 10px;
  @media ${({ theme }) => theme.mobileM} {
    margin-top: 0;
  }
`,
HiddenH3: styled.h3`
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(0, 0);
  clip-path: polygon(0, 0);
  overflow: hidden;
  text-indent: -9999px;
`,
TradeListUL: styled.ul`
  overflow-y: scroll;
  scrollbar-color: ${(props) => props.scrollColor};
  scrollbar-width: thin;
  scrollbar-base-color: ${(props) => props.scrollColor};
  &::-webkit-scrollbar {
    width: 5px;
    background-color: white;
    border-radius: 5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.scrollColor};
    border-radius: 5rem;
  }
  height: 320px;
`,
TradeListTitle: styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 25px;
  background-color: ${({ theme }) => theme.lightGray1};
  font-size: 0.9rem;

  @media ${({ theme }) => theme.mobileS} {
    font-size: 0.6rem;
  }
`,
TitleListItem: styled.li`
  width: 20%;

  min-width: 58px;
  text-align: ${({ textAlign }) => textAlign || "center"};
  @media ${({ theme, mobileSNone }) => (mobileSNone ? theme.mobileS : true)} {
    display: none;
  }

  @media ${({ theme, mobileMNone }) => (mobileMNone ? theme.mobileM : true)} {
    display: none;
  }

  @media ${({ theme, mobileSNone }) => mobileSNone || theme.mobileS} {
    width: 50%;
  }
`,
};
const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const OrderInfoTradeList = ({ theme }) => {
  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      name: 'Edward King 0',
      age: '매수',
      address: 'London, Park Lane no. 0',
    },
    {
      key: '1',
      name: 'Edward King 1',
      age: '매도',
      address: 'London, Park Lane no. 1',
    },
    {
      key: '1',
      name: 'Edward King 1',
      age: '매도',
      address: 'London, Park Lane no. 1',
    },
    {
      key: '1',
      name: 'Edward King 1',
      age: '매수',
      address: 'London, Park Lane no. 1',
    },
    {
      key: '1',
      name: 'Edward King 1',
      age: '매도',
      address: 'London, Park Lane no. 1',
    },
  ]);
  // const [count, setCount] = useState(2);

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const defaultColumns = [
    {
      title: '보유코인',
      dataIndex: 'name',
      width: '30%',
      editable: true,
    },
    {
      title: '구분',
      dataIndex: 'age',
    },
    {
      title: '평가금액',
      dataIndex: 'address',
    },
    {
      title: '평가손익(%)',
      dataIndex: 'address',
    },
    {
      title: '보유수량',
      dataIndex: 'address',
    },
    {
      title: '보유금액',
      dataIndex: 'address',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];



  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return <St.Container>

      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns}
        size='small'
      />

        </St.Container>;
};

export default React.memo(OrderInfoTradeList);
