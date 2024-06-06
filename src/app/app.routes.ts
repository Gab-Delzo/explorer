import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'pagina2',
    loadComponent: () => import('./pagina2/pagina2.page').then( m => m.Pagina2Page)
  },
  {
    path: 'explora',
    loadComponent: () => import('./explora/explora.page').then( m => m.ExploraPage)
  },
  {
    path: 'registrate',
    loadComponent: () => import('./registrate/registrate.page').then( m => m.RegistratePage)
  },
  {
    path: 'disponible',
    loadComponent: () => import('./disponible/disponible.page').then( m => m.DisponiblePage)
  },
];
