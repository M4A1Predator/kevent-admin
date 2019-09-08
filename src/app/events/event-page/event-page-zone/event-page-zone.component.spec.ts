import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPageZoneComponent } from './event-page-zone.component';

describe('EventPageZoneComponent', () => {
  let component: EventPageZoneComponent;
  let fixture: ComponentFixture<EventPageZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPageZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPageZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
