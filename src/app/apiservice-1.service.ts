import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class Apiservice1Service {

  service: any;

  constructor(public http: HttpClient) { }

  GetData() {

    return this.http.get('https://dummyjson.com/products').pipe(

      catchError(this.handleError)
    );

  }

  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(item: any) {
    item.isButtonDisabled = true
    const currentCartItems = this.cartItemsSubject.value;

    const updatedCartItems = [...currentCartItems, item];
    this.cartItemsSubject.next(updatedCartItems);
  }



  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  incrementCartCount() {
    this.cartCountSubject.next(this.cartCountSubject.value + 1);
  }
  decrementCartCount() {
    this.cartCountSubject.next(this.cartCountSubject.value - 1);
  }


  private handleError(error: HttpErrorResponse) {
    let errormessage = "";

    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
      errormessage = `Backend returned code ${error.status}, body was: `, error.error

    }

    errormessage += 'Something bad happened; please try again later.'
    // Return an observable with a user-facing error message.
    return throwError(() => new Error());
  }






}
