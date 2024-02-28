import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../_service/api-service';

@Component({
  selector: 'app-claims-module',
  templateUrl: './claims-module.component.html',
  styleUrl: './claims-module.component.css'
})
export class ClaimsModuleComponent {
  
	policyId:number|undefined;
	
	productId:number|undefined;
	customerId:number|undefined;
	
	claimEntryDate:Date|undefined;
	causeOfLoss:string|undefined;
	claimAmount:number|undefined;
  status:string="Pending";
  constructor(private router: Router,private apiService: ApiServiceService){}

  submitForm(){
    let bodydata = {
      policyId:this.policyId,
      productId:this.productId,
    customerId:this.customerId,
    claimEntryDate:this.claimEntryDate,
    causeOfLoss:this.causeOfLoss,
    claimAmount:this.claimAmount,
    status:this.status
  }
    this.apiService.RegClaim(bodydata).subscribe((response)=>{
        console.log(response);
        if(response===true){
          alert("Product added in your Cart Successfully!!!");
          this.customerId=undefined;
          this.productId=undefined;
          this.claimEntryDate=undefined;
          this.causeOfLoss=undefined;
          this.claimAmount=undefined;
        }
        else{
          alert("Please try again....");
        }
    },error=>console.log(error));
  }

}
