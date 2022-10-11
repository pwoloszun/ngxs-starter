import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalCounterRoutingModule } from './local-counter-routing.module';
import { LocalCounterPageComponent } from './pages/local-counter-page/local-counter-page.component';


@NgModule({
  declarations: [
    LocalCounterPageComponent
  ],
  imports: [
    CommonModule,
    LocalCounterRoutingModule
  ]
})
export class LocalCounterModule { }
