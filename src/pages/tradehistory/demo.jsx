import React from 'react';
import 'antd/dist/antd.css';
import { Button, Descriptions, PageHeader, Row, Statistic, Tag } from 'antd';


const App = () => (
  <>
    <PageHeader
      onBack={() => window.history.back()}
      title="거래내역"
      tags={<Tag color="blue">Running</Tag>}
      // subTitle="This is a subtitle"
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>,
      ]}
    >
      <Row>
        <Statistic title="상태" value="거래가능" />
        <Statistic
          title="총손익"
          prefix="₩"
          value={568.08}
          style={{
            margin: '0 32px',
          }}
        />
        <Statistic title="내 지갑" prefix="₩" value={3345.08} />
      </Row>
    </PageHeader>
  </>
);

export default App;