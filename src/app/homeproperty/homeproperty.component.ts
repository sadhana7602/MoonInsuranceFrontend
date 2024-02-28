import { Component } from '@angular/core';
import { ApiServiceService } from '../_service/api-service';
import { PolicyProduct } from '../model/policyproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeproperty',
  templateUrl: './homeproperty.component.html',
  styleUrl: './homeproperty.component.css'
})
export class HomepropertyComponent {
  hlist:PolicyProduct[]=[];
  productId:number|undefined;
  customerId:number|undefined;
  gender:string|undefined;
  age:number|undefined;
  nominee:string|undefined;
  homeType:string|undefined;
  builtArea:number|undefined;
  assetValue:number|undefined;
  constructor(private router: Router,private apiService: ApiServiceService){}
 
  ngOnInit(){
    this.apiService.getHomeData().subscribe((response)=>{
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
    homeType:this.homeType,
    buildArea:this.builtArea,
    assetValue:this.assetValue
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
          this.homeType=undefined;
          this.builtArea=undefined;
          this.assetValue=undefined;
        }
        else{
          alert("Please try again....");
        }
    },error=>console.log(error));
  }
}
