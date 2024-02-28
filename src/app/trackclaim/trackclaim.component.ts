import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../_service/api-service';
import { Claim } from '../model/claim';

@Component({
  selector: 'app-trackclaim',
  templateUrl: './trackclaim.component.html',
  styleUrl: './trackclaim.component.css'
})
export class TrackclaimComponent {
  hlist:Claim[]=[];
  constructor(private router: Router,private apiService: ApiServiceService){}
  
 
  ngOnInit(){
    this.apiService.getClaimData().subscribe((response)=>{
      this.hlist=response;
    },(error)=>console.log(error));
  }

}
