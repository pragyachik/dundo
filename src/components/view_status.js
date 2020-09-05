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
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const View_status = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
    <h2 className="heading" >View Status</h2>
        <hr></hr>
        <Timeline>
    <Timeline.Item color="green">Order Placed</Timeline.Item>
    <Timeline.Item color="green" dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>Order posted to blockchain</Timeline.Item>
    <Timeline.Item color="red">Order Accepted
    </Timeline.Item>
    <Timeline.Item>Order Complete
    </Timeline.Item>
    <Timeline.Item color="gray">Security deposit refunded
    </Timeline.Item>
  </Timeline>
    </>
  );
};

export default View_status;