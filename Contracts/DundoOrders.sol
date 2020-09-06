pragma solidity >= 0.5.0 < 0.7.0;
import "./DundoFramework.sol";
contract DundoOrders is DundoFramework{
    uint SecurityDeposit = 0.033 ether;
    modifier onlyConsumer(){
        require(OwnerIsConsumer[msg.sender] == true);
        _;
    }
    struct Order{
        Consumer c;
        Guy g;
        bytes32 pickup_address;
        uint256[] pickup_location;
        bytes32 instructions;
        uint256[] home_address;
        uint256 createTime;
        bytes32 status;
        bool assigned;
        bool fulfilled;
        bool GuyHappy;
        bool ConsumerHappy;
        bool cancelled;
        uint pin; //Password for fulfilment of order
    }
    
    Order[] internal OrdersList;
    uint256[] BogusAddress;
    Guy BogusG = Guy(address(0x0), BogusAddress, 'noname', false, now);
    
    mapping (address => bool) OwnerHasOrder;
    mapping (address => uint) OwnerToOrder;
    
        function _RefundConsumer(Order memory order, uint256 amount) internal {
        require(order.fulfilled);
        address payable recipient = address(uint160(order.c.publicKey));
        recipient.transfer(amount);
        
    }
    
    function _RefundGuy(Order memory order, uint256 amount) internal {
        require(order.fulfilled);
        address payable recipient = address(uint160(order.g.publicKey));
        recipient.transfer(amount);
    }

    /*
    mapping(uint256 => Order) deque_orders;
    uint256 firstO = 2**255;
    uint256 lastO = firstO - 1;
    uint256 active_orders = 0;

    function _pushLeftO(Order memory order) internal {
        active_orders += 1;
        firstO -= 1;
        deque_orders[firstO] = order;
    }

    function _pushRightO(Order memory order) internal {
        active_orders += 1;
        lastO += 1;
        deque_orders[lastO] = order;
    }

    function _popLeftO() internal returns (Order memory order) {
        require(lastO >= firstO);  // non-empty deque
        active_orders -= 1;

        order = deque_orders[firstO];

        delete deque_orders[firstO];
        firstO += 1;
        return order;
    }

    function _popRightO() internal returns (Order memory order) {
        require(lastO >= firstO);  // non-empty deque
        active_orders -=1;

        order = deque_orders[lastO];

        delete deque_orders[lastO];
        lastO -= 1;
        return order;
    }
    
    */




    
    uint pinDigits = 4;
    uint pinModulus = 10 ** pinDigits;
    
    function _generateRandomPin(bytes32 _str) private view returns (uint) {
        uint rand = uint(keccak256(abi.encodePacked(_str)));
        return rand % pinModulus;
    }

    
    function _createOrder(uint cid, bytes32 pickup_address, bytes32 instructions, uint256[] memory pickup_location) internal returns (uint256 order_index){
        uint rand_pin = _generateRandomPin(pickup_address);
        OrdersList.push(Order(_consumers[cid], BogusG, pickup_address, pickup_location, instructions, _consumers[cid].home_address, now, "New Order", false, false, false, false, false, rand_pin));
        uint index = OrdersList.length - 1;
        OwnerToOrder[msg.sender] = index;
        return index;
    }
}