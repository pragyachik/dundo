pragma solidity >= 0.5.0 < 0.7.0;
import "./DundoMatch.sol";
contract DundoDoor is DundoMatch{
    
    uint256 delivery_fee = 0.0015 ether;
    /*
    function CustomerHappy() external onlyConsumer{
        require(OwnerHasOrder[msg.sender]);
        Order memory ord = OwnerToOrder[msg.sender];
        ord.ConsumerHappy = true;
    }
    
    function GuyHappy() external onlyGuy{
        require(OwnerHasDelivery[msg.sender]);
        Order memory ord = OwnerToDelivery[msg.sender];
        ord.GuyHappy = true;
    }
    */
    
    event PinSuccess(bool success, address indexed guy_a);
    event orderFulfilled(address indexed guy_a, address indexed consumer_a);
    
    function _closeOrder(Order memory order) private{
        order.fulfilled = true;
        OwnerHasDelivery[order.g.publicKey] = false;
        OwnerHasOrder[order.c.publicKey] = false;
        order.g.active = false;
        emit orderFulfilled(order.g.publicKey, order.c.publicKey);
        _RefundConsumer(order, SecurityDeposit-delivery_fee);
        _RefundGuy(order, SecurityDeposit+delivery_fee);
    }
    
    function EnterPin(uint ePin) external onlyGuy{
        require(OwnerHasDelivery[msg.sender]);
        Order memory ord = OrdersList[OwnerToDelivery[msg.sender]];
        bool success = ePin == ord.pin;
        if(success){
            emit PinSuccess(success, msg.sender);
            _closeOrder(ord);
        } else{
            emit PinSuccess(success, msg.sender);
        }
        
    }
    
    


}