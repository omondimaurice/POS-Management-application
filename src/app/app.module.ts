import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import {FormsModule } from '@angular/forms'
import{ HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { PosComponent } from './pos/pos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { EditComponent } from './edit/edit.component';
import { DataTablesModule } from 'angular-datatables';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoLisComponent } from './todo-lis/todo-lis.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    PosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    EditComponent,
    TodoOverviewComponent,
    TodoLisComponent,
    NgReduxModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    NgReduxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
}


 }
