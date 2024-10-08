import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { NoteComponent } from './note/note.component';

const routes: Routes = [
  {
    path: 'blog-home',
    component: BlogHomeComponent,
    children: [
      {
        path: 'all-notes',
        component: AllNotesComponent
      },
      {
        path: 'add-note',
        component: AddNoteComponent
      },
      {
        path: 'note/:id',
        component: NoteComponent
      },
      {
        path: '',
        redirectTo: 'notes',
        pathMatch: "full"
      }
    ]
  },
  {
    path: '',
    redirectTo: 'blog-home',
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
