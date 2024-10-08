import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  loader: boolean = true; // Initially set to true

  ngOnInit(): void {
    // Simulate loading delay (e.g., HTTP request or setTimeout)
    setTimeout(() => {
      this.loader = false; // Set loading to false when content is loaded
    }, 2000); // Replace with actual loading logic
  }
}
