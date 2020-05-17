import { Component, OnInit } from '@angular/core';
import { SharedServService } from '../../shared-serv.service';
import { Router } from '@angular/router';

@Component({
    selector: 'addob',
    moduleId: module.id,
    templateUrl: 'addJob.component.html'
})

export class AddJobComponent implements OnInit{

  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  constructor(public ss:SharedServService,private router: Router){
    if(ss.getUid() == "" || ss.getUid() == undefined){
      this.router.navigate(['/home/home/homepage']);
  }
  }

    ngOnInit(){

    }

    onClickSubmit(data) {
      alert("Entered Email id : " + JSON.stringify(data));
   }
}
