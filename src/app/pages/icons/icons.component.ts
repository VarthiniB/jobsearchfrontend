import { Component } from '@angular/core';

@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'icons.component.html',
    styleUrls: ['./icons.component.css']
})

export class IconsComponent{

 timestamp1 : Date;
 countD: number;
array: string[][];
array1: string[][];
data: Array<JobDates>[];
 constructor(){
    this.timestamp1 =new Date();
    //console.log(this.timestamp1.getMonth());
    this.showCalendar(this.timestamp1.getFullYear(),this.timestamp1.getMonth());   

 }

 getNoOfDays(iYear,iMonth){
   // console.log(" :"+ (32 - new Date(1993, 1, 32).getDate()));
    return (32 - new Date(iYear, iMonth, 32).getDate());
 }
 showCalendar(iyear,imonth){
     this.countD = this.getNoOfDays(iyear,imonth);
   //  console.log("count is "+this.countD);
     let firstDay = (new Date(this.timestamp1.getFullYear(), this.timestamp1.getMonth())).getDay();
     //console.log("first day:"+firstDay);

    // creating all cells
    let date = 1;
  this.array1 = new Array();
  let arr: string[];
  arr = new Array();
  arr.push("Sun");
  arr.push("Mon");
  arr.push("Tue");
  arr.push("Wed");
  arr.push("Thu");
  arr.push("Fri");
  arr.push("Sat");
  this.array1.push(arr);
  this.data = new Array();
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let arr: Array<JobDates>;
        arr = new Array();
        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            
            if (i === 0 && j < firstDay) {
                let jd1=new JobDates();
                jd1.day="";
                jd1.jobcount="";
                arr.push(jd1);
            }
            else if (date > this.getNoOfDays(iyear,imonth)) {
                break;
            }
            else {
                //get the appliedjobcount
                let jd1=new JobDates();
                jd1.day=date.toString();
                jd1.jobcount="1";
                arr.push(jd1);
                //get the appliedjobcount
                date++;
            } 
       //     console.log("===i:"+i+"===j:"+j+"===date:"+date+"----array:"+arr.toString());          
        }
        this.data.push(arr);

    }
 //console.log("Array:"+this.data.toString())
 }
}

export class JobDates{
    day : string;
    jobcount: string;
}
