import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppCardComponent } from './app-card/app-card.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { firebaseConfig } from './environments/environment';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { NavigationErrorComponent } from './navigation-error/navigation-error.component';







@NgModule({
  declarations: [
 AppComponent,
    HomeComponent,

    AppCardComponent,
    CartItemsComponent,
    LoginComponent,
    SignupComponent,
    NavigationErrorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule,





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
