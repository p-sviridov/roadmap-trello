import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ConfirmActionDialogComponent } from './../../shared/dialogs/confirm-action-dialog/confirm-action-dialog.component';
import { ItemTitleDialogComponent } from '../../shared/dialogs/add-item-dialog/item-title-dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogComponents: object;
  private defaultDialogData: object;

  constructor(
    public dialog: MatDialog
  ) {
    this.dialogComponents = {
      ConfirmActionDialogComponent,
      ItemTitleDialogComponent
    };

    this.defaultDialogData = {
      confirmBtnText: 'Ok',
      cancelBtnText: 'Cancel',
      closeOnConfirm: true
    };
  }

  open(dialogComponentName: string, data: any): MatDialogRef<any> {
    const dialogComponent = this.dialogComponents[dialogComponentName];

    return this.dialog.open(dialogComponent, {
      data: {
        ...this.defaultDialogData,
        ...data
      },
      width: data['width'] || '300px',
      height: data['height'] || 'auto',
      maxWidth: data['maxWidth'] || '300px',
      panelClass: data['panelClass'] || '',
      disableClose: data['disableClose'] || false,
      restoreFocus: data['restoreFocus'] || false
    });
  }
}
