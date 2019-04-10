import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeserviceService } from '../service/welcomeservice.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
name='Maurice';

  title='welcome.ts';
  welcomemessage:string;

  constructor(private route:ActivatedRoute, private helloworlddata:WelcomeserviceService) { }

  ngOnInit() {
   this.title='maurice'

   
    //accepts parameter name 
  this.route.snapshot.params['name']
  }
  
}
