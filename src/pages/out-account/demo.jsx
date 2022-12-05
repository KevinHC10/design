import React from 'react';
import 'antd/dist/antd.css';
import { Button, Descriptions, PageHeader, Row, Statistic, Tag } from 'antd';


const App = () => (
  <>
    <PageHeader
      onBack={() => window.history.back()}
      title="출금신청"
      tags={<Tag color="blue">Running</Tag>}
      subTitle="This is a subtitle"
      extra={[
      ]}
    >
    </PageHeader>
  </>
);

export default App;