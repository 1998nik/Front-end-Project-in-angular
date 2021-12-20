import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { PaymentService } from '../service/payment.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  elements: any;
  card: any;
 
  // optional parameters
  elementsOptions: StripeElementsOptions = {
    locale: 'auto'
  };
 amount='';
  stripeTest!: FormGroup;
 
  constructor(
    private fb: FormBuilder,
    private stripeService: StripeService,
    private paymentservice : PaymentService,
    private activateroute:ActivatedRoute,
    //private orderService : OrderService,
   // private AddressService : AddressService,
    private router : Router) {
      this.activateroute.paramMap.subscribe((data:any)=>
      {
        this.amount=data.get('amount')
      })
    }

  // PaymentDetailsObject:any={
  //   amount:this.paymentservice.GetPaymentDetails().amount
  // }
  // Address_data=this.paymentservice.GetPaymentDetails().address;
  ngOnInit() {
  // console.log(this.Address_data)
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
  }
  //OrderData ={AddressId:this.Address_data.id,products:this.paymentservice.GetPaymentDetails().products,user_id:localStorage.getItem('user_details'),Amount:this.PaymentDetailsObject.amount,Payment:"SUCCESS"}
  buy() {
    const name = this.stripeTest.value.name;
    // console.log(this.Address_data.id)
    // console.log(localStorage.getItem('user_details'))
   // console.log(this.OrderData)
    this.stripeService
      .createToken(this.card, { name })
      .subscribe(result => {
        if (result.token) {
          this.paymentservice.PaymentConfirmation({...result,amount:this.amount}).subscribe((data)=>{
            console.log(data)
            // if(data=="Payment Sucessfull"){
            //   this.orderService.CreateOrder(this.OrderData)
            //   .subscribe(data=>{
            //     this.router.navigate(['payment_sucess',result.token?.card?.id])
            //   },
            //   (err)=>{
            //     alert("Some Went Wrong")
            //     console.log(err);
            //   })
            // }
          },(err)=>{
            alert(err);
            console.log(err);
          })
          
          console.log(result.token);
        } else if (result.error) {
          // Error creating the token
          alert(result.error.message);
          console.log(result.error.message);
        }
      });
  }

}
