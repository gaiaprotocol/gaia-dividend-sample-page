import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockFactory, MockFactoryInterface } from "../MockFactory";
declare type MockFactoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockFactory__factory extends ContractFactory {
    constructor(...args: MockFactoryConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockFactory>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockFactory;
    connect(signer: Signer): MockFactory__factory;
    static readonly contractName: "MockFactory";
    readonly contractName: "MockFactory";
    static readonly bytecode = "0x6080604052600260005534801561001557600080fd5b50610280806100256000396000f3fe6080604052600436106100345760003560e01c80630aa2f4201461003657806352f28c171461005d578063a66bf2e4146100f3575b005b34801561004257600080fd5b5061004b61011d565b60408051918252519081900360200190f35b610034600480360360a081101561007357600080fd5b6001600160a01b0382358116926020810135926040820135909216916060820135919081019060a0810160808201356401000000008111156100b457600080fd5b8201836020820111156100c657600080fd5b803590602001918460208302840111640100000000831117156100e857600080fd5b509092509050610123565b3480156100ff57600080fd5b506100346004803603602081101561011657600080fd5b503561024f565b60005481565b6001600160a01b0384161561013757600080fd5b6000548502808411156101945760408051600160e51b62461bcd02815260206004820152600d60248201527f4c4553535f5448414e5f4d494e00000000000000000000000000000000000000604482015290519081900360640190fd5b60408051600160e01b6323b872dd0281523360048201523060248201526044810188905290516001600160a01b038916916323b872dd9160648083019260209291908290030181600087803b1580156101ec57600080fd5b505af1158015610200573d6000803e3d6000fd5b505050506040513d602081101561021657600080fd5b5050604051339082156108fc029083906000818181858888f19350505050158015610245573d6000803e3d6000fd5b5050505050505050565b60005556fea165627a7a72305820e55912aeb62cff19c34765a1db2875233b055187cb891c0ff475067369f325af0029";
    static readonly abi: ({
        constant: boolean;
        inputs: never[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
    } | {
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
    } | {
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): MockFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockFactory;
}
export {};
//# sourceMappingURL=MockFactory__factory.d.ts.map