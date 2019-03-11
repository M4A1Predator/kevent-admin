import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPageDetailComponent } from './event-page-detail.component';

describe('EventPageDetailComponent', () => {
  let component: EventPageDetailComponent;
  let fixture: ComponentFixture<EventPageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
