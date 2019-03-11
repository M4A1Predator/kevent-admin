import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAddArtistComponent } from './event-add-artist.component';

describe('EventAddArtistComponent', () => {
  let component: EventAddArtistComponent;
  let fixture: ComponentFixture<EventAddArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAddArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAddArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
