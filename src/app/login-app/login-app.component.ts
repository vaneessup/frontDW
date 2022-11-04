import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

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

  constructor(public ServiceService: ServiceService) { }

  // ngOnInit(): void {
  //  this.ServiceService.getdata().subscribe(data => {
  //   this.registros = data
  //   console.log(this.registros, 'REGISTROOOOS')
  //  });

  // this.ServiceService.getdata().subscribe(data =>{
  //   console.log('User Login:' + data[0].correo )
  // }, (err: HttpErrorResponse) =>{
  //   if(err.error instanceof Error){
  //     console.log("Client error");
  //   }else{
  //     console.log("Server Error")
  //   }
  // } )

  // }

 login(){
  const user = {email: this.email, password: this.password};
  this.ServiceService.login(user).subscribe(data => {
    console.log(data);
  })
  
 }
}
