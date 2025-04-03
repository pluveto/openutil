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
    path: '/u/math-delim-converter',
    component: lazy(() => import('./pages/utils/math-delim-converter')),
  },
  {
    path: '/u/zhihu-converter',
    component: lazy(() => import('./pages/utils/zhihu-converter')),
  },
  {
    path: '/u/md-title-simplify',
    component: lazy(() => import('./pages/utils/md-title-simplify')),
  },
  {
    path: '/u/md-title-level-adjuster',
    component: lazy(() => import('./pages/utils/md-title-level-adjuster')),
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
];
