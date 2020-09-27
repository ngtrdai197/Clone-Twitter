import { Routes } from '@angular/router'

import { PageNotFoundComponent } from '@shared/page-not-found/page-not-found.component'

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@/home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
]
