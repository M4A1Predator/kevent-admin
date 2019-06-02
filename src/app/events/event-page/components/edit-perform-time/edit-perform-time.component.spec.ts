import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPerformTimeComponent } from './edit-perform-time.component';

describe('EditPerformTimeComponent', () => {
  let component: EditPerformTimeComponent;
  let fixture: ComponentFixture<EditPerformTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPerformTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPerformTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
