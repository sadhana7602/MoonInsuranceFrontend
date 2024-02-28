import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginUser } from '../loginUser'; // Import loginUser class
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  //private apiUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) {}

  login(bodydata:any): Observable<String> {
    return this.http.post<String>("http://localhost:9090/customer/login",bodydata); // Pass user object
  }

  signup(bodydata:any): Observable<boolean> {
    return this.http.post<boolean>("http://localhost:9090/customer/add",bodydata); // Pass user object
  }
}

