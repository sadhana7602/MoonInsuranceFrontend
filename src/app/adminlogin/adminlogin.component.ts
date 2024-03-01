import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../_service/api-service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {

  email: string = '';
  password: string = '';
  
  

constructor(private router: Router,private apiService: ApiServiceService){}

adminlogin(){
  

  let bodydata = {
    email:this.email,
    password:this.password
}
  

  this.apiService.adminLogin(bodydata).subscribe((resultData: String) => {
    console.log(resultData);
    console.log(typeof resultData);

    if (resultData=="true")
    {
      console.log("I am in");
      this.router.navigateByUrl('/admindashboard');
    }
    else 

     {
      alert("Not Valid User");
      
      this.router.navigateByUrl('/home');
    }
  });
}
}
