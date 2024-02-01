import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonerCharitiesComponent } from './doner-charities.component';

describe('DonerCharitiesComponent', () => {
  let component: DonerCharitiesComponent;
  let fixture: ComponentFixture<DonerCharitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonerCharitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonerCharitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
