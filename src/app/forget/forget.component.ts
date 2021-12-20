import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckserviceService } from '../service/checkservice.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  error:any=null;
  success:boolean=false
  public forgetForm!:FormGroup;
  constructor(private fb:FormBuilder,private checkservice:CheckserviceService,private router:Router) { }

  ngOnInit(): void {
    this.forgetForm=this.fb.group(
      {
        email:['',[Validators.required,]]
      }
      
    )
  }
  get email() {
    return this.forgetForm.get('email');
 }
  forgetsubmit()
    {
      if(this.forgetForm.valid)
      {
        // alert(this.forgetForm.get(['email'])?.value)
        this.checkservice.forgetpassword(this.forgetForm.get(['email'])?.value).subscribe(
          (data)=>
          {
            
            this.success=true;
            this.error=false;
            //alert("email send to "+data.email+data.otp);
            console.log(data);
            this.checkservice.otp$.next(data);
            console.log(this.checkservice.otp$.getValue())

            this.router.navigate(['/reset'])
            console.log(data);
          },
          (err)=>
          {
            this.success=false;
            console.log(this.forgetForm.value);
            console.log(err);
            this.error=err;
          }
        )
      }

    }

}
