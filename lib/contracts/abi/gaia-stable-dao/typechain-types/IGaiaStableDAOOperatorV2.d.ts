import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IGaiaStableDAOOperatorV2Interface extends utils.Interface {
    contractName: "IGaiaStableDAOOperatorV2";
    functions: {
        "PRICEWITHGKRONOS()": FunctionFragment;
        "PRICEWITHGSUPERNOVA()": FunctionFragment;
        "PUBLICPRICE()": FunctionFragment;
        "burnedTokensAmount()": FunctionFragment;
        "devFund()": FunctionFragment;
        "gaiaKronos()": FunctionFragment;
        "gaiaSupernova()": FunctionFragment;
        "getBurnedIds()": FunctionFragment;
        "mintStableDAO(uint256,address)": FunctionFragment;
        "oUSDC()": FunctionFragment;
        "stableDAO()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "PRICEWITHGKRONOS", values?: undefined): string;
    encodeFunctionData(functionFragment: "PRICEWITHGSUPERNOVA", values?: undefined): string;
    encodeFunctionData(functionFragment: "PUBLICPRICE", values?: undefined): string;
    encodeFunctionData(functionFragment: "burnedTokensAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "devFund", values?: undefined): string;
    encodeFunctionData(functionFragment: "gaiaKronos", values?: undefined): string;
    encodeFunctionData(functionFragment: "gaiaSupernova", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBurnedIds", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintStableDAO", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "oUSDC", values?: undefined): string;
    encodeFunctionData(functionFragment: "stableDAO", values?: undefined): string;
    decodeFunctionResult(functionFragment: "PRICEWITHGKRONOS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PRICEWITHGSUPERNOVA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PUBLICPRICE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnedTokensAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "devFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaiaKronos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaiaSupernova", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBurnedIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintStableDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oUSDC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableDAO", data: BytesLike): Result;
    events: {
        "UpdateDevFund(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "UpdateDevFund"): EventFragment;
}
export declare type UpdateDevFundEvent = TypedEvent<[string], {
    newDevFund: string;
}>;
export declare type UpdateDevFundEventFilter = TypedEventFilter<UpdateDevFundEvent>;
export interface IGaiaStableDAOOperatorV2 extends BaseContract {
    contractName: "IGaiaStableDAOOperatorV2";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGaiaStableDAOOperatorV2Interface;
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
        PRICEWITHGKRONOS(overrides?: CallOverrides): Promise<[BigNumber]>;
        PRICEWITHGSUPERNOVA(overrides?: CallOverrides): Promise<[BigNumber]>;
        PUBLICPRICE(overrides?: CallOverrides): Promise<[BigNumber]>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        devFund(overrides?: CallOverrides): Promise<[string]>;
        gaiaKronos(overrides?: CallOverrides): Promise<[string]>;
        gaiaSupernova(overrides?: CallOverrides): Promise<[string]>;
        getBurnedIds(overrides?: CallOverrides): Promise<[number[]]>;
        mintStableDAO(amount: BigNumberish, nft: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        oUSDC(overrides?: CallOverrides): Promise<[string]>;
        stableDAO(overrides?: CallOverrides): Promise<[string]>;
    };
    PRICEWITHGKRONOS(overrides?: CallOverrides): Promise<BigNumber>;
    PRICEWITHGSUPERNOVA(overrides?: CallOverrides): Promise<BigNumber>;
    PUBLICPRICE(overrides?: CallOverrides): Promise<BigNumber>;
    burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
    devFund(overrides?: CallOverrides): Promise<string>;
    gaiaKronos(overrides?: CallOverrides): Promise<string>;
    gaiaSupernova(overrides?: CallOverrides): Promise<string>;
    getBurnedIds(overrides?: CallOverrides): Promise<number[]>;
    mintStableDAO(amount: BigNumberish, nft: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    oUSDC(overrides?: CallOverrides): Promise<string>;
    stableDAO(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        PRICEWITHGKRONOS(overrides?: CallOverrides): Promise<BigNumber>;
        PRICEWITHGSUPERNOVA(overrides?: CallOverrides): Promise<BigNumber>;
        PUBLICPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
        devFund(overrides?: CallOverrides): Promise<string>;
        gaiaKronos(overrides?: CallOverrides): Promise<string>;
        gaiaSupernova(overrides?: CallOverrides): Promise<string>;
        getBurnedIds(overrides?: CallOverrides): Promise<number[]>;
        mintStableDAO(amount: BigNumberish, nft: string, overrides?: CallOverrides): Promise<void>;
        oUSDC(overrides?: CallOverrides): Promise<string>;
        stableDAO(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "UpdateDevFund(address)"(newDevFund?: null): UpdateDevFundEventFilter;
        UpdateDevFund(newDevFund?: null): UpdateDevFundEventFilter;
    };
    estimateGas: {
        PRICEWITHGKRONOS(overrides?: CallOverrides): Promise<BigNumber>;
        PRICEWITHGSUPERNOVA(overrides?: CallOverrides): Promise<BigNumber>;
        PUBLICPRICE(overrides?: CallOverrides): Promise<BigNumber>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<BigNumber>;
        devFund(overrides?: CallOverrides): Promise<BigNumber>;
        gaiaKronos(overrides?: CallOverrides): Promise<BigNumber>;
        gaiaSupernova(overrides?: CallOverrides): Promise<BigNumber>;
        getBurnedIds(overrides?: CallOverrides): Promise<BigNumber>;
        mintStableDAO(amount: BigNumberish, nft: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        oUSDC(overrides?: CallOverrides): Promise<BigNumber>;
        stableDAO(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        PRICEWITHGKRONOS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PRICEWITHGSUPERNOVA(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PUBLICPRICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burnedTokensAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        devFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaiaKronos(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaiaSupernova(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBurnedIds(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintStableDAO(amount: BigNumberish, nft: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        oUSDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stableDAO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IGaiaStableDAOOperatorV2.d.ts.map