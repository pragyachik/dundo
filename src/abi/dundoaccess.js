export const dundoaccess = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "DeliveryCancelled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "home_address",
				"type": "uint256[]"
			}
		],
		"name": "NewConsumer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "area",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "NewGuy",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OrderCancelled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "guy_a",
				"type": "address"
			}
		],
		"name": "PinSuccess",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "myAddress",
				"type": "address"
			}
		],
		"name": "added_to_queue",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "CancelDelivery",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "CancelOrder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Deliver",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "pickup_address",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "instructions",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "pickup_location",
				"type": "uint256[]"
			}
		],
		"name": "delivery_assign",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ePin",
				"type": "uint256"
			}
		],
		"name": "EnterPin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "myAddress",
				"type": "address"
			}
		],
		"name": "guy_expired",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "guy_a",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "consumer_a",
				"type": "address"
			}
		],
		"name": "orderFulfilled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "deliveryPersonname",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "myAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "pin",
				"type": "uint256"
			}
		],
		"name": "order_assign",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "myAddress",
				"type": "address"
			}
		],
		"name": "order_expired",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "myAddress",
				"type": "address"
			}
		],
		"name": "order_fail",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "pickup_address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "instructions",
				"type": "string"
			},
			{
				"internalType": "uint256[]",
				"name": "pickup_location",
				"type": "uint256[]"
			}
		],
		"name": "PlaceOrder",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "home_address",
				"type": "uint256[]"
			}
		],
		"name": "RegisterConsumer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "area",
				"type": "uint256[]"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "RegisterGuy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_DeliveryFee",
				"type": "uint256"
			}
		],
		"name": "SetDeliveryFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_itemFee",
				"type": "uint256"
			}
		],
		"name": "SetItemFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_SecurityDeposit",
				"type": "uint256"
			}
		],
		"name": "SetSecurityDeposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isOwner",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]