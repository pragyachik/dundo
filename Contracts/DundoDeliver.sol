pragma solidity >= 0.5.0 < 0.7.0;
import "./DundoOrders.sol";
contract DundoDeliver is DundoOrders{
    modifier onlyGuy(){
        require(OwnerIsGuy[msg.sender] == true);
        _;
    }
    
    mapping (address => bool) OwnerHasDelivery;
    mapping (address => uint) OwnerToDelivery;
    event added_to_queue(address indexed myAddress);
    
    uint active_guys = 0;
    function Deliver() external payable onlyGuy{
        require(msg.value == SecurityDeposit);
        require(_guys[OwnerToGuy[msg.sender]].active == false);
        Guy memory delivery_exec = _guys[OwnerToGuy[msg.sender]];
        _guys[OwnerToGuy[msg.sender]].active = true;
        _guys[OwnerToGuy[msg.sender]].active_since = now;
        _pushLeftG(delivery_exec);
    }
    
    function _inRadius(Guy memory guy, Order memory order) internal returns (bool){
        uint256[] memory guy_center = guy.area;
        uint256 guy_radius = guy.area[4];
        uint256[] memory pickup_location = order.pickup_location;
        uint256[] memory home_address = order.home_address;
        //first checking if home is within range
        bool HomeInRange = false;
        bool PickUpInRange = false;
        if(_MapDist(guy_center[0], guy_center[1], guy_center[2], guy_center[3], home_address[0], home_address[1], home_address[2], home_address[3]) <= guy_radius){
            HomeInRange = true;
        }
        if(_MapDist(guy_center[0], guy_center[1], guy_center[2], guy_center[3], pickup_location[0], pickup_location[1], pickup_location[2], pickup_location[3]) <= guy_radius){
            PickUpInRange = true;
        }
        return (HomeInRange && PickUpInRange);
    }
    
    function _MapDist(uint lat1_whole, uint lat1_frac, uint long1_whole, uint long1_frac, uint lat2_whole, uint lat2_frac, uint long2_whole, uint long2_frac) internal returns (uint){
        //@dev To implement: use google maps api to find distance between the two input points(latitude and longitudes)
        return 5;
    }
    
    mapping(uint256 => Guy) deque_guys;
    uint256 firstG = 2**255;
    uint256 lastG = firstG - 1;

    function _pushLeftG(Guy memory guy) internal {
        active_guys += 1;
        firstG -= 1;
        deque_guys[firstG] = guy;
    }

    function _pushRightG(Guy memory guy) internal {
        active_guys += 1;
        lastG += 1;
        deque_guys[lastG] = guy;
    }

    function _popLeftG() internal returns (Guy memory guy) {
        require(lastG >= firstG);  // non-empty deque
        active_guys -=1;
        guy = deque_guys[firstG];

        delete deque_guys[firstG];
        firstG += 1;
        return guy;
    }

    function _popRightG() internal returns (Guy memory guy) {
        require(lastG >= firstG);  // non-empty deque
        active_guys -= 1;
        guy = deque_guys[lastG];

        delete deque_guys[lastG];
        lastG -= 1;
        return guy;
    }

}