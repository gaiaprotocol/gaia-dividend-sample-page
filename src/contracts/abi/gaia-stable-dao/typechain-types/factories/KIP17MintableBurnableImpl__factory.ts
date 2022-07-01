/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  KIP17MintableBurnableImpl,
  KIP17MintableBurnableImplInterface,
} from "../KIP17MintableBurnableImpl";

const _abi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "MinterAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "MinterRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addMinter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isMinter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "mintWithTokenURI",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
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
    inputs: [],
    name: "renounceMinter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600481526020016315195cdd60e21b81525060405180604001604052806004815260200163151154d560e21b8152508181620000666301ffc9a760e01b6200014f60201b60201c565b620000816380ac58cd60e01b6001600160e01b036200014f16565b6200009c63780e9d6360e01b6001600160e01b036200014f16565b8151620000b19060099060208501906200031c565b508051620000c790600a9060208401906200031c565b50620000e3635b5e139f60e01b6001600160e01b036200014f16565b50505050620000f833620001d460201b60201c565b62000113630755c1f160e51b6001600160e01b036200014f16565b6200012e637d613fa360e11b6001600160e01b036200014f16565b62000149630852cd8d60e31b6001600160e01b036200014f16565b620003c1565b6001600160e01b03198082161415620001af576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b620001ef81600c6200022660201b620019061790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b6200023b82826001600160e01b03620002b316565b156200028e576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b038216620002fc5760405162461bcd60e51b8152600401808060200182810382526022815260200180620024cd6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200035f57805160ff19168380011785556200038f565b828001600101855582156200038f579182015b828111156200038f57825182559160200191906001019062000372565b506200039d929150620003a1565b5090565b620003be91905b808211156200039d5760008155600101620003a8565b90565b6120fc80620003d16000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806350bb4e7f116100b8578063986502751161007c57806398650275146104aa578063a22cb465146104b2578063aa271e1a146104e0578063b88d4fde14610506578063c87b56dd146105cc578063e985e9c5146105e957610142565b806350bb4e7f1461037e5780636352211e1461043957806370a082311461045657806395d89b411461047c578063983b2d561461048457610142565b806323b872dd1161010a57806323b872dd146102805780632f745c59146102b657806340c10f19146102e257806342842e0e1461030e57806342966c68146103445780634f6ccce71461036157610142565b806301ffc9a71461014757806306fdde0314610182578063081812fc146101ff578063095ea7b31461023857806318160ddd14610266575b600080fd5b61016e6004803603602081101561015d57600080fd5b50356001600160e01b031916610617565b604080519115158252519081900360200190f35b61018a610636565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101c45781810151838201526020016101ac565b50505050905090810190601f1680156101f15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61021c6004803603602081101561021557600080fd5b50356106cd565b604080516001600160a01b039092168252519081900360200190f35b6102646004803603604081101561024e57600080fd5b506001600160a01b03813516906020013561072f565b005b61026e610856565b60408051918252519081900360200190f35b6102646004803603606081101561029657600080fd5b506001600160a01b0381358116916020810135909116906040013561085c565b61026e600480360360408110156102cc57600080fd5b506001600160a01b0381351690602001356108b1565b61016e600480360360408110156102f857600080fd5b506001600160a01b038135169060200135610930565b6102646004803603606081101561032457600080fd5b506001600160a01b03813581169160208101359091169060400135610989565b6102646004803603602081101561035a57600080fd5b50356109a4565b61026e6004803603602081101561037757600080fd5b50356109f5565b61016e6004803603606081101561039457600080fd5b6001600160a01b03823516916020810135918101906060810160408201356401000000008111156103c457600080fd5b8201836020820111156103d657600080fd5b803590602001918460018302840111640100000000831117156103f857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a5b945050505050565b61021c6004803603602081101561044f57600080fd5b5035610abf565b61026e6004803603602081101561046c57600080fd5b50356001600160a01b0316610b19565b61018a610b81565b6102646004803603602081101561049a57600080fd5b50356001600160a01b0316610be2565b610264610c2f565b610264600480360360408110156104c857600080fd5b506001600160a01b0381351690602001351515610c3a565b61016e600480360360208110156104f657600080fd5b50356001600160a01b0316610d06565b6102646004803603608081101561051c57600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561055757600080fd5b82018360208201111561056957600080fd5b8035906020019184600183028401116401000000008311171561058b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d19945050505050565b61018a600480360360208110156105e257600080fd5b5035610d71565b61016e600480360360408110156105ff57600080fd5b506001600160a01b0381358116916020013516610e56565b6001600160e01b03191660009081526020819052604090205460ff1690565b60098054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106c25780601f10610697576101008083540402835291602001916106c2565b820191906000526020600020905b8154815290600101906020018083116106a557829003601f168201915b505050505090505b90565b60006106d882610e84565b6107135760405162461bcd60e51b815260040180806020018281038252602b81526020018061203b602b913960400191505060405180910390fd5b506000908152600260205260409020546001600160a01b031690565b600061073a82610abf565b9050806001600160a01b0316836001600160a01b031614156107a3576040805162461bcd60e51b815260206004820181905260248201527f4b495031373a20617070726f76616c20746f2063757272656e74206f776e6572604482015290519081900360640190fd5b336001600160a01b03821614806107bf57506107bf8133610e56565b6107fa5760405162461bcd60e51b81526004018080602001828103825260378152602001806120666037913960400191505060405180910390fd5b60008281526002602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60075490565b6108663382610ea1565b6108a15760405162461bcd60e51b8152600401808060200182810382526030815260200180611eea6030913960400191505060405180910390fd5b6108ac838383610f45565b505050565b60006108bc83610b19565b82106108f95760405162461bcd60e51b815260040180806020018281038252602a815260200180611e1c602a913960400191505060405180910390fd5b6001600160a01b038316600090815260056020526040902080548390811061091d57fe5b9060005260206000200154905092915050565b600061093b33610d06565b6109765760405162461bcd60e51b8152600401808060200182810382526030815260200180611e466030913960400191505060405180910390fd5b6109808383610f64565b50600192915050565b6108ac83838360405180602001604052806000815250610d19565b6109ae3382610ea1565b6109e95760405162461bcd60e51b815260040180806020018281038252602f815260200180611f6c602f913960400191505060405180910390fd5b6109f281610f85565b50565b60006109ff610856565b8210610a3c5760405162461bcd60e51b815260040180806020018281038252602b815260200180611fec602b913960400191505060405180910390fd5b60078281548110610a4957fe5b90600052602060002001549050919050565b6000610a6633610d06565b610aa15760405162461bcd60e51b8152600401808060200182810382526030815260200180611e466030913960400191505060405180910390fd5b610aab8484610f64565b610ab58383610f97565b5060019392505050565b6000818152600160205260408120546001600160a01b031680610b135760405162461bcd60e51b8152600401808060200182810382526028815260200180611e976028913960400191505060405180910390fd5b92915050565b60006001600160a01b038216610b605760405162461bcd60e51b8152600401808060200182810382526029815260200180611f9b6029913960400191505060405180910390fd5b6001600160a01b0382166000908152600360205260409020610b1390610ffa565b600a8054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106c25780601f10610697576101008083540402835291602001916106c2565b610beb33610d06565b610c265760405162461bcd60e51b8152600401808060200182810382526030815260200180611e466030913960400191505060405180910390fd5b6109f281610ffe565b610c3833611046565b565b6001600160a01b038216331415610c98576040805162461bcd60e51b815260206004820152601860248201527f4b495031373a20617070726f766520746f2063616c6c65720000000000000000604482015290519081900360640190fd5b3360008181526004602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6000610b13600c8363ffffffff61108e16565b610d2484848461085c565b610d30848484846110f5565b610d6b5760405162461bcd60e51b8152600401808060200182810382526030815260200180611f3c6030913960400191505060405180910390fd5b50505050565b6060610d7c82610e84565b610db75760405162461bcd60e51b815260040180806020018281038252602e815260200180611dcb602e913960400191505060405180910390fd5b6000828152600b602090815260409182902080548351601f600260001961010060018616150201909316929092049182018490048402810184019094528084529091830182828015610e4a5780601f10610e1f57610100808354040283529160200191610e4a565b820191906000526020600020905b815481529060010190602001808311610e2d57829003601f168201915b50505050509050919050565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6000908152600160205260409020546001600160a01b0316151590565b6000610eac82610e84565b610ee75760405162461bcd60e51b815260040180806020018281038252602b81526020018061209d602b913960400191505060405180910390fd5b6000610ef283610abf565b9050806001600160a01b0316846001600160a01b03161480610f2d5750836001600160a01b0316610f22846106cd565b6001600160a01b0316145b80610f3d5750610f3d8185610e56565b949350505050565b610f508383836114d2565b610f5a8382611616565b6108ac828261170b565b610f6e8282611749565b610f78828261170b565b610f818161187a565b5050565b6109f2610f9182610abf565b826118be565b610fa082610e84565b610fdb5760405162461bcd60e51b815260040180806020018281038252602b815260200180611ebf602b913960400191505060405180910390fd5b6000828152600b6020908152604090912082516108ac92840190611cce565b5490565b61100f600c8263ffffffff61190616565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b611057600c8263ffffffff61198716565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b60006001600160a01b0382166110d55760405162461bcd60e51b8152600401808060200182810382526022815260200180611f1a6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b600080606061110c866001600160a01b03166119ee565b61111b57600192505050610f3d565b856001600160a01b031663150b7a0260e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156111a757818101518382015260200161118f565b50505050905090810190601f1680156111d45780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b6020831061123c5780518252601f19909201916020918201910161121d565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461129e576040519150601f19603f3d011682016040523d82523d6000602084013e6112a3565b606091505b5080519193509150158015906112e057508051630a85bd0160e11b90602080840191908110156112d257600080fd5b50516001600160e01b031916145b156112f057600192505050610f3d565b856001600160a01b0316636745782b60e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561137c578181015183820152602001611364565b50505050905090810190601f1680156113a95780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b602083106114115780518252601f1990920191602091820191016113f2565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611473576040519150601f19603f3d011682016040523d82523d6000602084013e611478565b606091505b5080519193509150158015906114b557508051636745782b60e01b90602080840191908110156114a757600080fd5b50516001600160e01b031916145b156114c557600192505050610f3d565b5060009695505050505050565b826001600160a01b03166114e582610abf565b6001600160a01b03161461152a5760405162461bcd60e51b8152600401808060200182810382526028815260200180611fc46028913960400191505060405180910390fd5b6001600160a01b03821661156f5760405162461bcd60e51b8152600401808060200182810382526023815260200180611df96023913960400191505060405180910390fd5b611578816119f4565b6001600160a01b038316600090815260036020526040902061159990611a2f565b6001600160a01b03821660009081526003602052604090206115ba90611a46565b60008181526001602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b03821660009081526005602052604081205461164090600163ffffffff611a4f16565b6000838152600660205260409020549091508082146116db576001600160a01b038416600090815260056020526040812080548490811061167d57fe5b906000526020600020015490508060056000876001600160a01b03166001600160a01b0316815260200190815260200160002083815481106116bb57fe5b600091825260208083209091019290925591825260069052604090208190555b6001600160a01b0384166000908152600560205260409020805490611704906000198301611d4c565b5050505050565b6001600160a01b0390911660009081526005602081815260408084208054868652600684529185208290559282526001810183559183529091200155565b6001600160a01b0382166117a4576040805162461bcd60e51b815260206004820152601f60248201527f4b495031373a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6117ad81610e84565b156117ff576040805162461bcd60e51b815260206004820152601b60248201527f4b495031373a20746f6b656e20616c7265616479206d696e7465640000000000604482015290519081900360640190fd5b600081815260016020908152604080832080546001600160a01b0319166001600160a01b03871690811790915583526003909152902061183e90611a46565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600780546000838152600860205260408120829055600182018355919091527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880155565b6118c88282611a98565b6000818152600b60205260409020546002600019610100600184161502019091160415610f81576000818152600b60205260408120610f8191611d70565b611910828261108e565b15611962576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b611991828261108e565b6119cc5760405162461bcd60e51b8152600401808060200182810382526021815260200180611e766021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b3b151590565b6000818152600260205260409020546001600160a01b0316156109f257600090815260026020526040902080546001600160a01b0319169055565b8054611a4290600163ffffffff611a4f16565b9055565b80546001019055565b6000611a9183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611ac4565b9392505050565b611aa28282611b5b565b611aac8282611616565b600081815260066020526040812055610f8181611c32565b60008184841115611b535760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611b18578181015183820152602001611b00565b50505050905090810190601f168015611b455780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b816001600160a01b0316611b6e82610abf565b6001600160a01b031614611bb35760405162461bcd60e51b81526004018080602001828103825260248152602001806120176024913960400191505060405180910390fd5b611bbc816119f4565b6001600160a01b0382166000908152600360205260409020611bdd90611a2f565b60008181526001602052604080822080546001600160a01b0319169055518291906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600754600090611c4990600163ffffffff611a4f16565b60008381526008602052604081205460078054939450909284908110611c6b57fe5b906000526020600020015490508060078381548110611c8657fe5b60009182526020808320909101929092558281526008909152604090208290556007805490611cb9906000198301611d4c565b50505060009182525060086020526040812055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611d0f57805160ff1916838001178555611d3c565b82800160010185558215611d3c579182015b82811115611d3c578251825591602001919060010190611d21565b50611d48929150611db0565b5090565b8154818355818111156108ac576000838152602090206108ac918101908301611db0565b50805460018160011615610100020316600290046000825580601f10611d9657506109f2565b601f0160209004906000526020600020908101906109f291905b6106ca91905b80821115611d485760008155600101611db656fe4b495031374d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e7366657220746f20746865207a65726f20616464726573734b49503137456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b495031373a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031374d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b495031373a207472616e7366657220746f206e6f6e204b49503137526563656976657220696d706c656d656e7465724b495031374275726e61626c653a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495031373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495031373a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4b49503137456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e64734b495031373a206275726e206f6620746f6b656e2074686174206973206e6f74206f776e4b495031373a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4b495031373a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656ea265627a7a72315820ab3c5bef8959a4380a61e8c364c0af9087bf02e4ebd390780159df9ac808a49364736f6c63430005110032526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";

type KIP17MintableBurnableImplConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KIP17MintableBurnableImplConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KIP17MintableBurnableImpl__factory extends ContractFactory {
  constructor(...args: KIP17MintableBurnableImplConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "KIP17MintableBurnableImpl";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KIP17MintableBurnableImpl> {
    return super.deploy(overrides || {}) as Promise<KIP17MintableBurnableImpl>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): KIP17MintableBurnableImpl {
    return super.attach(address) as KIP17MintableBurnableImpl;
  }
  connect(signer: Signer): KIP17MintableBurnableImpl__factory {
    return super.connect(signer) as KIP17MintableBurnableImpl__factory;
  }
  static readonly contractName: "KIP17MintableBurnableImpl";
  public readonly contractName: "KIP17MintableBurnableImpl";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KIP17MintableBurnableImplInterface {
    return new utils.Interface(_abi) as KIP17MintableBurnableImplInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KIP17MintableBurnableImpl {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as KIP17MintableBurnableImpl;
  }
}
