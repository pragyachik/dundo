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

class Place_an_order extends Component{
  state = { 
    visible: false,
    latitude: 0,
    longitude: 0, 
    address: '',
    instructions: '',
  };
  constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
  }
  submit_place_order = e => {
    console.log('submit');
    var first_lat = 0;
    var decimal_lat = 0;
    var first_long = 0;
    var decimal_long = 0;
    if(this.state.latitude.includes('.')){
      first_lat = this.state.latitude.split('.')[0];
      decimal_lat = this.state.latitude.split('.')[1];
    }
    else{          
      first_lat = this.state.latitude;
    }
    if(this.state.longitude.includes('.')){
      first_long = this.state.latitude.split('.')[0];
      decimal_long = this.state.longitude.split('.')[1];
    }
    else{          
      first_long = this.state.longitude;
    }
  //   console.log(first_lat,decimal_lat,first_long,decimal_long);
    this.props.contract_place_order(first_lat,decimal_lat,first_long,decimal_long,this.state.instructions,this.state.address)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render(){
    return (
      <>
      <h2 className="heading" >Place an Order</h2>
          <hr></hr>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
        >
          <Form.Item label="Pickup Instructions">
            <Input.TextArea name="instructions" onChange={this.handleChange}/>
          </Form.Item>
          <Form.Item label="Pickup Address">
            <Input name="address" onChange={this.handleChange}/>
          </Form.Item>
          <Form.Item label="Pickup Latitude">
            <Input type='number' name="latitude" onChange={this.handleChange}/>
          </Form.Item>
          <Form.Item label="Pickup Longitude">
            <Input type='number' name="longitude" onChange={this.handleChange}/>
          </Form.Item>
          <Form.Item label="Submit">
            <Button onClick={() => this.submit_place_order()}>Submit</Button>
          </Form.Item>
        </Form>
      </>
    );
  }
};

export default Place_an_order;