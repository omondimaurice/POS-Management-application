import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { HardcodedauthenticationService } from './hardcodedauthentication.service';
@Injectable({
  providedIn: 'root'
})


export class RouteguardserviceService implements CanActivate {



  constructor(private hardcodedauth: HardcodedauthenticationService,private router:Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    //if user logged in ,can view POS lists
    if (this.hardcodedauth.isUserLogin())
      return true;


      //else directed to login page
this.router.navigate(["login"])
    return false;
  }

  
}
