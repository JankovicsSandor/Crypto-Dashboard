import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CryptoItem } from 'src/app/models/crypto-response';

@Component({
  selector: 'app-top-mover-view',
  templateUrl: './top-mover-view.component.html',
  styleUrls: ['./top-mover-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopMoverViewComponent implements OnInit {

  @Input() crpytoData: CryptoItem = new CryptoItem();
  constructor() { }

  ngOnInit(): void {
  }

}
