import { Component, OnInit } from '@angular/core';
import { AddArtistForm } from '../shared/AddArtistForm';
import { NgForm } from '@angular/forms';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-artist-add',
  templateUrl: './artist-add.component.html',
  styleUrls: ['./artist-add.component.styl']
})
export class ArtistAddComponent implements OnInit {

  artist: AddArtistForm = new AddArtistForm()

  constructor(private artistsService: ArtistsService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.artist = {
      ...f.value
    }

    this.artistsService.addArtist(this.artist).subscribe(data => {
      console.log(data);
    })
  }

}
