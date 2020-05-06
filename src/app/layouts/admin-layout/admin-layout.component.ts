import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor() {

   // console.log("===="+ this.http.get("http://localhost:8000/"));
   }
  ngOnInit() { }
}
