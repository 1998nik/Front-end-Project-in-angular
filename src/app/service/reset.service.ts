import { HttpClient } from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  constructor(private http:HttpClient) { }
  url = "http://localhost:9000/updatedata";
  submitdata(email:any,password:any):Observable<any>
  {
   
    return this.http.put(this.url,{email:email,password:password},{ headers: { 'content-type': 'application/json' }, responseType: 'text' })
  };

  
}
