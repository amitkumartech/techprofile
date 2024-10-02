import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-me-acoffee',
  templateUrl: './buy-me-acoffee.component.html',
  styleUrls: ['./buy-me-acoffee.component.scss']
})
export class BuyMeACoffeeComponent {
  showQrCode = false;  // To toggle the QR code display
  scrollToBottom() {
    // Set a delay of 1 second (1000 milliseconds)
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth', // Optional: smooth scroll
      });
    }, 100); // 1000 ms = 1 second
  }
}
