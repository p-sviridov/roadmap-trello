import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ConfirmActionDialogComponent } from './confirm-action-dialog.component';

describe('ConfirmActionDialogComponent', () => {
  let component: ConfirmActionDialogComponent;
  let fixture: ComponentFixture<ConfirmActionDialogComponent>;

  const confirmSpy: jasmine.Spy = jasmine.createSpy('handleConfirm');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmActionDialogComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmActionDialogComponent);
    component = fixture.componentInstance;
    component.data = {
      confirmBtnText: ''
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#handleConfirm', () => {
    component.data = {
        handleConfirm: confirmSpy,
        closeOnConfirm: false
    };
    fixture.detectChanges();
    component.handleConfirm();

    expect(confirmSpy).toHaveBeenCalled();
});
});
