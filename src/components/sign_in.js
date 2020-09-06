import React, { useState, Component } from 'react';
import { Skeleton } from 'antd';
import { Statistic, Row, Col, Button } from 'antd';

function Sign_in (props){
    return (
        <div className="container">
        <Row gutter={14}>
            <Col span={12}>
            <Statistic title="Your Account" value={props.account} />
            </Col>
            <Col span={12}>
            <Statistic title="Balance (Ether)" value={props.balance} precision={2} />
            <Button onClick={props.showportis} style={{ marginTop: 16 }} type="primary">
                Show Portis
            </Button>
            </Col>
        </Row>
        </div>
        );
};

export default Sign_in;

{/* var dundo;
        var userAccount;
        function startApp(){
            var dundoAddress = "YOUR_CONTRACT_ADDRESS";
            dundo = new web3js.eth.Contract(dundoABI, dundoAddress);

            var accountInterval = setInterval(function() {
                if(web3.eth.accounts[0] !== userAccount){
                    userAccount = web3.eth.accounts[0];
                }
            },100);
        }

        function PlaceOrder(pickup_address, instructions, pickup_location){//string, string, int[]
            dundo.methods.PlaceOrder(pickup_address, instructions, pickup_location).send({ from: userAccount, value: web3.utils.toWei("0.033", "ether") });
        }
        function Deliver(){
            dundo.methods.Deliver().send({ from: userAccount, value: web3.utils.toWei("0.033", "ether") });
        }
        function EnterPin(pin){
            dundo.methods.EnterPin(pin).send();

        }
        function CancelOrder(){
            dundo.methods.CancelOrder().send();
        }
        function CancelDelivery(){
            dundo.methods.CancelDelivery().send();
        }
        function RegisterConsumer(home_address){//home_address is a list of integers
            dundo.methods.RegisterConsumer(home_address).send();
        }
        function RegisterGuy(area, name){ //area is a list of integers, name is a string
            dundo.methods.RegisterGuy(area,name).send();
        }

        dundo.events.OrderCancelled({ filter: { owner: userAccount } })
        .on("data", function(event){
            let return_values = event.returnValues;
            $("#OrderStatus").text("This Order was Cancelled by the consumer.");

        }).on("error", console.error);

        dundo.events.DeliveryCancelled({ filter: { owner: userAccount } })
        .on("data", function(event){
            let return_values = event.returnValues;
            $("#OrderStatus").text("This Order was Cancelled by the Delivery Executive.");
        })

        dundo.events.order_assign({filter: {myAddress: userAccount}})
        .on("data", function(event){
            let return_values = event.returnValues;
            $("#OrderStatus").text(event.deliveryPersonname+" is on the way to delivery your order. PIN: ${return_values.pin}");
        })

        dundo.events.order_fail({filter: {myAddress: userAccount}})
        .on("data", function(event){
            let return_values = event.returnValues;
            $("#OrderStatus").text("No Delivery Executive found. Please try again.");
        })

        dundo.events.delivery_assign({filter: {myAddress: userAccount}})
        .on("data", function(event){
            let return_values = event.returnValues;
            $("#DeliveryStatus").text("You have been assigned a delivery.\n PickUpAddress is ${return_values.pickup_address}\n Instructions: ${returnValues.instructions}");
        })

        dundo.events.guy_expired({filter: {myAddress: userAccount}})
        .on("data", function(event){
            let return_values = event.returnValues;
            $("#DeliveryStatus").text("Bad day for business. You waited 30 minutes without an order. Please re-join the queue.");
        })
        dundo.events.added_to_queue({filter: {myAddress: userAccount}})
        .on("data", function(event){
            let return_values = event.returnValues;
            $("#DeliveryStatus").text("You were successfully added to the queue. Waiting for an order...");
        })
        dundo.events.PinSuccess({filter: {guy_a: userAccount}})
        .on("data", function(event){
            let return_values = event.returnValues;
            let pin_correct = return_values.success;
            if(pin_correct){
                $("#DeliveryStatus").text("Correct pin! ");
            } else{
                $("#DeliveryStatus").text("Incorrect pin! ");
            }
            
        })
        dundo.events.orderFulfilled({filter: {guy_a: userAccount}})
        .on("data", function(event){
            let return_values = event.returnValues;
            $("#DeliveryStatus").text("Your delivery has been fulfilled.");
        })
        dundo.events.orderFulfilled({filter: {consumer_a: userAccount}})
        .on("data", function(event){
            let return_values = event.returnValues;
            $("#OrderStatus").text("Your order has been fulfilled.");
        })
        




      window.addEventListener('load', function(){
          if(typeof web3 !== 'undefined'){
              web3js = new Web3(web3.currentProvider);
          } else{
            //handle case where user doesn't have metamask
          }

          startApp()
      }) */}