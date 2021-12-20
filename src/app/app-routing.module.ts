import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthguardService } from './authguard.service';
import { CartComponent } from './cart/cart.component';
import { CatwiseproductComponent } from './catwiseproduct/catwiseproduct.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { DmartComponent } from './dmart/dmart.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ForgetComponent } from './forget/forget.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ResetComponent } from './reset/reset.component';
import { SignupComponent } from './signup/signup.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';



const routes: Routes = [
{path:'',redirectTo:"/home",pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent,canActivate:[AuthguardService]},
  {path:'contact',component:ContactComponent,canActivate:[AuthguardService]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'userdisplay',component:UserdisplayComponent,canActivate:[AuthguardService]},
  {path:'electronics',component:ElectronicsComponent,canActivate:[AuthguardService]},
  {path:'products',component:ProductComponent,canActivate:[AuthguardService]},
  {path:'catwiseproduct',component:CatwiseproductComponent,canActivate:[AuthguardService]},
  {path:'cart',component:CartComponent,canActivate:[AuthguardService]},
  {path:'dmart',component:DmartComponent,canActivate:[AuthguardService]},
  {path:'forget',component:ForgetComponent},
  {path:'checkout/:amount',component:CheckoutComponent},
  {path:'reset',component:ResetComponent}
  
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
