import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: '',
    redirectTo: 'articles',
    pathMatch: "full"
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
