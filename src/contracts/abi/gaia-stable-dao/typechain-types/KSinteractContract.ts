/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface KSinteractContractInterface extends utils.Interface {
  contractName: "KSinteractContract";
  functions: {
    "deposit(uint256)": FunctionFragment;
    "withdraw1(uint256)": FunctionFragment;
    "withdraw2(uint256)": FunctionFragment;
    "withdrawUSDT(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw1",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw2",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawUSDT",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw2", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawUSDT",
    data: BytesLike
  ): Result;

  events: {
    "After(uint256,uint256,uint256,uint256)": EventFragment;
    "Before(uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "After"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Before"): EventFragment;
}

export type AfterEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  { cash: BigNumber; tb: BigNumber; ts: BigNumber; ers: BigNumber }
>;

export type AfterEventFilter = TypedEventFilter<AfterEvent>;

export type BeforeEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  { cash: BigNumber; tb: BigNumber; ts: BigNumber; ers: BigNumber }
>;

export type BeforeEventFilter = TypedEventFilter<BeforeEvent>;

export interface KSinteractContract extends BaseContract {
  contractName: "KSinteractContract";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KSinteractContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    deposit(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw1(
      kusdtAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw2(
      ikusdtAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawUSDT(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deposit(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw1(
    kusdtAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw2(
    ikusdtAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawUSDT(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    withdraw1(
      kusdtAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw2(
      ikusdtAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawUSDT(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "After(uint256,uint256,uint256,uint256)"(
      cash?: null,
      tb?: null,
      ts?: null,
      ers?: null
    ): AfterEventFilter;
    After(cash?: null, tb?: null, ts?: null, ers?: null): AfterEventFilter;

    "Before(uint256,uint256,uint256,uint256)"(
      cash?: null,
      tb?: null,
      ts?: null,
      ers?: null
    ): BeforeEventFilter;
    Before(cash?: null, tb?: null, ts?: null, ers?: null): BeforeEventFilter;
  };

  estimateGas: {
    deposit(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw1(
      kusdtAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw2(
      ikusdtAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawUSDT(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw1(
      kusdtAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw2(
      ikusdtAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawUSDT(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
