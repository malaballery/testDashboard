import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;

@Component({
  selector: 'app-total-vente-par-produit',
  templateUrl: './total-vente-par-produit.component.html',
  styleUrls: ['./total-vente-par-produit.component.css']
})
export class TotalVenteParProduitComponent implements OnInit {
  public options : any = {
    chart: {
      defaultSeriesType: 'column'
    },
    title: {
      text: null
    },
    xAxis: {
      title: {
        text: null
      },
      categories: ['Pdt 1', 'Pdt 2', 'Pdt 3', 'Pdt 4', 'Pdt 5', 'Pdt 6']
    },
    tooltip: {
      pointFormat: 'Ventes: {point.y}'
    },
    yAxis : {
      title: {
        text: null
      }
    },
    series: [{
      name: "Quantité vendue",
      data: [5, 2, 8, 1, 5, 3],
    }]
  }
  constructor() { }

  ngOnInit(): void {
    Highcharts.setOptions({
      colors: ['#fed358']
    });
    Highcharts.chart('chartTotalParProduit', this.options);
  }

}
