import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  item_qty:any;

  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.getitem();
  }
  getitem()
  {
    this.cartservice.getProducts()
    .subscribe(res=>{
      
      this.products = res;
      console.log(this.products);
      this.grandTotal = 0;
      for(var i=0;i<res.length;i++)
      {
        this.grandTotal=this.grandTotal+res[i].quantity*res[i].price;
      }
    })
  }
  
  removeItem(item: any){
    console.log(item);
    this.cartservice.removeCartItem(item).subscribe((res) => {
      alert('user Details is Deleted')
      this.cartservice.getProducts();
      this.getitem();
    
    });
  }
  emptycart(){
    this.cartservice.removeAllCart().subscribe((res) => {
      alert('user Details is Deleted')
      this.getitem();
    
    });
  }}
