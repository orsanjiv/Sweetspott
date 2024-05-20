import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AddtocartService } from '../addtocart.service';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent implements OnInit {
  cake: any;
  cakeMenu = [
    {
      id:1,
      cakeName:"Torte Cake",
      cakeImage:"https://images.unsplash.com/photo-1602351447937-745cb720612f?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cakePrice:400,
      cakeDescription:"Indulge in the rich, decadent layers of our Torte Cake, where each bite unveils a symphony of flavors. Delicately balanced between moist sponge and luscious creams, this cake is a true masterpiece. Adorned with elegant ganache and fresh berries, it's perfect for any celebration. Experience the exquisite craftsmanship and taste that makes this Torte Cake unforgettable."
    },
    {
      id:2,
      cakeName:"Candy Cake",
      cakeImage:"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cakePrice:300,
      cakeDescription:"Dive into the colorful delight of our Candy Cake, a sweet treat that's sure to bring out your inner child. Each layer is infused with vibrant flavors and generously topped with an assortment of your favorite candies. From gummy bears to chocolate pieces, every slice offers a playful surprise. Perfect for birthdays or any festive occasion, this cake is a sugary celebration on a plate."
    },
    {
      id:3,
      cakeName:"Barries Cake",
      cakeImage:"https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cakePrice:300,
      cakeDescription:"Savor the freshness of our Berries Cake, bursting with the vibrant taste of seasonal berries. Each layer is filled with a delightful blend of strawberries, blueberries, and raspberries, complemented by a light, fluffy cream. Topped with a colorful berry medley, this cake is as beautiful as it is delicious. Ideal for summer gatherings or any occasion that calls for a touch of natural sweetness."
    },
    {
      id:4,
      cakeName:"Frosting Cake",
      cakeImage:"https://images.unsplash.com/photo-1488477304112-4944851de03d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cakePrice:700,
      cakeDescription:"Delight in the smooth, velvety goodness of our Frosting Cake, where each bite is a sweet, creamy dream. Layers of moist cake are generously enveloped in rich, luscious frosting that melts in your mouth. Perfectly crafted for frosting lovers, this cake is adorned with intricate swirls and decorative touches. Ideal for birthdays or celebrations, it's a heavenly treat for any special occasion."
    },
    {
      id:5,
      cakeName:"Birthday Cake",
      cakeImage:"https://images.unsplash.com/photo-1562777717-dc6984f65a63?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cakePrice:400,
      cakeDescription:"Celebrate in style with our classic Birthday Cake, the perfect centerpiece for any birthday bash. Layers of moist, fluffy cake are complemented by a creamy, delectable frosting that's sure to delight. Sprinkled with festive decorations and topped with a personalized message, this cake is a true showstopper. Make every birthday unforgettable with a slice of this joyful creation."
    },
    {
      id:6,
      cakeName:"Creamy Cake",
      cakeImage:"https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cakePrice:500,
      cakeDescription:"Indulge in the luxurious taste of our Creamy Cake, where every layer is a smooth, velvety delight. Rich and luscious cream fills each bite, blending perfectly with the soft, tender cake layers. Adorned with elegant swirls and a touch of sweetness, this cake is a true celebration of creamy goodness. Perfect for any occasion, it promises a melt-in-your-mouth experience that's simply irresistible."
    },
    {
      id:7,
      cakeName:"Dessert Chef Cake",
      cakeImage:"https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cakePrice:900,
      cakeDescription:"Experience the artistry of our Dessert Chef Cake, a culinary masterpiece crafted by our expert pastry chefs. This exquisite cake features layers of premium ingredients, each harmoniously blended to create a symphony of flavors. Topped with elegant decorations and intricate details, it's a true testament to gourmet excellence. Perfect for sophisticated palates and special occasions, this cake is the ultimate dessert indulgence."
    },
    {
      id:8,
      cakeName:"Cheese Cake",
      cakeImage:"https://plus.unsplash.com/premium_photo-1670426501325-7ef87ca5ad2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cakePrice:1000,
      cakeDescription:"Indulge in the creamy, velvety delight of our Cheese Cake, a timeless favorite that never disappoints. Each slice offers a perfect balance of rich, smooth cream cheese atop a buttery, crumbly crust. Finished with a light, tangy topping and a hint of vanilla, it's a dessert lover's dream. Ideal for any occasion, this cake promises a luxurious taste experience with every bite."
    },
  ]
  constructor(
    private route: ActivatedRoute,
    private cartService: AddtocartService
  ) {}

  ngOnInit(): void {
    const cardId = Number(this.route.snapshot.paramMap.get('id'));
    this.cake = this.cakeMenu.find(c => c.id === cardId);
  }
  addToCart(cake: any): void {
    this.cartService.addToCart(cake);
    console.log(cake)
    alert(`${cake.cakeName} has been added to your cart!`);
  }

}
