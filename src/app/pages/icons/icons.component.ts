import { Component } from '@angular/core';
import { JobserviceService } from '../../jobservice.service';
import { SharedServService } from '../../shared-serv.service';
@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'icons.component.html',
    styleUrls: ['./icons.component.css']
})

export class IconsComponent{
    months: any ;
 timestamp1 : Date;
 countD: number;
 array: string[][];
 array1: string[][];
 cal: any[];
 data: Array<JobDates>[];
  constructor(private jobService : JobserviceService,public ss:SharedServService){
      this.months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "Decemeber"
    ];
    this.timestamp1 = new Date();    
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
     let firstDay = (new Date(iyear, imonth)).getDay();
     //console.log("first day:"+firstDay);
    this.jobService.getCalendar(this.ss.getUid(),imonth+1).subscribe((data:any) => {
      this.cal = data;
   
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

              //  console.log("====date:"+date+"-"+imonth+"-"+iyear);
                    for(let k=0;k<this.cal.length;k++){
                        //console.log("====date:"+iyear+(((imonth+1).toString().length < 2 ) ? "-0"+(imonth+1) : "-"+(imonth+1)) +""+((date.toString().length < 2 ) ? "-0"+date : "-"+date) +"===="+this.cal[k].date.split("T")[0]);
                        if((iyear+(((imonth+1).toString().length < 2 ) ? "-0"+(imonth+1) : "-"+(imonth+1)) +""+((date.toString().length < 2 ) ? "-0"+date : "-"+date)) == this.cal[k].date.split("T")[0]){
                            jd1.jobcount=this.cal[k].count;
                        }
                    }
              
                arr.push(jd1);
                //get the appliedjobcount
                date++;
            } 
       //     console.log("===i:"+i+"===j:"+j+"===date:"+date+"----array:"+arr.toString());          
        }
        this.data.push(arr);

    }
    });
 //console.log("Array:"+this.data.toString())
 }
 nextM(){

        if(this.timestamp1.getMonth() == 12){
            this.timestamp1.setMonth(1);
            this.timestamp1.setFullYear(this.timestamp1.getFullYear()+1);
            this.showCalendar(this.timestamp1.getFullYear(),this.timestamp1.getMonth());   
        }
        else{
            this.timestamp1.setMonth(this.timestamp1.getMonth()+1);
            this.showCalendar(this.timestamp1.getFullYear(),this.timestamp1.getMonth());   
        }   
    
 }
 previousM(){
    if(this.timestamp1.getMonth() == 1){
        this.timestamp1.setMonth(12);
        this.timestamp1.setFullYear(this.timestamp1.getFullYear()-1);
        this.showCalendar(this.timestamp1.getFullYear(),this.timestamp1.getMonth());   
    }
    else{
        this.timestamp1.setMonth(this.timestamp1.getMonth()-1);
        this.showCalendar(this.timestamp1.getFullYear(),this.timestamp1.getMonth());   
    } 
 }
}

export class JobDates{
    day : string;
    jobcount: string;
}
