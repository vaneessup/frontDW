import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  // getdata(): Observable<any>{
  //   return this.http.get("http://ec2-35-173-217-243.compute-1.amazonaws.com/api/GetUsuarios");
  // }

  
  // deleteUser(): Observable<any>{
  //   return this.http.delete("http://ec2-35-173-217-243.compute-1.amazonaws.com/api/DeleteUser/125171");

  // }

  login(user:any):Observable<any>{
    return this.http.post("http://ec2-35-173-217-243.compute-1.amazonaws.com/api/PostUsuario", user);
  }

  register(user:any):Observable<any>{
    return this.http.post("http://ec2-35-173-217-243.compute-1.amazonaws.com/api/PostUsuario", user);
  }
 
}
