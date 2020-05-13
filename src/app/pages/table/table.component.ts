import { Component, OnInit} from '@angular/core';


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
   
    private buttonClicked: boolean;
    private mobile: boolean;

    constructor(){
        this.text = 'no clicks yet';
        this.buttonClicked = false;
        this.tableData2 =  [
         
               {
                   "id":1,
                   "position":"engineer",
                   "org":"hcl",
                    "doa":"28/4/12",
                    "link":"www.indeed.com",
                    "dof":"23/23/23",
                    "status":"Applied",
                    "feedback":"improve",
                    "comment":"referred by prof",
                    "resume":""
               },
               {
                "id":2,
                "position":"engineer",
                "org":"hcl",
                 "doa":"28/4/12",
                 "link":"www.indeed.com",
                 "dof":"23/23/23",
                 "status":"Interview Scheduled",
                 "feedback":"improve",
                 "comment":"referred by prof",
                 "resume":""
            },
            
            {
                "id":3,
                "position":"engineer",
                "org":"hcl",
                 "doa":"28/4/12",
                 "link":"www.indeed.com",
                 "dof":"23/23/23",
                 "status":"Completed",
                 "feedback":"improve",
                 "comment":"referred by prof",
                 "resume":""
            },
            
            {
                "id":3,
                "position":"engineer",
                "org":"hcl",
                 "doa":"28/4/12",
                 "link":"www.indeed.com",
                 "dof":"23/23/23",
                 "status":"Selected",
                 "feedback":"improve",
                 "comment":"referred by prof",
                 "resume":""
            },  {
                "id":1,
                "position":"engineer",
                "org":"hcl",
                 "doa":"28/4/12",
                 "link":"www.indeed.com",
                 "dof":"23/23/23",
                 "status":"Applied",
                 "feedback":"improve",
                 "comment":"referred by prof",
                 "resume":""
            },
            {
             "id":2,
             "position":"engineer",
             "org":"hcl",
              "doa":"28/4/12",
              "link":"www.indeed.com",
              "dof":"23/23/23",
              "status":"Interview Scheduled",
              "feedback":"improve",
              "comment":"referred by prof",
              "resume":""
         },
         
         {
             "id":3,
             "position":"engineer",
             "org":"hcl",
              "doa":"28/4/12",
              "link":"www.indeed.com",
              "dof":"23/23/23",
              "status":"Completed",
              "feedback":"improve",
              "comment":"referred by prof",
              "resume":""
         },
         
         {
             "id":3,
             "position":"engineer",
             "org":"hcl",
              "doa":"28/4/12",
              "link":"www.indeed.com",
              "dof":"23/23/23",
              "status":"Selected",
              "feedback":"improve",
              "comment":"referred by prof",
              "resume":""
         }
            ]
        
    }
    ngOnInit() {
       // console.log("================"+window.screen.width)
        if (window.screen.width === 360) { // 768px portrait
          this.mobile = true;
        }
      }
    add(){
        console.log("button clicked");
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

onClickSubmit(formData){
console.log(JSON.stringify(formData));
}

method2(value,id){

    console.log("==========="+value+"==="+id);

}

}


