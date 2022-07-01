/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GaiaOperation, GaiaOperationInterface } from "../GaiaOperation";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "newBuyBackFund",
        type: "address",
      },
    ],
    name: "updateBuyBackFund",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "ids",
        type: "uint256[]",
      },
      {
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "claim",
    outputs: [
      {
        name: "totalKRNO",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "claimableKlay",
    outputs: [
      {
        name: "totalKlay",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "whitelistSale",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "publicSale",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "kronosStaking",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "protocolStarted",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "devFund",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "recipient",
        type: "address",
      },
    ],
    name: "withdrawKlay",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "status",
        type: "bool",
      },
    ],
    name: "setPublicSale",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "ids",
        type: "uint256[]",
      },
      {
        name: "amounts",
        type: "uint256[]",
      },
      {
        name: "minAmount",
        type: "uint256",
      },
      {
        name: "swapRouteArray",
        type: "address[]",
      },
    ],
    name: "claimKlayViaZap",
    outputs: [
      {
        name: "totalKLAY",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "claimableKRNO",
    outputs: [
      {
        name: "totalKRNO",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "id",
        type: "uint256",
      },
    ],
    name: "getKRNOBalance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "users",
        type: "address[]",
      },
      {
        name: "_tickets",
        type: "uint256",
      },
    ],
    name: "setWhitelist",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "klayKRNOLP",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "sKRNO",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "gaiaNFT",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintGaiaNFTWithWhitelist",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintGaiaNFT",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "klaySwapFactory",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "id",
        type: "uint256",
      },
    ],
    name: "gonsForId",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_buyBackFund",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "initialKRNOEach",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "buyBackFund",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "status",
        type: "bool",
      },
    ],
    name: "setWhitelistSale",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "whitelistTickets",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "KRNO",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newDevFund",
        type: "address",
      },
    ],
    name: "updateDevFund",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "gaiaPrice",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "startProtocol",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_gaiaNFT",
        type: "address",
      },
      {
        name: "_KRNO",
        type: "address",
      },
      {
        name: "_sKRNO",
        type: "address",
      },
      {
        name: "_kronosStaking",
        type: "address",
      },
      {
        name: "_klaySwapFactory",
        type: "address",
      },
      {
        name: "_klayKRNOLP",
        type: "address",
      },
      {
        name: "_devFund",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "newBuyBackFund",
        type: "address",
      },
    ],
    name: "UpdateBuyBackFund",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "newDevFund",
        type: "address",
      },
    ],
    name: "UpdateDevFund",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "status",
        type: "bool",
      },
    ],
    name: "SetWhitelistSale",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "status",
        type: "bool",
      },
    ],
    name: "SetPublicSale",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "initialSKRNOEach",
        type: "uint256",
      },
    ],
    name: "StartProtocol",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        name: "amountOfKRNO",
        type: "uint256",
      },
    ],
    name: "ClaimKRNO",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        name: "totalKlay",
        type: "uint256",
      },
    ],
    name: "ClaimKlay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405160e0806200324d833981018060405260e08110156200003357600080fd5b50805160208201516040808401516060850151608086015160a087015160c090970151600080546001600160a01b031916331780825595519798969794969395929491926001600160a01b0316917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36001600160a01b03871615801590620000c757506001600160a01b03861615155b8015620000dc57506001600160a01b03851615155b8015620000f157506001600160a01b03841615155b80156200010657506001600160a01b03831615155b80156200011b57506001600160a01b03821615155b80156200013057506001600160a01b03811615155b6200019c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f57524f4e475f4144445245535300000000000000000000000000000000000000604482015290519081900360640190fd5b600180546001600160a01b03199081166001600160a01b038a81169190911790925560058054610100600160a81b0319166101008a85160217905560068054821688841617905560078054909116868316179055604080517fc45a015500000000000000000000000000000000000000000000000000000000815290518583169285169163c45a0155916004808301926020929190829003018186803b1580156200024657600080fd5b505afa1580156200025b573d6000803e3d6000fd5b505050506040513d60208110156200027257600080fd5b50516001600160a01b0316148015620004915750856001600160a01b0316826001600160a01b0316630fc63d106040518163ffffffff1660e01b815260040160206040518083038186803b158015620002ca57600080fd5b505afa158015620002df573d6000803e3d6000fd5b505050506040513d6020811015620002f657600080fd5b50516001600160a01b031614801562000388575060006001600160a01b0316826001600160a01b0316635f64b55b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200034f57600080fd5b505afa15801562000364573d6000803e3d6000fd5b505050506040513d60208110156200037b57600080fd5b50516001600160a01b0316145b80620004915750856001600160a01b0316826001600160a01b0316635f64b55b6040518163ffffffff1660e01b815260040160206040518083038186803b158015620003d357600080fd5b505afa158015620003e8573d6000803e3d6000fd5b505050506040513d6020811015620003ff57600080fd5b50516001600160a01b031614801562000491575060006001600160a01b0316826001600160a01b0316630fc63d106040518163ffffffff1660e01b815260040160206040518083038186803b1580156200045857600080fd5b505afa1580156200046d573d6000803e3d6000fd5b505050506040513d60208110156200048457600080fd5b50516001600160a01b0316145b620004fd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f57524f4e475f464143544f52595f4c5000000000000000000000000000000000604482015290519081900360640190fd5b600c80546001600160a01b039485166001600160a01b031991821617909155600d8054938516938216939093179092556003805491909316911617905550505050612cff806200054e6000396000f3fe6080604052600436106102045760003560e01c80639024742911610118578063c9ce624f116100a0578063dc176cfa1161006f578063dc176cfa146108b6578063e40db51e146108cb578063ef7c6647146108fe578063f2fde38b14610913578063feb704211461094657610204565b8063c9ce624f1461082d578063ca7ce3ec14610842578063d2d2f9cc1461086e578063db2e21bc146108a157610204565b8063b1466327116100e7578063b146632714610796578063b50f1d33146107b3578063bd21d431146107c8578063c4d66de8146107f2578063c7217cd51461081857610204565b8063902474291461073a5780639cd45d7b1461074f5780639d18abe014610764578063abe5c9c41461077957610204565b8063455593ca1161019b5780638400b81d1161016a5780638400b81d146105bd5780638b5c1c9c1461066b5780638d814a8c146106955780638da5cb5b146107105780638f32d59b1461072557610204565b8063455593ca1461042a5780635aca1bb61461045d578063715018a614610489578063739146631461049e57610204565b806333bc1c5c116101d757806333bc1c5c146103ba578063345201fd146103cf57806334ce6da1146104005780634390d2a81461041557610204565b80630602fe9c146102065780631397e91c1461023957806316e2f2d61461031657806331ffd6f114610391575b005b34801561021257600080fd5b506102046004803603602081101561022957600080fd5b50356001600160a01b031661095b565b34801561024557600080fd5b506103046004803603604081101561025c57600080fd5b810190602081018135600160201b81111561027657600080fd5b82018360208201111561028857600080fd5b803590602001918460208302840111600160201b831117156102a957600080fd5b919390929091602081019035600160201b8111156102c657600080fd5b8201836020820111156102d857600080fd5b803590602001918460208302840111600160201b831117156102f957600080fd5b509092509050610a50565b60408051918252519081900360200190f35b34801561032257600080fd5b506103046004803603602081101561033957600080fd5b810190602081018135600160201b81111561035357600080fd5b82018360208201111561036557600080fd5b803590602001918460208302840111600160201b8311171561038657600080fd5b509092509050610b52565b34801561039d57600080fd5b506103a6610c26565b604080519115158252519081900360200190f35b3480156103c657600080fd5b506103a6610c36565b3480156103db57600080fd5b506103e4610c3f565b604080516001600160a01b039092168252519081900360200190f35b34801561040c57600080fd5b506103a6610c4e565b34801561042157600080fd5b506103e4610c5e565b34801561043657600080fd5b506102046004803603602081101561044d57600080fd5b50356001600160a01b0316610c6d565b34801561046957600080fd5b506102046004803603602081101561048057600080fd5b50351515610db8565b34801561049557600080fd5b50610204610e49565b3480156104aa57600080fd5b50610304600480360360808110156104c157600080fd5b810190602081018135600160201b8111156104db57600080fd5b8201836020820111156104ed57600080fd5b803590602001918460208302840111600160201b8311171561050e57600080fd5b919390929091602081019035600160201b81111561052b57600080fd5b82018360208201111561053d57600080fd5b803590602001918460208302840111600160201b8311171561055e57600080fd5b91939092823592604081019060200135600160201b81111561057f57600080fd5b82018360208201111561059157600080fd5b803590602001918460208302840111600160201b831117156105b257600080fd5b509092509050610edd565b3480156105c957600080fd5b50610304600480360360208110156105e057600080fd5b810190602081018135600160201b8111156105fa57600080fd5b82018360208201111561060c57600080fd5b803590602001918460208302840111600160201b8311171561062d57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061118a945050505050565b34801561067757600080fd5b506103046004803603602081101561068e57600080fd5b503561127f565b3480156106a157600080fd5b50610204600480360360408110156106b857600080fd5b810190602081018135600160201b8111156106d257600080fd5b8201836020820111156106e457600080fd5b803590602001918460208302840111600160201b8311171561070557600080fd5b919350915035611312565b34801561071c57600080fd5b506103e46113a9565b34801561073157600080fd5b506103a66113b8565b34801561074657600080fd5b506103e46113c9565b34801561075b57600080fd5b506103e46113d8565b34801561077057600080fd5b506103e46113e7565b6102046004803603602081101561078f57600080fd5b50356113f6565b610204600480360360208110156107ac57600080fd5b50356115a0565b3480156107bf57600080fd5b506103e461166c565b3480156107d457600080fd5b50610304600480360360208110156107eb57600080fd5b503561167b565b6102046004803603602081101561080857600080fd5b50356001600160a01b0316611686565b34801561082457600080fd5b50610304611789565b34801561083957600080fd5b506103e461178f565b34801561084e57600080fd5b506102046004803603602081101561086557600080fd5b5035151561179e565b34801561087a57600080fd5b506103046004803603602081101561089157600080fd5b50356001600160a01b031661183e565b3480156108ad57600080fd5b50610204611850565b3480156108c257600080fd5b506103e4611991565b3480156108d757600080fd5b50610204600480360360208110156108ee57600080fd5b50356001600160a01b03166119a5565b34801561090a57600080fd5b50610304611a9a565b34801561091f57600080fd5b506102046004803603602081101561093657600080fd5b50356001600160a01b0316611aa7565b34801561095257600080fd5b50610204611afd565b6109636113b8565b6109a55760408051600160e51b62461bcd0281526020600482018190526024820152600080516020612cb4833981519152604482015290519081900360640190fd5b6002546001600160a01b03828116911614156109fc5760408051600160e51b62461bcd02815260206004820152600b6024820152600160aa1b6a1393d517d0d2105391d15102604482015290519081900360640190fd5b600280546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f1d472b2a6791f4365c4a52ca5fb0382b9e7e9b342c0a35a6a5e3852771fe4ed79181900360200190a150565b6000610abf85858080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808902828101820190935288825290935088925087918291850190849080828437600092019190915250611c5e92505050565b60055460408051600160e01b63a9059cbb0281523360048201526024810184905290519293506101009091046001600160a01b03169163a9059cbb916044808201926020929091908290030181600087803b158015610b1d57600080fd5b505af1158015610b31573d6000803e3d6000fd5b505050506040513d6020811015610b4757600080fd5b509095945050505050565b600080610b9184848080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061118a92505050565b600d5460055460408051600160e01b63e41611810281526001600160a01b036101009093048316600482015260248101859052905193945091169163e416118191604480820192602092909190829003018186803b158015610bf257600080fd5b505afa158015610c06573d6000803e3d6000fd5b505050506040513d6020811015610c1c57600080fd5b5051949350505050565b600354600160a01b900460ff1681565b60055460ff1681565b6007546001600160a01b031681565b600d54600160a01b900460ff1681565b6003546001600160a01b031681565b610c756113b8565b610cb75760408051600160e51b62461bcd0281526020600482018190526024820152600080516020612cb4833981519152604482015290519081900360640190fd5b60055460ff1615610d125760408051600160e51b62461bcd02815260206004820152601760248201527f5055424c49435f53414c455f49535f4e4f545f4f564552000000000000000000604482015290519081900360640190fd5b6001600160a01b038116610d705760408051600160e51b62461bcd02815260206004820152600d60248201527f57524f4e475f4144445245535300000000000000000000000000000000000000604482015290519081900360640190fd5b3031610d7b826121b0565b6001600160a01b03166108fc829081150290604051600060405180830381858888f19350505050158015610db3573d6000803e3d6000fd5b505050565b610dc06113b8565b610e025760408051600160e51b62461bcd0281526020600482018190526024820152600080516020612cb4833981519152604482015290519081900360640190fd5b6005805482151560ff19909116811790915560408051918252517f9b5abd11e9e5ca4cb073b8f0f22ad68bd9162a8cae7ba023307eaa690aa004b59181900360200190a150565b610e516113b8565b610e935760408051600160e51b62461bcd0281526020600482018190526024820152600080516020612cb4833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b600080610f4d89898080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808d0282810182019093528c82529093508c92508b918291850190849080828437600092019190915250611c5e92505050565b600554600c5460408051600160e01b63095ea7b30281526001600160a01b0392831660048201526024810185905290519394503031936101009093049091169163095ea7b3916044808201926020929091908290030181600087803b158015610fb557600080fd5b505af1158015610fc9573d6000803e3d6000fd5b505050506040513d6020811015610fdf57600080fd5b5050600c54600554604051600160e01b6352f28c170281526101009091046001600160a01b039081166004830181815260248401879052600060448501819052606485018c905260a06084860190815260a486018b905293909516946352f28c17949293889391928d928d928d929160c401846020850280828437600081840152601f19601f820116905080830192505050975050505050505050600060405180830381600087803b15801561109457600080fd5b505af11580156110a8573d6000803e3d6000fd5b506110bf925050303190508263ffffffff6121b316565b9250600083116111195760408051600160e51b62461bcd02815260206004820152600c60248201527f544f54414c5f4b4c41595f300000000000000000000000000000000000000000604482015290519081900360640190fd5b604051339084156108fc029085906000818181858888f19350505050158015611146573d6000803e3d6000fd5b5060408051848152905133917f71caa0eda8c1acb2568d0f77894b0e42b69c83af8754797d0c2f0ac262d115f6919081900360200190a25050979650505050505050565b60065460408051600160e21b6306f4e59d02815260016004820152905160009283926001600160a01b0390911691631bd3967491602480820192602092909190829003018186803b1580156111de57600080fd5b505afa1580156111f2573d6000803e3d6000fd5b505050506040513d602081101561120857600080fd5b505160085490915060005b845181101561127757600061125a8361124e866112428a878151811061123557fe5b60200260200101516121fe565b9063ffffffff6122b416565b9063ffffffff6121b316565b905061126c858263ffffffff6122f616565b945050600101611213565b505050919050565b60065460408051600160e21b6306f4e59d02815260016004820152905160009261130a926001600160a01b0390911691631bd3967491602480820192602092909190829003018186803b1580156112d557600080fd5b505afa1580156112e9573d6000803e3d6000fd5b505050506040513d60208110156112ff57600080fd5b5051611242846121fe565b90505b919050565b61131a6113b8565b61135c5760408051600160e51b62461bcd0281526020600482018190526024820152600080516020612cb4833981519152604482015290519081900360640190fd5b60005b828110156113a357816004600086868581811061137857fe5b602090810292909201356001600160a01b03168352508101919091526040016000205560010161135f565b50505050565b6000546001600160a01b031690565b6000546001600160a01b0316331490565b600d546001600160a01b031681565b6006546001600160a01b031681565b6001546001600160a01b031681565b600354600160a01b900460ff1661144c5760408051600160e51b62461bcd02815260206004820152600f6024820152600160881b6e554e415641494c41424c455f4e4f5702604482015290519081900360640190fd5b33600090815260046020526040902054806114b15760408051600160e51b62461bcd02815260206004820152600c60248201527f4e4f545f454c494749424c450000000000000000000000000000000000000000604482015290519081900360640190fd5b6000821180156114c2575060058211155b6115085760408051600160e51b62461bcd02815260206004820152600c6024820152600160a21b6b15d493d391d7d05353d5539502604482015290519081900360640190fd5b611518818363ffffffff6121b316565b3360009081526004602052604081209190915561153483612353565b9050610fa08111156115815760408051600160e51b62461bcd02815260206004820152600b6024820152600160a81b6a554e415641494c41424c4502604482015290519081900360640190fd5b80610fa01415610db35760038054600160a01b60ff0219169055505050565b60055460ff166115ef5760408051600160e51b62461bcd02815260206004820152600f6024820152600160881b6e554e415641494c41424c455f4e4f5702604482015290519081900360640190fd5b6000811180156116005750600a8111155b6116465760408051600160e51b62461bcd02815260206004820152600c6024820152600160a21b6b15d493d391d7d05353d5539502604482015290519081900360640190fd5b600061165182612353565b90508061270f1415611668576005805460ff191690555b5050565b600c546001600160a01b031681565b600061130a826121fe565b61168e6113b8565b6116d05760408051600160e51b62461bcd0281526020600482018190526024820152600080516020612cb4833981519152604482015290519081900360640190fd5b6001600160a01b03811661172e5760408051600160e51b62461bcd02815260206004820152600f60248201527f494e56414c49445f414444524553530000000000000000000000000000000000604482015290519081900360640190fd5b600280546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f1d472b2a6791f4365c4a52ca5fb0382b9e7e9b342c0a35a6a5e3852771fe4ed79181900360200190a16116686001612353565b60085481565b6002546001600160a01b031681565b6117a66113b8565b6117e85760408051600160e51b62461bcd0281526020600482018190526024820152600080516020612cb4833981519152604482015290519081900360640190fd5b60038054821515600160a01b8102600160a01b60ff02199092169190911790915560408051918252517ffe59e9c0c3901ece73ac1b2ae94c3143e1f34403099e7cc923c199885b3cbd3b9181900360200190a150565b60046020526000908152604090205481565b6118586113b8565b61189a5760408051600160e51b62461bcd0281526020600482018190526024820152600080516020612cb4833981519152604482015290519081900360640190fd5b60065460408051600160e01b6370a0823102815230600482015290516001600160a01b039092169163a9059cbb91339184916370a08231916024808301926020929190829003018186803b1580156118f157600080fd5b505afa158015611905573d6000803e3d6000fd5b505050506040513d602081101561191b57600080fd5b50516040805163ffffffff851660e01b81526001600160a01b03909316600484015260248301919091525160448083019260209291908290030181600087803b15801561196757600080fd5b505af115801561197b573d6000803e3d6000fd5b505050506040513d602081101561166857600080fd5b60055461010090046001600160a01b031681565b6119ad6113b8565b6119ef5760408051600160e51b62461bcd0281526020600482018190526024820152600080516020612cb4833981519152604482015290519081900360640190fd5b6003546001600160a01b0382811691161415611a465760408051600160e51b62461bcd02815260206004820152600b6024820152600160aa1b6a1393d517d0d2105391d15102604482015290519081900360640190fd5b600380546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f7de9de9894d93d7f1b540d3876ef6dac577aa15e5d92a990d987e1de839e27109181900360200190a150565b683635c9adc5dea0000081565b611aaf6113b8565b611af15760408051600160e51b62461bcd0281526020600482018190526024820152600080516020612cb4833981519152604482015290519081900360640190fd5b611afa81612683565b50565b611b056113b8565b611b475760408051600160e51b62461bcd0281526020600482018190526024820152600080516020612cb4833981519152604482015290519081900360640190fd5b60055460ff1615611ba25760408051600160e51b62461bcd02815260206004820152601760248201527f5055424c49435f53414c455f49535f4e4f545f4f564552000000000000000000604482015290519081900360640190fd5b600d54600160a01b900460ff1615611c045760408051600160e51b62461bcd02815260206004820152600f60248201527f414c52454144595f535441525445440000000000000000000000000000000000604482015290519081900360640190fd5b600d8054600160a01b60ff021916600160a01b1790556000611c24612726565b6040805182815290519192507fa58a467d7845806477c5c68f15e9ae17dc65690b3d32aabb2628f0a68ffef0c6919081900360200190a150565b60008151835114611cb95760408051600160e51b62461bcd02815260206004820152601360248201527f4c454e4754485f49535f4e4f545f455155414c00000000000000000000000000604482015290519081900360640190fd5b600760009054906101000a90046001600160a01b03166001600160a01b031663af14052c6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015611d0957600080fd5b505af1158015611d1d573d6000803e3d6000fd5b505060065460408051600160e21b6306f4e59d028152600160048201529051600094506001600160a01b039092169250631bd39674916024808301926020929190829003018186803b158015611d7257600080fd5b505afa158015611d86573d6000803e3d6000fd5b505050506040513d6020811015611d9c57600080fd5b505160085490915060005b8551811015612059576000868281518110611dbe57fe5b602002602001015190506000868381518110611dd657fe5b602002602001015190508160001415611e395760408051600160e51b62461bcd02815260206004820152600c60248201527f47454e455349535f474149410000000000000000000000000000000000000000604482015290519081900360640190fd5b60015460408051600160e11b6331a9108f02815260048101859052905133926001600160a01b031691636352211e916024808301926020929190829003018186803b158015611e8757600080fd5b505afa158015611e9b573d6000803e3d6000fd5b505050506040513d6020811015611eb157600080fd5b50516001600160a01b031614611f115760408051600160e51b62461bcd02815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b6000828152600b602052604090205460ff16611f50576000828152600b60209081526040808320805460ff19166001179055600954600a909252909120555b6000828152600a602052604081205490611f748661124e848a63ffffffff6122b416565b9050600019831415611f8857809250611fcf565b80831115611fcf5760408051600160e51b62461bcd0281526020600482015260096024820152600160b81b684f564552434c41494d02604482015290519081900360640190fd5b611fef611fe2848963ffffffff612b0e16565b839063ffffffff6121b316565b6000858152600a602052604090205561200e888463ffffffff6122f616565b604080518581529051919950339186917f1465b969f2888cffa1970980113aee844c3cece74383af91adb4fbbeb960f499919081900360200190a3505060019092019150611da79050565b50600083116120b25760408051600160e51b62461bcd02815260206004820152600e60248201527f544f54414c5f5245574152445f30000000000000000000000000000000000000604482015290519081900360640190fd5b60065460075460408051600160e01b63095ea7b30281526001600160a01b039283166004820152602481018790529051919092169163095ea7b39160448083019260209291908290030181600087803b15801561210e57600080fd5b505af1158015612122573d6000803e3d6000fd5b505050506040513d602081101561213857600080fd5b505060075460408051600160e21b6327afaa230281526004810186905260006024820181905291516001600160a01b0390931692639ebea88c9260448084019391929182900301818387803b15801561219057600080fd5b505af11580156121a4573d6000803e3d6000fd5b50505050505092915050565b90565b60006121f583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612b6a565b90505b92915050565b60015460408051600160e01b6318160ddd02815290516000926001600160a01b0316916318160ddd916004808301926020929190829003018186803b15801561224657600080fd5b505afa15801561225a573d6000803e3d6000fd5b505050506040513d602081101561227057600080fd5b505182106122805750600061130d565b6000828152600b602052604090205460ff1661229f575060095461130d565b506000818152600a602052604090205461130d565b60006121f583836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250612c04565b6000828201838110156121f55760408051600160e51b62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600061236e82683635c9adc5dea0000063ffffffff612b0e16565b34146123b55760408051600160e51b62461bcd02815260206004820152600b6024820152600160a81b6a57524f4e475f505249434502604482015290519081900360640190fd5b60015460408051600160e01b6318160ddd02815290516000926001600160a01b0316916318160ddd916004808301926020929190829003018186803b1580156123fd57600080fd5b505afa158015612411573d6000803e3d6000fd5b505050506040513d602081101561242757600080fd5b5051905061271061243e828563ffffffff6122f616565b11156124945760408051600160e51b62461bcd02815260206004820152600e60248201527f414c4c5f4e46545f4d494e544544000000000000000000000000000000000000604482015290519081900360640190fd5b60015460408051600160e11b631740d575028152336004820152602481018490526044810186905290516001600160a01b0390921691632e81aaea9160648082019260009290919082900301818387803b1580156124f157600080fd5b505af1158015612505573d6000803e3d6000fd5b50506002546001600160a01b03161580159250905061252e57506003546001600160a01b031615155b6125825760408051600160e51b62461bcd02815260206004820152600e60248201527f46554e445f414444524553535f30000000000000000000000000000000000000604482015290519081900360640190fd5b600254612597906001600160a01b03166121b0565b6001600160a01b03166108fc6125d26125c56064611242683635c9adc5dea00000602d63ffffffff612b0e16565b869063ffffffff612b0e16565b6040518115909202916000818181858888f193505050501580156125fa573d6000803e3d6000fd5b50600354612610906001600160a01b03166121b0565b6001600160a01b03166108fc61263e6125c56064611242683635c9adc5dea00000600563ffffffff612b0e16565b6040518115909202916000818181858888f19350505050158015612666573d6000803e3d6000fd5b5061267c600161124e838663ffffffff6122f616565b9392505050565b6001600160a01b0381166126cb57604051600160e51b62461bcd028152600401808060200182810382526026815260200180612c6d6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b60055460408051600160e01b6370a08231028152306004820152905160009283926101009091046001600160a01b0316916370a0823191602480820192602092909190829003018186803b15801561277d57600080fd5b505afa158015612791573d6000803e3d6000fd5b505050506040513d60208110156127a757600080fd5b505160055460075460408051600160e01b63095ea7b30281526001600160a01b039283166004820152602481018590529051939450610100909204169163095ea7b3916044808201926020929091908290030181600087803b15801561280c57600080fd5b505af1158015612820573d6000803e3d6000fd5b505050506040513d602081101561283657600080fd5b505060075460408051600160e01b637acb77570281526004810184905230602482015290516001600160a01b0390921691637acb7757916044808201926020929091908290030181600087803b15801561288f57600080fd5b505af11580156128a3573d6000803e3d6000fd5b505050506040513d60208110156128b957600080fd5b505060075460408051600160e11b630f41a04d02815230600482015290516001600160a01b0390921691631e83409a9160248082019260009290919082900301818387803b15801561290a57600080fd5b505af115801561291e573d6000803e3d6000fd5b505050506129ac600160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561297357600080fd5b505afa158015612987573d6000803e3d6000fd5b505050506040513d602081101561299d57600080fd5b5051829063ffffffff6122b416565b915060008211612a065760408051600160e51b62461bcd02815260206004820152601060248201527f494e495449414c5f4b524f4e4f535f3000000000000000000000000000000000604482015290519081900360640190fd5b600882905560015460408051600160e01b6318160ddd0281529051612b07926001600160a01b0316916318160ddd916004808301926020929190829003018186803b158015612a5457600080fd5b505afa158015612a68573d6000803e3d6000fd5b505050506040513d6020811015612a7e57600080fd5b505160065460408051600160e21b6306f4e59d0281526004810186905290516001600160a01b0390921691631bd3967491602480820192602092909190829003018186803b158015612acf57600080fd5b505afa158015612ae3573d6000803e3d6000fd5b505050506040513d6020811015612af957600080fd5b50519063ffffffff6122b416565b6009555090565b600082612b1d575060006121f8565b82820282848281612b2a57fe5b04146121f557604051600160e51b62461bcd028152600401808060200182810382526021815260200180612c936021913960400191505060405180910390fd5b60008184841115612bfc57604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612bc1578181015183820152602001612ba9565b50505050905090810190601f168015612bee5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008183612c5657604051600160e51b62461bcd028152602060048201818152835160248401528351909283926044909101919085019080838360008315612bc1578181015183820152602001612ba9565b506000838581612c6257fe5b049594505050505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a165627a7a72305820012b4647577c72fa661f9c2cad40465e5f142f8b5b99ee0dd27ddb1a34c98e1c0029";

type GaiaOperationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GaiaOperationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GaiaOperation__factory extends ContractFactory {
  constructor(...args: GaiaOperationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "GaiaOperation";
  }

  deploy(
    _gaiaNFT: string,
    _KRNO: string,
    _sKRNO: string,
    _kronosStaking: string,
    _klaySwapFactory: string,
    _klayKRNOLP: string,
    _devFund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GaiaOperation> {
    return super.deploy(
      _gaiaNFT,
      _KRNO,
      _sKRNO,
      _kronosStaking,
      _klaySwapFactory,
      _klayKRNOLP,
      _devFund,
      overrides || {}
    ) as Promise<GaiaOperation>;
  }
  getDeployTransaction(
    _gaiaNFT: string,
    _KRNO: string,
    _sKRNO: string,
    _kronosStaking: string,
    _klaySwapFactory: string,
    _klayKRNOLP: string,
    _devFund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _gaiaNFT,
      _KRNO,
      _sKRNO,
      _kronosStaking,
      _klaySwapFactory,
      _klayKRNOLP,
      _devFund,
      overrides || {}
    );
  }
  attach(address: string): GaiaOperation {
    return super.attach(address) as GaiaOperation;
  }
  connect(signer: Signer): GaiaOperation__factory {
    return super.connect(signer) as GaiaOperation__factory;
  }
  static readonly contractName: "GaiaOperation";
  public readonly contractName: "GaiaOperation";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GaiaOperationInterface {
    return new utils.Interface(_abi) as GaiaOperationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GaiaOperation {
    return new Contract(address, _abi, signerOrProvider) as GaiaOperation;
  }
}
