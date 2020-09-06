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

import { Rate } from 'antd';
import { Statistic, Row, Col } from 'antd';

const Dundo_your_rating = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
    <h2 className="heading" >Your Rating</h2>
        <hr></hr>
        <Rate allowHalf defaultValue={2.5} />
        <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Orders Completed" value={3} />
    </Col>
    <Col span={12}>
      <Statistic title="Total Earned(Eth)" value={33} precision={2} />
      <Button style={{ marginTop: 16 }} type="primary">
        Recharge
      </Button>
    </Col>
  </Row>
    </>
  );
};

export default Dundo_your_rating;