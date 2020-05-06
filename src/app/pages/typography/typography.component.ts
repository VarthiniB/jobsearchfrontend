import { Component } from '@angular/core';
import {  ChartDataSets } from 'chart.js';
import { Color,Label } from 'ng2-charts';

@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html',
   
})

export class TypographyComponent{


    lineChartData: ChartDataSets[] = [
        { data: [1,2,23,4,5,6,7,8,9,10,5,12,19,20], label: 'Job Search Progress in past 2 weeks' },
      ];
    
      lineChartLabels: Label[] = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14'];
    
      lineChartOptions = {
        responsive: true,
      };
    
      lineChartColors: Color[] = [
        {
          borderColor: 'black',
          backgroundColor: 'rgba(255,255,0,0.28)',
        },
      ];
    
      lineChartLegend = true;
      lineChartPlugins = [];
      lineChartType = 'line';

}
