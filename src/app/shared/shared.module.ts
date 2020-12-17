import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { ConfirmActionDialogComponent } from './dialogs/confirm-action-dialog/confirm-action-dialog.component';
import { ItemTitleDialogComponent } from './dialogs/add-item-dialog/item-title-dialog';

@NgModule({
  declarations: [
    HeaderComponent,
    ConfirmActionDialogComponent,
    ItemTitleDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    MaterialModule,
    HeaderComponent,
    ConfirmActionDialogComponent,
    ItemTitleDialogComponent
  ],
  entryComponents: [
    ConfirmActionDialogComponent,
    ItemTitleDialogComponent
  ]
})
export class SharedModule { }
