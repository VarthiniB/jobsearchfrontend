import { Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { BlogpageComponent } from './blogpage/blogpage.component';


export const HomeRoutes: Routes = [
    { path: 'home/homepage',      component: HomepageComponent },
    { path: 'home/blogpage',      component: BlogpageComponent }
   
];
