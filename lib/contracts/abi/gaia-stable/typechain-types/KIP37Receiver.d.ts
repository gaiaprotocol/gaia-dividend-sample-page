import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface KIP37ReceiverInterface extends utils.Interface {
    contractName: "KIP37Receiver";
    functions: {
        "onKIP37BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onKIP37Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "onKIP37BatchReceived", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "onKIP37Received", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "onKIP37BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onKIP37Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {};
}
export interface KIP37Receiver extends BaseContract {
    contractName: "KIP37Receiver";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: KIP37ReceiverInterface;
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
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    onKIP37BatchReceived(operator: string, from: string, ids: BigNumberish[], values: BigNumberish[], data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onKIP37Received(operator: string, from: string, id: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        onKIP37BatchReceived(operator: string, from: string, ids: BigNumberish[], values: BigNumberish[], data: BytesLike, overrides?: CallOverrides): Promise<string>;
        onKIP37Received(operator: string, from: string, id: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        onKIP37BatchReceived(operator: string, from: string, ids: BigNumberish[], values: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onKIP37Received(operator: string, from: string, id: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
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
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=KIP37Receiver.d.ts.map