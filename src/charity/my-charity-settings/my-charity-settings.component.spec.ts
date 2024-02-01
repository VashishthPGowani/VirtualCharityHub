import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCharitySettingsComponent } from './my-charity-settings.component';

describe('MyCharitySettingsComponent', () => {
  let component: MyCharitySettingsComponent;
  let fixture: ComponentFixture<MyCharitySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCharitySettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCharitySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
