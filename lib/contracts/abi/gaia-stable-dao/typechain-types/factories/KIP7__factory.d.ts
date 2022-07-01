import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP7, KIP7Interface } from "../KIP7";
declare type KIP7ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class KIP7__factory extends ContractFactory {
    constructor(...args: KIP7ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<KIP7>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): KIP7;
    connect(signer: Signer): KIP7__factory;
    static readonly contractName: "KIP7";
    readonly contractName: "KIP7";
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061002a6301ffc9a760e01b6001600160e01b0361004816565b610043636578737160e01b6001600160e01b0361004816565b6100cc565b6001600160e01b031980821614156100a7576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b610b29806100db6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806342842e0e1161007157806342842e0e1461019357806370a08231146101c9578063a9059cbb146101ef578063b88d4fde1461021b578063dd62ed3e146102e1578063eb7955491461030f576100a9565b806301ffc9a7146100ae578063095ea7b3146100e957806318160ddd1461011557806323b872dd1461012f578063423f6cef14610165575b600080fd5b6100d5600480360360208110156100c457600080fd5b50356001600160e01b0319166103ca565b604080519115158252519081900360200190f35b6100d5600480360360408110156100ff57600080fd5b506001600160a01b0381351690602001356103e9565b61011d6103ff565b60408051918252519081900360200190f35b6100d56004803603606081101561014557600080fd5b506001600160a01b03813581169160208101359091169060400135610405565b6101916004803603604081101561017b57600080fd5b506001600160a01b03813516906020013561045c565b005b610191600480360360608110156101a957600080fd5b506001600160a01b0381358116916020810135909116906040013561047a565b61011d600480360360208110156101df57600080fd5b50356001600160a01b031661049a565b6100d56004803603604081101561020557600080fd5b506001600160a01b0381351690602001356104b5565b6101916004803603608081101561023157600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561026c57600080fd5b82018360208201111561027e57600080fd5b803590602001918460018302840111640100000000831117156102a057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506104c2945050505050565b61011d600480360360408110156102f757600080fd5b506001600160a01b038135811691602001351661051b565b6101916004803603606081101561032557600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561035557600080fd5b82018360208201111561036757600080fd5b8035906020019184600183028401116401000000008311171561038957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610546945050505050565b6001600160e01b03191660009081526020819052604090205460ff1690565b60006103f6338484610598565b50600192915050565b60035490565b6000610412848484610684565b6001600160a01b03841660009081526002602090815260408083203380855292529091205461045291869161044d908663ffffffff6107c816565b610598565b5060019392505050565b610476828260405180602001604052806000815250610546565b5050565b610495838383604051806020016040528060008152506104c2565b505050565b6001600160a01b031660009081526001602052604090205490565b60006103f6338484610684565b6104cd848484610405565b506104da84848484610811565b6105155760405162461bcd60e51b815260040180806020018281038252602e815260200180610a5e602e913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b61055083836104b5565b5061055d33848484610811565b6104955760405162461bcd60e51b815260040180806020018281038252602e815260200180610a5e602e913960400191505060405180910390fd5b6001600160a01b0383166105dd5760405162461bcd60e51b8152600401808060200182810382526023815260200180610ad26023913960400191505060405180910390fd5b6001600160a01b0382166106225760405162461bcd60e51b8152600401808060200182810382526021815260200180610a3d6021913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166106c95760405162461bcd60e51b8152600401808060200182810382526024815260200180610aae6024913960400191505060405180910390fd5b6001600160a01b03821661070e5760405162461bcd60e51b8152600401808060200182810382526022815260200180610a8c6022913960400191505060405180910390fd5b6001600160a01b038316600090815260016020526040902054610737908263ffffffff6107c816565b6001600160a01b03808516600090815260016020526040808220939093559084168152205461076c908263ffffffff61094516565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600061080a83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061099f565b9392505050565b6000610825846001600160a01b0316610a36565b6108315750600161093d565b604051634e8c461160e11b815233600482018181526001600160a01b03888116602485015260448401879052608060648501908152865160848601528651600095928a1694639d188c229490938c938b938b939260a4019060208501908083838e5b838110156108ab578181015183820152602001610893565b50505050905090810190601f1680156108d85780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b1580156108fa57600080fd5b505af115801561090e573d6000803e3d6000fd5b505050506040513d602081101561092457600080fd5b50516001600160e01b031916634e8c461160e11b149150505b949350505050565b60008282018381101561080a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008184841115610a2e5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156109f35781810151838201526020016109db565b50505050905090810190601f168015610a205780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b3b15159056fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e7465724b4950373a207472616e7366657220746f20746865207a65726f20616464726573734b4950373a207472616e736665722066726f6d20746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a265627a7a72315820fd21ea46f1719fc74f3d67a993cb89232b927762c7c769ba10845718e8c76c1964736f6c63430005110032";
    static readonly abi: ({
        inputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        constant?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        payable?: undefined;
        stateMutability?: undefined;
        constant?: undefined;
        outputs?: undefined;
    } | {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): KIP7Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP7;
}
export {};
//# sourceMappingURL=KIP7__factory.d.ts.map