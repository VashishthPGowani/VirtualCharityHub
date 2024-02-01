import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCharitiesComponent } from './other-charities.component';

describe('OtherCharitiesComponent', () => {
  let component: OtherCharitiesComponent;
  let fixture: ComponentFixture<OtherCharitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCharitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCharitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
