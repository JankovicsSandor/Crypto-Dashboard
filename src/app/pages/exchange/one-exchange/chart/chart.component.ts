import { Component, OnInit } from '@angular/core';
import { SelectedAssetQuery } from '@store';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor(public selectedAssetQuery: SelectedAssetQuery) { }

  ngOnInit(): void {
  }

}
