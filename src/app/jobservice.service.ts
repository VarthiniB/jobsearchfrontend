import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobserviceService {

  constructor(private http: HttpClient) { }

  getAllJobs(uid) {    
    return this.http.post("http://ec2-18-189-28-91.us-east-2.compute.amazonaws.com:7000/getTablePaginated",this.setupdata(uid));
  }
  getAllApplied(uid) {
    return this.http.post("http://ec2-18-189-28-91.us-east-2.compute.amazonaws.com:7000/getCountApplied",this.setupdata(uid));
  }
  getAppliedToday(uid) {
    return this.http.post("http://ec2-18-189-28-91.us-east-2.compute.amazonaws.com:7000/getCountAppliedToday",this.setupdata(uid));
  }
  getAllEvents(uid) {
    return this.http.post("http://ec2-18-189-28-91.us-east-2.compute.amazonaws.com:7000/getUpcomingEvents",this.setupdata(uid));
  }
  getEventsToday(uid) {
    return this.http.post("http://ec2-18-189-28-91.us-east-2.compute.amazonaws.com:7000/getTodayTask",this.setupdata(uid));
  }
  getCalendar(uid,month) {
    var data={
      "uid":uid,
      "month":month
    }
    return this.http.post("http://ec2-18-189-28-91.us-east-2.compute.amazonaws.com:7000/getCalenderData",data);
  }
  getUser(email){
    var data={
      "email":email
    }
    console
    return this.http.post("http://ec2-18-189-28-91.us-east-2.compute.amazonaws.com:7000/getUserId",data);
  }
  getUserDetails(sno){
    var data={
      "sno":sno
    }
    console
    return this.http.post("http://ec2-18-189-28-91.us-east-2.compute.amazonaws.com:7000/getUserDetails",data);
  }
  setupdata(uid){
    var data={
      "uid":uid
    }
    return data;
  }
  addUser(data){
    return this.http.post("http://ec2-18-189-28-91.us-east-2.compute.amazonaws.com:7000/addUser",data);

  }

  addJob(formdata){
    return this.http.post("http://ec2-18-189-28-91.us-east-2.compute.amazonaws.com:7000/addNewJob",formdata);
 
  }
}
