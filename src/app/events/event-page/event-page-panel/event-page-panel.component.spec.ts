import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPagePanelComponent } from './event-page-panel.component';

describe('EventPagePanelComponent', () => {
  let component: EventPagePanelComponent;
  let fixture: ComponentFixture<EventPagePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPagePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPagePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
