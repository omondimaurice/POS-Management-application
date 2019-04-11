import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLisComponent } from './todo-lis.component';

describe('TodoLisComponent', () => {
  let component: TodoLisComponent;
  let fixture: ComponentFixture<TodoLisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoLisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
