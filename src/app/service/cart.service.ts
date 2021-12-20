import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : any =[];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  constructor(private http:HttpClient) { }
  getProducts()
  {
    //return this.productList.asObservable();
    return this.http.get<any>("http://localhost:8000/showdata")
    .pipe(map((res:any)=>
    {
      return res;
    }
    ))
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product : any){
   //console.log({product});
    return  this.http.post("http://localhost:8000/storedata", product, { headers: { 'content-type': 'application/json' }, responseType: 'json' }).pipe
    (
      map((data:any)=>
      {
        console.log(data);
        this.cartItemList.push(data);
        this.productList.next(this.cartItemList);
        this.getTotalPrice();
    
        return data;
      })
    )
  //  return this.http.post("http://localhost:8000/storedata",product);
    
  }
  
  
  
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.data.total;
    })
    return grandTotal;
  }

  removeCartItem(id: any):Observable<any>
  {

    console.log(id);
    let deleteURL= "http://localhost:8000/deletedata/"+id;
    console.log(deleteURL)
   return this.http.delete(deleteURL,{responseType:'text'});

  

  }
  removeAllCart():Observable<any>
  {
    return this.http.delete("http://localhost:8000/alldelete",{responseType:'text'})
    

  }
  
  
    
  
}

