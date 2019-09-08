import { Component, OnInit } from '@angular/core'
import { AddArtistForm } from '../shared/AddArtistForm'
import { NgForm } from '@angular/forms'
import { ArtistsService } from '../artists.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-add',
  templateUrl: './artist-add.component.html',
  styleUrls: ['./artist-add.component.styl']
})
export class ArtistAddComponent implements OnInit {

  artist: AddArtistForm = new AddArtistForm()

  constructor(private artistsService: ArtistsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.artist = {
      ...f.value
    }

    this.artistsService.addArtist(this.artist).subscribe(data => {
      this.router.navigate(['artists'])
    })
  }

}
