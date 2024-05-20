import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  private cart: any[] = [];

  constructor() { }

  addToCart(card: any): void {
    this.cart.push(card);
  }

  getCart(): any[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
  }


}
