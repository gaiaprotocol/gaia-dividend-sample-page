import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface KIP37ReceiverMockInterface extends utils.Interface {
    contractName: "KIP37ReceiverMock";
    functions: {
        "onKIP37BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onKIP37Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "registerInterface(bytes4)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "onKIP37BatchReceived", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "onKIP37Received", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "registerInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "onKIP37BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onKIP37Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {
        "BatchReceived(address,address,uint256[],uint256[],bytes,uint256)": EventFragment;
        "Received(address,address,uint256,uint256,bytes,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BatchReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Received"): EventFragment;
}
export declare type BatchReceivedEvent = TypedEvent<[
    string,
    string,
    BigNumber[],
    BigNumber[],
    string,
    BigNumber
], {
    operator: string;
    from: string;
    ids: BigNumber[];
    values: BigNumber[];
    data: string;
    gas: BigNumber;
}>;
export declare type BatchReceivedEventFilter = TypedEventFilter<BatchReceivedEvent>;
export declare type ReceivedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    BigNumber
], {
    operator: string;
    from: string;
    id: BigNumber;
    value: BigNumber;
    data: string;
    gas: BigNumber;
}>;
export declare type ReceivedEventFilter = TypedEventFilter<ReceivedEvent>;
export interface KIP37ReceiverMock extends BaseContract {
    contractName: "KIP37ReceiverMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: KIP37ReceiverMockInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        onKIP37BatchReceived(operator: string, from: string, ids: BigNumberish[], values: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onKIP37Received(operator: string, from: string, id: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        registerInterface(interfaceId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    onKIP37BatchReceived(operator: string, from: string, ids: BigNumberish[], values: BigNumberish[], data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onKIP37Received(operator: string, from: string, id: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    registerInterface(interfaceId: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        onKIP37BatchReceived(operator: string, from: string, ids: BigNumberish[], values: BigNumberish[], data: BytesLike, overrides?: CallOverrides): Promise<string>;
        onKIP37Received(operator: string, from: string, id: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        registerInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "BatchReceived(address,address,uint256[],uint256[],bytes,uint256)"(operator?: null, from?: null, ids?: null, values?: null, data?: null, gas?: null): BatchReceivedEventFilter;
        BatchReceived(operator?: null, from?: null, ids?: null, values?: null, data?: null, gas?: null): BatchReceivedEventFilter;
        "Received(address,address,uint256,uint256,bytes,uint256)"(operator?: null, from?: null, id?: null, value?: null, data?: null, gas?: null): ReceivedEventFilter;
        Received(operator?: null, from?: null, id?: null, value?: null, data?: null, gas?: null): ReceivedEventFilter;
    };
    estimateGas: {
        onKIP37BatchReceived(operator: string, from: string, ids: BigNumberish[], values: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onKIP37Received(operator: string, from: string, id: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        registerInterface(interfaceId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        onKIP37BatchReceived(operator: string, from: string, ids: BigNumberish[], values: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onKIP37Received(operator: string, from: string, id: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        registerInterface(interfaceId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=KIP37ReceiverMock.d.ts.map