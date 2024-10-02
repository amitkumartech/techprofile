import { Component } from '@angular/core';
import { NavserviceService } from './shared/services/navservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  isDrawerOpen = false;

  constructor(private navService: NavserviceService) {
    this.navService.contactMeModal.subscribe(response=> {
      this.isDrawerOpen = response
    })
  }
   contactMe() {
    this.navService.contactMeModal.next(true)
  }
}
