import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./visitor/login/login.component";
import { SignUpComponent } from "./visitor/sign-up/sign-up.component";
import { DashboardComponent } from "./visitor/dashboard/dashboard.component";
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'register-user', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
