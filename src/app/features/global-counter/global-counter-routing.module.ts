import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GlobalCounterPageComponent } from './pages/global-counter-page/global-counter-page.component';

const routes: Routes = [
  { path: '', component: GlobalCounterPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalCounterRoutingModule { }
