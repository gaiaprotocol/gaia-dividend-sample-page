import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GaiaUSDCDistributorInterface extends utils.Interface {
    contractName: "GaiaUSDCDistributor";
    functions: {
        "GKRONOS()": FunctionFragment;
        "USDC()": FunctionFragment;
        "claim(uint256[])": FunctionFragment;
        "isRewardCollected(uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "rewardPerId(uint256)": FunctionFragment;
        "withdrawByOwner(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "GKRONOS", values?: undefined): string;
    encodeFunctionData(functionFragment: "USDC", values?: undefined): string;
    encodeFunctionData(functionFragment: "claim", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "isRewardCollected", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardPerId", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawByOwner", values: [string]): string;
    decodeFunctionResult(functionFragment: "GKRONOS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "USDC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRewardCollected", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardPerId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawByOwner", data: BytesLike): Result;
    events: {
        "Claim(address,uint256,uint256[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
}
export declare type ClaimEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber[]
], {
    claimer: string;
    amount: BigNumber;
    tokenIds: BigNumber[];
}>;
export declare type ClaimEventFilter = TypedEventFilter<ClaimEvent>;
export interface GaiaUSDCDistributor extends BaseContract {
    contractName: "GaiaUSDCDistributor";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GaiaUSDCDistributorInterface;
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
        GKRONOS(overrides?: CallOverrides): Promise<[string]>;
        USDC(overrides?: CallOverrides): Promise<[string]>;
        claim(tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isRewardCollected(arg0: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        rewardPerId(arg0: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        withdrawByOwner(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    GKRONOS(overrides?: CallOverrides): Promise<string>;
    USDC(overrides?: CallOverrides): Promise<string>;
    claim(tokenIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isRewardCollected(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    rewardPerId(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;
    withdrawByOwner(token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        GKRONOS(overrides?: CallOverrides): Promise<string>;
        USDC(overrides?: CallOverrides): Promise<string>;
        claim(tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        isRewardCollected(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        rewardPerId(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;
        withdrawByOwner(token: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Claim(address,uint256,uint256[])"(claimer?: null, amount?: null, tokenIds?: null): ClaimEventFilter;
        Claim(claimer?: null, amount?: null, tokenIds?: null): ClaimEventFilter;
    };
    estimateGas: {
        GKRONOS(overrides?: CallOverrides): Promise<BigNumber>;
        USDC(overrides?: CallOverrides): Promise<BigNumber>;
        claim(tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isRewardCollected(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerId(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawByOwner(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        GKRONOS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        USDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claim(tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isRewardCollected(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardPerId(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawByOwner(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=GaiaUSDCDistributor.d.ts.map