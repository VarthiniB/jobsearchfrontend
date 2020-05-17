import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthorizationServiceService } from "../../../authorization-service.service";
import { SharedServService } from '../../../shared-serv.service';
import { JobserviceService } from '../../../jobservice.service';
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'home/homepage',     title: 'Home',         icon:'',       class: '' },
 // { path: 'home/blogpage',         title: 'Blog',             icon:'',    class: '' },
  
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
  emailVerificationMessage: boolean = false;
  
constructor(private modalService: NgbModal, public router:Router, public auth: AuthorizationServiceService,public ss:SharedServService,public jobService:JobserviceService) {
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

    onSubmit(form: NgForm,content) {

      const email = form.value.email;
      const password = form.value.password;
      
      this.auth.signIn(email, password).subscribe((data) => {

        this.jobService.getUser(email).subscribe((data:any) => {
        // console.log("====="+JSON.stringify(data));
         this.modalService.dismissAll(content);
         this.ss.setUid(data[0].sno);
         this.router.navigate(['/app/app/dashboard']);
      });
      
        
      }, (err)=> {
        this.emailVerificationMessage = true;
      });   
    }
}




