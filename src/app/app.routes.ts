import type { Routes } from '@angular/router';

import { HomePageComponent } from '@bookly/home/page';
import { LayoutComponent } from '@bookly/ui/layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
    ],
  },
];
