import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;

@Component({
  selector: 'app-valeur-moyenne-commandes',
  templateUrl: './valeur-moyenne-commandes.component.html',
  styleUrls: ['./valeur-moyenne-commandes.component.css']
})
export class ValeurMoyenneCommandesComponent implements OnInit {
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
      headerFormat: '<b>Montant d\'un panier moyen</b><br/>',
      pointFormat: '{point.category}: {point.y}€'
    },
    yAxis: {
      title: {
        text: 'Montant en euros'
      }
    },
    series: [{
      name: "Valeur moyenne d'une commande",
      data: [108.52, 40.85]
    }]
  }
  constructor() { }

  ngOnInit(): void {
    Highcharts.setOptions({
      colors: ['#287265']
  });
    Highcharts.chart('chartMoyenneCommande', this.options);
  }

}
