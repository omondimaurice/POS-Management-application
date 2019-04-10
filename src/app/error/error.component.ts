import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errormessage='Oooops....An error occured while loading the page!';

  constructor() { }

  ngOnInit() {
  }

}
