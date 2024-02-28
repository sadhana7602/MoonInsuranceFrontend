import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../_service/api-service';
import { AppComponent } from '../app.component';
import { loginUser } from '../loginUser';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email: string = '';
  password: string = '';
  
  

constructor(private router: Router,private apiService: ApiServiceService){}

ngOnInit(): void {
    
}

 
login(){
  console.log(this.email);
  console.log(this.password);

  let bodydata = {
    email:this.email,
    password:this.password
}
  

  this.apiService.login(bodydata).subscribe((resultData: String) => {
    console.log(resultData);
    console.log(typeof resultData);

    if (resultData)
    {
      console.log("I am in");
      this.router.navigateByUrl('/dashboard');
      


    }
    else 

     {
      alert("Not Valid User");
      
      this.router.navigateByUrl('/home');
    }
    
  });
}
}