pragma solidity >= 0.5.0 < 0.7.0;
import "./DundoDeliver.sol";
contract DundoMatch is DundoDeliver{
    Guy[] mismatch_stack;
    uint256 max_time = 30 minutes;
    uint256 max_active = 30 minutes;
    event guy_expired(address indexed myAddress);
    event order_expired(address indexed myAddress);
    function _FindMatch(Order memory order) internal returns(bool, Guy memory){
        Guy memory current;
        bool match_found = false;
        Guy memory match_G;
        uint256 GCount = active_guys;
        while(GCount>0){
            current = _popRightG();
            if(order.cancelled){
                break;
            }
            if(now - order.createTime > max_time){
                OwnerHasOrder[order.c.publicKey] = false;
                
                emit order_expired(order.c.publicKey);
                _RefundConsumer(order, SecurityDeposit);
                break;
            }

            if(current.active == false){
                GCount--;
                continue;
            }
            if(now - current.active_since > max_active){
                GCount--;
                emit guy_expired(current.publicKey);
                _RefundGuy(order, SecurityDeposit);
                continue;
            }

            if(_inRadius(current, order)){
                match_found = true;
                match_G = current;
                break;
            } else{
                mismatch_stack.push(current);
            }
        }
        
        for(uint i = mismatch_stack.length-1; i>=0 ; i--){
            _pushRightG(mismatch_stack[i]);
        }
        delete mismatch_stack;
        return (match_found, match_G);
        
    }
    
    //Order[] mismatch_order;
    event order_assign(bytes32 deliveryPersonname, address indexed myAddress, uint256 pin);
    event order_fail(address indexed myAddress);
    event delivery_assign(bytes32 pickup_address, bytes32 instructions, uint256[] pickup_location);
    /*
    function _sift_and_assign() private {
        Order memory current;
        uint256 OCount = active_orders;
        while(OCount>0){
            current = _popRightO();
            if(current.cancelled){
                OCount--;
                continue;
            }
            if(current.fail_tries > max_tries){
                OCount--;
                emit order_fail();
                continue;
            }
            if(now - current.createTime > max_time){
                OCount--;
                emit order_fail();
                continue;
            }
            bool match_found;
            Guy memory g;
            (match_found, g) = _FindMatch(current);
            if(match_found){
                current.g = g;
                current.assigned = true;
                current.status = bytes32(abi.encodePacked('Delivery Executive', g.name, 'is on the way'));
                OCount--;
                emit order_assign(g.name);
            } else{
                current.fail_tries += 1;
                _pushLeftO(current);
                OCount--;
            }
        }
    }
    */

    
    function PlaceOrder(bytes32 pickup_address, bytes32 instructions, uint256[] calldata pickup_location) external payable onlyConsumer{
        require(msg.value == SecurityDeposit);
        require(OwnerHasOrder[msg.sender] == false);
        uint256 order_index = _createOrder(OwnerToConsumer[msg.sender], pickup_address, instructions, pickup_location);
        Order storage ord = OrdersList[order_index];
        OwnerHasOrder[msg.sender] = true;
        bool match_found;
        Guy memory g;
        Consumer memory c = _consumers[OwnerToConsumer[msg.sender]];
        ord.c = c;
        (match_found, g) = _FindMatch(ord);
        if(match_found){
                ord.g = g;
                ord.assigned = true;
                OwnerHasDelivery[g.publicKey] = true;
                OwnerToDelivery[g.publicKey] = order_index;
                g.active_since = now;
                emit order_assign(g.name, msg.sender, ord.pin);
                emit delivery_assign(pickup_address, instructions, pickup_location);
        } else{
            emit order_fail(msg.sender);
        }

        
        
        

        
    }
}