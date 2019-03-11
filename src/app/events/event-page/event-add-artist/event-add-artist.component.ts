import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArtistsService } from 'src/app/artists/artists.service';
import { Artist } from 'src/app/artists/shared/Artist';

@Component({
  selector: 'app-event-add-artist',
  templateUrl: './event-add-artist.component.html',
  styleUrls: ['./event-add-artist.component.styl']
})
export class EventAddArtistComponent implements OnInit {

  @Output()
  private onAdd: EventEmitter<any> = new EventEmitter()
  
  private artists: Artist[]
  private placedArtist: Artist

  constructor(private artistsService: ArtistsService) { }

  ngOnInit() {
    this.artistsService.getArtists().subscribe((data: Artist[]) => {
      this.artists = data
    })
  }

  onClickAdd() {
    this.onAdd.emit(this.placedArtist)
  }

  onChange(value) {
    this.placedArtist = this.artists.find(a => a.id === Number.parseInt(value))
  }

}
