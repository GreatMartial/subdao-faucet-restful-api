export interface LoggerInterface {
    getTransferHistory(user: User[]): string[];
    transferToken(user: User[]): void;
}