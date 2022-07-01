import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MinterRoleMock, MinterRoleMockInterface } from "../MinterRoleMock";
declare type MinterRoleMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MinterRoleMock__factory extends ContractFactory {
    constructor(...args: MinterRoleMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MinterRoleMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MinterRoleMock;
    connect(signer: Signer): MinterRoleMock__factory;
    static readonly contractName: "MinterRoleMock";
    readonly contractName: "MinterRoleMock";
    static readonly bytecode = "0x60806040526100133361001860201b60201c565b610189565b61003081600061006760201b6102bd1790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b610077828261010860201b60201c565b156100e357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b038216610169576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806105e26022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61044a806101986000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633092afd51461005c578063983b2d561461008457806398650275146100aa578063aa271e1a146100b2578063b5dba35b146100ec575b600080fd5b6100826004803603602081101561007257600080fd5b50356001600160a01b03166100f4565b005b6100826004803603602081101561009a57600080fd5b50356001600160a01b0316610100565b610082610150565b6100d8600480360360208110156100c857600080fd5b50356001600160a01b031661015b565b604080519115158252519081900360200190f35b610082610173565b6100fd816101ba565b50565b6101093361015b565b61014757604051600160e51b62461bcd0281526004018080602001828103825260308152602001806103ac6030913960400191505060405180910390fd5b6100fd816101c3565b610159336101ba565b565b600061016d818363ffffffff61020b16565b92915050565b61017c3361015b565b61015957604051600160e51b62461bcd0281526004018080602001828103825260308152602001806103ac6030913960400191505060405180910390fd5b6100fd81610275565b6101d460008263ffffffff6102bd16565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b60006001600160a01b03821661025557604051600160e51b62461bcd0281526004018080602001828103825260228152602001806103fd6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61028660008263ffffffff61034116565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b6102c7828261020b565b1561031c5760408051600160e51b62461bcd02815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b61034b828261020b565b61038957604051600160e51b62461bcd0281526004018080602001828103825260218152602001806103dc6021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff1916905556fe4d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c65526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373a165627a7a723058203b466d22bf6f91dce955b75046f5728fc833dd9f8e7a560c9799c6108ae50b350029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
    static readonly abi: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
    static createInterface(): MinterRoleMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MinterRoleMock;
}
export {};
//# sourceMappingURL=MinterRoleMock__factory.d.ts.map