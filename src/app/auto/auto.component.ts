import { Component } from '@angular/core';
import { PolicyProduct } from '../model/policyproduct';
import { Router } from '@angular/router';
import { ApiServiceService } from '../_service/api-service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrl: './auto.component.css'
})
export class AutoComponent {
  hlist:PolicyProduct[]=[];
  productId:number|undefined;
  customerId:number|undefined;
  gender:string|undefined;
  age:number|undefined;
  nominee:string|undefined;
  make:string|undefined;
  model:string|undefined;
  fcdate:Date|undefined;
  constructor(private router: Router,private apiService: ApiServiceService){}
 
  ngOnInit(){
    this.apiService.getVehicleData().subscribe((response)=>{
      console.log(response);
      this.hlist=response;
    },(error)=>console.log(error));
  }

  submitForm(){
    let bodydata = {
      productId:this.productId,
    customerId:this.customerId,
    gender:this.gender,
    age:this.age,
    nominee:this.nominee,
    make:this.make,
    model:this.model,
    fcdate:this.fcdate
  }
    this.apiService.buyAutoPolicy(bodydata).subscribe((response)=>{
        console.log(response);
        if(response===true){
          alert("Product added in your Cart Successfully!!!");
          this.customerId=undefined;
          this.productId=undefined;
          this.age=undefined;
          this.nominee=undefined;
          this.gender=undefined;
          this.make=undefined;
          this.model=undefined;
          this.fcdate=undefined;
        }
        else{
          alert("Please try again....");
        }
    },error=>console.log(error));
  }
}
