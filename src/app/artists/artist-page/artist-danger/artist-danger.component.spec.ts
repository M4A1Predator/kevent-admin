import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDangerComponent } from './artist-danger.component';

describe('ArtistDangerComponent', () => {
  let component: ArtistDangerComponent;
  let fixture: ComponentFixture<ArtistDangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
