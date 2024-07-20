import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { ShowcaseworkRoutingModule } from './showcasework-routing.module';



@NgModule({
  declarations: [
    ProjectsOverviewComponent
  ],
  imports: [
    CommonModule,
    ShowcaseworkRoutingModule
  ]
})
export class ShowcaseworkModule { }
