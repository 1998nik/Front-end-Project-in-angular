import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { CheckserviceService } from '../service/checkservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //forname is signupform
  public signupForm !: FormGroup;
  emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

//constructor used for the initialization purpose
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router, private userservice: CheckserviceService) { }

//ngonInit used to define Angular bindings and called after the constructor and called  after the first ngOnChanges()
  ngOnInit(): void {

    this.signupForm = this.formbuilder.group(
      {

        user: new FormControl([], [Validators.required, Validators.pattern(this.emailPattern)]),
        password: new FormControl([], [Validators.required,]),
        role: new FormControl([], [Validators.required,]),
      }

    )
  }
// all get used for access any form control through the get method on its parent group 
  get user() {
    return this.signupForm.get('user');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get role() {
    return this.signupForm.get('role');
  }
  //this.signupfrom.value is used for get user password role whatever take from user
  //subscribe() call returns a Subscription 
  //router navigation happens from one view to the next as users perform application tasks in this case
  //go to login router


  signdata() {

    this.userservice.signupdata(this.signupForm.value).subscribe((data) => {
      console.log(data);
      alert(data);
      this.router.navigate(['/login'])
    },
      err => {
        alert("user already exit");
        console.log(err);
      });
  }
}


