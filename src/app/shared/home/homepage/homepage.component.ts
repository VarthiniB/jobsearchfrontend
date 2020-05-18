import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from "@angular/forms";
import { AuthorizationServiceService } from "../../../authorization-service.service";
import { JobserviceService } from '../../../jobservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  confirmCode: boolean = false;
  codeWasConfirmed: boolean = false;
  error: string = "";

  constructor(public router:Router, public auth: AuthorizationServiceService,public jobsearch:JobserviceService) { }

  ngOnInit(): void {
  }

  btnClick= function () {
    this.auth.logOut();
    //this.router.navigate(['/app/app/dashboard']);
};


register(form: NgForm) {
 // console.log("=====form:"+JSON.stringify(form.value));
  const email = form.value.email;
  const password = form.value.password;
  this.auth.register(email, password).subscribe(
    (data) => {        
      this.confirmCode = true;
   
      this.jobsearch.addUser(form.value).subscribe((data) => {
        form.reset();
         console.log(data);
      });
    },
    (err) => {
      console.log(err);
      this.error = "Registration Error has occurred";
    }
  );
}

validateAuthCode(form: NgForm) {
  const code = form.value.code;
  
  this.auth.confirmAuthCode(code).subscribe(
    (data) => {
      //this._router.navigateByUrl('/');
      this.codeWasConfirmed = true;
      this.confirmCode = false;
      form.reset();
        },
    (err) => {
      console.log(err);
      this.error = "Confirm Authorization Error has occurred";
    });
}
}

