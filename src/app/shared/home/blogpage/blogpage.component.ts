import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { AuthorizationServiceService } from "../../../authorization-service.service";

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})
export class BlogpageComponent implements OnInit {
  uname:string;
  valcode:any;
  confirmCode: boolean = false;
  codeWasConfirmed: boolean = false;
  error: string = "";

  constructor(public auth: AuthorizationServiceService) { }

  ngOnInit(): void {
  }


  
register(form: NgForm) {
  this.uname = form.value.email;
 
     
      this.auth.forgotPassword(this.uname).subscribe(
        (data) => {
          console.log("======forgor 1 "+data);
          this.confirmCode = true;
        }
      )
 
}

validateAuthCode(form: NgForm) {
 this.valcode = form.value.code;
 
      //this._router.navigateByUrl('/');
      this.codeWasConfirmed = true;
      this.confirmCode = false;
 
}

submitnewpassword(form: NgForm){
  const newpass = form.value.email;

  
  this.auth.confirmpass(this.uname,this.valcode,newpass).subscribe(
    (data) => {  
      console.log("========="+data);
      this.confirmCode = true;
    },
    (err) => {
      console.log(err);
      this.error = "Registration Error has occurred";
    }
  );

}
}
