export class TransactionHistory {
  assetId: number = 0;
  time: Date = new Date();
  amount: number = 0;
  fiatAmount: number = 0;
  transactionType: string = "buy";
}
