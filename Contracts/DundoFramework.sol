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
        string name;
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
    
    
    
    event NewGuy(uint id, uint256[] area, string name);
    
    function _create_guy(uint256[] memory area, string memory name, address addres1) private{
        _guys.push(Guy(addres1, area, name, false, now));
        uint id = _guys.length - 1;
        GuyToOwner[id] = addres1;
        OwnerToGuy[addres1] = id;
        OwnerIsGuy[addres1] = true;
    }
    
    event NewConsumer(uint id, uint256[] home_address);
    
    function _create_consumer(uint256[] memory home_address, address addres1) private{
        _consumers.push(Consumer(addres1, home_address));
        uint id = _consumers.length - 1;
        ConsumerToOwner[id] = addres1;
        OwnerToConsumer[addres1] = id;
        OwnerIsConsumer[addres1] = true;
    }
    
    function RegisterConsumer(uint256[] calldata home_address) external{
        _create_consumer(home_address, msg.sender);
    }
    
    function RegisterGuy(uint256[] calldata area, string calldata name) external{
        _create_guy(area, name, msg.sender);
    }
}