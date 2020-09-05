import React, { useState, Component } from 'react';
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
import { Modal } from 'antd';

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMapComponent extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        style={{height: '300px'}}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Google Map'}
        />
      </GoogleMapReact>
    );
  }
}
GoogleMapComponent.defaultProps = {
  center: {lat: 59.95, lng: 30.33},
  zoom: 11
};

class Register_client extends Component{
    state = { visible: false };
//   const [componentSize, setComponentSize] = useState('default');

//   const onFormLayoutChange = ({ size }) => {
//     setComponentSize(size);
//   };


  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  submit_lat_long = e => {
      console.log('submit')
  }

  render(){

  return (
    <>
    <h2 className="heading" >Register_client</h2>
        <hr></hr>
        <Button type="primary" onClick={this.showModal}>
          Open Maps
        </Button>
        <Modal
          title="Select location"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <h2>Select Location</h2>
        <hr></hr>
        <GoogleMapComponent />
        </Modal>
        
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        /* initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize} */
      >
        <Form.Item label="Latitude">
          <Input />
        </Form.Item>
        <Form.Item label="Longitude">
          <Input />
        </Form.Item>        
        <Form.Item label="Submit">
          <Button onClick={() => this.submit_lat_long()} >Button</Button>
        </Form.Item>
      </Form>
    </>
  );
}
};

export default Register_client;