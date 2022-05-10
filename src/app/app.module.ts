import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './visitor/dashboard/dashboard.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ProductcardComponent } from './visitor/components/productcard/productcard.component';
import { NavbarComponent } from './visitor/components/navbar/navbar.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './visitor/login/login.component';
import { SignUpComponent } from './visitor/sign-up/sign-up.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ButtonsComponent,
    ProductcardComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
