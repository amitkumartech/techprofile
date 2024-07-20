import { Component } from '@angular/core';
import { NavserviceService } from './shared/services/navservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  constructor(private navService: NavserviceService) {}
}
