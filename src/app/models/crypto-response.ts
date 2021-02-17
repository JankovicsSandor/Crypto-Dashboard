export class CryptoResponse {
  status: any;
  data: CryptoItem[] = [];


}

export class CryptoItem {
  name: string = "";
  id: number = 0;
  Quote: CrptoQuote = new CrptoQuote();
}

export class CrptoQuote {
  usd: CryptoPrice = new CryptoPrice();
}

export class CryptoPrice {
  price: number = 0;
  percent_change_1h: number = 0;
  percent_change_24h: number = 0;
  percent_change_7d: number = 0;
  percent_change_30d: number = 0;
}
