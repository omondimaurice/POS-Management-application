import { Injectable } from '@angular/core';

// authentication service
@Injectable({
  providedIn: 'root'
})
export class HardcodedauthenticationService {



  constructor() { }
  authenticate(username,password){


    //session tracking a single user
    if(username==='maurice' && password==='xyml1'){
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    }
    else{
      return false;
    }
   
  }

  //check login user
  isUserLogin(){
    let  user=sessionStorage.getItem("authenticatedUser")
return !(user===null)
   }
   userLogout(){
sessionStorage.removeItem("authenticatedUser")
   }
}
