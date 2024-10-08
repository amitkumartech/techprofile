import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/shared/models/note.model';
import { NoteService } from 'src/app/shared/services/note.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  article!: Note;

  constructor(private noteService: NoteService,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    console.log("in note component!!")
    this.route.params.subscribe(params => {
      const id = params['id']; // or params.id
      console.log(id); // Access the id here
      // Use the id to fetch article details
      this.noteService.getArticleById(id).subscribe(response => {
        this.article = response;
      })
    });
  }
}
