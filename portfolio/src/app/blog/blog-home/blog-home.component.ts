import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent {

  isSideNavOpen = true;
  constructor(private router: Router,
    private route: ActivatedRoute) {

  }

  toggleDrawer() {
    const drawer = document.getElementById('drawer');
    drawer?.classList.toggle('open');
    this.isSideNavOpen = !this.isSideNavOpen
  }

  // addNote() {
  //   this.router.navigate(['add-note'], {relativeTo: this.route}); // Use array for path segments
  //   // this.router.navigate(['add-note'], { relativeTo: this.router.routerState.root.children[0] }); // Navigate relative to the parent route
  // }

}
