import React, { useState } from 'react';
import { Carousel } from 'antd';
var imageName = require('../images/deliveryman.jpg');
var imageName2 = require('../images/deliverygirl.jpg');
var imageName3 = require('../images/motorcycle.jpg');

const contentStyle = {
  height: '600px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const About_page = () => {
  return (
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><div><img src={imageName} height="900"/></div></h3>        
    </div>
    <div>
    <h3 style={contentStyle}><div><img src={imageName3} /></div></h3> 
    </div>
    <div>
    <h3 style={contentStyle}><div><img src={imageName2} height="800"/></div></h3> 
    </div>
  </Carousel>
  );
};

export default About_page;