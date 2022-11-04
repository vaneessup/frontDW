import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(public ServiceService: ServiceService,
    public router: Router) { }

  email: any;
  password: any;
  confirmPassword: any;
  passwordError: boolean = false

  register() {
    const user = { email: this.email, password: this.password };
    this.ServiceService.register(user).subscribe( data => {
      this.ServiceService.setToken(data.id);
      this.router.navigateByUrl('/');
    },
    error => {
      console.log(error);
    });
    }

}
