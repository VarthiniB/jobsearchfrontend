import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServService {

  private userid; 
  private month;
  private year; 
  
 setUid(value) {      
    this.userid = value;  
  }  
  
  getUid() {  
    return this.userid;  
  } 
  
  setMY(month,year){
    this.month = month;
    this.year = year;
  }

  getM(){
    return this.month;
  }

  getY(){
    return this.year;
  }
}
