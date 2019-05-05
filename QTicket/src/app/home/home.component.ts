import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
import { CreateService } from '../shared/create.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
incidents;
  constructor(private userService: UserService,private router: Router,private createService:CreateService) { }

  ngOnInit() {
    this.createService.getIncident().subscribe(
      res => {
        this.incidents = res//['incident'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
}
