import { Component, OnInit } from '@angular/core';
import { RouterEvent, RouterLink } from '@angular/router';
import { AddtocartService } from '../addtocart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: AddtocartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.cart = this.cartService.getCart();
    this.cart.forEach(item => {
      if (item.quantity === undefined) {
        item.quantity = 1;
      }
    });
    this.calculateTotalPrice();
  }

  updateQuantity(newQuantity: number, index: number) {
    if (newQuantity >= 0) {
      this.cart[index].quantity = newQuantity;
      this.calculateTotalPrice(); 
    }
  }

  calculateTotalPrice() {
    this.totalPrice = this.cart.reduce((total, item) => total + (item.cakePrice * item.quantity), 0);
  }
}
