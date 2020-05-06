import { Component, OnInit } from '@angular/core';
import { JobserviceService } from '../../jobservice.service';



@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  private totalApplied: number;
  private appliedToday: number;
  private values = [];

  constructor(private jobService : JobserviceService) {

    this.jobService.getConfig()
        .subscribe((data:any) => {
           this.values = data.user;
           //console.log(this.values);
           this.appliedToday = this.values.length;
            this.totalApplied = this.values.length;
        });
  }
 

    ngOnInit(){
     
        
    }

}

export class user{
    //both the classes can be imported
}
