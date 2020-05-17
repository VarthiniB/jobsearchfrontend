

import { Injectable } from '@angular/core';
import {AuthenticationDetails, CognitoUser, CognitoUserPool,CognitoUserAttribute} from 'amazon-cognito-identity-js';
import { Observable } from 'rxjs';

const poolData = {
  UserPoolId: 'us-east-1_g4p8Tg1UO', // Your user pool id here
  ClientId: 'h8r3t53dpf1hoe7mesfgmtq41' // Your client id here 

};

const userPool = new CognitoUserPool(poolData);

@Injectable({
  providedIn: 'root'
})
export class AuthorizationServiceService {
  cognitoUser: any;
  signupData: any;

  constructor() { }
 
  register(email, password) {

    const attributeList = [];
    attributeList.push(new CognitoUserAttribute({
        Name: 'email',
        Value: email
    }));

    return Observable.create(observer => {
      userPool.signUp(email, password, attributeList, null, (err, result) => {
        if (err) {
          console.log("signUp error", err);
          observer.error(err);
        }

        this.cognitoUser = result.user;
        console.log("signUp success", result);
        observer.next(result);
        observer.complete();
      });
    });

  }

  confirmAuthCode(code) {
    const user = {
      Username : this.cognitoUser.username,
      Pool : userPool
    };
    return Observable.create(observer => {
      const cognitoUser = new CognitoUser(user);
      cognitoUser.confirmRegistration(code, true, function(err, result) {
        if (err) {
          console.log(err);
          observer.error(err);
        }
        console.log("confirmAuthCode() success", result);
        observer.next(result);
        observer.complete();
      });
    });
  }

  signIn(email, password) { 

    const authenticationData = {
      Username : email,
      Password : password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username : email,
      Pool : userPool
    };
    const cognitoUser = new CognitoUser(userData);
    
    return Observable.create(observer => {

      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          
          console.log(result);
          observer.next(result);
          observer.complete();
        },
        onFailure: function(err) {
          console.log(err);
          observer.error(err);
        },
      });
    });
  }

  isLoggedIn() {    
    return userPool.getCurrentUser() != null;
  }

  getAuthenticatedUser() {
    // gets the current user from the local storage
   // console.log(userPool.getCurrentUser().getUsername());
    return userPool.getCurrentUser();
  }

  getAuthenticatedUserName() {
    // gets the current user from the local storage
   // console.log(userPool.getCurrentUser().getUsername());
    return userPool.getCurrentUser().getUsername();
  }

  logOut() {
    this.getAuthenticatedUser().signOut();
    this.cognitoUser = null;
  }

  forgotPassword(uname){

    const userData = {
      Username : uname,
      Pool : userPool
    };
    const cognitoUser = new CognitoUser(userData);
    return Observable.create(observer => {
    cognitoUser.forgotPassword({
      onSuccess: function (result) {
       
        console.log(result);
        observer.next(result);
        observer.complete();
      },
      onFailure: function(err) {
        console.log(err);
          observer.error(err);
      }
     
  });
});
  }
  confirmpass(uname,verificationcode,newpass){
    const userData = {
      Username : uname,
      Pool : userPool
    };
    const cognitoUser = new CognitoUser(userData);
    return Observable.create(observer => {
      cognitoUser.confirmPassword(verificationcode,newpass, {
        onSuccess: function () {
         
          console.log("======sucess======");
          observer.complete();
        },
        onFailure: function(err) {
          console.log(err);
            observer.error(err);
        }
       
    });
});
   
  }


}
