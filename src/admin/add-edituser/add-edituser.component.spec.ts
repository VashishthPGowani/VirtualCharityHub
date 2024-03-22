import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEdituserComponent } from './add-edituser.component';

describe('AddEdituserComponent', () => {
  let component: AddEdituserComponent;
  let fixture: ComponentFixture<AddEdituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEdituserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEdituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
