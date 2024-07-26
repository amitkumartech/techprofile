import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(private http: HttpClient) {

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
}
