import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss']
})
export class IndicadoresComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = ['Em tratamento', 'Doado', 'Disponíveis'];
  public doughnutChartData: MultiDataSet = [
    [3, 2, 5],
  ];
  public doughnutChartType: ChartType = 'doughnut';

   options: any = {
    legend: {
      position: 'bottom',
      labels: {
        fontSize: 20
      },

    },
    title: {
      text: 'Status dos Pets',
      display: true,
      fontSize: 40,
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}