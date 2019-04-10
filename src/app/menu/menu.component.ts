import { Component, OnInit } from '@angular/core';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  //dependecy injection of authentication service
isUserLogin:boolean= false;
  constructor(private hardcodedauth:HardcodedauthenticationService) { }



  ngOnInit() {
    this.isUserLogin= this.hardcodedauth.isUserLogin();
  }

}
