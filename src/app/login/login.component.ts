import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  newEmail: string = "";
  newPassword: string = "";
  newusername: string = "";

  email: string = "";
  password: string = "";

  showPassword: boolean = false;




  constructor(public auth: AngularFireAuth, public route: Router, public authservice: AuthService) {
  }
  login() {

    this.authservice.login(this.email, this.password);
  }

  logout() {
    this.authservice.logout();
  }

  signUp() {

    this.auth.createUserWithEmailAndPassword(this.newEmail, this.newPassword).then((data) => {
      console.log(data)

    }).catch((data) => {
      console.log(data);
    })
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  forGetPwd() {
    this.authservice.submitForm(this.email);

  }

}
