import { Component, OnInit } from '@angular/core';
import { JobserviceService } from '../jobservice.service';
import { SharedServService } from '../shared-serv.service';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'app/dashboard',     title: 'Dashboard',         icon:'nc-chart-pie-36',       class: '' },
    { path: 'app/addjob',         title: 'Add Job Applied',             icon:'nc-laptop',    class: '' },
  //  { path: 'app/addnetwork',         title: 'Add Network',             icon:'nc-planet',    class: '' }
   
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    firstName : string;
    LastName: string;

    constructor(private jobService : JobserviceService,public ss:SharedServService){

    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.jobService.getUserDetails(this.ss.getUid()).subscribe((data) => {
                //console.log("==data=="+data[0].LastName);
                this.LastName = data[0].LastName;
                this.firstName = data[0].FirstName;
        });
    }
    ngOnChanges(){
      //  console.log("=============")
    }
}
