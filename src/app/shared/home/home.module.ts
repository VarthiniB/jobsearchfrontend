import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutes } from './home.routing';

import {LocationStrategy, Location, PathLocationStrategy} from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogpageComponent } from './blogpage/blogpage.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    FormsModule   
  ],
  declarations: [
    
  HomepageComponent,
    
  BlogpageComponent,
    
],
  providers : [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})

export class HomeModule {}
