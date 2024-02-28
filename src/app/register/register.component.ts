import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../_service/api-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  
  name: string |undefined;
  dob: string |undefined;
  email: string |undefined;
  phone: number|undefined;
  password: string|undefined;
  address: string |undefined;


  constructor(private router: Router,private apiService: ApiServiceService){}
  ngOnInit(): void {
      
  }

signup(){

  let bodydata = {
    name:this.name,
    dob:this.dob,
    email:this.email,
    phone:this.phone,
    password:this.password,
    address:this.address
}
console.log(bodydata.phone)
this.apiService.signup(bodydata).subscribe((resultData: boolean) => {
  console.log(resultData);
  console.log(typeof resultData);

  if (resultData)
  {
    console.log("I am in");
    this.router.navigateByUrl('/dashboard');
    


  }
  else 

   {
    alert("Enter all details");
    
    this.router.navigateByUrl('/home');
  }

});
}

}
