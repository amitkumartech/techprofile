import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { ShowcaseworkRoutingModule } from './showcasework-routing.module';
import { HighlightPipe } from '../shared/pipes/highlight.pipe';



@NgModule({
  declarations: [
    ProjectsOverviewComponent,
    HighlightPipe
  ],
  imports: [
    CommonModule,
    ShowcaseworkRoutingModule
  ]
})
export class ShowcaseworkModule { }
