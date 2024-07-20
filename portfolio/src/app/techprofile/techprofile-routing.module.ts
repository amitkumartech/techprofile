import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: "full"
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechprofileRoutingModule { }
