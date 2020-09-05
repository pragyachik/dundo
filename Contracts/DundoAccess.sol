pragma solidity >= 0.5.0 < 0.7.0;
import "./DundoDoor.sol";
contract DundoAccess is DundoDoor{
    
    event OrderCancelled(address indexed owner);
    event DeliveryCancelled(address indexed owner);
    uint256 itemFee = SecurityDeposit/2; //Assumed cost of the item to be delivered
    function CancelOrder() external onlyConsumer{ //Delivery fee and item fee forfeited. Rest returned.
        require(OwnerHasOrder[msg.sender]);
        Order storage order = OrdersList[OwnerToOrder[msg.sender]];
        order.cancelled = true;
        emit DeliveryCancelled(order.g.publicKey);
        emit OrderCancelled(msg.sender);
        _RefundGuy(order, SecurityDeposit+delivery_fee+itemFee);
        _RefundConsumer(order, SecurityDeposit-delivery_fee-itemFee);
    }
    function CancelDelivery() external onlyGuy{ //Item fee forfeited. An amount equal to delivery fee forfeited. Rest returned.
        require(OwnerHasDelivery[msg.sender]);
        Order storage order = OrdersList[OwnerToDelivery[msg.sender]];
        order.cancelled = true;
        emit DeliveryCancelled(msg.sender);
        emit OrderCancelled(order.c.publicKey);
        _RefundGuy(order, SecurityDeposit - delivery_fee);
        _RefundConsumer(order, SecurityDeposit+delivery_fee);
    }
    
    function SetDeliveryFee(uint _DeliveryFee) external onlyOwner{
        delivery_fee = _DeliveryFee;
    }
    function SetSecurityDeposit(uint _SecurityDeposit) external onlyOwner{
        SecurityDeposit = _SecurityDeposit;
    }
    function SetItemFee(uint _itemFee) external onlyOwner{
        itemFee = _itemFee;
    }
    
}