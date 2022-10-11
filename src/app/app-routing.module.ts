import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'local-counter',
    loadChildren: () => import('./features/local-counter/local-counter.module').then(m => m.LocalCounterModule)
  },
  {
    path: 'global-counter',
    loadChildren: () => import('./features/global-counter/global-counter.module').then(m => m.GlobalCounterModule)
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
