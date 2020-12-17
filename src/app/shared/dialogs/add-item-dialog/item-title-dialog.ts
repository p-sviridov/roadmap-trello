import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './item-title-dialog.component.html',
  styleUrls: ['./item-title-dialog.component.scss']
})
export class ItemTitleDialogComponent implements OnInit {
  titleControl: FormControl;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ItemTitleDialogComponent>
  ) { }

  handleConfirm(): void {
    const { handleConfirm, closeOnConfirm } = this.data;

    handleConfirm(this.titleControl.value);

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
    this.titleControl = new FormControl('', [Validators.required])
  }

}
