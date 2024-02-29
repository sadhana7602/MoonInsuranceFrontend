import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../_service/api-service';
 
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrl: './query.component.css'
})
export class QueryComponent {
    queryId:number | undefined;
    customerId:number | undefined;
    policyNo:number | undefined;
    question:string | undefined;
    answer:string | undefined;
 
    constructor(private router: Router,private apiService: ApiServiceService){}
 
    submitForm(){
      let bodydata = {
      queryId:this.queryId,
      customerId:this.customerId,
      policyNo:this.policyNo,
      question:this.question,
      answer:""
      }
      this.apiService.addQuery(bodydata).subscribe((response)=>{
          console.log(response);
          if(response===true){
            alert("Claim register Successfully!!!");
            this.queryId=undefined;
            this.customerId=undefined;
            this.policyNo=undefined;
            this.question=undefined;
            this.answer=undefined;
          }
          else{
            alert("Please try again....");
          }
      },error=>console.log(error));
    }
 
}

