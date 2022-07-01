import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IGaiaOperationInterface extends utils.Interface {
    contractName: "IGaiaOperation";
    functions: {
        "claim(uint256[],uint256[])": FunctionFragment;
        "claimableKlay(uint256[])": FunctionFragment;
        "whitelistSale()": FunctionFragment;
        "publicSale()": FunctionFragment;
        "kronosStaking()": FunctionFragment;
        "protocolStarted()": FunctionFragment;
        "devFund()": FunctionFragment;
        "claimKlayViaZap(uint256[],uint256[],uint256,address[])": FunctionFragment;
        "claimableKRNO(uint256[])": FunctionFragment;
        "getKRNOBalance(uint256)": FunctionFragment;
        "klayKRNOLP()": FunctionFragment;
        "sKRNO()": FunctionFragment;
        "gaiaNFT()": FunctionFragment;
        "mintGaiaNFTWithWhitelist(uint256)": FunctionFragment;
        "mintGaiaNFT(uint256)": FunctionFragment;
        "klaySwapFactory()": FunctionFragment;
        "gonsForId(uint256)": FunctionFragment;
        "buyBackFund()": FunctionFragment;
        "whitelistTickets(address)": FunctionFragment;
        "KRNO()": FunctionFragment;
        "gaiaPrice()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "claim", values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "claimableKlay", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "whitelistSale", values?: undefined): string;
    encodeFunctionData(functionFragment: "publicSale", values?: undefined): string;
    encodeFunctionData(functionFragment: "kronosStaking", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolStarted", values?: undefined): string;
    encodeFunctionData(functionFragment: "devFund", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimKlayViaZap", values: [BigNumberish[], BigNumberish[], BigNumberish, string[]]): string;
    encodeFunctionData(functionFragment: "claimableKRNO", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getKRNOBalance", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "klayKRNOLP", values?: undefined): string;
    encodeFunctionData(functionFragment: "sKRNO", values?: undefined): string;
    encodeFunctionData(functionFragment: "gaiaNFT", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintGaiaNFTWithWhitelist", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintGaiaNFT", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "klaySwapFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "gonsForId", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "buyBackFund", values?: undefined): string;
    encodeFunctionData(functionFragment: "whitelistTickets", values: [string]): string;
    encodeFunctionData(functionFragment: "KRNO", values?: undefined): string;
    encodeFunctionData(functionFragment: "gaiaPrice", values?: undefined): string;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimableKlay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistSale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "publicSale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kronosStaking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolStarted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "devFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimKlayViaZap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimableKRNO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getKRNOBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "klayKRNOLP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sKRNO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaiaNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintGaiaNFTWithWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintGaiaNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "klaySwapFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gonsForId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buyBackFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistTickets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "KRNO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaiaPrice", data: BytesLike): Result;
    events: {
        "UpdateBuyBackFund(address)": EventFragment;
        "UpdateDevFund(address)": EventFragment;
        "SetWhitelistSale(bool)": EventFragment;
        "SetPublicSale(bool)": EventFragment;
        "StartProtocol(uint256)": EventFragment;
        "ClaimKRNO(uint256,address,uint256)": EventFragment;
        "ClaimKlay(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "UpdateBuyBackFund"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateDevFund"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetWhitelistSale"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPublicSale"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StartProtocol"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimKRNO"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimKlay"): EventFragment;
}
export declare type UpdateBuyBackFundEvent = TypedEvent<[
    string
], {
    newBuyBackFund: string;
}>;
export declare type UpdateBuyBackFundEventFilter = TypedEventFilter<UpdateBuyBackFundEvent>;
export declare type UpdateDevFundEvent = TypedEvent<[string], {
    newDevFund: string;
}>;
export declare type UpdateDevFundEventFilter = TypedEventFilter<UpdateDevFundEvent>;
export declare type SetWhitelistSaleEvent = TypedEvent<[boolean], {
    status: boolean;
}>;
export declare type SetWhitelistSaleEventFilter = TypedEventFilter<SetWhitelistSaleEvent>;
export declare type SetPublicSaleEvent = TypedEvent<[boolean], {
    status: boolean;
}>;
export declare type SetPublicSaleEventFilter = TypedEventFilter<SetPublicSaleEvent>;
export declare type StartProtocolEvent = TypedEvent<[
    BigNumber
], {
    initialSKRNOEach: BigNumber;
}>;
export declare type StartProtocolEventFilter = TypedEventFilter<StartProtocolEvent>;
export declare type ClaimKRNOEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], {
    id: BigNumber;
    user: string;
    amountOfKRNO: BigNumber;
}>;
export declare type ClaimKRNOEventFilter = TypedEventFilter<ClaimKRNOEvent>;
export declare type ClaimKlayEvent = TypedEvent<[
    string,
    BigNumber
], {
    user: string;
    totalKlay: BigNumber;
}>;
export declare type ClaimKlayEventFilter = TypedEventFilter<ClaimKlayEvent>;
export interface IGaiaOperation extends BaseContract {
    contractName: "IGaiaOperation";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGaiaOperationInterface;
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
        claim(ids: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimableKlay(ids: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber] & {
            totalKlay: BigNumber;
        }>;
        whitelistSale(overrides?: CallOverrides): Promise<[boolean]>;
        publicSale(overrides?: CallOverrides): Promise<[boolean]>;
        kronosStaking(overrides?: CallOverrides): Promise<[string]>;
        protocolStarted(overrides?: CallOverrides): Promise<[boolean]>;
        devFund(overrides?: CallOverrides): Promise<[string]>;
        claimKlayViaZap(ids: BigNumberish[], amounts: BigNumberish[], minAmount: BigNumberish, swapRouteArray: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimableKRNO(ids: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber] & {
            totalKRNO: BigNumber;
        }>;
        getKRNOBalance(id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        klayKRNOLP(overrides?: CallOverrides): Promise<[string]>;
        sKRNO(overrides?: CallOverrides): Promise<[string]>;
        gaiaNFT(overrides?: CallOverrides): Promise<[string]>;
        mintGaiaNFTWithWhitelist(amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintGaiaNFT(amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        klaySwapFactory(overrides?: CallOverrides): Promise<[string]>;
        gonsForId(id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        buyBackFund(overrides?: CallOverrides): Promise<[string]>;
        whitelistTickets(user: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            tickets: BigNumber;
        }>;
        KRNO(overrides?: CallOverrides): Promise<[string]>;
        gaiaPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    claim(ids: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimableKlay(ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
    whitelistSale(overrides?: CallOverrides): Promise<boolean>;
    publicSale(overrides?: CallOverrides): Promise<boolean>;
    kronosStaking(overrides?: CallOverrides): Promise<string>;
    protocolStarted(overrides?: CallOverrides): Promise<boolean>;
    devFund(overrides?: CallOverrides): Promise<string>;
    claimKlayViaZap(ids: BigNumberish[], amounts: BigNumberish[], minAmount: BigNumberish, swapRouteArray: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimableKRNO(ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
    getKRNOBalance(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    klayKRNOLP(overrides?: CallOverrides): Promise<string>;
    sKRNO(overrides?: CallOverrides): Promise<string>;
    gaiaNFT(overrides?: CallOverrides): Promise<string>;
    mintGaiaNFTWithWhitelist(amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintGaiaNFT(amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    klaySwapFactory(overrides?: CallOverrides): Promise<string>;
    gonsForId(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    buyBackFund(overrides?: CallOverrides): Promise<string>;
    whitelistTickets(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    KRNO(overrides?: CallOverrides): Promise<string>;
    gaiaPrice(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        claim(ids: BigNumberish[], amounts: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        claimableKlay(ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        whitelistSale(overrides?: CallOverrides): Promise<boolean>;
        publicSale(overrides?: CallOverrides): Promise<boolean>;
        kronosStaking(overrides?: CallOverrides): Promise<string>;
        protocolStarted(overrides?: CallOverrides): Promise<boolean>;
        devFund(overrides?: CallOverrides): Promise<string>;
        claimKlayViaZap(ids: BigNumberish[], amounts: BigNumberish[], minAmount: BigNumberish, swapRouteArray: string[], overrides?: CallOverrides): Promise<BigNumber>;
        claimableKRNO(ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        getKRNOBalance(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        klayKRNOLP(overrides?: CallOverrides): Promise<string>;
        sKRNO(overrides?: CallOverrides): Promise<string>;
        gaiaNFT(overrides?: CallOverrides): Promise<string>;
        mintGaiaNFTWithWhitelist(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        mintGaiaNFT(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        klaySwapFactory(overrides?: CallOverrides): Promise<string>;
        gonsForId(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        buyBackFund(overrides?: CallOverrides): Promise<string>;
        whitelistTickets(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        KRNO(overrides?: CallOverrides): Promise<string>;
        gaiaPrice(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "UpdateBuyBackFund(address)"(newBuyBackFund?: null): UpdateBuyBackFundEventFilter;
        UpdateBuyBackFund(newBuyBackFund?: null): UpdateBuyBackFundEventFilter;
        "UpdateDevFund(address)"(newDevFund?: null): UpdateDevFundEventFilter;
        UpdateDevFund(newDevFund?: null): UpdateDevFundEventFilter;
        "SetWhitelistSale(bool)"(status?: null): SetWhitelistSaleEventFilter;
        SetWhitelistSale(status?: null): SetWhitelistSaleEventFilter;
        "SetPublicSale(bool)"(status?: null): SetPublicSaleEventFilter;
        SetPublicSale(status?: null): SetPublicSaleEventFilter;
        "StartProtocol(uint256)"(initialSKRNOEach?: null): StartProtocolEventFilter;
        StartProtocol(initialSKRNOEach?: null): StartProtocolEventFilter;
        "ClaimKRNO(uint256,address,uint256)"(id?: BigNumberish | null, user?: string | null, amountOfKRNO?: null): ClaimKRNOEventFilter;
        ClaimKRNO(id?: BigNumberish | null, user?: string | null, amountOfKRNO?: null): ClaimKRNOEventFilter;
        "ClaimKlay(address,uint256)"(user?: string | null, totalKlay?: null): ClaimKlayEventFilter;
        ClaimKlay(user?: string | null, totalKlay?: null): ClaimKlayEventFilter;
    };
    estimateGas: {
        claim(ids: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimableKlay(ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        whitelistSale(overrides?: CallOverrides): Promise<BigNumber>;
        publicSale(overrides?: CallOverrides): Promise<BigNumber>;
        kronosStaking(overrides?: CallOverrides): Promise<BigNumber>;
        protocolStarted(overrides?: CallOverrides): Promise<BigNumber>;
        devFund(overrides?: CallOverrides): Promise<BigNumber>;
        claimKlayViaZap(ids: BigNumberish[], amounts: BigNumberish[], minAmount: BigNumberish, swapRouteArray: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimableKRNO(ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        getKRNOBalance(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        klayKRNOLP(overrides?: CallOverrides): Promise<BigNumber>;
        sKRNO(overrides?: CallOverrides): Promise<BigNumber>;
        gaiaNFT(overrides?: CallOverrides): Promise<BigNumber>;
        mintGaiaNFTWithWhitelist(amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintGaiaNFT(amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        klaySwapFactory(overrides?: CallOverrides): Promise<BigNumber>;
        gonsForId(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        buyBackFund(overrides?: CallOverrides): Promise<BigNumber>;
        whitelistTickets(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        KRNO(overrides?: CallOverrides): Promise<BigNumber>;
        gaiaPrice(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        claim(ids: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimableKlay(ids: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        whitelistSale(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        publicSale(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        kronosStaking(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolStarted(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        devFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimKlayViaZap(ids: BigNumberish[], amounts: BigNumberish[], minAmount: BigNumberish, swapRouteArray: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimableKRNO(ids: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getKRNOBalance(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        klayKRNOLP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sKRNO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaiaNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintGaiaNFTWithWhitelist(amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintGaiaNFT(amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        klaySwapFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gonsForId(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buyBackFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        whitelistTickets(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        KRNO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaiaPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IGaiaOperation.d.ts.map