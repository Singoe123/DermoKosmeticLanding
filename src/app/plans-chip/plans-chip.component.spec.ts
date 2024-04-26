import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansChipComponent } from './plans-chip.component';

describe('PlansChipComponent', () => {
  let component: PlansChipComponent;
  let fixture: ComponentFixture<PlansChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlansChipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlansChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
