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


const Dundo_update_status = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  return (
    <>
    <h2 className="heading" >Update Status</h2>
        <hr></hr>
        <Timeline.Item color="green">Order Placed</Timeline.Item>
        <Timeline.Item color="green" dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>Order posted to blockchain</Timeline.Item>
        <Timeline.Item color="red">Order Accepted
        </Timeline.Item>
        <Timeline.Item>Order Complete
        </Timeline.Item>
        <Timeline.Item color="gray">Security deposit refunded
        </Timeline.Item>
        <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
      >
        <Form.Item label="Field A">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field B">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Dundo_update_status;