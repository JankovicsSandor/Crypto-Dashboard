import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoDataProviderService } from '@data-provider';

@Component({
  selector: 'app-one-exchange',
  templateUrl: './one-exchange.component.html',
  styleUrls: ['./one-exchange.component.scss']
})
export class OneExchangeComponent implements OnInit, AfterViewInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private cryptoDataProviderService: CryptoDataProviderService) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.activatedRoute.params.subscribe((params) => {
      try {
        let assetId = params['assetId'];
        if (assetId) {
          this.cryptoDataProviderService.getOneCryptoData(assetId);
        }
      } catch (error) {
        this.router.navigate(["/exchange"]);
      }
    })
  }

}
