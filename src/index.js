import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Web3 from 'web3';

import Place_an_order from './components/place_an_order'
import Register_client from './components/register_client'
import View_status from './components/view_status'
import Wallet from './components/wallet'
import Past_orders from './components/past_orders'
import Dundo_take_an_order from './components/dundo_take_an_order'
import Dundo_update_status from './components/dundo_update_status'
import Dundo_wallet from './components/dundo_wallet'
import Dundo_your_rating from './components/dundo_your_rating'
import About from './components/about'
import Feedback from './components/feedback'
import Clients from './components/clients'
import Dundos from './components/dundos'
import Sign_in from './components/sign_in'
import About_page from './components/about_page'

import { dundoaccess } from './abi/dundoaccess';
const dundoaccess_adr = '0xC0115dA899f8E0F13104B9b60Dc28973a7d59F36';


var pasa_logo = require('./images/pasa_logo.png');

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Dundo extends Component{
  componentWillMount() {
    this.loadBlockchainData();
    console.log('component will mount');
  }

  async loadBlockchainData() {
      let web3;
      if (window.ethereum) {
          web3 = new Web3(window.ethereum);
          try { 
          window.ethereum.enable().then(function() {
              // User has allowed account access to DApp...
          });
          } catch(e) {
          // User has denied account access to DApp...
          }
      }
      // Legacy DApp Browsers
      else if (window.web3) {
          web3 = new Web3(window.web3.currentProvider);
      }
      // Non-DApp Browsers
      else {
          alert('You have to install MetaMask !');
      }
      const accounts = await web3.eth.getAccounts()
      const balance = await web3.eth.getBalance(accounts[0])

      const dundoaccess_contract = new web3.eth.Contract(dundoaccess, dundoaccess_adr);

      this.setState({ 
          account: accounts[0],
          balance: balance/Math.pow(10,18),
          dundoaccess_contract: dundoaccess_contract,
      });
  }

  constructor(props){
    super(props);
    this.state = {
      register_client:true,
      place_an_order:false,
      view_status:false,
      wallet:false,
      past_orders:false,
      dundo_take_an_order:false,
      dundo_update_status:false,
      dundo_wallet:false,
      dundo_your_rating:false,
      about:false,
      dundos:false,
      feedback:false,
      clients:false,
      show_main_content:true,
      sign_in:false,
      dundo_window:false,
      about_page:true,
      account:'',
    }
  }
  
  show_tab = (cur_tab) => {
    this.setState({
      register_client:false,
      place_an_order:false,      
      view_status:false,
      wallet:false,
      past_orders:false,
      dundo_take_an_order:false,
      dundo_update_status:false,
      dundo_wallet:false,
      dundo_your_rating:false,
      about:false,
      dundos:false,
      feedback:false,
      clients:false,
    });
    this.setState({
      [cur_tab]:true,
    });
  }

  show_window = (cur_window) => {
    this.setState({
      sign_in:false,
      dundo_window:false,
      about_page:false,
    });
    this.setState({
      [cur_window]:true,
    });
  }

  render(){
    return (
    <Layout>
      <Header className="header">
        <img className="logo" src={pasa_logo}></img>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>          
          <Menu.Item key="2" onClick={() => this.show_window('about_page')}>About</Menu.Item>
          <Menu.Item key="3" onClick={() => this.show_window('sign_in')}>Account</Menu.Item>
          <Menu.Item key="1" onClick={() => this.show_window('dundo_window')}>Dundo</Menu.Item>
        </Menu>
      </Header>
      { this.state.dundo_window ?
      <Content style={{ padding: '0 50px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Orders">
                <Menu.Item key="1" onClick={() => this.show_tab('register_client')}>Register client</Menu.Item>
                <Menu.Item key="5" onClick={() => this.show_tab('place_an_order')}>Place an Order</Menu.Item>
                <Menu.Item key="2" onClick={() => this.show_tab('view_status')}>View Status</Menu.Item>
                <Menu.Item key="3" onClick={() => this.show_tab('wallet')}>Wallet</Menu.Item>
                <Menu.Item key="4" onClick={() => this.show_tab('past_orders')}>Past orders</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Dundo">
                <Menu.Item key="5" onClick={() => this.show_tab('dundo_take_an_order')}>Take an Order</Menu.Item>
                <Menu.Item key="6" onClick={() => this.show_tab('dundo_update_status')}>Update Status</Menu.Item>
                <Menu.Item key="7" onClick={() => this.show_tab('dundo_wallet')}>Wallet</Menu.Item>
                <Menu.Item key="8" onClick={() => this.show_tab('dundo_your_rating')}>Your Rating</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="Info">
                <Menu.Item key="9" onClick={() => this.show_tab('about')}>About</Menu.Item>
                <Menu.Item key="10" onClick={() => this.show_tab('feedback')}>Feedback</Menu.Item>
                <Menu.Item key="11" onClick={() => this.show_tab('dundos')}>Dundos</Menu.Item>
                <Menu.Item key="12" onClick={() => this.show_tab('clients')}>Clients</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content className="site-layout-background" style={{ padding: '0 24px', minHeight: 280 }}>            
            <div className="content_data">            
              { this.state.register_client ? <Register_client /> : null }
              { this.state.place_an_order ? <Place_an_order /> : null }
              { this.state.view_status ? <View_status /> : null }
              { this.state.wallet ? <Wallet /> : null }
              { this.state.past_orders ? <Past_orders /> : null }
              { this.state.dundo_take_an_order ? <Dundo_take_an_order /> : null }
              { this.state.dundo_update_status ? <Dundo_update_status /> : null }
              { this.state.dundo_wallet ? <Dundo_wallet /> : null }
              { this.state.dundo_your_rating ? <Dundo_your_rating /> : null }
              { this.state.about ? <About /> : null }
              { this.state.feedback ? <Feedback /> : null }
              { this.state.dundos ? <Dundos /> : null }
              { this.state.clients ? <Clients /> : null }
            </div>
          </Content>
        </Layout>
      </Content> : null }
      { this.state.about_page ? <About_page /> : null }
      { this.state.sign_in ? <Sign_in account={ this.state.account } balance={ this.state.balance } /> : null }
      <Footer style={{ textAlign: 'center' }}>Dundo ©2020 Created by pasa</Footer>
    </Layout>
  )
  }
  
};

ReactDOM.render(<Dundo /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();