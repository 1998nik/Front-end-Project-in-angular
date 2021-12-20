import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { DmartService } from '../service/dmart.service';

@Component({
  selector: 'app-dmart',
  templateUrl: './dmart.component.html',
  styleUrls: ['./dmart.component.css']
})
export class DmartComponent implements OnInit {
  public productlist:any;
  searchKey:string ="";
  public filterCategory : any;
  public searchTerm !: string;
  constructor(private restapi:DmartService,private cartservice:CartService ) { }


  ngOnInit(){
    this.restapi.getproduct()
    .subscribe(res=>
      {
        this.productlist=res;
        this.filterCategory = res;
        this.productlist.forEach((a:any) => {
          if(a.category ==="women's clothing" || a.category ==="men's clothing"){
            a.category ="fashion"
          }
        Object.assign(a,{quantity:1,total:a.price});
        })
      });
      this.cartservice.search.subscribe((val:any)=>{
        this.searchKey = val;
      })
  }
  addtocart(item: any){
    this.cartservice.addtoCart(item).subscribe(data=>
      {
        console.log(data);
        this.cartservice.setProduct(item);
      });
  }
  showalldata()
  {
    this.cartservice.getProducts().subscribe(data=>
      {
        console.log(data);
      })
  }

  
  filter(category:string){
    this.filterCategory = this.productlist
    .filter((a:any)=>{
      if(a.category == category || category==''){
       console.log(a);
        
        return a;
        
      }
    })

    // this.productlist=this.productlist.filter((a:any)=>
    //   (a.category==category)|| a.category==''
    //   )
      
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartservice.search.next(this.searchTerm);
  }

}
