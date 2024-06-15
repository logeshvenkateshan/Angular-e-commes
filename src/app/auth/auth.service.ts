import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;
  errormsg: any;

  constructor(private afauth: AngularFireAuth, private route: Router) {
    this.user$ = afauth.authState;
  }

  login(email: any, pass: any) {
    this.afauth.signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {

        console.log('User logged in:', userCredential.user);
        this.route.navigate(['/home'])
        this.errormsg = null

      })
      .catch((error) => {

        console.error('Login error:', error);
        this.errormsg = "Invalid email and password";
      });
  }

  logout() {
    this.afauth.signOut().then((data) => {
      console.log(data)
    }).catch((data) => {
      console.log(data)
    })

  }

  submitForm(email: any) {
    this.afauth.sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent successfully
        console.log('Password reset email sent successfully');
      })
      .catch((error) => {
        // Handle error (e.g., email does not exist)
        console.error('Error sending password reset email:', error.message);
      });
  }


}
