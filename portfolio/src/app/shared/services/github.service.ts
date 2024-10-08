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



  uploadFile() {
    const apiCreateUrl = 'https://api.github.com/repos/amitkumartech/techprofile/contents/testpath'; // Replace with your GitHub username
    return this.http.put<any>(apiCreateUrl, {
      owner: 'OWNER',
      repo: 'REPO',
      path: 'PATH',
      message: 'my commit message',
      committer: {
        name: 'Monalisa Octocat',
        email: 'octocat@github.com'
      },
      content: 'bXkgbmV3IGZpbGUgY29udGVudHM=',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
  }
}