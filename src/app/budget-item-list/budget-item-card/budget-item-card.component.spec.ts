import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetItemCardComponent } from './budget-item-card.component';

describe('BudgetItemCardComponent', () => {
  let component: BudgetItemCardComponent;
  let fixture: ComponentFixture<BudgetItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
