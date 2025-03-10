import { MNEEBalance, MNEEConfig, SendMNEE } from './mnee.types.js';
export declare class MNEEService {
    private MNEE_TOKEN_ID;
    private MNEE_COSIGNER_PROD;
    private MNEE_DECIMALS;
    private mneeApiToken;
    private mneeApi;
    private gorillaPoolApi;
    constructor(apiToken?: string);
    getConfig(): Promise<MNEEConfig | undefined>;
    toAtomicAmount(amount: number): number;
    private createInscription;
    private getUtxos;
    private broadcast;
    private fetchBeef;
    private getSignatures;
    transfer(request: SendMNEE[], wif: string): Promise<{
        txid?: string;
        rawtx?: string;
        error?: string;
    }>;
    getBalance(address: string): Promise<MNEEBalance>;
    validateMneeTx(rawTx: string, request?: SendMNEE[]): Promise<boolean>;
}
