import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TechprofileRoutingModule } from './techprofile-routing.module';



@NgModule({
  declarations: [
    PortfolioComponent,
  ],
  imports: [
    CommonModule,
    TechprofileRoutingModule
  ]
})
export class TechprofileModule { }
