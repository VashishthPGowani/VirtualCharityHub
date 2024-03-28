import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCampagineListComponent } from './my-campagine-list.component';

describe('MyCampagineListComponent', () => {
  let component: MyCampagineListComponent;
  let fixture: ComponentFixture<MyCampagineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCampagineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCampagineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
