export interface FaucetInterface {
    // getTransferHistory(user: User[]): string[];
    sendToken(address: string, amount: string): boolean;
}