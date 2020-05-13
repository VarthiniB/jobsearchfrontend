import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'home/homepage',     title: 'Home',         icon:'',       class: '' },
  { path: 'home/blogpage',         title: 'Blog',             icon:'',    class: '' },
  
];

@Component({
  moduleId: module.id,
  selector: 'app-navbarhome',
  templateUrl: './navbarhome.component.html',
  styleUrls: ['./navbarhome.component.css']
})
export class NavbarhomeComponent implements OnInit {

  public menuItems: any[];
  title = 'appBootstrap';
  t1: any;
  closeResult: string;
  
constructor(private modalService: NgbModal) {
  this.t1 = "";
  }
  
  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    }
    
    private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
    }
    
    submit(){
    console.log("===="+this.t1);
    }
}




