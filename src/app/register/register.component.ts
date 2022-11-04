import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(public ServiceService: ServiceService) { }

  email: any;
  password: any;
  confirmPassword: any;
  passwordError: boolean = false

  register() {
    const user = { email: this.email, password: this.password };
    this.ServiceService.register(user).subscribe(data => {
      console.log(data);
    });
    }

}
