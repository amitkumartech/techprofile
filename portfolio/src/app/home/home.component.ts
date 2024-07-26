import { Component } from '@angular/core';
import { urls } from '../shared/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Amit Kumar';
  linkedin = urls.linkedin;
  github = urls.github;
}
