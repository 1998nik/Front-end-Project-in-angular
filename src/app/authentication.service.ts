import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedIn="isLoggedIn";
  condition='condition';
  constructor(private router:Router) { }
  login()
  {
    
    localStorage.setItem(this.loggedIn,'true');
         localStorage.setItem(this.condition,'true')

  }
  logout(){
    
    this.condition='false';
    localStorage.setItem('isLoggedIn','false');
    localStorage.setItem('condition','false');

    this.router.navigate(['/login']);
  }
}
