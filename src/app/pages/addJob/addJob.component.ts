import { Component, OnInit } from '@angular/core';

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

    ngOnInit(){

    }

    onClickSubmit(data) {
      alert("Entered Email id : " + JSON.stringify(data));
   }
}
