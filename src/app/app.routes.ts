import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { aboutRoutes } from './pages/about/about.routes';
import { ROUTE_TOKENS } from './route-token';

export const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTE_TOKENS.HOME,
    pathMatch: 'full',
  },
  {
    path: ROUTE_TOKENS.HOME,
    component: HomeComponent,
  },
  aboutRoutes,
  {
    path: '**',
    component: NotFoundComponent,
  },
];
