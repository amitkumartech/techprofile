import { Component, OnInit } from '@angular/core';
import { NavserviceService } from '../shared/services/navservice.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  // isModalOpen = false;
  isDrawerOpen = true;

  constructor(private navService: NavserviceService) {
    this.navService.contactMeModal.subscribe((response: Boolean) => {
      if (response) {
        this.isDrawerOpen = true;
      }
      else {
        this.isDrawerOpen = false;
      }
    })
  }

  closeDrawer() {
    this.navService.contactMeModal.next(false);
  }
  //   this.navService.contactMeModal.subscribe((response: Boolean) => {
  //     if (response) {
  //       this.openModal();
  //     }
  //     else {
  //       this.closeModal();
  //     }
  //   })
  // }


  // openModal() {
  //   this.isModalOpen = true;
  // }

  // closeModal() {
  //   this.isModalOpen = false;
  // }

}
