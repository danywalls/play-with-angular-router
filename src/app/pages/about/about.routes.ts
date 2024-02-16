import { Route } from '@angular/router';
import { ROUTE_TOKENS } from '../../route-token';
import { AboutComponent } from './about.component';
import { TeamComponent } from './team/team.component';
import { CompanyComponent } from './company/company.component';

export const aboutRoutes: Route = {
  path: ROUTE_TOKENS.ABOUT,
  loadComponent: () =>
    import('./about.component').then((a) => a.AboutComponent),
  children: [
    {
      path: ROUTE_TOKENS.TEAM,
      loadComponent: () =>
        import('./team/team.component').then((p) => p.TeamComponent),
    },
    {
      path: ROUTE_TOKENS.COMPANY,
      component: CompanyComponent,
    },
  ],
};
