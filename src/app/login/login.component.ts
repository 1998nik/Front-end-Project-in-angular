import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { CheckserviceService } from '../service/checkservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!:FormGroup;
  loggedIn="isLoggedIn";
  condition='condition';

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router,private userservice:CheckserviceService,private authservice:AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm=this.formbuilder.group(
      {
        user:[''],
        password:['']
      }
    )
  }
login()
{

   this.userservice.logindata(this.loginForm.value['user'],this.loginForm.value['password']).subscribe((data)=>
   {
  
    console.log(data);
    this.authservice.login();
    this.router.navigate(['/dmart'])
   },
   err=>{
     
     alert("User Not Found ")
   });

  }
}
