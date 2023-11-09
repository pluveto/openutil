import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
import AboutData from './pages/about.data';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/about')),
    data: AboutData,
  },
  {
    path: '/u/trans-trainer',
    component: lazy(() => import('./pages/utils/trans-trainer/index')),
  },
  {
    path: '/u/pass-gen',
    component: lazy(() => import('./pages/utils/pass-gen/index')),
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
];
