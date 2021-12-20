import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public totalItem : number = 0;
  title = 'assignment7';
  
  constructor(private restservice:AuthenticationService,private cartservice:CartService){}
  condition: boolean =false;
  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
 
  loginguard()
  {
    this.restservice.login();
  }
  logoutguard()
  {
    this.restservice.logout();
  }
  
  
  

}
