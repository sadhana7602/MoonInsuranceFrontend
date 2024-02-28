import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { loginUser } from '../loginUser'; // Import loginUser class
import { HttpClient } from '@angular/common/http';
import { PolicyProduct } from '../model/policyproduct';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  //private apiUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) {}

  login(bodydata:any): Observable<String> {
    return this.http.post<String>("http://localhost:9090/customer/login",bodydata); // Pass user object
  }
  
    adminLogin(bodydata: any): Observable<string> {
      
      const expectedEmail = "abc@gmail.com";
      const expectedPassword = "abcd";
  
      
      if (bodydata.email === expectedEmail && bodydata.password === expectedPassword) {
        return of("true"); 
      } else {
        return of("true"); 
      }
  
    }
  signup(bodydata:any): Observable<boolean> {
    return this.http.post<boolean>("http://localhost:9090/customer/add",bodydata); // Pass user object
  }

  getHealthData():Observable<PolicyProduct[]>{
    return this.http.get<PolicyProduct[]>("http://localhost:9090/health-insurance/healthall");
  }
  getHomeData():Observable<PolicyProduct[]>{
    return this.http.get<PolicyProduct[]>("http://localhost:9090/home-insurance/homeall");
  }
  getVehicleData():Observable<PolicyProduct[]>{
    return this.http.get<PolicyProduct[]>("http://localhost:9090/vehicle-insurance/vehicleall");
  }
  buyHealthPolicy(bodydata:any): Observable<boolean> {
    return this.http.post<boolean>("http://localhost:9090/health-insurance/add",bodydata); // Pass user object
  }
  buyAutoPolicy(bodydata:any): Observable<boolean> {
    return this.http.post<boolean>("http://localhost:9090/vehicle-insurance/add",bodydata); // Pass user object
  }
  buyHomePolicy(bodydata:any): Observable<boolean> {
    return this.http.post<boolean>("http://localhost:9090/home-insurance/add",bodydata); // Pass user object
  }
}

