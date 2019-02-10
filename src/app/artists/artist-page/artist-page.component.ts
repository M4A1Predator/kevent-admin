import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../shared/Artist';
import { NgForm } from '@angular/forms';
import { UpdateArtistForm } from '../shared/UpdateArtistForm';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.styl']
})
export class ArtistPageComponent implements OnInit {

  artistId: Number = null
  artist: Artist = null
  artistUpdate: Artist = new Artist()

  constructor(private route: ActivatedRoute,
    private artistsService: ArtistsService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.artistId = Number.parseInt(params.get('artistId'))
      this.getArtist()
    })
  }

  getArtist() {
    this.artistsService.getArtistById(this.artistId).subscribe((data: Artist) => {
      this.artist = data
      Object.assign(this.artistUpdate, this.artist)
    });
  }

  onSubmit(f: NgForm) {
    const artistForm: UpdateArtistForm = new UpdateArtistForm()

    artistForm.name = f.value.name
    artistForm.detail = f.value.detail

    this.artistsService.updateArtist(this.artistId, artistForm).subscribe(resData => {
      this.artist = resData;
      Object.assign(this.artistUpdate, this.artist)
    })
  }

}
