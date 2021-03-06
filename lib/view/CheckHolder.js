"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const superagent_1 = __importDefault(require("superagent"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Layout_1 = __importDefault(require("./Layout"));
class CheckHolder {
    constructor() {
        Layout_1.default.current.title = (0, skydapp_browser_1.msg)("GAIA_SUPERNOVA_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".check-holder-view", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("img", { src: "/images/logo/gaia-protocol.png", alt: "Gaia Protocol Logo" }), (0, skydapp_browser_1.el)("h1", (0, skydapp_browser_1.msg)("HOLDER_CHECK_TITLE")), (0, skydapp_browser_1.el)("h2", (0, skydapp_browser_1.msg)("HOLDER_CHECK_DESC"))), (0, skydapp_browser_1.el)("article", (0, skydapp_browser_1.el)("a.discord-login-button", (0, skydapp_browser_1.msg)("HOLDER_CHECK_BUTTON"), {
            href: "https://discord.com/api/oauth2/authorize?client_id=939800869740871693&redirect_uri=https%3A%2F%2Fgaiaprotocol.com%2Fcheckholder&response_type=code&scope=identify",
        }))));
        this.checkDiscordLogin();
    }
    async checkDiscordLogin() {
        let code = new URLSearchParams(window.location.search).get("code");
        if (code !== null) {
            try {
                await superagent_1.default.get("https://api.gaiaprotocol.com/discord/token").query({
                    code,
                    redirect_uri: `${window.location.protocol}//${window.location.host}/checkholder`,
                });
            }
            catch (error) {
                console.error(error);
                code = undefined;
            }
        }
        else {
            code = undefined;
        }
        if (code !== undefined) {
            try {
                const result = await superagent_1.default.get("https://api.gaiaprotocol.com/discord/me").query({ code });
                this.discordUser = result.body;
                this.checkWalletConnected(code);
            }
            catch (error) {
                console.error(error);
            }
        }
    }
    async checkWalletConnected(code) {
        if (await Wallet_1.default.connected() !== true) {
            await Wallet_1.default.connect();
        }
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            const message = "Check Holder";
            const signResult = await Wallet_1.default.signMessage(message);
            try {
                const result = await fetch("https://api.gaiaprotocol.com/checkholder", {
                    method: "POST",
                    body: JSON.stringify({
                        code,
                        signedMessage: signResult.signedMessage,
                        klipAddress: signResult.klipAddress,
                        address,
                    }),
                });
                const d = await result.json();
                if (d.genesis === true || d.supernova === true || d.stabledao === true) {
                    alert((0, skydapp_browser_1.msg)("HOLDER_CHECK_SUCCESS_DESC"));
                }
                else {
                    alert((0, skydapp_browser_1.msg)("HOLDER_CHECK_FAIL_DESC"));
                }
            }
            catch (error) {
                console.error(error);
            }
        }
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = CheckHolder;
//# sourceMappingURL=CheckHolder.js.map