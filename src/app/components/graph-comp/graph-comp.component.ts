import { Component,  ViewChild } from '@angular/core';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexTitleSubtitle, ApexStroke, ApexGrid, ApexTooltip } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip : ApexTooltip
};

@Component({
  selector: 'app-graph-comp',
  templateUrl: './graph-comp.component.html',
  styleUrls: ['./graph-comp.component.css']
})
export class GraphCompComponent {

  @ViewChild('chart') chart: ChartComponent;

  public chartOptions: Partial<ChartOptions>;

  constructor(){
      this.chartOptions = {
        series: [{
          name: 'series1',
          data: [31,40,28,51,42,109,100]
        },
        {
          name: 'series2',
          data: [11,32,45,32,34,52,41]
        }
      ],
        chart: {
          height:350,
          type: 'area',
          zoom: {
            enabled:true
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Product Trend by month',
          align:'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity:0.5
          }
        },
        xaxis: {
          type : 'datetime',
          categories: [

            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z"
          ]
        },
        tooltip:{
          x:{
            format:'dd/MM/yy HH:mm'
          }
        }
    };
  }
}




// this.chartOptions = {
//   series: [{
//     name: 'Desktops',
//     data: [10,41,56,36,78,88,90,95,110]
//   }],
//   chart: {
//     height:350,
//     width:650,
//     type: 'line',
//     zoom: {
//       enabled:false
//     },
    
    
//   },
//   dataLabels: {
//     enabled: false
//   },
//   stroke: {
//     curve: 'straight'
//   },
//   title: {
//     text: 'Product Trend by month',
//     align:'left'
//   },
//   grid: {
//     row: {
//       colors: ['#f3f3f3', 'transparent'],
//       opacity:0.5
//     }
//   },
//   xaxis: {
//     categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep']
//   }
// };
