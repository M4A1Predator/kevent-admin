import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPageDangerComponent } from './event-page-danger.component';

describe('EventPageDangerComponent', () => {
  let component: EventPageDangerComponent;
  let fixture: ComponentFixture<EventPageDangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPageDangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPageDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
