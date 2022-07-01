import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface StableDAORewardDistributorInterface extends utils.Interface {
    contractName: "StableDAORewardDistributor";
    functions: {
        "KLAY()": FunctionFragment;
        "claimRewards(uint256[],uint256[],bytes32[][])": FunctionFragment;
        "claimRewardsByOwner(address[],uint256[],uint256[],bytes32[][])": FunctionFragment;
        "depositReward(address,uint256,bytes32)": FunctionFragment;
        "emergencyWithdraw(address)": FunctionFragment;
        "isDepositor(address)": FunctionFragment;
        "isRewardCollected(address,uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "rewards(uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateDepositor(address,bool)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "KLAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [BigNumberish[], BigNumberish[], BytesLike[][]]): string;
    encodeFunctionData(functionFragment: "claimRewardsByOwner", values: [string[], BigNumberish[], BigNumberish[], BytesLike[][]]): string;
    encodeFunctionData(functionFragment: "depositReward", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "emergencyWithdraw", values: [string]): string;
    encodeFunctionData(functionFragment: "isDepositor", values: [string]): string;
    encodeFunctionData(functionFragment: "isRewardCollected", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewards", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updateDepositor", values: [string, boolean]): string;
    decodeFunctionResult(functionFragment: "KLAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewardsByOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDepositor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRewardCollected", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateDepositor", data: BytesLike): Result;
    events: {
        "Claim(address,uint256)": EventFragment;
        "DisclaimReward(address,uint256)": EventFragment;
        "Distribute(address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "UpdateClaimInterval(uint256)": EventFragment;
        "UpdateDevFund(address)": EventFragment;
        "UpdateUnclaimed(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisclaimReward"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Distribute"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateClaimInterval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateDevFund"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateUnclaimed"): EventFragment;
}
export declare type ClaimEvent = TypedEvent<[
    string,
    BigNumber
], {
    user: string;
    amount: BigNumber;
}>;
export declare type ClaimEventFilter = TypedEventFilter<ClaimEvent>;
export declare type DisclaimRewardEvent = TypedEvent<[
    string,
    BigNumber
], {
    user: string;
    amount: BigNumber;
}>;
export declare type DisclaimRewardEventFilter = TypedEventFilter<DisclaimRewardEvent>;
export declare type DistributeEvent = TypedEvent<[
    string,
    BigNumber
], {
    token: string;
    amount: BigNumber;
}>;
export declare type DistributeEventFilter = TypedEventFilter<DistributeEvent>;
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export declare type UpdateClaimIntervalEvent = TypedEvent<[
    BigNumber
], {
    newInterval: BigNumber;
}>;
export declare type UpdateClaimIntervalEventFilter = TypedEventFilter<UpdateClaimIntervalEvent>;
export declare type UpdateDevFundEvent = TypedEvent<[string], {
    newDevFund: string;
}>;
export declare type UpdateDevFundEventFilter = TypedEventFilter<UpdateDevFundEvent>;
export declare type UpdateUnclaimedEvent = TypedEvent<[
    string,
    BigNumber
], {
    user: string;
    amount: BigNumber;
}>;
export declare type UpdateUnclaimedEventFilter = TypedEventFilter<UpdateUnclaimedEvent>;
export interface StableDAORewardDistributor extends BaseContract {
    contractName: "StableDAORewardDistributor";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StableDAORewardDistributorInterface;
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
        KLAY(overrides?: CallOverrides): Promise<[string]>;
        claimRewards(rewardIds: BigNumberish[], amounts: BigNumberish[], proof: BytesLike[][], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimRewardsByOwner(users: string[], rewardIds: BigNumberish[], amounts: BigNumberish[], proof: BytesLike[][], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        depositReward(token: string, amount: BigNumberish, merkleRoot: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        emergencyWithdraw(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isDepositor(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        isRewardCollected(user: string, rewardId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        rewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            string
        ] & {
            token: string;
            amount: BigNumber;
            merkleRoot: string;
        }>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateDepositor(depositor: string, status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    KLAY(overrides?: CallOverrides): Promise<string>;
    claimRewards(rewardIds: BigNumberish[], amounts: BigNumberish[], proof: BytesLike[][], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimRewardsByOwner(users: string[], rewardIds: BigNumberish[], amounts: BigNumberish[], proof: BytesLike[][], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    depositReward(token: string, amount: BigNumberish, merkleRoot: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    emergencyWithdraw(token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isDepositor(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    isRewardCollected(user: string, rewardId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    rewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        string
    ] & {
        token: string;
        amount: BigNumber;
        merkleRoot: string;
    }>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateDepositor(depositor: string, status: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        KLAY(overrides?: CallOverrides): Promise<string>;
        claimRewards(rewardIds: BigNumberish[], amounts: BigNumberish[], proof: BytesLike[][], overrides?: CallOverrides): Promise<void>;
        claimRewardsByOwner(users: string[], rewardIds: BigNumberish[], amounts: BigNumberish[], proof: BytesLike[][], overrides?: CallOverrides): Promise<void>;
        depositReward(token: string, amount: BigNumberish, merkleRoot: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        emergencyWithdraw(token: string, overrides?: CallOverrides): Promise<void>;
        isDepositor(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        isRewardCollected(user: string, rewardId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        rewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            string
        ] & {
            token: string;
            amount: BigNumber;
            merkleRoot: string;
        }>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        updateDepositor(depositor: string, status: boolean, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Claim(address,uint256)"(user?: string | null, amount?: null): ClaimEventFilter;
        Claim(user?: string | null, amount?: null): ClaimEventFilter;
        "DisclaimReward(address,uint256)"(user?: string | null, amount?: null): DisclaimRewardEventFilter;
        DisclaimReward(user?: string | null, amount?: null): DisclaimRewardEventFilter;
        "Distribute(address,uint256)"(token?: null, amount?: null): DistributeEventFilter;
        Distribute(token?: null, amount?: null): DistributeEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "UpdateClaimInterval(uint256)"(newInterval?: null): UpdateClaimIntervalEventFilter;
        UpdateClaimInterval(newInterval?: null): UpdateClaimIntervalEventFilter;
        "UpdateDevFund(address)"(newDevFund?: null): UpdateDevFundEventFilter;
        UpdateDevFund(newDevFund?: null): UpdateDevFundEventFilter;
        "UpdateUnclaimed(address,uint256)"(user?: string | null, amount?: null): UpdateUnclaimedEventFilter;
        UpdateUnclaimed(user?: string | null, amount?: null): UpdateUnclaimedEventFilter;
    };
    estimateGas: {
        KLAY(overrides?: CallOverrides): Promise<BigNumber>;
        claimRewards(rewardIds: BigNumberish[], amounts: BigNumberish[], proof: BytesLike[][], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimRewardsByOwner(users: string[], rewardIds: BigNumberish[], amounts: BigNumberish[], proof: BytesLike[][], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        depositReward(token: string, amount: BigNumberish, merkleRoot: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        emergencyWithdraw(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isDepositor(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        isRewardCollected(user: string, rewardId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        rewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateDepositor(depositor: string, status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        KLAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimRewards(rewardIds: BigNumberish[], amounts: BigNumberish[], proof: BytesLike[][], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimRewardsByOwner(users: string[], rewardIds: BigNumberish[], amounts: BigNumberish[], proof: BytesLike[][], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        depositReward(token: string, amount: BigNumberish, merkleRoot: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        emergencyWithdraw(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isDepositor(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isRewardCollected(user: string, rewardId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        rewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateDepositor(depositor: string, status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=StableDAORewardDistributor.d.ts.map