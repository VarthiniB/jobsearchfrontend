import { Component } from '@angular/core';
import {  ChartDataSets } from 'chart.js';
import { Color,Label } from 'ng2-charts';
import { JobserviceService } from '../../jobservice.service';
import { SharedServService } from '../../shared-serv.service';



@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html',
   
})

export class TypographyComponent{
  countD: number;
  lineChartData: any[];
  lineChartLabels: any[];
  array: any;
  array1: any;
  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'rgba(0,0,244,1)',
      backgroundColor: 'rgba(0,0,255,0.2)',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private jobService : JobserviceService,public ss:SharedServService){
    let date=new Date();
    this.showChart(date.getFullYear(),date.getMonth());
  }

  showChart(iyear,imonth){
    this.countD = this.getNoOfDays(iyear,imonth);
  //
  this.lineChartData = [];
  this.array = [];
  this.lineChartData[0] = {
     };
     this.lineChartData[0].label = "Jobs Applied in the current month";
     this.array1 = [];
    //console.log("==this.countD=="+this.countD);
     for(let i=1;i<=this.countD;i++){
       this.array.push(i.toString());
       this.array1.push(0);
       //console.log("====i==="+i+"====array==="+this.array);
     }
     this.lineChartLabels = this.array;
  // console.log("====== this.lineChartLabels====="+ this.array );
     this.jobService.getCalendar(this.ss.getUid(),imonth+1).subscribe((data:any) => {
   //  console.log("===="+JSON.stringify(data));
  
    for(let j=0;j< this.countD;j++){
     // console.log("==j=="+j);     
      for(let k=0;k < data.length;k++){
        //console.log("========k======="+(data[k].date.split('T')[0]).split('-')[2])
        if(j.toString() == data[k].date.split('T')[0].split('-')[2]){
         // console.log("===========da=="+data[k].count);
          this.array1[j]=data[k].count.toString();
        }
       
      }
     
    }
  //  console.log("==============="+this.array1);
this.lineChartData[0].data = this.array1;

   });
//console.log("Array:"+this.data.toString())
}


getNoOfDays(iYear,iMonth){
  // console.log(" :"+ (32 - new Date(1993, 1, 32).getDate()));
   return (32 - new Date(iYear, iMonth, 32).getDate());
}

    
    
         
}
