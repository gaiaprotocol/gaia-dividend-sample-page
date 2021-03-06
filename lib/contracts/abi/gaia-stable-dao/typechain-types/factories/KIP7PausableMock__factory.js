"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP7PausableMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "initialAccount",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "initialBalance",
                type: "uint256",
            },
        ],
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
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
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
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Paused",
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
        name: "PauserAdded",
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
        name: "PauserRemoved",
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
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Unpaused",
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
        name: "addPauser",
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
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
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
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "approve",
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
        inputs: [
            {
                internalType: "address",
                name: "account",
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
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "isPauser",
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
        name: "onlyPauserMock",
        outputs: [],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "pause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "paused",
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
                name: "account",
                type: "address",
            },
        ],
        name: "removePauser",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "renouncePauser",
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
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "safeTransfer",
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
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeTransfer",
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
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
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
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
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
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "transfer",
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
                name: "value",
                type: "uint256",
            },
        ],
        name: "transferFrom",
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
        inputs: [],
        name: "unpause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b506040516200164438038062001644833981810160405260408110156200003757600080fd5b5080516020909101516200005b6301ffc9a760e01b6001600160e01b03620000cc16565b62000076636578737160e01b6001600160e01b03620000cc16565b6200008a336001600160e01b036200015116565b6005805460ff19169055620000af634d5507ff60e01b6001600160e01b03620000cc16565b620000c482826001600160e01b03620001a316565b505062000400565b6001600160e01b031980821614156200012c576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b6200016c816004620002a860201b62000ed31790919060201c565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b6001600160a01b038216620001ff576040805162461bcd60e51b815260206004820152601e60248201527f4b4950373a206d696e7420746f20746865207a65726f20616464726573730000604482015290519081900360640190fd5b6200021b816003546200033560201b62000f5a1790919060201c565b6003556001600160a01b0382166000908152600160209081526040909120546200025091839062000f5a62000335821b17901c565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b620002bd82826001600160e01b036200039716565b1562000310576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60008282018381101562000390576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b60006001600160a01b038216620003e05760405162461bcd60e51b8152600401808060200182810382526022815260200180620016226022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61121280620004106000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80635c975abb116100ad5780638456cb59116100715780638456cb59146102f9578063a9059cbb14610301578063b88d4fde1461032d578063dd62ed3e146103f3578063eb7955491461042157610121565b80635c975abb146102775780636b2c0f551461027f5780636ef8d66d146102a557806370a08231146102ad57806382dc1ec4146102d357610121565b8063329daf90116100f4578063329daf90146101dd5780633f4ba83a146101e7578063423f6cef146101ef57806342842e0e1461021b57806346fbf68e1461025157610121565b806301ffc9a714610126578063095ea7b31461016157806318160ddd1461018d57806323b872dd146101a7575b600080fd5b61014d6004803603602081101561013c57600080fd5b50356001600160e01b0319166104dc565b604080519115158252519081900360200190f35b61014d6004803603604081101561017757600080fd5b506001600160a01b0381351690602001356104fb565b61019561055a565b60408051918252519081900360200190f35b61014d600480360360608110156101bd57600080fd5b506001600160a01b03813581169160208101359091169060400135610560565b6101e56105c1565b005b6101e5610607565b6101e56004803603604081101561020557600080fd5b506001600160a01b0381351690602001356106d8565b6101e56004803603606081101561023157600080fd5b506001600160a01b038135811691602081013590911690604001356106f6565b61014d6004803603602081101561026757600080fd5b50356001600160a01b0316610716565b61014d61072f565b6101e56004803603602081101561029557600080fd5b50356001600160a01b0316610738565b6101e5610744565b610195600480360360208110156102c357600080fd5b50356001600160a01b031661074d565b6101e5600480360360208110156102e957600080fd5b50356001600160a01b0316610768565b6101e56107b5565b61014d6004803603604081101561031757600080fd5b506001600160a01b038135169060200135610886565b6101e56004803603608081101561034357600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561037e57600080fd5b82018360208201111561039057600080fd5b803590602001918460018302840111640100000000831117156103b257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506108de945050505050565b6101956004803603604081101561040957600080fd5b506001600160a01b0381358116916020013516610937565b6101e56004803603606081101561043757600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561046757600080fd5b82018360208201111561047957600080fd5b8035906020019184600183028401116401000000008311171561049b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610962945050505050565b6001600160e01b03191660009081526020819052604090205460ff1690565b60055460009060ff1615610549576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b61055383836109b4565b9392505050565b60035490565b60055460009060ff16156105ae576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6105b98484846109ca565b949350505050565b6105ca33610716565b6106055760405162461bcd60e51b81526004018080602001828103825260308152602001806111026030913960400191505060405180910390fd5b565b61061033610716565b61064b5760405162461bcd60e51b81526004018080602001828103825260308152602001806111026030913960400191505060405180910390fd5b60055460ff16610699576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b6005805460ff191690556040805133815290517f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa9181900360200190a1565b6106f2828260405180602001604052806000815250610962565b5050565b610711838383604051806020016040528060008152506108de565b505050565b600061072960048363ffffffff610a2116565b92915050565b60055460ff1690565b61074181610a88565b50565b61060533610a88565b6001600160a01b031660009081526001602052604090205490565b61077133610716565b6107ac5760405162461bcd60e51b81526004018080602001828103825260308152602001806111026030913960400191505060405180910390fd5b61074181610a91565b6107be33610716565b6107f95760405162461bcd60e51b81526004018080602001828103825260308152602001806111026030913960400191505060405180910390fd5b60055460ff1615610844576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6005805460ff191660011790556040805133815290517f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589181900360200190a1565b60055460009060ff16156108d4576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6105538383610ad9565b6108e9848484610560565b506108f684848484610ae6565b6109315760405162461bcd60e51b815260040180806020018281038252602e8152602001806110d4602e913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b61096c8383610886565b5061097933848484610ae6565b6107115760405162461bcd60e51b815260040180806020018281038252602e8152602001806110d4602e913960400191505060405180910390fd5b60006109c1338484610c19565b50600192915050565b60006109d7848484610d05565b6001600160a01b038416600090815260026020908152604080832033808552925290912054610a17918691610a12908663ffffffff610e4916565b610c19565b5060019392505050565b60006001600160a01b038216610a685760405162461bcd60e51b81526004018080602001828103825260228152602001806111996022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61074181610e8b565b610aa260048263ffffffff610ed316565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b60006109c1338484610d05565b6000610afa846001600160a01b0316610f54565b610b06575060016105b9565b604051634e8c461160e11b815233600482018181526001600160a01b03888116602485015260448401879052608060648501908152865160848601528651600095928a1694639d188c229490938c938b938b939260a4019060208501908083838e5b83811015610b80578181015183820152602001610b68565b50505050905090810190601f168015610bad5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610bcf57600080fd5b505af1158015610be3573d6000803e3d6000fd5b505050506040513d6020811015610bf957600080fd5b50516001600160e01b031916634e8c461160e11b14915050949350505050565b6001600160a01b038316610c5e5760405162461bcd60e51b81526004018080602001828103825260238152602001806111bb6023913960400191505060405180910390fd5b6001600160a01b038216610ca35760405162461bcd60e51b81526004018080602001828103825260218152602001806110b36021913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610d4a5760405162461bcd60e51b81526004018080602001828103825260248152602001806111756024913960400191505060405180910390fd5b6001600160a01b038216610d8f5760405162461bcd60e51b81526004018080602001828103825260228152602001806111326022913960400191505060405180910390fd5b6001600160a01b038316600090815260016020526040902054610db8908263ffffffff610e4916565b6001600160a01b038085166000908152600160205260408082209390935590841681522054610ded908263ffffffff610f5a16565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600061055383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610fb4565b610e9c60048263ffffffff61104b16565b6040516001600160a01b038216907fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90600090a250565b610edd8282610a21565b15610f2f576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b3b151590565b600082820183811015610553576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600081848411156110435760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611008578181015183820152602001610ff0565b50505050905090810190601f1680156110355780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6110558282610a21565b6110905760405162461bcd60e51b81526004018080602001828103825260218152602001806111546021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff1916905556fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e746572506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c654b4950373a207472616e7366657220746f20746865207a65726f2061646472657373526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b4950373a207472616e736665722066726f6d20746865207a65726f2061646472657373526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a265627a7a72315820b33bb53771481936811d6fe38291d2af97c9f96cbf68789322fc0a70f474163564736f6c63430005110032526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
const isSuperArgs = (xs) => xs.length > 1;
class KIP7PausableMock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "KIP7PausableMock";
    }
    deploy(initialAccount, initialBalance, overrides) {
        return super.deploy(initialAccount, initialBalance, overrides || {});
    }
    getDeployTransaction(initialAccount, initialBalance, overrides) {
        return super.getDeployTransaction(initialAccount, initialBalance, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.KIP7PausableMock__factory = KIP7PausableMock__factory;
KIP7PausableMock__factory.bytecode = _bytecode;
KIP7PausableMock__factory.abi = _abi;
//# sourceMappingURL=KIP7PausableMock__factory.js.map