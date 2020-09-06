pragma solidity >=0.5.0 <0.6.7;
import "./Ownable.sol";
contract DundoFramework is Ownable{
    struct Consumer{ //Consumer = customer
        address publicKey;
        uint256[] home_address;

    }
    Consumer[] internal _consumers;
    
    struct Guy{ //Guy = Delivery executive
        address publicKey;
        uint256[] area; //area = [latitude(decimal), latitude(fractional) longitude(decimal), longitude(fractional),  radius]
        bytes32 name;
        bool active;
        uint256 active_since;
    }
    
    Guy[] internal _guys;
    

    mapping (uint => address) internal GuyToOwner; //list index => blockchain address
    mapping (uint => address) internal ConsumerToOwner;
    
    mapping (address => uint) internal OwnerToGuy;
    mapping (address => uint) internal OwnerToConsumer;
    
    mapping (address => bool) internal OwnerIsGuy;
    mapping (address => bool) internal OwnerIsConsumer;
    
    
    
    event NewGuy(address indexed myAdress);
    
    function _create_guy(uint256[] memory area, bytes32 name, address addres1) private{
        _guys.push(Guy(addres1, area, name, false, now));
        uint id = _guys.length - 1;
        GuyToOwner[id] = addres1;
        OwnerToGuy[addres1] = id;
        OwnerIsGuy[addres1] = true;
    }
    
    event NewConsumer(address indexed myAdress);
    
    function _create_consumer(uint256[] memory home_address, address addres1) private{
        _consumers.push(Consumer(addres1, home_address));
        uint id = _consumers.length - 1;
        ConsumerToOwner[id] = addres1;
        OwnerToConsumer[addres1] = id;
        OwnerIsConsumer[addres1] = true;
    }
    
    function RegisterConsumer(uint256[] calldata home_address) external{
        _create_consumer(home_address, msg.sender);
        emit NewConsumer(msg.sender);
    }
    
    function RegisterGuy(uint256[] calldata area, bytes32 name) external{
        _create_guy(area, name, msg.sender);
        emit NewGuy(msg.sender);
    }
}