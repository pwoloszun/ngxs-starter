import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocalCounterPageComponent } from './pages/local-counter-page/local-counter-page.component';

const routes: Routes = [
  { path: '', component: LocalCounterPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalCounterRoutingModule { }
