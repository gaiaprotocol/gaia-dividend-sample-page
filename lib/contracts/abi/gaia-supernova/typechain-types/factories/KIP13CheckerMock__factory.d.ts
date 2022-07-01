import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP13CheckerMock, KIP13CheckerMockInterface } from "../KIP13CheckerMock";
declare type KIP13CheckerMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class KIP13CheckerMock__factory extends ContractFactory {
    constructor(...args: KIP13CheckerMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<KIP13CheckerMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): KIP13CheckerMock;
    connect(signer: Signer): KIP13CheckerMock__factory;
    static readonly contractName: "KIP13CheckerMock";
    readonly contractName: "KIP13CheckerMock";
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061032b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634b9dd90414610046578063aad8e2c21461010d578063d905700714610133575b600080fd5b6100f96004803603604081101561005c57600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561008757600080fd5b82018360208201111561009957600080fd5b803590602001918460208302840111640100000000831117156100bb57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610169945050505050565b604080519115158252519081900360200190f35b6100f96004803603602081101561012357600080fd5b50356001600160a01b031661018d565b6100f96004803603604081101561014957600080fd5b5080356001600160a01b031690602001356001600160e01b0319166101a1565b60006101846001600160a01b0384168363ffffffff6101bc16565b90505b92915050565b6000610187826001600160a01b031661021c565b60006101846001600160a01b0384168363ffffffff61025216565b60006101c78361021c565b6101d357506000610187565b60005b8251811015610212576101fc848483815181106101ef57fe5b602002602001015161026a565b61020a576000915050610187565b6001016101d6565b5060019392505050565b600061023282600160e01b6301ffc9a70261026a565b8015610187575061024b826001600160e01b031961026a565b1592915050565b600061025d8361021c565b8015610184575061018483835b60008060006102798585610290565b915091508180156102875750805b95945050505050565b604080516001600160e01b031983166024808301919091528251808303909101815260449091018252602081810180516001600160e01b0316600160e01b6301ffc9a702178152825193516000808252948594939091908183858b617530fa905190989097509550505050505056fea165627a7a7230582075e99b9dcf015586ae746eafb1a86a6888c0204ebc8fa372cbb9cc69e7f9dee60029";
    static readonly abi: {
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
    }[];
    static createInterface(): KIP13CheckerMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP13CheckerMock;
}
export {};
//# sourceMappingURL=KIP13CheckerMock__factory.d.ts.map