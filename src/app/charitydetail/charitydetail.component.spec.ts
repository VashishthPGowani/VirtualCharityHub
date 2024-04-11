import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitydetailComponent } from './charitydetail.component';

describe('CharitydetailComponent', () => {
  let component: CharitydetailComponent;
  let fixture: ComponentFixture<CharitydetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharitydetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
