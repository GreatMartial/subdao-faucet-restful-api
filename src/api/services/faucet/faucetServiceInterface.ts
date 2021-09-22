export interface FaucetServiceInterface {
    // getTransferHistory(user: User[]): string[];
    sendToken(address: string, amount: string): Promise<(boolean)>;
}