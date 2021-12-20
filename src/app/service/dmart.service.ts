import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class DmartService {

  constructor(private http:HttpClient) { }
  getproduct()
  {
    return this.http.get<any>("http://localhost:8000/getdata")
    .pipe(map((res:any)=>
    {
      return res;
    }
    ))

  }



}
