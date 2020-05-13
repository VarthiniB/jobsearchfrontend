import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './shared/home/home.component';

export const AppRoutes: Routes = [
   {
    path: 'app',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'homepage'
  },
  {
    path: 'home',
    component: HomeComponent,
      children: [
      {
        path: '',
        loadChildren: './shared/home/home.module#HomeModule'
      }]
  },
  {
    path: '',
    redirectTo: 'home/home/homepage',
    pathMatch: 'full'
  }
]
