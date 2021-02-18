import { Component, OnInit } from '@angular/core';
import { TopCryptoMoverService } from '../services/bussiness-logic/top-crypto-mover.service';

@Component({
  selector: 'app-top-mover',
  templateUrl: './top-mover.component.html',
  styleUrls: ['./top-mover.component.scss']
})
export class TopMoverComponent implements OnInit {

  constructor(public topMover: TopCryptoMoverService) { }

  ngOnInit(): void {
  }

}
