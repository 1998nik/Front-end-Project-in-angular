import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  url="http://localhost:5000";

  postdata(loginobj: any): Observable<any> {
    return this.http.post(this.url+'/insertdata', loginobj, { headers: { 'content-type': 'application/json' }, responseType: 'text' })
  }

  getdata(): Observable<any> {
    return this.http.get(this.url+'/getdata')

  }
  updatedata(data: any,id:number): Observable<any> {
    return this.http.put(this.url+'/updatedata/'+id, data, { headers: { 'content-type': 'application/json' }, responseType: 'text' })
  }

  deletedata(id:number): Observable<any> {
    return this.http.delete(this.url+'/deletedata/'+id)
  }
  
  
  
 
}
