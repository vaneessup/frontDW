import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginAppComponent} from './login-app/login-app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginAppComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'home', component:HomeComponent}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
