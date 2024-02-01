import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonerSettingsComponent } from './doner-settings.component';

describe('DonerSettingsComponent', () => {
  let component: DonerSettingsComponent;
  let fixture: ComponentFixture<DonerSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonerSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
