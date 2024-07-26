import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl = 'https://api.github.com/users/amitkumartech'; // Replace with your GitHub username
  private apiUrlRepos = 'https://api.github.com/users/amitkumartech/repos';
  constructor(private http: HttpClient) { }

  getGithubProfile(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getRepositories(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlRepos);
  }
}