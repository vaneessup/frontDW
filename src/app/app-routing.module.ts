import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginAppComponent} from './login-app/login-app.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginAppComponent},
  {path: 'register', component:RegisterComponent}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
