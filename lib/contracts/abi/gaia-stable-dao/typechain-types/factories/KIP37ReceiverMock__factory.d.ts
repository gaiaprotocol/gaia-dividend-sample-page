import { Signer, ContractFactory, Overrides, BytesLike } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP37ReceiverMock, KIP37ReceiverMockInterface } from "../KIP37ReceiverMock";
declare type KIP37ReceiverMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class KIP37ReceiverMock__factory extends ContractFactory {
    constructor(...args: KIP37ReceiverMockConstructorParams);
    deploy(recRetval: BytesLike, recReverts: boolean, batRetval: BytesLike, batReverts: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<KIP37ReceiverMock>;
    getDeployTransaction(recRetval: BytesLike, recReverts: boolean, batRetval: BytesLike, batReverts: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): KIP37ReceiverMock;
    connect(signer: Signer): KIP37ReceiverMock__factory;
    static readonly contractName: "KIP37ReceiverMock";
    readonly contractName: "KIP37ReceiverMock";
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161068f38038061068f8339818101604052608081101561003357600080fd5b50805160208201516040830151606090930151919290916100636301ffc9a760e01b6001600160e01b036100cd16565b6001805463ffffffff191660e095861c1760ff60201b1916640100000000941515949094029390931763ffffffff60281b1916650100000000009290941c919091029290921760ff60481b1916690100000000000000000092151592909202919091179055610151565b6001600160e01b0319808216141561012c576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b61052f806101606000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806301ffc9a714610051578063214cdb801461008c5780639b49e332146100b5578063e78b3325146101f9575b600080fd5b6100786004803603602081101561006757600080fd5b50356001600160e01b03191661028c565b604080519115158252519081900360200190f35b6100b3600480360360208110156100a257600080fd5b50356001600160e01b0319166102ab565b005b6101dc600480360360a08110156100cb57600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156100fe57600080fd5b82018360208201111561011057600080fd5b803590602001918460208302840111600160201b8311171561013157600080fd5b919390929091602081019035600160201b81111561014e57600080fd5b82018360208201111561016057600080fd5b803590602001918460208302840111600160201b8311171561018157600080fd5b919390929091602081019035600160201b81111561019e57600080fd5b8201836020820111156101b057600080fd5b803590602001918460018302840111600160201b831117156101d157600080fd5b5090925090506102b7565b604080516001600160e01b03199092168252519081900360200190f35b6101dc600480360360a081101561020f57600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b81111561024e57600080fd5b82018360208201111561026057600080fd5b803590602001918460018302840111600160201b8311171561028157600080fd5b5090925090506103d0565b6001600160e01b03191660009081526020819052604090205460ff1690565b6102b481610476565b50565b60007f0bcad9224ba33b574e9c85298de2f44b4c80015a21aa5df474896444909863d889898989898989895a604051808a6001600160a01b03166001600160a01b03168152602001896001600160a01b03166001600160a01b0316815260200180602001806020018060200185815260200184810384528b8b82818152602001925060200280828437600083820152601f01601f19169091018581038452898152602090810191508a908a0280828437600083820152601f01601f191690910185810383528781526020019050878780828437600083820152604051601f909101601f19169092018290039e50909c50505050505050505050505050a15060015465010000000000900460e01b98975050505050505050565b60007f20dfa9f79060c8c4d7fe892c97c71bcf6e3b63d1dcf66fea7aefc0211628cf298787878787875a604080516001600160a01b03808a168252881660208201529081018690526060810185905260a0810182905260c06080820181815290820184905260e08201858580828437600083820152604051601f909101601f19169092018290039a509098505050505050505050a15060015460e01b9695505050505050565b6001600160e01b031980821614156104d5576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff1916600117905556fea265627a7a7231582034771f6f291eefe4686af58250b037e1696bdc89743a5a66de3c2262cb5fefae64736f6c63430005110032";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
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
    static createInterface(): KIP37ReceiverMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP37ReceiverMock;
}
export {};
//# sourceMappingURL=KIP37ReceiverMock__factory.d.ts.map