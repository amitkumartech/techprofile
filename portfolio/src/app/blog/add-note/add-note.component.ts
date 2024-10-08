import { Component, EventEmitter, OnDestroy, OnInit, Output, SecurityContext } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Editor, Toolbar } from 'ngx-editor';
import { Note } from 'src/app/shared/models/note.model';
import { GithubService } from 'src/app/shared/services/github.service';
import { NoteService } from 'src/app/shared/services/note.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit, OnDestroy {
  @Output() articleCreated = new EventEmitter<Note>();
  articleForm: FormGroup;
  editor!: Editor;
  html = '';
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router,
    private githubService: GithubService
  ) {

    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  onSubmit() {
    console.log(this.html);
    console.log(this.editor);
    if (this.articleForm.valid) {
      const article: Note = this.articleForm.value;
      const d = this.sanitizeHtmlContent(this.articleForm.get('content')?.value);
      article.content = d;
      article.publishedAt = new Date(); // Add publishedAt here
      this.noteService.addArticle(article).subscribe(response => {
        console.log("articled published! Below is content of the article: ");
        console.log(response);
        this.articleForm.reset();
        this.saveArticleToBlob(article);
        this.navigateToArticleView(response);
      })
    }
  }
  navigateToArticleView(noteId: string) {
    // this.router.navigate(['note', noteId], { relativeTo: this.router.routerState.root.children[0]}); // Use array for path segments
    this.router.navigate(['blog-home/note', noteId], { relativeTo: this.router.routerState.root.children[0] }); // Use array for path segments

  }

  public sanitizeHtmlContent(htmlstring: string): SafeHtml {
    return this.sanitizer.sanitize(SecurityContext.HTML, htmlstring) || "";
  }


  saveArticleToBlob(article: Note) {
    const blob = new Blob([JSON.stringify(article)], { type: 'application/json' });
    this.githubService.uploadFile().subscribe(response => {
      console.log(response);
    })
  }
}
