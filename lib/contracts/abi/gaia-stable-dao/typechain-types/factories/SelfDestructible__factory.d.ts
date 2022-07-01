import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SelfDestructible, SelfDestructibleInterface } from "../SelfDestructible";
declare type SelfDestructibleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SelfDestructible__factory extends ContractFactory {
    constructor(...args: SelfDestructibleConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SelfDestructible>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SelfDestructible;
    connect(signer: Signer): SelfDestructible__factory;
    static readonly contractName: "SelfDestructible";
    readonly contractName: "SelfDestructible";
    static readonly bytecode = "0x60806040819052600080546001600160a01b03191633178082556001600160a01b0316917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3610363806100576000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063715018a61461005c57806383197ef0146100665780638da5cb5b1461006e5780638f32d59b14610092578063f2fde38b146100ae575b600080fd5b6100646100d4565b005b610064610177565b6100766101e3565b604080516001600160a01b039092168252519081900360200190f35b61009a6101f2565b604080519115158252519081900360200190f35b610064600480360360208110156100c457600080fd5b50356001600160a01b0316610203565b6100dc6101f2565b61012d576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b61017f6101f2565b6101d0576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6101d86101e3565b6001600160a01b0316ff5b6000546001600160a01b031690565b6000546001600160a01b0316331490565b61020b6101f2565b61025c576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61026581610268565b50565b6001600160a01b0381166102ad5760405162461bcd60e51b81526004018080602001828103825260268152602001806103096026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b039290921691909117905556fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a265627a7a72315820db1516cdfed85da3ca486b16ed92b507ceb95039e0ec8753107245629b510e7c64736f6c63430005110032";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    } | {
        constant: boolean;
        inputs: never[];
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
    } | {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): SelfDestructibleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SelfDestructible;
}
export {};
//# sourceMappingURL=SelfDestructible__factory.d.ts.map