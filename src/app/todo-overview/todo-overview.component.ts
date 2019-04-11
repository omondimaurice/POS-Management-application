
/** 
@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { REMOVE_ALL_POS } from '../actions';
@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {
  @select() posar;
  @select() lastUpdate;
  constructor(private ngRedux: NgRedux<IAppState>) { }
  ngOnInit() {
  }
  clearPos() {
    this.ngRedux.dispatch({type: REMOVE_ALL_POS});
  }
}