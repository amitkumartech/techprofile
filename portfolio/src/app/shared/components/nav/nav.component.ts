import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavserviceService } from '../../services/navservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  toggleDrawer = false;
  constructor(private http: HttpClient, private navService: NavserviceService) {

  }
  // method to provide the downloading resume facility for the user 
  downloadResume() {
    console.log("Download resume!")
    const resumeUrl = '/techprofile/assets/amit-kumar-resume.pdf'
    this.http.get(resumeUrl, { responseType: 'blob' }).subscribe(blob => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'amit-kumar-resume.pdf';
      link.click();
      window.URL.revokeObjectURL(link.href);
    });
  }

  toggleTopNav() {
    var x = document.getElementById("myTopnav");
    if (x) {
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }

  }
  // contactMe() {
  //   this.navService.contactMeModal.next(true)
  // }
  closeDrawer() {
    this.toggleDrawer = !this.toggleDrawer;
    this.navService.contactMeModal.next(this.toggleDrawer);
  }

  isOpen = false;
  toggleMobileMenu(e: any) {
    this.isOpen = !this.isOpen;
  }

}
