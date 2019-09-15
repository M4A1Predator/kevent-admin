import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPageFilesComponent } from './artist-page-files.component';

describe('ArtistPageFilesComponent', () => {
  let component: ArtistPageFilesComponent;
  let fixture: ComponentFixture<ArtistPageFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistPageFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPageFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
