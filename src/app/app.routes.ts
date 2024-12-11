import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
    canActivate: [AuthGuard], // Protecting the route
  },
  { path: 'login', loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent) }, // Para standalone components
];
