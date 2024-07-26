import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  loading: boolean = true; // Initially set to true

  ngOnInit(): void {
    // Simulate loading delay (e.g., HTTP request or setTimeout)
    setTimeout(() => {
      this.loading = false; // Set loading to false when content is loaded
    }, 1000); // Replace with actual loading logic
  }
}
