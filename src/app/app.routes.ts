import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blog' },
  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog-page/blog-page').then((m) => m.BlogPage),
  },
  {
    path: 'blog/:slug',
    loadComponent: () =>
      import('./features/blog/article-page/article-page').then((m) => m.ArticlePage),
  },
  {
    path: 'pokedex',
    loadComponent: () =>
      import('./features/pokedex/pokedex-page/pokedex-page').then((m) => m.PokedexPage),
  },
  {
    path: 'mission-control',
    loadComponent: () =>
      import('./features/mission/mission-page/mission-page').then((m) => m.MissionPage),
  },
  { path: '**', redirectTo: 'blog' },
];
