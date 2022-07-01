import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP37BurnableMock, KIP37BurnableMockInterface } from "../KIP37BurnableMock";
declare type KIP37BurnableMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class KIP37BurnableMock__factory extends ContractFactory {
    constructor(...args: KIP37BurnableMockConstructorParams);
    deploy(uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<KIP37BurnableMock>;
    getDeployTransaction(uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): KIP37BurnableMock;
    connect(signer: Signer): KIP37BurnableMock__factory;
    static readonly contractName: "KIP37BurnableMock";
    readonly contractName: "KIP37BurnableMock";
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620027c8380380620027c8833981810160405260208110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052508291506200010b90506301ffc9a760e01b6001600160e01b036200017816565b6200011f816001600160e01b03620001fd16565b6200013a636433ca1f60e01b6001600160e01b036200017816565b620001556303a24d0760e21b6001600160e01b036200017816565b5062000171634f04a74f60e11b6001600160e01b036200017816565b50620002bb565b6001600160e01b03198082161415620001d8576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b80516200021290600490602084019062000216565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200025957805160ff191683800117855562000289565b8280016001018555821562000289579182015b82811115620002895782518255916020019190600101906200026c565b50620002979291506200029b565b5090565b620002b891905b80821115620002975760008155600101620002a2565b90565b6124fd80620002cb6000396000f3fe608060405234801561001057600080fd5b50600436106100b35760003560e01c8063731133e911610071578063731133e91461062c578063a22cb465146106ec578063bd85b0391461071a578063e985e9c514610737578063f242432a14610765578063f5298aca1461082e576100b3565b8062fdd58e146100b857806301ffc9a7146100f65780630e89341c146101315780632eb2c2d6146101c35780634e1273f4146103865780636b20c454146104f9575b600080fd5b6100e4600480360360408110156100ce57600080fd5b506001600160a01b038135169060200135610860565b60408051918252519081900360200190f35b61011d6004803603602081101561010c57600080fd5b50356001600160e01b0319166108cf565b604080519115158252519081900360200190f35b61014e6004803603602081101561014757600080fd5b50356108ee565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610188578181015183820152602001610170565b50505050905090810190601f1680156101b55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610384600480360360a08110156101d957600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b81111561020c57600080fd5b82018360208201111561021e57600080fd5b803590602001918460208302840111600160201b8311171561023f57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561028e57600080fd5b8201836020820111156102a057600080fd5b803590602001918460208302840111600160201b831117156102c157600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561031057600080fd5b82018360208201111561032257600080fd5b803590602001918460018302840111600160201b8311171561034357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610986945050505050565b005b6104a96004803603604081101561039c57600080fd5b810190602081018135600160201b8111156103b657600080fd5b8201836020820111156103c857600080fd5b803590602001918460208302840111600160201b831117156103e957600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561043857600080fd5b82018360208201111561044a57600080fd5b803590602001918460208302840111600160201b8311171561046b57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610cbf945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156104e55781810151838201526020016104cd565b505050509050019250505060405180910390f35b6103846004803603606081101561050f57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561053957600080fd5b82018360208201111561054b57600080fd5b803590602001918460208302840111600160201b8311171561056c57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156105bb57600080fd5b8201836020820111156105cd57600080fd5b803590602001918460208302840111600160201b831117156105ee57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610e26945050505050565b6103846004803603608081101561064257600080fd5b6001600160a01b038235169160208101359160408201359190810190608081016060820135600160201b81111561067857600080fd5b82018360208201111561068a57600080fd5b803590602001918460018302840111600160201b831117156106ab57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610e9f945050505050565b6103846004803603604081101561070257600080fd5b506001600160a01b0381351690602001351515610eb1565b6100e46004803603602081101561073057600080fd5b5035610fa0565b61011d6004803603604081101561074d57600080fd5b506001600160a01b0381358116916020013516610fb2565b610384600480360360a081101561077b57600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b8111156107ba57600080fd5b8201836020820111156107cc57600080fd5b803590602001918460018302840111600160201b831117156107ed57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610fe0945050505050565b6103846004803603606081101561084457600080fd5b506001600160a01b0381351690602081013590604001356111ec565b60006001600160a01b0383166108a75760405162461bcd60e51b81526004018080602001828103825260298152602001806122f56029913960400191505060405180910390fd5b5060009081526001602090815260408083206001600160a01b03949094168352929052205490565b6001600160e01b03191660009081526020819052604090205460ff1690565b60048054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561097a5780601f1061094f5761010080835404028352916020019161097a565b820191906000526020600020905b81548152906001019060200180831161095d57829003601f168201915b50505050509050919050565b81518351146109c65760405162461bcd60e51b81526004018080602001828103825260268152602001806123456026913960400191505060405180910390fd5b6001600160a01b038416610a0b5760405162461bcd60e51b81526004018080602001828103825260238152602001806124416023913960400191505060405180910390fd5b610a13611260565b6001600160a01b0316856001600160a01b03161480610a3e5750610a3e85610a39611260565b610fb2565b610a795760405162461bcd60e51b815260040180806020018281038252603081526020018061236b6030913960400191505060405180910390fd5b6000610a83611260565b9050610a93818787878787610cb7565b60005b8451811015610b94576000858281518110610aad57fe5b602002602001015190506000858381518110610ac557fe5b60200260200101519050610b328160405180606001604052806028815260200161239b602891396001600086815260200190815260200160002060008d6001600160a01b03166001600160a01b03168152602001908152602001600020546112649092919063ffffffff16565b60008381526001602090815260408083206001600160a01b038e811685529252808320939093558a1681522054610b6990826112fb565b60009283526001602081815260408086206001600160a01b038d168752909152909320555001610a96565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610c1a578181015183820152602001610c02565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610c59578181015183820152602001610c41565b5050505090500194505050505060405180910390a4610c7c81878787878761135c565b610cb75760405162461bcd60e51b81526004018080602001828103825260368152602001806124646036913960400191505060405180910390fd5b505050505050565b60608151835114610d015760405162461bcd60e51b815260040180806020018281038252602781526020018061228b6027913960400191505060405180910390fd5b60608351604051908082528060200260200182016040528015610d2e578160200160208202803883390190505b50905060005b8451811015610e1e5760006001600160a01b0316858281518110610d5457fe5b60200260200101516001600160a01b03161415610da25760405162461bcd60e51b815260040180806020018281038252602f81526020018061249a602f913960400191505060405180910390fd5b60016000858381518110610db257fe5b602002602001015181526020019081526020016000206000868381518110610dd657fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002054828281518110610e0b57fe5b6020908102919091010152600101610d34565b509392505050565b610e2e611260565b6001600160a01b0316836001600160a01b03161480610e545750610e5483610a39611260565b610e8f5760405162461bcd60e51b815260040180806020018281038252602781526020018061241a6027913960400191505060405180910390fd5b610e9a838383611849565b505050565b610eab84848484611b54565b50505050565b816001600160a01b0316610ec3611260565b6001600160a01b03161415610f095760405162461bcd60e51b81526004018080602001828103825260278152602001806123c36027913960400191505060405180910390fd5b8060026000610f16611260565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610f5a611260565b60408051841515815290516001600160a01b0392909216917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319181900360200190a35050565b60009081526003602052604090205490565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b6001600160a01b0384166110255760405162461bcd60e51b81526004018080602001828103825260238152602001806124416023913960400191505060405180910390fd5b61102d611260565b6001600160a01b0316856001600160a01b03161480611053575061105385610a39611260565b61108e5760405162461bcd60e51b815260040180806020018281038252602781526020018061241a6027913960400191505060405180910390fd5b6000611098611260565b90506110b88187876110a988611ceb565b6110b288611ceb565b87610cb7565b6111058360405180606001604052806028815260200161239b6028913960008781526001602090815260408083206001600160a01b038d168452909152902054919063ffffffff61126416565b60008581526001602090815260408083206001600160a01b038b8116855292528083209390935587168152205461113c90846112fb565b60008581526001602090815260408083206001600160a01b03808b168086529184529382902094909455805188815291820187905280518a8416938616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a46111b1818787878787611d2f565b610cb75760405162461bcd60e51b81526004018080602001828103825260308152602001806123ea6030913960400191505060405180910390fd5b6111f4611260565b6001600160a01b0316836001600160a01b0316148061121a575061121a83610a39611260565b6112555760405162461bcd60e51b815260040180806020018281038252602781526020018061241a6027913960400191505060405180910390fd5b610e9a8383836120f5565b3390565b600081848411156112f35760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156112b85781810151838201526020016112a0565b50505050905090810190601f1680156112e55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015611355576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6000806060611373876001600160a01b0316612284565b6113825760019250505061183f565b866001600160a01b031663bc197c8160e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156114145781810151838201526020016113fc565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561145357818101518382015260200161143b565b50505050905001848103825285818151815260200191508051906020019080838360005b8381101561148f578181015183820152602001611477565b50505050905090810190601f1680156114bc5780820380516001836020036101000a031916815260200191505b5098505050505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b602083106115295780518252601f19909201916020918201910161150a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461158b576040519150601f19603f3d011682016040523d82523d6000602084013e611590565b606091505b5080519193509150158015906115cd5750805163bc197c8160e01b90602080840191908110156115bf57600080fd5b50516001600160e01b031916145b156115dd5760019250505061183f565b866001600160a01b0316639b49e33260e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561166f578181015183820152602001611657565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156116ae578181015183820152602001611696565b50505050905001848103825285818151815260200191508051906020019080838360005b838110156116ea5781810151838201526020016116d2565b50505050905090810190601f1680156117175780820380516001836020036101000a031916815260200191505b5098505050505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b602083106117845780518252601f199092019160209182019101611765565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146117e6576040519150601f19603f3d011682016040523d82523d6000602084013e6117eb565b606091505b50805191935091501580159061182857508051634da4f19960e11b906020808401919081101561181a57600080fd5b50516001600160e01b031916145b156118385760019250505061183f565b6000925050505b9695505050505050565b6001600160a01b03831661188e5760405162461bcd60e51b81526004018080602001828103825260218152602001806122d46021913960400191505060405180910390fd5b80518251146118ce5760405162461bcd60e51b81526004018080602001828103825260268152602001806123456026913960400191505060405180910390fd5b60006118d8611260565b90506118f881856000868660405180602001604052806000815250610cb7565b60005b8351811015611a735761198d83828151811061191357fe5b60200260200101516040518060600160405280602281526020016122b2602291396001600088868151811061194457fe5b602002602001015181526020019081526020016000206000896001600160a01b03166001600160a01b03168152602001908152602001600020546112649092919063ffffffff16565b6001600086848151811061199d57fe5b602002602001015181526020019081526020016000206000876001600160a01b03166001600160a01b0316815260200190815260200160002081905550611a408382815181106119e957fe5b602002602001015160405180606001604052806027815260200161231e6027913960036000888681518110611a1a57fe5b60200260200101518152602001908152602001600020546112649092919063ffffffff16565b60036000868481518110611a5057fe5b6020908102919091018101518252810191909152604001600020556001016118fb565b5060006001600160a01b0316846001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015611afa578181015183820152602001611ae2565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015611b39578181015183820152602001611b21565b5050505090500194505050505060405180910390a450505050565b6001600160a01b038416611baf576040805162461bcd60e51b815260206004820152601f60248201527f4b495033373a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6000611bb9611260565b9050611bcb816000876110a988611ceb565b60008481526001602090815260408083206001600160a01b0389168452909152902054611bfe908463ffffffff6112fb16565b60008581526001602090815260408083206001600160a01b038a168452825280832093909355868252600390522054611c3d908463ffffffff6112fb16565b600085815260036020908152604080832093909355825187815290810186905282516001600160a01b03808a1694908616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929081900390910190a4611ca981600087878787611d2f565b611ce45760405162461bcd60e51b81526004018080602001828103825260308152602001806123ea6030913960400191505060405180910390fd5b5050505050565b604080516001808252818301909252606091829190602080830190803883390190505090508281600081518110611d1e57fe5b602090810291909101015292915050565b6000806060611d46876001600160a01b0316612284565b611d555760019250505061183f565b866001600160a01b031663f23a6e6160e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611de8578181015183820152602001611dd0565b50505050905090810190601f168015611e155780820380516001836020036101000a031916815260200191505b509650505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b60208310611e805780518252601f199092019160209182019101611e61565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611ee2576040519150601f19603f3d011682016040523d82523d6000602084013e611ee7565b606091505b508051919350915015801590611f245750805163f23a6e6160e01b9060208084019190811015611f1657600080fd5b50516001600160e01b031916145b15611f345760019250505061183f565b866001600160a01b031663e78b332560e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611fc7578181015183820152602001611faf565b50505050905090810190601f168015611ff45780820380516001836020036101000a031916815260200191505b509650505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b6020831061205f5780518252601f199092019160209182019101612040565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146120c1576040519150601f19603f3d011682016040523d82523d6000602084013e6120c6565b606091505b5080519193509150158015906118285750805163e78b332560e01b906020808401919081101561181a57600080fd5b6001600160a01b03831661213a5760405162461bcd60e51b81526004018080602001828103825260218152602001806122d46021913960400191505060405180910390fd5b6000612144611260565b90506121748185600061215687611ceb565b61215f87611ceb565b60405180602001604052806000815250610cb7565b6121c1826040518060600160405280602281526020016122b26022913960008681526001602090815260408083206001600160a01b038b168452909152902054919063ffffffff61126416565b60008481526001602090815260408083206001600160a01b0389168452825291829020929092558051606081019091526027808252612221928592919061231e90830139600086815260036020526040902054919063ffffffff61126416565b6000848152600360209081526040808320939093558251868152908101859052825191926001600160a01b0388811693908616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a450505050565b3b15159056fe4b495033373a206163636f756e747320616e6420696473206c656e677468206d69736d617463684b495033373a206275726e20616d6f756e7420657863656564732062616c616e63654b495033373a206275726e2066726f6d20746865207a65726f20616464726573734b495033373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495033373a206275726e20616d6f756e74206578636565647320746f74616c20737570706c794b495033373a2069647320616e6420616d6f756e7473206c656e677468206d69736d617463684b495033373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495033373a20696e73756666696369656e742062616c616e636520666f72207472616e736665724b495033373a2073657474696e6720617070726f76616c2073746174757320666f722073656c664b495033373a207472616e7366657220746f206e6f6e204b49503337526563656976657220696d706c656d656e7465724b495033373a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495033373a207472616e7366657220746f20746865207a65726f20616464726573734b495033373a206261746368207472616e7366657220746f206e6f6e204b49503337526563656976657220696d706c656d656e7465724b495033373a2062617463682062616c616e636520717565727920666f7220746865207a65726f2061646472657373a265627a7a72315820bb1cca6376d3ed9781a3792151e7fc2902b3a3f39ff3c36a64158d26b406a41064736f6c63430005110032";
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
    static createInterface(): KIP37BurnableMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP37BurnableMock;
}
export {};
//# sourceMappingURL=KIP37BurnableMock__factory.d.ts.map