import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;

@Component({
  selector: 'app-taux-clients-recurrents',
  templateUrl: './taux-clients-recurrents.component.html',
  styleUrls: ['./taux-clients-recurrents.component.css']
})
export class TauxClientsRecurrentsComponent implements OnInit {
  public options : any = {
    chart: {
      defaultSeriesType: 'bar'
    },
    title: {
      text: ''},
    xAxis: {
      title: {
        text: ''
      },
      categories: ['hier', 'auj']
    },
    tooltip: {
      headerFormat: '<b>Clients récurrents</b><br/>',
      pointFormat: '{point.category}: {point.y}'
    },
    series: [{
      name: "Clients récurrents",
      data: [73, 52]
    },
    {
      name: "Nouveaux clients",
      data: [8, 6]
    }],
    yAxis : {
      title: {
        text: 'Nombre clients'
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
    Highcharts.setOptions({
      colors: ['#fed358', '#287265']
  });
    Highcharts.chart('chartRec', this.options);
  }

}
