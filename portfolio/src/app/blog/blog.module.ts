import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { BlogRoutingModule } from './blog-routing.module';
import { LoaderComponent } from './loader/loader.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { NoteComponent } from './note/note.component';



@NgModule({
  declarations: [
    ArticlesComponent,
    LoaderComponent,
    AddNoteComponent,
    BlogHomeComponent,
    AllNotesComponent,
    NoteComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    BlogRoutingModule   
  ]
})
export class BlogModule { }
