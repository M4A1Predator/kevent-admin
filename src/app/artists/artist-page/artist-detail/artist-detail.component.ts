import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Artist } from '../../shared/Artist';
import { NgForm } from '@angular/forms';
import { UpdateArtistForm } from '../../shared/UpdateArtistForm';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.styl']
})
export class ArtistDetailComponent implements OnInit {

  @Input()
  artist: Artist = null
  artistUpdate: Artist = new Artist()

  @Input()
  isUpdating = false

  @Output()
  onUpdate: EventEmitter<UpdateArtistForm> = new EventEmitter()

  constructor() { }

  ngOnInit() {
    Object.assign(this.artistUpdate, this.artist)
  }

  onSubmit(f: NgForm) {
    const artistForm: UpdateArtistForm = new UpdateArtistForm()

    artistForm.name = f.value.name
    artistForm.detail = f.value.detail
    // this.artistsService.updateArtist(this.artistId, artistForm).subscribe(resData => {
    //   this.artist = resData;
    //   Object.assign(this.artistUpdate, this.artist)
    //   this.isUpdating = false
    // }, (err: HttpErrorResponse) => {
    //   console.error(err);
    //   this.errMsg = "Cannot update"
    // })
    this.onUpdate.emit(artistForm)
  }

}
