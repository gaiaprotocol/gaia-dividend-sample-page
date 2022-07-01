import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockGaiaKronos, MockGaiaKronosInterface } from "../MockGaiaKronos";
declare type MockGaiaKronosConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockGaiaKronos__factory extends ContractFactory {
    constructor(...args: MockGaiaKronosConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockGaiaKronos>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockGaiaKronos;
    connect(signer: Signer): MockGaiaKronos__factory;
    static readonly contractName: "MockGaiaKronos";
    readonly contractName: "MockGaiaKronos";
    static readonly bytecode = "0x60046080818152634d6f636b60e01b60a081905261010060405260c092835260e0529081818181620000416301ffc9a760e01b6001600160e01b036200016516565b6200005c6380ac58cd60e01b6001600160e01b036200016516565b6200007763780e9d6360e01b6001600160e01b036200016516565b81516200008c90600990602085019062000384565b508051620000a290600a90602084019062000384565b50620000be635b5e139f60e01b6001600160e01b036200016516565b50505050620000d333620001ea60201b60201c565b620000ee630755c1f160e51b6001600160e01b036200016516565b62000109637d613fa360e11b6001600160e01b036200016516565b62000124630852cd8d60e31b6001600160e01b036200016516565b62000138336001600160e01b036200023c16565b600e805460ff191690556200015d634d5507ff60e01b6001600160e01b036200016516565b505062000429565b6001600160e01b03198082161415620001c5576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b6200020581600c6200028e60201b62001bc61790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b6200025781600d6200028e60201b62001bc61790919060201c565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b620002a382826001600160e01b036200031b16565b15620002f6576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b038216620003645760405162461bcd60e51b8152600401808060200182810382526022815260200180620029f76022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620003c757805160ff1916838001178555620003f7565b82800160010185558215620003f7579182015b82811115620003f7578251825591602001919060010190620003da565b506200040592915062000409565b5090565b6200042691905b8082111562000405576000815560010162000410565b90565b6125be80620004396000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c80635c975abb116100f9578063983b2d5611610097578063aa271e1a11610071578063aa271e1a146105ce578063b88d4fde146105f4578063c87b56dd146106ba578063e985e9c5146106d7576101c4565b8063983b2d56146105725780639865027514610598578063a22cb465146105a0576101c4565b806370a08231116100d357806370a082311461051657806382dc1ec41461053c5780638456cb591461056257806395d89b411461056a576101c4565b80635c975abb146104e95780636352211e146104f15780636ef8d66d1461050e576101c4565b80633f4ba83a1161016657806342966c681161014057806342966c68146103ce57806346fbf68e146103eb5780634f6ccce71461041157806350bb4e7f1461042e576101c4565b80633f4ba83a1461036457806340c10f191461036c57806342842e0e14610398576101c4565b8063095ea7b3116101a2578063095ea7b3146102ba57806318160ddd146102e857806323b872dd146103025780632f745c5914610338576101c4565b806301ffc9a7146101c957806306fdde0314610204578063081812fc14610281575b600080fd5b6101f0600480360360208110156101df57600080fd5b50356001600160e01b031916610705565b604080519115158252519081900360200190f35b61020c610724565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561024657818101518382015260200161022e565b50505050905090810190601f1680156102735780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61029e6004803603602081101561029757600080fd5b50356107bb565b604080516001600160a01b039092168252519081900360200190f35b6102e6600480360360408110156102d057600080fd5b506001600160a01b03813516906020013561081d565b005b6102f0610876565b60408051918252519081900360200190f35b6102e66004803603606081101561031857600080fd5b506001600160a01b0381358116916020810135909116906040013561087c565b6102f06004803603604081101561034e57600080fd5b506001600160a01b0381351690602001356108d7565b6102e6610956565b6101f06004803603604081101561038257600080fd5b506001600160a01b038135169060200135610a27565b6102e6600480360360608110156103ae57600080fd5b506001600160a01b03813581169160208101359091169060400135610a80565b6102e6600480360360208110156103e457600080fd5b5035610a9b565b6101f06004803603602081101561040157600080fd5b50356001600160a01b0316610aec565b6102f06004803603602081101561042757600080fd5b5035610b05565b6101f06004803603606081101561044457600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561047457600080fd5b82018360208201111561048657600080fd5b803590602001918460018302840111640100000000831117156104a857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610b6b945050505050565b6101f0610bcf565b61029e6004803603602081101561050757600080fd5b5035610bd8565b6102e6610c2c565b6102f06004803603602081101561052c57600080fd5b50356001600160a01b0316610c37565b6102e66004803603602081101561055257600080fd5b50356001600160a01b0316610c9f565b6102e6610cec565b61020c610dbd565b6102e66004803603602081101561058857600080fd5b50356001600160a01b0316610e1e565b6102e6610e6b565b6102e6600480360360408110156105b657600080fd5b506001600160a01b0381351690602001351515610e74565b6101f0600480360360208110156105e457600080fd5b50356001600160a01b0316610ec9565b6102e66004803603608081101561060a57600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561064557600080fd5b82018360208201111561065757600080fd5b8035906020019184600183028401116401000000008311171561067957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610edc945050505050565b61020c600480360360208110156106d057600080fd5b5035610f34565b6101f0600480360360408110156106ed57600080fd5b506001600160a01b0381358116916020013516611019565b6001600160e01b03191660009081526020819052604090205460ff1690565b60098054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107b05780601f10610785576101008083540402835291602001916107b0565b820191906000526020600020905b81548152906001019060200180831161079357829003601f168201915b505050505090505b90565b60006107c682611047565b6108015760405162461bcd60e51b815260040180806020018281038252602b8152602001806124fd602b913960400191505060405180910390fd5b506000908152600260205260409020546001600160a01b031690565b600e5460ff1615610868576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6108728282611064565b5050565b60075490565b600e5460ff16156108c7576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6108d283838361118b565b505050565b60006108e283610c37565b821061091f5760405162461bcd60e51b815260040180806020018281038252602a8152602001806122de602a913960400191505060405180910390fd5b6001600160a01b038316600090815260056020526040902080548390811061094357fe5b9060005260206000200154905092915050565b61095f33610aec565b61099a5760405162461bcd60e51b815260040180806020018281038252603081526020018061228b6030913960400191505060405180910390fd5b600e5460ff166109e8576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b600e805460ff191690556040805133815290517f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa9181900360200190a1565b6000610a3233610ec9565b610a6d5760405162461bcd60e51b81526004018080602001828103825260308152602001806123086030913960400191505060405180910390fd5b610a7783836111db565b50600192915050565b6108d283838360405180602001604052806000815250610edc565b610aa533826111f8565b610ae05760405162461bcd60e51b815260040180806020018281038252602f81526020018061242e602f913960400191505060405180910390fd5b610ae98161129c565b50565b6000610aff600d8363ffffffff6112ae16565b92915050565b6000610b0f610876565b8210610b4c5760405162461bcd60e51b815260040180806020018281038252602b8152602001806124ae602b913960400191505060405180910390fd5b60078281548110610b5957fe5b90600052602060002001549050919050565b6000610b7633610ec9565b610bb15760405162461bcd60e51b81526004018080602001828103825260308152602001806123086030913960400191505060405180910390fd5b610bbb84846111db565b610bc58383611315565b5060019392505050565b600e5460ff1690565b6000818152600160205260408120546001600160a01b031680610aff5760405162461bcd60e51b81526004018080602001828103825260288152602001806123596028913960400191505060405180910390fd5b610c3533611378565b565b60006001600160a01b038216610c7e5760405162461bcd60e51b815260040180806020018281038252602981526020018061245d6029913960400191505060405180910390fd5b6001600160a01b0382166000908152600360205260409020610aff906113c0565b610ca833610aec565b610ce35760405162461bcd60e51b815260040180806020018281038252603081526020018061228b6030913960400191505060405180910390fd5b610ae9816113c4565b610cf533610aec565b610d305760405162461bcd60e51b815260040180806020018281038252603081526020018061228b6030913960400191505060405180910390fd5b600e5460ff1615610d7b576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b600e805460ff191660011790556040805133815290517f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589181900360200190a1565b600a8054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107b05780601f10610785576101008083540402835291602001916107b0565b610e2733610ec9565b610e625760405162461bcd60e51b81526004018080602001828103825260308152602001806123086030913960400191505060405180910390fd5b610ae98161140c565b610c3533611454565b600e5460ff1615610ebf576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b610872828261149c565b6000610aff600c8363ffffffff6112ae16565b610ee784848461087c565b610ef384848484611568565b610f2e5760405162461bcd60e51b81526004018080602001828103825260308152602001806123fe6030913960400191505060405180910390fd5b50505050565b6060610f3f82611047565b610f7a5760405162461bcd60e51b815260040180806020018281038252602e81526020018061225d602e913960400191505060405180910390fd5b6000828152600b602090815260409182902080548351601f60026000196101006001861615020190931692909204918201849004840281018401909452808452909183018282801561100d5780601f10610fe25761010080835404028352916020019161100d565b820191906000526020600020905b815481529060010190602001808311610ff057829003601f168201915b50505050509050919050565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6000908152600160205260409020546001600160a01b0316151590565b600061106f82610bd8565b9050806001600160a01b0316836001600160a01b031614156110d8576040805162461bcd60e51b815260206004820181905260248201527f4b495031373a20617070726f76616c20746f2063757272656e74206f776e6572604482015290519081900360640190fd5b336001600160a01b03821614806110f457506110f48133611019565b61112f5760405162461bcd60e51b81526004018080602001828103825260378152602001806125286037913960400191505060405180910390fd5b60008281526002602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b61119533826111f8565b6111d05760405162461bcd60e51b81526004018080602001828103825260308152602001806123ac6030913960400191505060405180910390fd5b6108d2838383611945565b6111e58282611964565b6111ef8282611a95565b61087281611ad3565b600061120382611047565b61123e5760405162461bcd60e51b815260040180806020018281038252602b81526020018061255f602b913960400191505060405180910390fd5b600061124983610bd8565b9050806001600160a01b0316846001600160a01b031614806112845750836001600160a01b0316611279846107bb565b6001600160a01b0316145b8061129457506112948185611019565b949350505050565b610ae96112a882610bd8565b82611b17565b60006001600160a01b0382166112f55760405162461bcd60e51b81526004018080602001828103825260228152602001806123dc6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61131e82611047565b6113595760405162461bcd60e51b815260040180806020018281038252602b815260200180612381602b913960400191505060405180910390fd5b6000828152600b6020908152604090912082516108d292840190612160565b611389600d8263ffffffff611b5f16565b6040516001600160a01b038216907fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90600090a250565b5490565b6113d5600d8263ffffffff611bc616565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b61141d600c8263ffffffff611bc616565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b611465600c8263ffffffff611b5f16565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b6001600160a01b0382163314156114fa576040805162461bcd60e51b815260206004820152601860248201527f4b495031373a20617070726f766520746f2063616c6c65720000000000000000604482015290519081900360640190fd5b3360008181526004602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b600080606061157f866001600160a01b0316611c47565b61158e57600192505050611294565b856001600160a01b031663150b7a0260e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561161a578181015183820152602001611602565b50505050905090810190601f1680156116475780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b602083106116af5780518252601f199092019160209182019101611690565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611711576040519150601f19603f3d011682016040523d82523d6000602084013e611716565b606091505b50805191935091501580159061175357508051630a85bd0160e11b906020808401919081101561174557600080fd5b50516001600160e01b031916145b1561176357600192505050611294565b856001600160a01b0316636745782b60e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156117ef5781810151838201526020016117d7565b50505050905090810190601f16801561181c5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b602083106118845780518252601f199092019160209182019101611865565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146118e6576040519150601f19603f3d011682016040523d82523d6000602084013e6118eb565b606091505b50805191935091501580159061192857508051636745782b60e01b906020808401919081101561191a57600080fd5b50516001600160e01b031916145b1561193857600192505050611294565b5060009695505050505050565b611950838383611c4d565b61195a8382611d91565b6108d28282611a95565b6001600160a01b0382166119bf576040805162461bcd60e51b815260206004820152601f60248201527f4b495031373a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6119c881611047565b15611a1a576040805162461bcd60e51b815260206004820152601b60248201527f4b495031373a20746f6b656e20616c7265616479206d696e7465640000000000604482015290519081900360640190fd5b600081815260016020908152604080832080546001600160a01b0319166001600160a01b038716908117909155835260039091529020611a5990611e86565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160a01b0390911660009081526005602081815260408084208054868652600684529185208290559282526001810183559183529091200155565b600780546000838152600860205260408120829055600182018355919091527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880155565b611b218282611e8f565b6000818152600b60205260409020546002600019610100600184161502019091160415610872576000818152600b60205260408120610872916121de565b611b6982826112ae565b611ba45760405162461bcd60e51b81526004018080602001828103825260218152602001806123386021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b611bd082826112ae565b15611c22576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b3b151590565b826001600160a01b0316611c6082610bd8565b6001600160a01b031614611ca55760405162461bcd60e51b81526004018080602001828103825260288152602001806124866028913960400191505060405180910390fd5b6001600160a01b038216611cea5760405162461bcd60e51b81526004018080602001828103825260238152602001806122bb6023913960400191505060405180910390fd5b611cf381611ebb565b6001600160a01b0383166000908152600360205260409020611d1490611ef6565b6001600160a01b0382166000908152600360205260409020611d3590611e86565b60008181526001602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b038216600090815260056020526040812054611dbb90600163ffffffff611f0d16565b600083815260066020526040902054909150808214611e56576001600160a01b0384166000908152600560205260408120805484908110611df857fe5b906000526020600020015490508060056000876001600160a01b03166001600160a01b031681526020019081526020016000208381548110611e3657fe5b600091825260208083209091019290925591825260069052604090208190555b6001600160a01b0384166000908152600560205260409020805490611e7f906000198301612222565b5050505050565b80546001019055565b611e998282611f56565b611ea38282611d91565b6000818152600660205260408120556108728161202d565b6000818152600260205260409020546001600160a01b031615610ae957600090815260026020526040902080546001600160a01b0319169055565b8054611f0990600163ffffffff611f0d16565b9055565b6000611f4f83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506120c9565b9392505050565b816001600160a01b0316611f6982610bd8565b6001600160a01b031614611fae5760405162461bcd60e51b81526004018080602001828103825260248152602001806124d96024913960400191505060405180910390fd5b611fb781611ebb565b6001600160a01b0382166000908152600360205260409020611fd890611ef6565b60008181526001602052604080822080546001600160a01b0319169055518291906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60075460009061204490600163ffffffff611f0d16565b6000838152600860205260408120546007805493945090928490811061206657fe5b90600052602060002001549050806007838154811061208157fe5b600091825260208083209091019290925582815260089091526040902082905560078054906120b4906000198301612222565b50505060009182525060086020526040812055565b600081848411156121585760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561211d578181015183820152602001612105565b50505050905090810190601f16801561214a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106121a157805160ff19168380011785556121ce565b828001600101855582156121ce579182015b828111156121ce5782518255916020019190600101906121b3565b506121da929150612242565b5090565b50805460018160011615610100020316600290046000825580601f106122045750610ae9565b601f016020900490600052602060002090810190610ae99190612242565b8154818355818111156108d2576000838152602090206108d29181019083015b6107b891905b808211156121da576000815560010161224856fe4b495031374d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c654b495031373a207472616e7366657220746f20746865207a65726f20616464726573734b49503137456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b495031373a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031374d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b495031373a207472616e7366657220746f206e6f6e204b49503137526563656976657220696d706c656d656e7465724b495031374275726e61626c653a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495031373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495031373a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4b49503137456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e64734b495031373a206275726e206f6620746f6b656e2074686174206973206e6f74206f776e4b495031373a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4b495031373a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656ea265627a7a72315820c46f443ba74064a991add3c91e3080b8001bf2a065e5cdc29d4307bbe6e5825b64736f6c63430005110032526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
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
    static createInterface(): MockGaiaKronosInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockGaiaKronos;
}
export {};
//# sourceMappingURL=MockGaiaKronos__factory.d.ts.map