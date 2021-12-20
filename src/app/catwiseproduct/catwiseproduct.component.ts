import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../product/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-catwiseproduct',
  templateUrl: './catwiseproduct.component.html',
  styleUrls: ['./catwiseproduct.component.css']
})
export class CatwiseproductComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private prodService:ProductService) { }
  public paramObj:any;
  public prodArr:Products[]=[];
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.paramObj = params.cat;
      //alert(this.paramObj.cat)
    })
    this.getProductsByCategory()
  }
  public loading:boolean=true;
  public loadingCard:boolean=false;
  getProductsByCategory(){
    //alert(this.paramObj)
    this.prodService.getProductsByCategory(this.paramObj).subscribe((data=>{
      console.log({data})
      this.prodArr = data;
      this.loading = false;
      this.loadingCard = true;
    }),(err)=>{
      console.log(err);
    })
  }

}