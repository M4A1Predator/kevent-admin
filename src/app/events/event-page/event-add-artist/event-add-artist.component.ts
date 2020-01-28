import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core'
import { ArtistsService } from 'src/app/artists/artists.service'
import { Artist } from 'src/app/artists/shared/Artist'
import { EventArtist } from '../../shared/EventArtist';

@Component({
  selector: 'app-event-add-artist',
  templateUrl: './event-add-artist.component.html',
  styleUrls: ['./event-add-artist.component.styl']
})
export class EventAddArtistComponent implements OnInit, DoCheck {

  @Output()
  onAdd: EventEmitter<any> = new EventEmitter()

  @Input()
  private existArtists: EventArtist[] = []

  private oldExistArtists: Artist[] = []

  artists: Artist[] = []
  private allArtists: Artist[] = []
  private placedArtist: Artist

  constructor(private artistsService: ArtistsService) { }

  ngOnInit() {
    this.artistsService.getArtists().subscribe((data: Artist[]) => {
      this.allArtists = data
      this.artists = this.allArtists.filter(a => !this.existArtists.find(e => e.artistId === a.id))
    })
  }

  ngDoCheck() {
    if (this.existArtists.length !== this.oldExistArtists.length) {
      this.artists = this.allArtists.filter(a => !this.existArtists.find(e => e.artistId === a.id))
      this.oldExistArtists = Object.assign([], this.existArtists)
    }
  }

  onClickAdd() {
    if (!this.placedArtist) {
      return
    }
    this.onAdd.emit(this.placedArtist)
    this.placedArtist = null
  }

  onChange(value: string) {
    this.placedArtist = this.artists.find(a => a.id === Number.parseInt(value, 10))
  }

}
