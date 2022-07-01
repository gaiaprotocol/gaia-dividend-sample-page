import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockUSDTPool, MockUSDTPoolInterface } from "../MockUSDTPool";
declare type MockUSDTPoolConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockUSDTPool__factory extends ContractFactory {
    constructor(...args: MockUSDTPoolConstructorParams);
    deploy(_kusdt: string, _ksp: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockUSDTPool>;
    getDeployTransaction(_kusdt: string, _ksp: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockUSDTPool;
    connect(signer: Signer): MockUSDTPool__factory;
    static readonly contractName: "MockUSDTPool";
    readonly contractName: "MockUSDTPool";
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200173938038062001739833981810160405260408110156200003757600080fd5b508051602090910151336402540be400620000626301ffc9a760e01b6001600160e01b03620000c616565b6200007d636578737160e01b6001600160e01b03620000c616565b6200009282826001600160e01b036200014b16565b5050600480546001600160a01b039384166001600160a01b03199182161790915560058054929093169116179055620002b2565b6001600160e01b0319808216141562000126576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b6001600160a01b038216620001a7576040805162461bcd60e51b815260206004820152601e60248201527f4b4950373a206d696e7420746f20746865207a65726f20616464726573730000604482015290519081900360640190fd5b620001c3816003546200025060201b620012931790919060201c565b6003556001600160a01b038216600090815260016020908152604090912054620001f89183906200129362000250821b17901c565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600082820183811015620002ab576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b61147780620002c26000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806356189cb4116100de5780639e3a92ff11610097578063b88d4fde11610071578063b88d4fde1461045f578063dd62ed3e14610525578063e7180f9a14610553578063eb795549146105795761018e565b80639e3a92ff1461040e578063a9059cbb1461042b578063b88a802f146104575761018e565b806356189cb41461035a57806370a082311461039057806379cc6790146103b65780638d80fc0c146102a75780638f840ddd146102a75780639dc29fac146103e25761018e565b80632e1a7d4d1161014b578063423f6cef11610125578063423f6cef146102db57806342842e0e1461030757806347bd3718146102a75780635521e9bf1461033d5761018e565b80632e1a7d4d1461028a5780633b1d21a2146102a757806340c10f19146102af5761018e565b806301ffc9a714610193578063095ea7b3146101ce57806318160ddd146101fa578063182df0f514610214578063222f5be01461021c57806323b872dd14610254575b600080fd5b6101ba600480360360208110156101a957600080fd5b50356001600160e01b031916610634565b604080519115158252519081900360200190f35b6101ba600480360360408110156101e457600080fd5b506001600160a01b038135169060200135610653565b610202610669565b60408051918252519081900360200190f35b61020261066f565b6102526004803603606081101561023257600080fd5b506001600160a01b03813581169160208101359091169060400135610708565b005b6101ba6004803603606081101561026a57600080fd5b506001600160a01b03813581169160208101359091169060400135610718565b610252600480360360208110156102a057600080fd5b503561076f565b610202610892565b610252600480360360408110156102c557600080fd5b506001600160a01b038135169060200135610897565b610252600480360360408110156102f157600080fd5b506001600160a01b0381351690602001356108a1565b6102526004803603606081101561031d57600080fd5b506001600160a01b038135811691602081013590911690604001356108bb565b6102526004803603602081101561035357600080fd5b50356108d6565b6102526004803603606081101561037057600080fd5b506001600160a01b038135811691602081013590911690604001356109f7565b610202600480360360208110156103a657600080fd5b50356001600160a01b0316610a02565b610252600480360360408110156103cc57600080fd5b506001600160a01b038135169060200135610a1d565b610252600480360360408110156103f857600080fd5b506001600160a01b038135169060200135610a27565b6102526004803603602081101561042457600080fd5b5035610a31565b6101ba6004803603604081101561044157600080fd5b506001600160a01b038135169060200135610b56565b610252610b63565b6102526004803603608081101561047557600080fd5b6001600160a01b038235811692602081013590911691604082013591908101906080810160608201356401000000008111156104b057600080fd5b8201836020820111156104c257600080fd5b803590602001918460018302840111640100000000831117156104e457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610be2945050505050565b6102026004803603604081101561053b57600080fd5b506001600160a01b0381358116916020013516610c3b565b6102026004803603602081101561056957600080fd5b50356001600160a01b0316610c66565b6102526004803603606081101561058f57600080fd5b6001600160a01b03823516916020810135918101906060810160408201356401000000008111156105bf57600080fd5b8201836020820111156105d157600080fd5b803590602001918460018302840111640100000000831117156105f357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c6c945050505050565b6001600160e01b03191660009081526020819052604090205460ff1690565b6000610660338484610cbe565b50600192915050565b60035490565b6000610679610669565b60048054604080516370a0823160e01b81523093810193909352516001600160a01b03909116916370a08231916024808301926020929190829003018186803b1580156106c557600080fd5b505afa1580156106d9573d6000803e3d6000fd5b505050506040513d60208110156106ef57600080fd5b5051670de0b6b3a7640000028161070257fe5b04905090565b610713838383610daa565b505050565b6000610725848484610daa565b6001600160a01b038416600090815260026020908152604080832033808552925290912054610765918691610760908663ffffffff610eee16565b610cbe565b5060019392505050565b60048054604080516370a0823160e01b81523093810193909352516000926001600160a01b03909216916370a08231916024808301926020929190829003018186803b1580156107be57600080fd5b505afa1580156107d2573d6000803e3d6000fd5b505050506040513d60208110156107e857600080fd5b50516107f2610669565b8302816107fb57fe5b600480546040805163a9059cbb60e01b8152339381019390935260248301879052519390920493506001600160a01b039091169163a9059cbb916044808201926020929091908290030181600087803b15801561085757600080fd5b505af115801561086b573d6000803e3d6000fd5b505050506040513d602081101561088157600080fd5b5061088e90503382610f37565b5050565b600090565b61088e8282611028565b61088e828260405180602001604052806000815250610c6c565b61071383838360405180602001604052806000815250610be2565b60006108e0610669565b60048054604080516370a0823160e01b815230938101939093525185926001600160a01b03909216916370a08231916024808301926020929190829003018186803b15801561092e57600080fd5b505afa158015610942573d6000803e3d6000fd5b505050506040513d602081101561095857600080fd5b5051028161096257fe5b600480546040805163a9059cbb60e01b81523393810193909352939092046024820181905292519293506001600160a01b039091169163a9059cbb916044808201926020929091908290030181600087803b1580156109c057600080fd5b505af11580156109d4573d6000803e3d6000fd5b505050506040513d60208110156109ea57600080fd5b5061088e90503383610f37565b610713838383610cbe565b6001600160a01b031660009081526001602052604090205490565b61088e828261111a565b61088e8282610f37565b60048054604080516370a0823160e01b81523093810193909352516000926001600160a01b03909216916370a08231916024808301926020929190829003018186803b158015610a8057600080fd5b505afa158015610a94573d6000803e3d6000fd5b505050506040513d6020811015610aaa57600080fd5b5051610ab4610669565b830281610abd57fe5b60048054604080516323b872dd60e01b8152339381019390935230602484015260448301879052519390920493506001600160a01b03909116916323b872dd916064808201926020929091908290030181600087803b158015610b1f57600080fd5b505af1158015610b33573d6000803e3d6000fd5b505050506040513d6020811015610b4957600080fd5b5061088e90503382611028565b6000610660338484610daa565b6005546040805163a9059cbb60e01b8152336004820152612710602482015290516001600160a01b039092169163a9059cbb916044808201926020929091908290030181600087803b158015610bb857600080fd5b505af1158015610bcc573d6000803e3d6000fd5b505050506040513d602081101561088e57600080fd5b610bed848484610718565b50610bfa8484848461115f565b610c355760405162461bcd60e51b815260040180806020018281038252602e8152602001806113ac602e913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b50600090565b610c768383610b56565b50610c833384848461115f565b6107135760405162461bcd60e51b815260040180806020018281038252602e8152602001806113ac602e913960400191505060405180910390fd5b6001600160a01b038316610d035760405162461bcd60e51b81526004018080602001828103825260238152602001806114206023913960400191505060405180910390fd5b6001600160a01b038216610d485760405162461bcd60e51b815260040180806020018281038252602181526020018061138b6021913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610def5760405162461bcd60e51b81526004018080602001828103825260248152602001806113fc6024913960400191505060405180910390fd5b6001600160a01b038216610e345760405162461bcd60e51b81526004018080602001828103825260228152602001806113da6022913960400191505060405180910390fd5b6001600160a01b038316600090815260016020526040902054610e5d908263ffffffff610eee16565b6001600160a01b038085166000908152600160205260408082209390935590841681522054610e92908263ffffffff61129316565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000610f3083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506112ed565b9392505050565b6001600160a01b038216610f92576040805162461bcd60e51b815260206004820181905260248201527f4b4950373a206275726e2066726f6d20746865207a65726f2061646472657373604482015290519081900360640190fd5b600354610fa5908263ffffffff610eee16565b6003556001600160a01b038216600090815260016020526040902054610fd1908263ffffffff610eee16565b6001600160a01b0383166000818152600160209081526040808320949094558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b6001600160a01b038216611083576040805162461bcd60e51b815260206004820152601e60248201527f4b4950373a206d696e7420746f20746865207a65726f20616464726573730000604482015290519081900360640190fd5b600354611096908263ffffffff61129316565b6003556001600160a01b0382166000908152600160205260409020546110c2908263ffffffff61129316565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6111248282610f37565b6001600160a01b03821660009081526002602090815260408083203380855292529091205461088e918491610760908563ffffffff610eee16565b6000611173846001600160a01b0316611384565b61117f5750600161128b565b604051634e8c461160e11b815233600482018181526001600160a01b03888116602485015260448401879052608060648501908152865160848601528651600095928a1694639d188c229490938c938b938b939260a4019060208501908083838e5b838110156111f95781810151838201526020016111e1565b50505050905090810190601f1680156112265780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561124857600080fd5b505af115801561125c573d6000803e3d6000fd5b505050506040513d602081101561127257600080fd5b50516001600160e01b031916634e8c461160e11b149150505b949350505050565b600082820183811015610f30576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000818484111561137c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611341578181015183820152602001611329565b50505050905090810190601f16801561136e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b3b15159056fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e7465724b4950373a207472616e7366657220746f20746865207a65726f20616464726573734b4950373a207472616e736665722066726f6d20746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a265627a7a72315820c20b0996837e976136e8a0aa3d34987fc3884031c7be7d7ff3d37b61865da74864736f6c63430005110032";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
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
    static createInterface(): MockUSDTPoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockUSDTPool;
}
export {};
//# sourceMappingURL=MockUSDTPool__factory.d.ts.map