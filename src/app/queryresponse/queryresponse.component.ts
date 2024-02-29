import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../_service/api-service';
 
@Component({
  selector: 'app-queryresponse',
  templateUrl: './queryresponse.component.html',
  styleUrl: './queryresponse.component.css'
})
export class QueryresponseComponent {
    queryId:number;
    // customerId:number | undefined;
    // policyNo:number | undefined;
    // question:string | undefined;
    answer:string;
 
    constructor(private router: Router,private apiService: ApiServiceService){
      this.queryId = 0;
      this.answer = "";
    }
 
    submitForm(){
      // let bodydata = {
      // queryId:this.queryId,
      // // customerId:this.customerId,
      // // policyNo:this.policyNo,
      // // question:this.question,
      // answer:this.answer
      // }
      let bodydata = this.answer;
      console.log(this.queryId);
      console.log(this.answer);
      this.apiService.addResponse(this.queryId, bodydata).subscribe((response)=>{
          console.log(response);
          if(response===true){
            alert("RESPOND SENT SUCCESSFULLY!!!");
            this.queryId=0;
            // this.customerId=undefined;
            // this.policyNo=undefined;
            // this.question=undefined;
            this.answer="";
          }
          else{
            alert("Please try again....");
          }
      },error=>console.log(error));
    }
}