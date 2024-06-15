import { Component, NgModule } from '@angular/core';
import { NavigationError, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { NavigationErrorComponent } from './navigation-error/navigation-error.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
 { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'cartItem', component: CartItemsComponent },
  { path: 'login', component: LoginComponent, },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: NavigationErrorComponent }

];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
