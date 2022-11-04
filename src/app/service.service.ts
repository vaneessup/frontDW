import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient,
    private cookies: CookieService) { }

  getdata(): Observable<any>{
    return this.http.get("http://ec2-35-173-217-243.compute-1.amazonaws.com/api/GetUsuarios");
  }

  
  // deleteUser(): Observable<any>{
  //   return this.http.delete("http://ec2-35-173-217-243.compute-1.amazonaws.com/api/DeleteUser/125171");

  // }

  login(user:any):Observable<any>{

    return this.http.post("https://ec2-35-173-217-243.compute-1.amazonaws.com/api/PostUsuario", user);
  }

  register(user:any):Observable<any>{
    return this.http.post("http://ec2-35-173-217-243.compute-1.amazonaws.com/api/PostUsuario", user);
  }

  setToken(id: any) {
    this.cookies.set("token", id);
  }

  getToken() {
    return this.cookies.get("token");
  }

  getUser() {
    return this.http.get("http:ec2-35-173-217-243.compute-1.amazonaws.com/api/GetUsuarios");
  }
  getUserLogged() {
    const id = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
    return this.http.get("http:ec2-35-173-217-243.compute-1.amazonaws.com/api/GetUsuarios");
  }
 
}
