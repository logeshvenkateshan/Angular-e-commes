import { Component, OnInit } from '@angular/core';
import { Apiservice1Service } from '../apiservice-1.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  alldata: any;
  Discount_price_1: any;
  mapingamount: any;

  count: number = 0;

  cartCount: number = 0;
  errormessages: any;


  constructor(public dataes: Apiservice1Service, public routing: ActivatedRoute, public auth: AngularFireAuth, public router: Router) {

  }
  ngOnInit() {

if (!this.dataes.service) {
      this.dataes.GetData().subscribe(values => {
        this.alldata = values;
        this.dataes.service= this.alldata.products.map((items: any) => ({ ...items, isButtonDisabled: false, discountAmount: items.price - (items.price * items.discountPercentage) / 100 }))
      }, (error) => {                                                     

        this.errormessages = error
        console.log(this.errormessages);
      });

    }
    this.dataes.cartCount$.subscribe(count => {
      this.cartCount = count;
    })
  }

  logout() {

    this.auth.signOut();
    this.router.navigate(["/login"])


  }
}
