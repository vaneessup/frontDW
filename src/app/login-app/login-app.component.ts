
import { Component, Injectable, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FormControl, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: "root"
})

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent  {
  
  email: any;
  password: any;

  constructor() {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }


}
