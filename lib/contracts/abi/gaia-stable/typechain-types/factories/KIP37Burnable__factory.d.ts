import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { KIP37Burnable, KIP37BurnableInterface } from "../KIP37Burnable";
export declare class KIP37Burnable__factory {
    static readonly abi: ({
        inputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        constant?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        payable?: undefined;
        stateMutability?: undefined;
        constant?: undefined;
        outputs?: undefined;
    } | {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): KIP37BurnableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP37Burnable;
}
//# sourceMappingURL=KIP37Burnable__factory.d.ts.map