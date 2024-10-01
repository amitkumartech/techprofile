import { Component, OnInit } from '@angular/core';
import { skills } from 'src/app/shared/constants';

@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.scss']
})
export class ProjectsOverviewComponent implements OnInit {
  projects = [
    {
      title: 'Insurance Client-Facing Application for Fund Switching',
      role: 'UI Developer',
      technologies: 'Angular, RxJS, TypeScript, Angular Material',
      description: 'Developed and maintained a sophisticated Angular web application for an insurance client, facilitating fund switching and policy detail viewing for users. Implemented complex state management and reactive programming techniques using RxJS to enhance application performance and user experience. Single-handedly completed all tasks on the UI side, including development, unit testing, deployment, and maintaining code quality. Utilized TypeScript to write scalable and maintainable code, improving overall code quality and reducing bugs. Created responsive and visually appealing user interfaces with Angular Material, ensuring compatibility across various devices and browsers. Enhanced application interactivity and performance by leveraging modern JavaScript frameworks and libraries such as Angular. Followed Agile methodologies and participated in regular sprints, stand-ups, and code reviews, contributing to continuous improvement.',
      contributions: [
        'Developed UI components for fund switching functionality.',
        'Implemented responsive design using Angular Material.',
        'Optimized performance using RxJS for state management.',
        'Ensured cross-browser compatibility and accessibility.',
        'Managed end-to-end UI development and deployment.'
      ],
      isOpen: false
    },
    {
      title: 'Performance Optimization of Svelte.js Web Application',
      role: 'Frontend Developer',
      technologies: 'Svelte.js, JavaScript, CSS',
      description: 'Successfully improved the performance of the web application, resulting in faster load times, enhanced user experience, and better resource utilization. The optimizations led to a more efficient and responsive application, meeting the client’s performance goals and user expectations.',
      contributions: [
        'Optimized code for faster load times.',
        'Implemented efficient state management.',
        'Enhanced application responsiveness and performance.',
        'Utilized modern JavaScript techniques for optimization.',
        'Conducted performance testing and improvements.'
      ],
      isOpen: false
    },
    {
      title: 'High-Quality User-Friendly Applications',
      role: 'Full Stack Developer',
      technologies: 'React, Node.js, Express, MongoDB',
      description: 'Successfully delivered several high-quality, user-friendly applications that met or exceeded client expectations. The focus on responsive design and code quality resulted in applications that performed well across devices and were easy to maintain and extend.',
      contributions: [
        'Designed and developed responsive applications.',
        'Ensured high code quality and maintainability.',
        'Implemented scalable solutions using modern frameworks.',
        'Collaborated with clients to meet their requirements.',
        'Delivered projects on time with high client satisfaction.'
      ],
      isOpen: false
    }
  ];
  searchTerms: string[] = skills.split(', '); // Array of terms
  ngOnInit(): void {
    // Ensure the first project is open by default
    if (this.projects.length > 0) {
      this.projects[0].isOpen = true;
    }
  }
  toggle(project: any) {
    this.projects.forEach(p => {
      if (p !== project) {
        p.isOpen = false;
      }
    });
    project.isOpen = !project.isOpen;
  }

}
