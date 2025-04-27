import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './featured/auth/login/login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./featured/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'auth',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
