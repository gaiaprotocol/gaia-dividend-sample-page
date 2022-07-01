import { Signer, BytesLike } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP37ReceiverMock } from "../KIP37ReceiverMock";
export declare class KIP37ReceiverMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(recRetval: BytesLike, recReverts: boolean, batRetval: BytesLike, batReverts: boolean, overrides?: Overrides): Promise<KIP37ReceiverMock>;
    getDeployTransaction(recRetval: BytesLike, recReverts: boolean, batRetval: BytesLike, batReverts: boolean, overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP37ReceiverMock;
    connect(signer: Signer): KIP37ReceiverMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP37ReceiverMock;
}
//# sourceMappingURL=KIP37ReceiverMock__factory.d.ts.map