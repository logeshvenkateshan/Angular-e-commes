import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple_Anugular_Project';

  constructor(private router: Router) { }

  // gotoaboutpage() {

  //   this.router.navigate(['about'])

  // }


}
