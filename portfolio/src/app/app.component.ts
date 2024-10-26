import { Component, HostListener } from '@angular/core';
import { NavserviceService } from './shared/services/navservice.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  isContactDrawerOpen = false;
  isSideNavOpen = false;

  constructor(private navService: NavserviceService, private http: HttpClient, private router: Router,
    private route: ActivatedRoute) {
    this.navService.contactMeModal.subscribe(response => {
      this.isContactDrawerOpen = response
    })
  }
  contactMe() {
    this.navService.contactMeModal.next(true)
  }

  isOpen = false;
  toggleMobileMenu(e: any) {
    this.isOpen = !this.isOpen;
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    const targetElement = event.target as HTMLElement;
    if (targetElement && targetElement.classList && targetElement.classList.contains('nav-item')) {
      this.isOpen = !this.isOpen;
    }
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


  toggleDrawer() {
    const drawer = document.getElementById('drawer');
    drawer?.classList.toggle('open');
    this.isSideNavOpen = !this.isSideNavOpen
  }

  scrollToSection(sec: string) {
    console.log("scroll")
    // if (sec && sec.length > 0 && sec != null)
      document.getElementById(sec)?.scrollIntoView({ behavior: "smooth" });
  }

}
