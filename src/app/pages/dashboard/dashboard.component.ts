import { Component, OnInit } from '@angular/core';
import { JobserviceService } from '../../jobservice.service';
import { SharedServService } from '../../shared-serv.service';
import { Router } from '@angular/router';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{

  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  private totalApplied: number;
  private appliedToday: number;
  private allevents:number;
  private eventsToday:number;
  private values = [];

  constructor(private jobService : JobserviceService,public ss:SharedServService,private router: Router) {
    //ss.setUid(2);
    console.log("==="+ss.getUid());
    if(ss.getUid() == "" || ss.getUid() == undefined){
        this.router.navigate(['/home/home/homepage']);
    }
  }
 

    ngOnInit(){
     
    this.jobService.getAllApplied(this.ss.getUid()).subscribe((data:any) => {
        this.totalApplied = data[0].countalljobs;
    });
    this.jobService.getAppliedToday(this.ss.getUid()).subscribe((data:any) => {
        this.appliedToday = data[0].countTodayjobs;
    });
    this.jobService.getAllEvents(this.ss.getUid()).subscribe((data:any) => {
        this.allevents = data[0].countallevents;
    });
    this.jobService.getEventsToday(this.ss.getUid()).subscribe((data:any) => {
        this.eventsToday = data[0].countTodayevents;
    });
        
    }

}

export class user{
    //both the classes can be imported
}
