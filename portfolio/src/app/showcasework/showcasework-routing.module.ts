import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';

const routes: Routes = [
  {
    path: 'projects-overview',
    component: ProjectsOverviewComponent
  },
  {
    path: '',
    redirectTo: 'projects-overview',
    pathMatch: "full"
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseworkRoutingModule { }
