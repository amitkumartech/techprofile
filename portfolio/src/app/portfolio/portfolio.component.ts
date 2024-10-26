import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { skills } from 'src/app/shared/constants';
import { GithubService } from 'src/app/shared/services/github.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  loader = false;
  profile: any;
  topLanguages: { name: string, percentage: number }[] = [];
  languageIcons: { [key: string]: string } = {
    'JavaScript': 'fab fa-js-square',
    'TypeScript': 'fab fa-js-square',
    'HTML': 'fab fa-html5',
    'CSS': 'fab fa-css3-alt',
    'Python': 'fab fa-python',
    // Add more mappings as needed
  };
  languageColors: { [key: string]: string } = {
    'JavaScript': '#f0db4f', // Yellow
    'TypeScript': '#007acc', // Blue
    'HTML': '#e34c26',       // Orange
    'CSS': '#2965f1',        // Blue
    'Python': '#3572A5',     // Blue
    // Add more color mappings as needed
  };
  iconSizeClass = 'fa-2x'; // FontAwesome size class (3x for example)
  // skills = skills.split(', ');
  skills = skills;

  // skills: string[] = ['Angular', 'React', 'Svelte', 'JavaScript'];
  additionalSkills: string[] = ['TypeScript', 'HTML', 'CSS', 'RxJS', 'Node.js'];


  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.GetGithubData();
  }

  getIconClass(language: string): string {
    return this.languageIcons[language] || 'fab fa-code'; // Default icon if not mapped
  }

  getIconColor(language: string): string {
    return this.languageColors[language] || '#333'; // Default color if not mapped
  }

  GetGithubData() {
    this.loader = true;
    // Use RxJS forkJoin to combine the API calls
    forkJoin([
      this.githubService.getGithubProfile(),
      this.githubService.getRepositories()
    ]).subscribe(
      ([response1, response2]) => {
        this.profile = response1;
        this.analyseRepoResponse(response2);
        this.loader = false; // Hide loader when both responses are successful
      },
      error => {
        console.error('Error:', error);
        this.loader = false; // Hide loader even on error
      }
    );
  }

  analyseRepoResponse(repos: any) {
    // Calculate top languages
    const languages: { [key: string]: number } = {};
    // Calculate total lines of code across all languages
    let totalLinesOfCode = 0;
    repos.forEach((repo: any) => {
      if (repo.language && repo.size) {
        if (languages[repo.language]) {
          languages[repo.language] += repo.size;
        } else {
          languages[repo.language] = repo.size;
        }
        totalLinesOfCode += repo.size;
      }
    });


    // Calculate percentages
    this.topLanguages = Object.keys(languages).map(key => ({
      name: key,
      percentage: (languages[key] / totalLinesOfCode) * 100
    }));
    // Sort languages by percentage (descending)
    this.topLanguages.sort((a, b) => b.percentage - a.percentage);
    // Convert languages object to array for sorting
    // this.topLanguages = Object.keys(languages).map(key => ({ name: key, value: languages[key] }));
    // Sort languages by value (descending)
    this.topLanguages.sort((a, b) => b.percentage - a.percentage);
  }
}
