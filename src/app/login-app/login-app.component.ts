
import { Component, Injectable, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';


@Injectable({
  providedIn: "root"
})

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent implements OnInit {
  email: any;
  password: any;

  constructor(public ServiceService: ServiceService,
    public router: Router) { }

  ngOnInit(): void {
    this.ServiceService.getdata().subscribe(datos => {
      console.log(datos)
    })
  }



 login(){
  this.router.navigateByUrl('/home')
  console.log('NO HACE NADA')
  
 }
}
