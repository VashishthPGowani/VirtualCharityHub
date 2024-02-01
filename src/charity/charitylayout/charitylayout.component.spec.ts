import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitylayoutComponent } from './charitylayout.component';

describe('CharitylayoutComponent', () => {
  let component: CharitylayoutComponent;
  let fixture: ComponentFixture<CharitylayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharitylayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitylayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
