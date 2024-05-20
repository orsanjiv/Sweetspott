import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  constructor(private router: Router) {}

  onSubmit(event: Event): void {
    // Prevent default form submission behavior
    event.preventDefault();

    // Perform any form validation here if needed

    // Redirect to the payment page
    this.router.navigateByUrl('/success');
  }
}
