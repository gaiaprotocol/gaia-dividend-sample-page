import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IsKRNOInterface extends utils.Interface {
    contractName: "IsKRNO";
    functions: {
        "rebase(uint256,uint256)": FunctionFragment;
        "gonsForBalance(uint256)": FunctionFragment;
        "index()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "balanceForGons(uint256)": FunctionFragment;
        "circulatingSupply()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "rebase", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "gonsForBalance", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "index", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "balanceForGons", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "circulatingSupply", values?: undefined): string;
    decodeFunctionResult(functionFragment: "rebase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gonsForBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "index", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceForGons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "circulatingSupply", data: BytesLike): Result;
    events: {};
}
export interface IsKRNO extends BaseContract {
    contractName: "IsKRNO";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IsKRNOInterface;
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
        rebase(ohmProfit_: BigNumberish, epoch_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gonsForBalance(amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        index(overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOf(who: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceForGons(gons: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        circulatingSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    rebase(ohmProfit_: BigNumberish, epoch_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gonsForBalance(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    index(overrides?: CallOverrides): Promise<BigNumber>;
    balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;
    balanceForGons(gons: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        rebase(ohmProfit_: BigNumberish, epoch_: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        gonsForBalance(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        index(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceForGons(gons: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        rebase(ohmProfit_: BigNumberish, epoch_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gonsForBalance(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        index(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceForGons(gons: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        rebase(ohmProfit_: BigNumberish, epoch_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gonsForBalance(amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        index(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(who: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceForGons(gons: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        circulatingSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IsKRNO.d.ts.map