import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitymanagerComponent } from './charitymanager.component';

describe('CharitymanagerComponent', () => {
  let component: CharitymanagerComponent;
  let fixture: ComponentFixture<CharitymanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharitymanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitymanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
