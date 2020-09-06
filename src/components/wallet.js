import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

import { Card, Col, Row } from 'antd';

const Wallet = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
    <h2 className="heading" >Wallet</h2>
        <hr></hr>
        <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Security Deposit" bordered={false}>
          0.0 Eth
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Amount in wallet" bordered={false}>
          19.99 Eth
        </Card>
      </Col>
    </Row>
  </div>
    </>
  );
};

export default Wallet;