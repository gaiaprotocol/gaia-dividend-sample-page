import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MinterRoleInterface extends utils.Interface {
    contractName: "MinterRole";
    functions: {
        "addMinter(address)": FunctionFragment;
        "isMinter(address)": FunctionFragment;
        "renounceMinter()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addMinter", values: [string]): string;
    encodeFunctionData(functionFragment: "isMinter", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceMinter", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceMinter", data: BytesLike): Result;
    events: {
        "MinterAdded(address)": EventFragment;
        "MinterRemoved(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MinterAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinterRemoved"): EventFragment;
}
export declare type MinterAddedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type MinterAddedEventFilter = TypedEventFilter<MinterAddedEvent>;
export declare type MinterRemovedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type MinterRemovedEventFilter = TypedEventFilter<MinterRemovedEvent>;
export interface MinterRole extends BaseContract {
    contractName: "MinterRole";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MinterRoleInterface;
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
        addMinter(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isMinter(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        renounceMinter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addMinter(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isMinter(account: string, overrides?: CallOverrides): Promise<boolean>;
    renounceMinter(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addMinter(account: string, overrides?: CallOverrides): Promise<void>;
        isMinter(account: string, overrides?: CallOverrides): Promise<boolean>;
        renounceMinter(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "MinterAdded(address)"(account?: string | null): MinterAddedEventFilter;
        MinterAdded(account?: string | null): MinterAddedEventFilter;
        "MinterRemoved(address)"(account?: string | null): MinterRemovedEventFilter;
        MinterRemoved(account?: string | null): MinterRemovedEventFilter;
    };
    estimateGas: {
        addMinter(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isMinter(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        renounceMinter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addMinter(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isMinter(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceMinter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=MinterRole.d.ts.map