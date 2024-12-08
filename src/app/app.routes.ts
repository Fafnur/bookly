import type { Routes } from '@angular/router';

import { LayoutComponent } from '@bookly/ui/layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [],
  },
];
