import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MockKSLPInterface extends utils.Interface {
    contractName: "MockKSLP";
    functions: {
        "tokenA()": FunctionFragment;
        "tokenB()": FunctionFragment;
        "factory()": FunctionFragment;
        "estimatePos(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "tokenA", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenB", values?: undefined): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "estimatePos", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "tokenA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimatePos", data: BytesLike): Result;
    events: {};
}
export interface MockKSLP extends BaseContract {
    contractName: "MockKSLP";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockKSLPInterface;
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
        tokenA(overrides?: CallOverrides): Promise<[string]>;
        tokenB(overrides?: CallOverrides): Promise<[string]>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        estimatePos(arg0: string, inAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            outAmount: BigNumber;
        }>;
    };
    tokenA(overrides?: CallOverrides): Promise<string>;
    tokenB(overrides?: CallOverrides): Promise<string>;
    factory(overrides?: CallOverrides): Promise<string>;
    estimatePos(arg0: string, inAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        tokenA(overrides?: CallOverrides): Promise<string>;
        tokenB(overrides?: CallOverrides): Promise<string>;
        factory(overrides?: CallOverrides): Promise<string>;
        estimatePos(arg0: string, inAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        tokenA(overrides?: CallOverrides): Promise<BigNumber>;
        tokenB(overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        estimatePos(arg0: string, inAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        tokenA(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimatePos(arg0: string, inAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=MockKSLP.d.ts.map