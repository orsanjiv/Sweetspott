import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { BuyComponent } from './components/buy/buy.component';
import { CartComponent } from './components/cart/cart.component';
import { LoggednavComponent } from './components/loggednav/loggednav.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SucessComponent } from './components/sucess/sucess.component';
import { AddressComponent } from './components/address/address.component';
import { TrackComponent } from './components/track/track.component';
import { authGuard } from './auth.guard';


export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'menu', component:MenuComponent , canActivate: [authGuard] },
    {path:'menu/:id', component:BuyComponent},
    {path:'gallery', loadComponent: () => import('./components/gallery/gallery.component').then(mod => mod.GalleryComponent)},
    {path:'contact-us', component:ContactComponent},
    {path:'about-us', component:AboutComponent},
    {path:'cart', component:CartComponent},
    {path:'username/profile', component:LoggednavComponent},
    {path:'userdetail', component:AddressComponent},
    {path:'order/track', component:TrackComponent},
    {path:'payment', loadComponent: () => import('./components/payment/payment.component').then(mod => mod.PaymentComponent)},
    {path:'success', loadComponent: () => import('./components/sucess/sucess.component').then(mod => mod.SucessComponent)},

];
