import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { BoardsEffects } from './effects';
import { reducer } from './reducers';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('boards', reducer),
    EffectsModule.forFeature([BoardsEffects])
  ]
})
export class BoardsStateModule { }
