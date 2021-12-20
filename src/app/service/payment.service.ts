import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }
  PaymentConfirmation(obj:any):Observable<any>{
    return this.http.post('http://localhost:8000/payment',obj,{headers:{'content-type':'application/json'},responseType:'text'})
  }
}
