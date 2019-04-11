import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_POS, REMOVE_POS } from '../actions';
import { IPOS } from '../IPOS';


@Component({
  selector: 'app-todo-lis',
  templateUrl: './todo-lis.component.html',
  styleUrls: ['./todo-lis.component.css']
})
export class TodoLisComponent implements OnInit {
  @select() posar;
  model: IPOS = {
    id:0,
    serialNumber:'',
    make: '',
    owner: '',
    timestamp: new Date(),
     
  };
  constructor(private ngRedux: NgRedux<IAppState>) { }
  ngOnInit() {
  }
  onSubmit() {
    this.ngRedux.dispatch({type: ADD_POS, pos: this.model});
  }
  removePos(pos) {
    this.ngRedux.dispatch({type: REMOVE_POS, id: pos.id });
  }
}