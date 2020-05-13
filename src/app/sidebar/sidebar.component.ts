import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'app/dashboard',     title: 'Dashboard',         icon:'nc-chart-pie-36',       class: '' },
    { path: 'app/addjob',         title: 'Add Job Applied',             icon:'nc-laptop',    class: '' },
    { path: 'app/addnetwork',         title: 'Add Network',             icon:'nc-planet',    class: '' }
   
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    ngOnChanges(){
        console.log("=============")
    }
}
