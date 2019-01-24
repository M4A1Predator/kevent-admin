import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsPanelComponent } from './artists-panel.component';

describe('ArtistsPanelComponent', () => {
  let component: ArtistsPanelComponent;
  let fixture: ComponentFixture<ArtistsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
