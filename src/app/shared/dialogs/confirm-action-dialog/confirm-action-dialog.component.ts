import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-action-dialog',
  templateUrl: './confirm-action-dialog.component.html',
  styleUrls: ['./confirm-action-dialog.component.scss']
})
export class ConfirmActionDialogComponent implements OnInit {
  isRemove: boolean

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmActionDialogComponent>
  ) { }

  handleConfirm(): void {
    const { handleConfirm, closeOnConfirm } = this.data;
    handleConfirm();
    if (closeOnConfirm) {
      this.dialogRef.close();
    }
  }

  handleCancel(): void {
    const { handleCancel } = this.data;
    if (!!handleCancel) {
      handleCancel();
    }
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.isRemove = this.data.confirmBtnText.toLowerCase() === 'delete';
  }
}
