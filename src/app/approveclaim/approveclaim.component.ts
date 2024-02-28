import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../_service/api-service';
import { Claim } from '../model/claim';
@Component({
  selector: 'app-approveclaim',
  templateUrl: './approveclaim.component.html',
  styleUrl: './approveclaim.component.css'
})
export class ApproveclaimComponent {
  claimId:number|undefined;
  policyId:number|undefined;

  hlist:Claim[]=[];
  constructor(private router: Router,private apiService: ApiServiceService){}
  
 
  ngOnInit(){
    this.apiService.getClaimData().subscribe((response)=>{
      this.hlist=response;
    },(error)=>console.log(error));
  }
  submitForm(){
    
    this.apiService.ClaimValidation(this.policyId).subscribe((response:any)=>{
        console.log(response);
        if(response===true){
          alert("Automated claim validation done  Successfully!!!");
          this.claimId=undefined;
          this.policyId=undefined;
          
        }
        else{
          alert("Please try again....");
        }
    },error=>console.log(error));
  }
}
