import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDiarioComponent } from './plan-diario.component';

describe('PlanDiarioComponent', () => {
  let component: PlanDiarioComponent;
  let fixture: ComponentFixture<PlanDiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDiarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
