import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { BlogRoutingModule } from './blog-routing.module';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    ArticlesComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
