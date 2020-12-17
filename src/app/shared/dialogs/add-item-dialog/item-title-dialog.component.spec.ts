import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTitleDialogComponent } from './item-title-dialog';

describe('AddItemDialogComponent', () => {
  let component: ItemTitleDialogComponent;
  let fixture: ComponentFixture<ItemTitleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTitleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTitleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
