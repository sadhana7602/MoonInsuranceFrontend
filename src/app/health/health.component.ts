import { Component } from '@angular/core';
import { PolicyProduct } from '../model/policyproduct';
import { Router } from '@angular/router';
import { ApiServiceService } from '../_service/api-service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrl: './health.component.css'
})
export class HealthComponent {
  hlist:PolicyProduct[]=[];
  productId:number|undefined;
  customerId:number|undefined;
  gender:string|undefined;
  age:number|undefined;
  nominee:string|undefined;
  constructor(private router: Router,private apiService: ApiServiceService){}
 
  ngOnInit(){
    this.apiService.getHealthData().subscribe((response)=>{
      this.hlist=response;
    },(error)=>console.log(error));
  }

  submitForm(){
    let bodydata = {
      productId:this.productId,
    customerId:this.customerId,
    gender:this.gender,
    age:this.age,
    nominee:this.nominee
  }
    this.apiService.buyHealthPolicy(bodydata).subscribe((response)=>{
        console.log(response);
        if(response===true){
          alert("Product added in your Cart Successfully!!!");
          this.customerId=undefined;
          this.productId=undefined;
          this.age=undefined;
          this.nominee=undefined;
          this.gender=undefined;
        }
        else{
          alert("Please try again....");
        }
    },error=>console.log(error));
  }

}
