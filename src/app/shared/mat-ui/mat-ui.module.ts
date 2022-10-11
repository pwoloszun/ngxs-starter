import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

const MAT_UI = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // apps
    ...MAT_UI,
  ],
  exports: [
    ...MAT_UI,
  ],
})
export class MatUiModule { }
