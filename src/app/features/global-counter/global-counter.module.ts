import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { GlobalCounterState } from 'src/app/store/global-counter';

import { GlobalCounterRoutingModule } from './global-counter-routing.module';
import { GlobalCounterPageComponent } from './pages/global-counter-page/global-counter-page.component';

@NgModule({
  declarations: [
    GlobalCounterPageComponent
  ],
  imports: [
    CommonModule,
    GlobalCounterRoutingModule,
    NgxsModule.forFeature([GlobalCounterState]),
  ]
})
export class GlobalCounterModule { }
