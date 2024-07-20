import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavserviceService {
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      console.log(this.router.url);
      // when navigation successfuly ends
    });
  }

  // Method to update navbar item with 'active' class
  setActiveNavItem(navItemId: string) {
    // Logic to update the DOM or shared state
  }
}


