import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemModalComponent } from './edit-item-modal.component';

describe('EditItemModalComponent', () => {
  let component: EditItemModalComponent;
  let fixture: ComponentFixture<EditItemModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
