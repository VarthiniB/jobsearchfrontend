import { Component, OnInit} from '@angular/core';
import { JobserviceService } from '../../jobservice.service';
import { SharedServService } from '../../shared-serv.service';
import {NgForm} from '@angular/forms';


@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html',
    styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit{

    public tableData2: any[];
    public text: String;
    public t1:string;
    public t2:string;
    public t3:string;
    public showt1req: boolean;
    public sno:string;
   public ddate: any;
    private buttonClicked: boolean;
    private mobile: boolean;

    constructor(public service: JobserviceService,public ss:SharedServService){
        this.text = 'no clicks yet';
        this.buttonClicked = false;
        this.ddate = new Date();
        this.sno = ss.getUid();
       // ss.setUid(2);
        service.getAllJobs(ss.getUid()).subscribe((data:any) => {
            this.tableData2 = data;
         });
       
    }
    ngOnInit() {
       // console.log("================"+window.screen.width)
        if (window.screen.width === 360) { // 768px portrait
          this.mobile = true;
        }
      }
    add(){
      //  console.log("button clicked");
        this.buttonClicked = true;     
    }
    cancel(){
        this.buttonClicked = false;   
        this.showt1req = false;  
    }
   /*  onClickedOutside(formdata) {
        console.warn(formdata.value);
       // console.log("==="+e);
    /*  if(this.t1 != "" &&  this.buttonClicked == true){
       var x={
        "id": this.t1,
        "country":this.t2,
        "state":this.t3
       }
       this.t1 = "";
       this.t2 = "";
       this.t3 = "";

       this.tableData2.push(x);
    }
    else{
        this.showt1req = true;
    //alert("id is required");

    }
       //this.buttonClicked = false;  
}*/

onClickSubmit(formData : NgForm){
    //console.log("=="+formData+"=="+formData.value);
    var data = formData;
   // console.log("====data==="+JSON.stringify(data));
    if((data.value.position == null || data.value.position == "") || (data.value.org == null || data.value.org == "")){
        alert("Position and Organization are mandatory");
    }
    else{
       //console.log(JSON.stringify(formData));
       this.service.addJob(formData.value).subscribe((data) => {
       // console.log(data);
       this.service.getAllJobs(this.ss.getUid()).subscribe((data:any) => {
        this.tableData2 = data;
        formData.reset();
     });
       });
    }
}

method2(value,id){
    console.log("==========="+value+"==="+id);
}

}


