import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private articles: Note[] = [];
  private nextId = "";
  private articlesSubject = new BehaviorSubject<Note[]>([]);
  articles$: Observable<Note[]> = this.articlesSubject.asObservable();

  constructor() {
    this.getArticles().subscribe(response => {
      this.articles = response;
    }); // Load articles on service initialization
  }

  getArticles(): Observable<Note[]> {
    // Check for articles in localStorage
    const articlesString = localStorage.getItem('articles');
    let articles: Note[] = [];

    if (articlesString) {
      articles = JSON.parse(articlesString) as Note[];
      this.articles = articles;
    }

    // Update the BehaviorSubject with the fetched articles
    this.articlesSubject.next(articles);

    return this.articles$;
  }

  addArticle(article: Note): Observable<string> {
    article.id = this.generateGuid();

    // Update the local articles list and BehaviorSubject
    this.articles.push(article);
    this.articlesSubject.next(this.articles);

    // Save the updated articles list to localStorage
    const articlesString = JSON.stringify(this.articles);
    localStorage.setItem('articles', articlesString);

    return of(article.id);
  }

  getArticleById(id: string): Observable<Note> {
    const d = {
      id: "",
      title: "string",
      content: "string",
      author: "string",
      publishedAt: new Date()
    }
    // Replace this with your actual data fetching logic
    const article = this.articles.find(article => article.id.toString() === id.toString()) || d;
    return of(article); // Return null if article not found
  }

  generateGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
