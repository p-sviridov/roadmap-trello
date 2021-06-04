import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BoardsStateModule } from './features';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BoardsStateModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }
