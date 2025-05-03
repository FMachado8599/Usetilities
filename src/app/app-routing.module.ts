import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './featured/auth/login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './featured/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./featured/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      // Agregá más rutas hijas acá si necesitás
    ]
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
