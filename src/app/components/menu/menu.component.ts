import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  cakeMenu = [
    {
      id:1,
      cakeName:"Torte Cake",
      cakeImage:"https://images.unsplash.com/photo-1602351447937-745cb720612f?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cakePrice:"₹400.00",
      cakeDescription:"cake description"
    },
    {
      id:2,
      cakeName:"Candy Cake",
      cakeImage:"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cakePrice:"₹300.00",
      cakeDescription:"cake description"
    },
    {
      id:3,
      cakeName:"Barries Cake",
      cakeImage:"https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cakePrice:"₹300.00",
      cakeDescription:"cake description"
    },
    {
      id:4,
      cakeName:"Frosting Cake",
      cakeImage:"https://images.unsplash.com/photo-1488477304112-4944851de03d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cakePrice:"₹300.00",
      cakeDescription:"cake description"
    },
    {
      id:5,
      cakeName:"Birthday Cake",
      cakeImage:"https://images.unsplash.com/photo-1562777717-dc6984f65a63?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cakePrice:"₹300.00",
      cakeDescription:"cake description"
    },
    {
      id:6,
      cakeName:"Creamy Cake",
      cakeImage:"https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cakePrice:"₹300.00",
      cakeDescription:"cake description"
    },
    {
      id:7,
      cakeName:"Dessert Chef Cake",
      cakeImage:"https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cakePrice:"₹300.00",
      cakeDescription:"cake description"
    },
    {
      id:8,
      cakeName:"Cheese Cake",
      cakeImage:"https://plus.unsplash.com/premium_photo-1670426501325-7ef87ca5ad2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cakePrice:"₹300.00",
      cakeDescription:"cake description"
    },
  ]

  constructor(private router:Router){}
  ngOnInit(): void {
      
  }
  gotoCardDetail(id:number):void{
    this.router.navigate(['/menu',id])
    console.log("clicked from menu div")
  }
}
