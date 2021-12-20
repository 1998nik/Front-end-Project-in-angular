import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ResetService } from '../service/reset.service';
import { CheckserviceService } from '../service/checkservice.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  resetform!: FormGroup;
  isSubmitted: boolean = false;
  emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  
  constructor(private formbuilder:FormBuilder,private reset:ResetService,private router:Router,private checkservice:CheckserviceService) { }

  ngOnInit(): void {
    this.resetform=this.formbuilder.group(
      {
        
        email:new FormControl([],[Validators.required,Validators.pattern(this.emailPattern)]),
        otp:new FormControl([],[Validators.required,]),
        password:new FormControl([],[Validators.required,]),
        
      }
      
    )
  }

  get email() {
    return this.resetform.get('email');
 }

 get otp()
 {
   return this.resetform.get('otp');
 }

 get password()
 {
   return this.resetform.get('password');
 }

 data=this.checkservice.otp$.getValue();
  email1=this.data.email;
  otp1:any=this.data.otp;
  

  
  

  onSubmit() 
  {
    
   
    if(this.email1==this.resetform.value['email'] && this.otp1==this.resetform.value['otp'])
    {
      
     this.reset.submitdata(this.resetform.value['email'],this.resetform.value['password']).subscribe((data)=>
    {
      console.log(data);
      this.router.navigate(['/login'])
    },
  
    err=>
    {
      console.log(err);
    });
    
  }

else
{
  console.log("give coorect data");
}
}
}

