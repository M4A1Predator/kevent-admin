import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';
import { Artist } from '../shared/Artist';

@Component({
  selector: 'app-artists-page',
  templateUrl: './artists-page.component.html',
  styleUrls: ['./artists-page.component.styl']
})
export class ArtistsPageComponent implements OnInit {

  artists: Artist[] = []

  constructor(private artistsService: ArtistsService) { }

  ngOnInit() {
    this.getArtists()
  }

  getArtists() {
    this.artistsService.getArtists().subscribe((artists: Artist[]) => {
      this.artists = artists
    })
  }
}
