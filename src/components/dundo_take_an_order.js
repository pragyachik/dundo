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

const Dundo_take_an_order = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
    <h2 className="heading" >Take an order</h2>
        <hr></hr>
        <Card title="List of available orders">
    <Card type="inner" title="Client 1: 0x569c7f0b41ce9649602a0218cd02ed0b0a3d93130329451cc782b7dfda79ce71" extra={<a href="#">More</a>}>
      Deliver tomatoes to india, near the aquarium
      <Button>Accept</Button>
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Client 2: 0x45d25abffe8c792d74d30346429b5bc244b815eeb378a9c38395f7a466cf6894"
      extra={<a href="#">More</a>}
    >
      Deliver the television in my warehouse to my current address.
      <Button>Accept</Button>
    </Card>
  </Card>
    </>
  );
};

export default Dundo_take_an_order;