import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BuyComponent } from './components/buy/buy.component';
import { CartComponent } from './components/cart/cart.component';
import { LoggednavComponent } from './components/loggednav/loggednav.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SucessComponent } from './components/sucess/sucess.component';
import { FormsModule } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../firebaseConfig';
import { TrackComponent } from './components/track/track.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,SignupComponent,NavbarComponent,HomeComponent,MenuComponent,GalleryComponent,AboutComponent,ContactComponent,BuyComponent,CartComponent,LoggednavComponent,PaymentComponent,SucessComponent,FormsModule,TrackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cake-shop';
  constructor(){
    initializeApp(firebaseConfig);
  }
}
