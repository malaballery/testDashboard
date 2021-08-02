import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;

@Component({
  selector: 'app-ventes-totales',
  templateUrl: './ventes-totales.component.html',
  styleUrls: ['./ventes-totales.component.css']
})
export class VentesTotalesComponent implements OnInit {
  public options : any = {
    chart: {
      type: 'line'
    },
    title: {
      text: null},
    xAxis: {
      categories: ['hier', 'auj'], 
    },
    tooltip: {
      headerFormat: '<b>Ventes totales</b><br/>',
      pointFormat: '{point.category}: {point.y}€'
    },
    yAxis: {
      title: {
        text: 'Montant en euros'
      }
    },
    series: [{
      name: "Ventes totales",
      data: [2003.50, 1374.70]
    }]
  }
  constructor() { }

  ngOnInit(): void {
    Highcharts.setOptions({
      colors: ['#fed358', '#287265']
  });
    Highcharts.chart('chart', this.options);
  }

}
