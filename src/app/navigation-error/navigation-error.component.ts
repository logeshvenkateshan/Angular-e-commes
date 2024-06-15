import { Component } from '@angular/core';
import { NavigationError, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-error',
  templateUrl: './navigation-error.component.html',
  styleUrls: ['./navigation-error.component.css']
})
export class NavigationErrorComponent {
  constructor(public router: Router) {
    this.router.events.subscribe(event => {

      if (event instanceof NavigationError) {
        console.error('Navigation error:', event.error);
      }

    });



  }

}
