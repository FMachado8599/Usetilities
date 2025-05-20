import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full' },
  {
    path: 'dashboard',
    canActivate: [LoginAuthGuard],
    loadChildren: () =>
      import('./featured/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./featured/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: 'dashboard/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
