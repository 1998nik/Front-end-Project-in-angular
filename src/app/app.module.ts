import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ProductComponent } from './product/product.component';
import { CatwiseproductComponent } from './catwiseproduct/catwiseproduct.component';
import { CartComponent } from './cart/cart.component';
import { DmartComponent } from './dmart/dmart.component';
import { ForgetComponent } from './forget/forget.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgxStripeModule } from 'ngx-stripe';
import { FilterPipe } from './filter.pipe';
import { ResetComponent } from './reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    UserdisplayComponent,
    ElectronicsComponent,
    ProductComponent,
    CatwiseproductComponent,
    CartComponent,
    DmartComponent,
    ForgetComponent,
    CheckoutComponent,
    FilterPipe,
    ResetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_51K4qg3SGxLpdKMNGmjdJbVHNXFmgL0DfEm9d3xAZPt8A9IieenulWd8yyqmR69bENi5JmVMxbzLTNuP9Xp0bjPBJ006PtTI6x2')

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
