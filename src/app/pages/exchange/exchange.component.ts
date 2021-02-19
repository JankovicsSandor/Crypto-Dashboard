import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoDataProviderService } from '@data-provider';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {



  ngOnInit(): void {
  }

  /*ngAfterViewInit() {
    this.activatedRoute.params.subscribe((params) => {
      try {
        this.cryptoDataProviderService.getOneCryptoData(params['assetId'])
      } catch (error) {
        this.router.navigate(["/exchange"]);
      }
    })
  }*/

}
