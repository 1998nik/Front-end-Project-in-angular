import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private router:Router) { }
  canActivate()
  {
    let breturn=true;

    if(localStorage.getItem('isLoggedIn')=='true')
    {
      // alert("you are not allowed to this page")
      // this.router.navigate(['/home']);
      // breturn=false;
      return true;

    }
    alert("you are not allowed to this page")
    return false;
    

  }
  
}
