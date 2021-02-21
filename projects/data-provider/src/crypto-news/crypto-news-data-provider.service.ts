import { Injectable } from '@angular/core';
import { CryptoAssetNews } from '@shared';
import { NewsService } from '@store';
import { of } from 'rxjs';

@Injectable()
export class CryptoNewsDataProviderService {

  constructor(private cryptoNewsService: NewsService) { }
  getLatestNews(assetSymbol: string) {
    // TODO get actual articles
    let data = of<CryptoAssetNews[]>(
      <CryptoAssetNews[]>[
        <CryptoAssetNews>{
          title: "Bitcoin Clings to $57k All-Time High as Institutional Investors Pour In",
          description: "Bitcoin retains its ATH amidst a serious surge in institutional interest.",
          pictureLink: "https://crypto.snapi.dev/images/v1/p/1/bitcoin-markets-gid-1.jpg",
          articleLink: "https://decrypt.co/58367/bitcoin-clings-to-57k-all-time-high-as-institutional-investors-pour-in",
          agentName: "Decrypt",
          publishDate: "Sun, 21 Feb 2021 08:01:42 -0500"
        },
        <CryptoAssetNews>{
          title: "On-Chain Data: The Last Time This Happened, Bitcoin Rose Another 2x",
          description: "According to Glassnode's Bitcoin MVRV Z-Score indicator, Bitcoin is about to cross the red zone. The last time BTC saw this trend, it rallied two times more from its current price.",
          pictureLink: "https://crypto.snapi.dev/images/v1/x/u/photo-1603993097397-89c963e325c7-750x500.jpeg",
          articleLink: "https://www.newsbtc.com/news/bitcoin/on-chain-data-the-last-time-this-happened-bitcoin-rose-another-2x/",
          agentName: "NewsBTC",
          publishDate: "Sun, 21 Feb 2021 06:32:49 -0500"
        }, <CryptoAssetNews>{
          title: "A Bitcoin price dip for ants? BTC quickly rebounds to a new high above $57K",
          description: "Bitcoin retains its ATH amidst a serious surge in institutional interest.",
          pictureLink: "https://crypto.snapi.dev/images/v1/l/v/840-ahr0chm6ly9zmy5jb2ludgvszwdyyxbolmnvbs91cgxvywrzlziwmjetmdivmdkxmgjmmdytotbmyi00ndy5ltlintitnmyymda4otu2ndaylmpwzw.jpg",
          articleLink: "https://cointelegraph.com/news/a-bitcoin-price-dip-for-ants-btc-quickly-rebounds-to-a-new-high-above-57k",
          agentName: "Cointelegraph",
          publishDate: "Sun, 21 Feb 2021 02:48:58 -0500"
        }, <CryptoAssetNews>{
          title: "Bitcoin Clings to $57k All-Time High as Institutional Investors Pour In",
          description: "Bitcoin (BTC) bulls don't seem to give up anytime soon! Today, Bitcoin (BTC) has surged another 3% hitting its new all-time high of $57,681 even after Elon Musk calling its price “high",
          pictureLink: "https://crypto.snapi.dev/images/v1/5/b/bitcoin-btc-all-time-high-57000.jpg",
          articleLink: "https://decrypt.co/58367/bitcoin-clings-to-57k-all-time-high-as-institutional-investors-pour-in",
          agentName: "Coingape",
          publishDate: "Sun, 21 Feb 2021 07:46:52 -0500"
        }
      ]
    )

    data.subscribe((value) => {
      this.cryptoNewsService.setNews(value);
    })
  }
}
