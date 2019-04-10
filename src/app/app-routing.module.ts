import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { PosComponent } from './pos/pos.component';
import { LogoutComponent } from './logout/logout.component'
import { RouteguardserviceService } from './service/routeguardservice.service'
import { EditComponent} from './edit/edit.component'

//viewpath routes
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteguardserviceService] },
 { path: 'pos-list', component: PosComponent, canActivate: [RouteguardserviceService] },
 { path: 'pos-list/:id', component: EditComponent, canActivate: [RouteguardserviceService] },
 
  { path: 'logout', component: LogoutComponent ,canActivate:[RouteguardserviceService]},
  { path: '**', component: ErrorComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
