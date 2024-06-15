import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  newEmail: string = "";
  newPassword: string = "";

  constructor(public auth: AngularFireAuth, public router: Router) {

  }


  signUp() {

    this.auth.createUserWithEmailAndPassword(this.newEmail, this.newPassword)
      .then((data: any) => {
        console.log(data)
        this.router.navigate(['/login'])



      }).catch((data: any) => {
        console.log(data);
      })
  }

}


