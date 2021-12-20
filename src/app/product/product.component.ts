import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Products } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public selectedCategory!:string;
  public categoryArr = ["men's clothing","electronics","jewelery","women's clothing"];
  constructor(private prodservice:ProductService,private route:ActivatedRoute) { }
  public arrProd:Products[]=[];
  public loading:boolean=true;
  public tableloading:boolean=false;
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.prodservice.getAllProducts().subscribe((data=>{
      this.arrProd = data;
      this.loading = false;
      this.tableloading = true;
    }),(err)=>{
      console.log(err)
    })
  }
  public prodid:any;
  getProductByID(){
     this.prodid = this.route.snapshot.paramMap.get('id');
      alert(`Product ID :- ${this.prodid}`);
      this.prodservice.getProductByID(this.prodid).subscribe((data=>{
        this.arrProd = data;
        this.loading = false;
        this.tableloading = true;
      }),(err)=>{
        console.log(err)
      })
    }

}