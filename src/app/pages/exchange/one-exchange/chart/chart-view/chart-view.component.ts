import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.scss']
}) export class ChartViewComponent implements OnInit, AfterViewInit {
  chart: am4charts.XYChart = new am4charts.XYChart();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Create chart instance
    this.chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    this.chart.data = generateChartData();

    // Create axes
    let dateAxis = this.chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;

    let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = this.chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.dateX = "date";
    series.strokeWidth = 2;
    series.minBulletDistance = 10;
    series.tooltipText = "{valueY}";
    if (series.tooltip) {
      series.tooltip.pointerOrientation = "vertical";
      series.tooltip.background.cornerRadius = 20;
      series.tooltip.background.fillOpacity = 0.5;
      series.tooltip.label.padding(12, 12, 12, 12)
    }

    // Add scrollbar
    /*this.chart.scrollbarX = new am4charts.XYChartScrollbar();
    this.chart.scrollbarX.series.push(series);*/

    // Add cursor
    this.chart.cursor = new am4charts.XYCursor();
    this.chart.cursor.xAxis = dateAxis;
    this.chart.cursor.snapToSeries = series;

    function generateChartData() {
      let chartData = [];
      let firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 1000);
      let visits = 1200;
      for (var i = 0; i < 500; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        let newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

        chartData.push({
          date: newDate,
          visits: visits
        });
      }
      return chartData;
    }
  }

}
