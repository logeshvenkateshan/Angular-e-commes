import { Component } from '@angular/core';
import { Apiservice1Service } from '../apiservice-1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent {
  cartItems!: any[];




  constructor(public cartService: Apiservice1Service , private router:Router) {

  }
  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
  })

     
  }
  Removing(products: any) {
const index = this.cartItems.indexOf(products);
console.log(index);
if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartService.decrementCartCount();
      products.isButtonDisabled = false
    
    }
    if (this.cartItems.length === 0) {
      this.router.navigate(['/home']);
    }
    
    } 
 
}
