import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPageArtistsComponent } from './event-page-artists.component';

describe('EventPageArtistsComponent', () => {
  let component: EventPageArtistsComponent;
  let fixture: ComponentFixture<EventPageArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPageArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPageArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
