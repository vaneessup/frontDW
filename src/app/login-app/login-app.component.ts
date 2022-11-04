import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: "root"
})

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent {
  email: any;
  password: any;

  constructor(public ServiceService: ServiceService,
    public router: Router) { }



 login(){
  const user = {email: this.email, password: this.password};
  this.ServiceService.login(user).subscribe(data => {
    this.ServiceService.setToken(data.id);
    this.router.navigateByUrl('/');
    console.log(data);
  }, error => {
    console.log(error);
  });
  
 }
}
