import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatListModule
  ]
})
export class MaterialModule { }
