import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Apiservice1Service } from '../apiservice-1.service';


@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent {
  @Input() homeValueDataGet: any;
  addToCart: any;
  constructor(public addToCarts: Apiservice1Service) { }

  ngOnInit() {
    this.addToCarts.cartItems$.subscribe(items => {
      this.addToCart = items;

    },)
}

  AddtoCartButton(passData: any) {
    
     this.addToCarts.addToCart(passData)
    this.addToCarts.incrementCartCount();

  }

  RemoveBtn(removedata: any) {

    removedata.isButtonDisabled = false;
    this.addToCarts.decrementCartCount();


    const index = this.addToCart.indexOf(removedata);
    if (index !== -1) {
      this.addToCart.splice(index, 1);
    }

  }
}




