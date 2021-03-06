import { EventContainer } from "skydapp-common";
import ConnectWalletPopup from "../component/shared/ConnectWalletPopup";
import ExtWallet from "./ExtWallet";
import Klip from "./Klip";

class Wallet extends EventContainer {

    constructor() {
        super();
        this.checkConnected();

        ExtWallet.toss("connect", this);
        Klip.toss("connect", this);
    }

    private async checkConnected() {
        if (await this.connected() === true) {
            this.fireEvent("connect");
        }
    }

    public async loadAddress(): Promise<string | undefined> {
        if (ExtWallet.installed === true) {
            return await ExtWallet.loadAddress();
        } else {
            return Klip.address;
        }
    }

    public async connected() {
        return await this.loadAddress() !== undefined;
    }

    public async connect() {
        if (ExtWallet.installed === true) {
            return await ExtWallet.connect();
        } else {
            return new Promise<void>((resolve) => new ConnectWalletPopup(resolve));
        }
    }

    public async signMessage(message: string): Promise<{
        signedMessage?: string,
        klipAddress?: string,
    }> {
        if (ExtWallet.installed === true) {
            return {
                signedMessage: await ExtWallet.signMessage(message),
            };
        } else {
            return {
                klipAddress: Klip.address,
            };
        }
    }
}

export default new Wallet();
