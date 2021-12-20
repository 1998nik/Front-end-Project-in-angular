import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './product/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public url = "http://localhost:3000/products";

  getAllProducts():Observable<any>{
    return this.http.get(this.url);
  }

  getProductByID(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`)
  }

  deleteProduct(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }
  getProductsByCategory(cat:string):Observable<any>{
    return this.http.get(`${this.url}?category=${cat}`);
  }
}