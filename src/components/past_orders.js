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

import { Card } from 'antd';

const Past_orders = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
    <h2 className="heading" >Past Orders</h2>
        <hr></hr>
        <Card title="History">
    <Card type="inner" title="Order 1" extra={<a href="#">More</a>}>
      pickup medicine from apollo pharmacy and deliver to my grandma
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Order 2"
      extra={<a href="#">More</a>}
    >
      biryani from nandhini deluxe
    </Card>
  </Card>
    </>
  );
};

export default Past_orders;