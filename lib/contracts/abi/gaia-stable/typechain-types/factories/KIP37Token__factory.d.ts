import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP37Token, KIP37TokenInterface } from "../KIP37Token";
declare type KIP37TokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class KIP37Token__factory extends ContractFactory {
    constructor(...args: KIP37TokenConstructorParams);
    deploy(uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<KIP37Token>;
    getDeployTransaction(uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): KIP37Token;
    connect(signer: Signer): KIP37Token__factory;
    static readonly contractName: "KIP37Token";
    readonly contractName: "KIP37Token";
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620040a6380380620040a6833981810160405260208110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052508291506200010b90506301ffc9a760e01b6001600160e01b03620001e016565b6200011f816001600160e01b036200026516565b6200013a636433ca1f60e01b6001600160e01b03620001e016565b620001556303a24d0760e21b6001600160e01b03620001e016565b5062000171634f04a74f60e11b6001600160e01b03620001e016565b62000185336001600160e01b036200027e16565b6006805460ff19169055620001aa630e8ffdb760e01b6001600160e01b03620001e016565b620001be336001600160e01b03620002d016565b620001d96337f6767b60e21b6001600160e01b03620001e016565b50620004bd565b6001600160e01b0319808216141562000240576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b80516200027a90600490602084019062000418565b5050565b620002998160056200032260201b620037131790919060201c565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b620002eb8160086200032260201b620037131790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b6200033782826001600160e01b03620003af16565b156200038a576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b038216620003f85760405162461bcd60e51b8152600401808060200182810382526022815260200180620040846022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200045b57805160ff19168380011785556200048b565b828001600101855582156200048b579182015b828111156200048b5782518255916020019190600101906200046e565b50620004999291506200049d565b5090565b620004ba91905b80821115620004995760008155600101620004a4565b90565b613bb780620004cd6000396000f3fe608060405234801561001057600080fd5b50600436106101c25760003560e01c8063836a1040116100f9578063cd53d08e11610097578063e985e9c511610071578063e985e9c514610bf8578063f242432a14610c26578063f5298aca14610cef578063fabc1cbc14610d21576101c2565b8063cd53d08e14610962578063cfa84fc11461099b578063d81d0a1514610ac5576101c2565b806398650275116100d357806398650275146108e9578063a22cb465146108f1578063aa271e1a1461091f578063bd85b03914610945576101c2565b8063836a1040146108895780638456cb59146108bb578063983b2d56146108c3576101c2565b806346fbf68e116101665780635c975abb116101405780635c975abb146107205780636b20c454146107285780636ef8d66d1461085b57806382dc1ec414610863576101c2565b806346fbf68e146104d75780634b068c78146104fd5780634e1273f4146105ad576101c2565b80630e89341c116101a25780630e89341c1461025d578063136439dd146102ef5780632eb2c2d61461030e5780633f4ba83a146104cf576101c2565b8062dde10e146101c7578062fdd58e146101f857806301ffc9a714610236575b600080fd5b6101e4600480360360208110156101dd57600080fd5b5035610d3e565b604080519115158252519081900360200190f35b6102246004803603604081101561020e57600080fd5b506001600160a01b038135169060200135610d56565b60408051918252519081900360200190f35b6101e46004803603602081101561024c57600080fd5b50356001600160e01b031916610dc5565b61027a6004803603602081101561027357600080fd5b5035610de4565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102b457818101518382015260200161029c565b50505050905090810190601f1680156102e15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61030c6004803603602081101561030557600080fd5b5035610f26565b005b61030c600480360360a081101561032457600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b81111561035757600080fd5b82018360208201111561036957600080fd5b803590602001918460208302840111600160201b8311171561038a57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156103d957600080fd5b8201836020820111156103eb57600080fd5b803590602001918460208302840111600160201b8311171561040c57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561045b57600080fd5b82018360208201111561046d57600080fd5b803590602001918460018302840111600160201b8311171561048e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611028945050505050565b61030c611361565b6101e4600480360360208110156104ed57600080fd5b50356001600160a01b0316611432565b6101e46004803603606081101561051357600080fd5b813591602081013591810190606081016040820135600160201b81111561053957600080fd5b82018360208201111561054b57600080fd5b803590602001918460018302840111600160201b8311171561056c57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061144b945050505050565b6106d0600480360360408110156105c357600080fd5b810190602081018135600160201b8111156105dd57600080fd5b8201836020820111156105ef57600080fd5b803590602001918460208302840111600160201b8311171561061057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561065f57600080fd5b82018360208201111561067157600080fd5b803590602001918460208302840111600160201b8311171561069257600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506115f2945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561070c5781810151838201526020016106f4565b505050509050019250505060405180910390f35b6101e4611759565b61030c6004803603606081101561073e57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561076857600080fd5b82018360208201111561077a57600080fd5b803590602001918460208302840111600160201b8311171561079b57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156107ea57600080fd5b8201836020820111156107fc57600080fd5b803590602001918460208302840111600160201b8311171561081d57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611763945050505050565b61030c6117dc565b61030c6004803603602081101561087957600080fd5b50356001600160a01b03166117e7565b61030c6004803603606081101561089f57600080fd5b508035906001600160a01b036020820135169060400135611837565b61030c6118eb565b61030c600480360360208110156108d957600080fd5b50356001600160a01b03166119bc565b61030c611a09565b61030c6004803603604081101561090757600080fd5b506001600160a01b0381351690602001351515611a12565b6101e46004803603602081101561093557600080fd5b50356001600160a01b0316611b01565b6102246004803603602081101561095b57600080fd5b5035611b14565b61097f6004803603602081101561097857600080fd5b5035611b26565b604080516001600160a01b039092168252519081900360200190f35b61030c600480360360608110156109b157600080fd5b81359190810190604081016020820135600160201b8111156109d257600080fd5b8201836020820111156109e457600080fd5b803590602001918460208302840111600160201b83111715610a0557600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b811115610a5457600080fd5b820183602082011115610a6657600080fd5b803590602001918460208302840111600160201b83111715610a8757600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611b41945050505050565b61030c60048036036060811015610adb57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b811115610b0557600080fd5b820183602082011115610b1757600080fd5b803590602001918460208302840111600160201b83111715610b3857600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b811115610b8757600080fd5b820183602082011115610b9957600080fd5b803590602001918460208302840111600160201b83111715610bba57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611c81945050505050565b6101e460048036036040811015610c0e57600080fd5b506001600160a01b0381358116916020013516611d5d565b61030c600480360360a0811015610c3c57600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b811115610c7b57600080fd5b820183602082011115610c8d57600080fd5b803590602001918460018302840111600160201b83111715610cae57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611d8b945050505050565b61030c60048036036060811015610d0557600080fd5b506001600160a01b038135169060208101359060400135611f97565b61030c60048036036020811015610d3757600080fd5b503561200b565b60008181526007602052604090205460ff165b919050565b60006001600160a01b038316610d9d5760405162461bcd60e51b81526004018080602001828103825260298152602001806138c76029913960400191505060405180910390fd5b5060009081526001602090815260408083206001600160a01b03949094168352929052205490565b6001600160e01b03191660009081526020819052604090205460ff1690565b6000818152600a60209081526040918290208054835160026001831615610100026000190190921691909104601f81018490048402820184019094528381526060938493919291830182828015610e7c5780601f10610e5157610100808354040283529160200191610e7c565b820191906000526020600020905b815481529060010190602001808311610e5f57829003601f168201915b505050505090508051600014610e93579050610d51565b6004805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610f195780601f10610eee57610100808354040283529160200191610f19565b820191906000526020600020905b815481529060010190602001808311610efc57829003601f168201915b5050505050915050919050565b610f2f33611432565b610f6a5760405162461bcd60e51b81526004018080602001828103825260308152602001806138546030913960400191505060405180910390fd5b60008181526007602052604090205460ff1615610fce576040805162461bcd60e51b815260206004820152601d60248201527f4b495033375061757361626c653a20616c726561647920706175736564000000604482015290519081900360640190fd5b600081815260076020908152604091829020805460ff191660011790558151838152339181019190915281517fabdb1c9133626eb4f8c5f2ec7e3c60a969a2fb148a0c341a3cf6597242c8f8f5929181900390910190a150565b81518351146110685760405162461bcd60e51b81526004018080602001828103825260268152602001806139406026913960400191505060405180910390fd5b6001600160a01b0384166110ad5760405162461bcd60e51b8152600401808060200182810382526023815260200180613ad96023913960400191505060405180910390fd5b6110b561210e565b6001600160a01b0316856001600160a01b031614806110e057506110e0856110db61210e565b611d5d565b61111b5760405162461bcd60e51b81526004018080602001828103825260308152602001806139666030913960400191505060405180910390fd5b600061112561210e565b9050611135818787878787612112565b60005b845181101561123657600085828151811061114f57fe5b60200260200101519050600085838151811061116757fe5b602002602001015190506111d481604051806060016040528060288152602001613996602891396001600086815260200190815260200160002060008d6001600160a01b03166001600160a01b03168152602001908152602001600020546121dd9092919063ffffffff16565b60008381526001602090815260408083206001600160a01b038e811685529252808320939093558a168152205461120b9082612274565b60009283526001602081815260408086206001600160a01b038d168752909152909320555001611138565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156112bc5781810151838201526020016112a4565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156112fb5781810151838201526020016112e3565b5050505090500194505050505060405180910390a461131e8187878787876122ce565b6113595760405162461bcd60e51b8152600401808060200182810382526036815260200180613afc6036913960400191505060405180910390fd5b505050505050565b61136a33611432565b6113a55760405162461bcd60e51b81526004018080602001828103825260308152602001806138546030913960400191505060405180910390fd5b60065460ff166113f3576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b6006805460ff191690556040805133815290517f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa9181900360200190a1565b600061144560058363ffffffff6127bb16565b92915050565b600061145633611b01565b6114915760405162461bcd60e51b81526004018080602001828103825260308152602001806139be6030913960400191505060405180910390fd5b61149a84612822565b156114ec576040805162461bcd60e51b815260206004820152601c60248201527f4b495033373a20746f6b656e20616c7265616479206372656174656400000000604482015290519081900360640190fd5b600084815260096020908152604080832080546001600160a01b03191633908117909155815192830190915291815261152991908690869061283f565b8151156115eb576000848152600a60209081526040909120835161154f92850190613794565b50837f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b836040518080602001828103825283818151815260200191508051906020019080838360005b838110156115b0578181015183820152602001611598565b50505050905090810190601f1680156115dd5780820380516001836020036101000a031916815260200191505b509250505060405180910390a25b9392505050565b606081518351146116345760405162461bcd60e51b815260040180806020018281038252602781526020018061382d6027913960400191505060405180910390fd5b60608351604051908082528060200260200182016040528015611661578160200160208202803883390190505b50905060005b84518110156117515760006001600160a01b031685828151811061168757fe5b60200260200101516001600160a01b031614156116d55760405162461bcd60e51b815260040180806020018281038252602f815260200180613b32602f913960400191505060405180910390fd5b600160008583815181106116e557fe5b60200260200101518152602001908152602001600020600086838151811061170957fe5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000205482828151811061173e57fe5b6020908102919091010152600101611667565b509392505050565b60065460ff165b90565b61176b61210e565b6001600160a01b0316836001600160a01b031614806117915750611791836110db61210e565b6117cc5760405162461bcd60e51b8152600401808060200182810382526027815260200180613ab26027913960400191505060405180910390fd5b6117d78383836129d6565b505050565b6117e533612ce1565b565b6117f033611432565b61182b5760405162461bcd60e51b81526004018080602001828103825260308152602001806138546030913960400191505060405180910390fd5b61183481612d29565b50565b61184033611b01565b61187b5760405162461bcd60e51b81526004018080602001828103825260308152602001806139be6030913960400191505060405180910390fd5b61188483612822565b6118d0576040805162461bcd60e51b815260206004820152601860248201527725a4a8199b9d103737b732bc34b9ba32b73a103a37b5b2b760411b604482015290519081900360640190fd5b6117d78284836040518060200160405280600081525061283f565b6118f433611432565b61192f5760405162461bcd60e51b81526004018080602001828103825260308152602001806138546030913960400191505060405180910390fd5b60065460ff161561197a576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6006805460ff191660011790556040805133815290517f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589181900360200190a1565b6119c533611b01565b611a005760405162461bcd60e51b81526004018080602001828103825260308152602001806139be6030913960400191505060405180910390fd5b61183481612d71565b6117e533612db9565b816001600160a01b0316611a2461210e565b6001600160a01b03161415611a6a5760405162461bcd60e51b8152600401808060200182810382526027815260200180613a396027913960400191505060405180910390fd5b8060026000611a7761210e565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155611abb61210e565b60408051841515815290516001600160a01b0392909216917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319181900360200190a35050565b600061144560088363ffffffff6127bb16565b60009081526003602052604090205490565b6009602052600090815260409020546001600160a01b031681565b611b4a33611b01565b611b855760405162461bcd60e51b81526004018080602001828103825260308152602001806139be6030913960400191505060405180910390fd5b611b8e83612822565b611bda576040805162461bcd60e51b815260206004820152601860248201527725a4a8199b9d103737b732bc34b9ba32b73a103a37b5b2b760411b604482015290519081900360640190fd5b8051825114611c1a5760405162461bcd60e51b81526004018080602001828103825260298152602001806139176029913960400191505060405180910390fd5b60005b8251811015611c7b576000838281518110611c3457fe5b602002602001015190506000838381518110611c4c57fe5b60200260200101519050611c718287836040518060200160405280600081525061283f565b5050600101611c1d565b50505050565b611c8a33611b01565b611cc55760405162461bcd60e51b81526004018080602001828103825260308152602001806139be6030913960400191505060405180910390fd5b60005b8251811015611d4157611ced838281518110611ce057fe5b6020026020010151612822565b611d39576040805162461bcd60e51b815260206004820152601860248201527725a4a8199b9d103737b732bc34b9ba32b73a103a37b5b2b760411b604482015290519081900360640190fd5b600101611cc8565b506117d783838360405180602001604052806000815250612e01565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b6001600160a01b038416611dd05760405162461bcd60e51b8152600401808060200182810382526023815260200180613ad96023913960400191505060405180910390fd5b611dd861210e565b6001600160a01b0316856001600160a01b03161480611dfe5750611dfe856110db61210e565b611e395760405162461bcd60e51b8152600401808060200182810382526027815260200180613ab26027913960400191505060405180910390fd5b6000611e4361210e565b9050611e63818787611e548861310d565b611e5d8861310d565b87612112565b611eb0836040518060600160405280602881526020016139966028913960008781526001602090815260408083206001600160a01b038d168452909152902054919063ffffffff6121dd16565b60008581526001602090815260408083206001600160a01b038b81168552925280832093909355871681522054611ee79084612274565b60008581526001602090815260408083206001600160a01b03808b168086529184529382902094909455805188815291820187905280518a8416938616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a4611f5c818787878787613151565b6113595760405162461bcd60e51b8152600401808060200182810382526030815260200180613a826030913960400191505060405180910390fd5b611f9f61210e565b6001600160a01b0316836001600160a01b03161480611fc55750611fc5836110db61210e565b6120005760405162461bcd60e51b8152600401808060200182810382526027815260200180613ab26027913960400191505060405180910390fd5b6117d7838383613517565b61201433611432565b61204f5760405162461bcd60e51b81526004018080602001828103825260308152602001806138546030913960400191505060405180910390fd5b60008181526007602052604090205460ff1615156001146120b7576040805162461bcd60e51b815260206004820152601f60248201527f4b495033375061757361626c653a20616c726561647920756e70617573656400604482015290519081900360640190fd5b600081815260076020908152604091829020805460ff191690558151838152339181019190915281517ffe9b5e5216db9de81757f43d20f846bea509c040a560d136b8263dd8cd764238929181900390910190a150565b3390565b61211a611759565b156121565760405162461bcd60e51b815260040180806020018281038252602a815260200180613a0f602a913960400191505060405180910390fd5b60005b83518110156121d4576007600085838151811061217257fe5b60209081029190910181015182528101919091526040016000205460ff16156121cc5760405162461bcd60e51b8152600401808060200182810382526022815260200180613b616022913960400191505060405180910390fd5b600101612159565b50505050505050565b6000818484111561226c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612231578181015183820152602001612219565b50505050905090810190601f16801561225e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156115eb576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008060606122e5876001600160a01b03166136a6565b6122f4576001925050506127b1565b866001600160a01b031663bc197c8160e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561238657818101518382015260200161236e565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156123c55781810151838201526020016123ad565b50505050905001848103825285818151815260200191508051906020019080838360005b838110156124015781810151838201526020016123e9565b50505050905090810190601f16801561242e5780820380516001836020036101000a031916815260200191505b5098505050505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b6020831061249b5780518252601f19909201916020918201910161247c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146124fd576040519150601f19603f3d011682016040523d82523d6000602084013e612502565b606091505b50805191935091501580159061253f5750805163bc197c8160e01b906020808401919081101561253157600080fd5b50516001600160e01b031916145b1561254f576001925050506127b1565b866001600160a01b0316639b49e33260e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156125e15781810151838201526020016125c9565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015612620578181015183820152602001612608565b50505050905001848103825285818151815260200191508051906020019080838360005b8381101561265c578181015183820152602001612644565b50505050905090810190601f1680156126895780820380516001836020036101000a031916815260200191505b5098505050505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b602083106126f65780518252601f1990920191602091820191016126d7565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612758576040519150601f19603f3d011682016040523d82523d6000602084013e61275d565b606091505b50805191935091501580159061279a57508051634da4f19960e11b906020808401919081101561278c57600080fd5b50516001600160e01b031916145b156127aa576001925050506127b1565b6000925050505b9695505050505050565b60006001600160a01b0382166128025760405162461bcd60e51b8152600401808060200182810382526022815260200180613a606022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b6000908152600960205260409020546001600160a01b0316151590565b6001600160a01b03841661289a576040805162461bcd60e51b815260206004820152601f60248201527f4b495033373a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b60006128a461210e565b90506128b681600087611e548861310d565b60008481526001602090815260408083206001600160a01b03891684529091529020546128e9908463ffffffff61227416565b60008581526001602090815260408083206001600160a01b038a168452825280832093909355868252600390522054612928908463ffffffff61227416565b600085815260036020908152604080832093909355825187815290810186905282516001600160a01b03808a1694908616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929081900390910190a461299481600087878787613151565b6129cf5760405162461bcd60e51b8152600401808060200182810382526030815260200180613a826030913960400191505060405180910390fd5b5050505050565b6001600160a01b038316612a1b5760405162461bcd60e51b81526004018080602001828103825260218152602001806138a66021913960400191505060405180910390fd5b8051825114612a5b5760405162461bcd60e51b81526004018080602001828103825260268152602001806139406026913960400191505060405180910390fd5b6000612a6561210e565b9050612a8581856000868660405180602001604052806000815250612112565b60005b8351811015612c0057612b1a838281518110612aa057fe5b60200260200101516040518060600160405280602281526020016138846022913960016000888681518110612ad157fe5b602002602001015181526020019081526020016000206000896001600160a01b03166001600160a01b03168152602001908152602001600020546121dd9092919063ffffffff16565b60016000868481518110612b2a57fe5b602002602001015181526020019081526020016000206000876001600160a01b03166001600160a01b0316815260200190815260200160002081905550612bcd838281518110612b7657fe5b60200260200101516040518060600160405280602781526020016138f06027913960036000888681518110612ba757fe5b60200260200101518152602001908152602001600020546121dd9092919063ffffffff16565b60036000868481518110612bdd57fe5b602090810291909101810151825281019190915260400160002055600101612a88565b5060006001600160a01b0316846001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015612c87578181015183820152602001612c6f565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015612cc6578181015183820152602001612cae565b5050505090500194505050505060405180910390a450505050565b612cf260058263ffffffff6136ac16565b6040516001600160a01b038216907fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90600090a250565b612d3a60058263ffffffff61371316565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b612d8260088263ffffffff61371316565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b612dca60088263ffffffff6136ac16565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b6001600160a01b038416612e5c576040805162461bcd60e51b815260206004820152601f60248201527f4b495033373a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b8151835114612e9c5760405162461bcd60e51b81526004018080602001828103825260268152602001806139406026913960400191505060405180910390fd5b6000612ea661210e565b9050612eb781600087878787612112565b60005b8451811015612fe857612f3260016000878481518110612ed657fe5b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b0316815260200190815260200160002054858381518110612f1c57fe5b602002602001015161227490919063ffffffff16565b60016000878481518110612f4257fe5b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b0316815260200190815260200160002081905550612fb560036000878481518110612f9257fe5b6020026020010151815260200190815260200160002054858381518110612f1c57fe5b60036000878481518110612fc557fe5b602090810291909101810151825281019190915260400160002055600101612eba565b50846001600160a01b031660006001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561306f578181015183820152602001613057565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156130ae578181015183820152602001613096565b5050505090500194505050505060405180910390a46130d2816000878787876122ce565b6129cf5760405162461bcd60e51b8152600401808060200182810382526036815260200180613afc6036913960400191505060405180910390fd5b60408051600180825281830190925260609182919060208083019080388339019050509050828160008151811061314057fe5b602090810291909101015292915050565b6000806060613168876001600160a01b03166136a6565b613177576001925050506127b1565b866001600160a01b031663f23a6e6160e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561320a5781810151838201526020016131f2565b50505050905090810190601f1680156132375780820380516001836020036101000a031916815260200191505b509650505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b602083106132a25780518252601f199092019160209182019101613283565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114613304576040519150601f19603f3d011682016040523d82523d6000602084013e613309565b606091505b5080519193509150158015906133465750805163f23a6e6160e01b906020808401919081101561333857600080fd5b50516001600160e01b031916145b15613356576001925050506127b1565b866001600160a01b031663e78b332560e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156133e95781810151838201526020016133d1565b50505050905090810190601f1680156134165780820380516001836020036101000a031916815260200191505b509650505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b602083106134815780518252601f199092019160209182019101613462565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146134e3576040519150601f19603f3d011682016040523d82523d6000602084013e6134e8565b606091505b50805191935091501580159061279a5750805163e78b332560e01b906020808401919081101561278c57600080fd5b6001600160a01b03831661355c5760405162461bcd60e51b81526004018080602001828103825260218152602001806138a66021913960400191505060405180910390fd5b600061356661210e565b9050613596818560006135788761310d565b6135818761310d565b60405180602001604052806000815250612112565b6135e3826040518060600160405280602281526020016138846022913960008681526001602090815260408083206001600160a01b038b168452909152902054919063ffffffff6121dd16565b60008481526001602090815260408083206001600160a01b038916845282529182902092909255805160608101909152602780825261364392859291906138f090830139600086815260036020526040902054919063ffffffff6121dd16565b6000848152600360209081526040808320939093558251868152908101859052825191926001600160a01b0388811693908616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a450505050565b3b151590565b6136b682826127bb565b6136f15760405162461bcd60e51b81526004018080602001828103825260218152602001806139ee6021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b61371d82826127bb565b1561376f576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106137d557805160ff1916838001178555613802565b82800160010185558215613802579182015b828111156138025782518255916020019190600101906137e7565b5061380e929150613812565b5090565b61176091905b8082111561380e576000815560010161381856fe4b495033373a206163636f756e747320616e6420696473206c656e677468206d69736d61746368506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c654b495033373a206275726e20616d6f756e7420657863656564732062616c616e63654b495033373a206275726e2066726f6d20746865207a65726f20616464726573734b495033373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495033373a206275726e20616d6f756e74206578636565647320746f74616c20737570706c794b495033373a20746f4c69737420616e64205f76616c756573206c656e677468206d69736d617463684b495033373a2069647320616e6420616d6f756e7473206c656e677468206d69736d617463684b495033373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495033373a20696e73756666696369656e742062616c616e636520666f72207472616e736665724d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b495033375061757361626c653a20746f6b656e207472616e73666572207768696c65207061757365644b495033373a2073657474696e6720617070726f76616c2073746174757320666f722073656c66526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b495033373a207472616e7366657220746f206e6f6e204b49503337526563656976657220696d706c656d656e7465724b495033373a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495033373a207472616e7366657220746f20746865207a65726f20616464726573734b495033373a206261746368207472616e7366657220746f206e6f6e204b49503337526563656976657220696d706c656d656e7465724b495033373a2062617463682062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495033375061757361626c653a2074686520746f6b656e20697320706175736564a265627a7a72315820d55370a976cf33fc2514dae092ebd1e59d423e2d80def61ea434667ca3ca7be864736f6c63430005110032526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
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
    static createInterface(): KIP37TokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP37Token;
}
export {};
//# sourceMappingURL=KIP37Token__factory.d.ts.map