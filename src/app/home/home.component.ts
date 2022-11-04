import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public ServiceService: ServiceService) { }

  ngOnInit() {
    this.getUserLogged();
  }
  
  getUserLogged() {
    this.ServiceService.getUser().subscribe(user => {
      console.log(user);
    });
  }

}
