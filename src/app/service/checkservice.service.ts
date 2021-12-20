import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckserviceService {
  // behavior subject is used fpr Requires an initial value and emits the current value to new subscribers
  url = "http://localhost:9000";
   otp$=new BehaviorSubject({email:"",otp:0});
   //observable is used for passing messages between publishers and subscribers 
   
  constructor(private http:HttpClient) { }
  signupdata(loginobj: any): Observable<any> {
    return this.http.post("http://localhost:9000/signup", loginobj, { headers: { 'content-type': 'application/json' }, responseType: 'text' })
  }
  logindata(loginobj: any,password:any): Observable<any> {
    return this.http.post("http://localhost:9000/login", {loginobj:loginobj, password:password},{ headers: { 'content-type': 'application/json' }, responseType: 'text' })
  }
  submit(submitobj:any):Observable<any>
  {
    return this.http.post("http://localhost:9000/submitdata", submitobj, { headers: { 'content-type': 'application/json' }, responseType: 'text' })
  }

  // forgetpassword(data:any):Observable<any>
  // {
  //   return this.http.post<any>('http://localhost:3000/sendemail',data,
    
  //   )
  // }

  forgetpassword(email:any,):Observable<any>{
    //alert(email)
    return this.http.get("http://localhost:9000/getUserByEmail/"+email,{ headers: { 'content-type': 'application/json' }, responseType: 'json' })
  }

}
