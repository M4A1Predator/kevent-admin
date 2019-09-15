import { Component, OnInit, Input } from '@angular/core';
import { ArtistsService } from '../../artists.service';
import { Artist } from '../../shared/Artist';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-artist-danger',
  templateUrl: './artist-danger.component.html',
  styleUrls: ['./artist-danger.component.styl']
})
export class ArtistDangerComponent implements OnInit {

  @Input()
  artist: Artist

  errMsg: string

  constructor(private artistsService: ArtistsService) { }

  ngOnInit() {
  }

  deleteArtist() {
    this.artistsService.deleteArtist(this.artist.id).subscribe(() => {},
      (err: HttpErrorResponse) => {
        this.errMsg = err.message
      })
  }

}
