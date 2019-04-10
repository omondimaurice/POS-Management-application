import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='maurice';
  password='xyml1';
  invalidlogn=false;
  errormessage='Invalid username or password';
  constructor(private router:Router,private hardcordedauth: HardcodedauthenticationService) { }

  ngOnInit() {
  }
handleLogin(){
  
  if(this.hardcordedauth.authenticate(this.username,this.password)){
    //this.invalidlogn=false
    this.router.navigate(['welcome',this.username]);
  }
  else{
    this.invalidlogn=true;
  }
 
}
}
