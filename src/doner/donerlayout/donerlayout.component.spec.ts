import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonerlayoutComponent } from './donerlayout.component';

describe('DonerlayoutComponent', () => {
  let component: DonerlayoutComponent;
  let fixture: ComponentFixture<DonerlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonerlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonerlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
