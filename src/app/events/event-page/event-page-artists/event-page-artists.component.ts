import { Component, OnInit, Input } from '@angular/core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { EventModel } from '../../shared/EventModel'
import { Artist } from 'src/app/artists/shared/Artist'
import { EventModelArtists } from '../../shared/EventModelArtists'
import { EventArtist } from '../../shared/EventArtist'
import { EventsService } from '../../events.service'

@Component({
  selector: 'app-event-page-artists',
  templateUrl: './event-page-artists.component.html',
  styleUrls: ['./event-page-artists.component.styl']
})
export class EventPageArtistsComponent implements OnInit {

  @Input()
  event: EventModelArtists
  eventArtists: EventArtist[]
  existArtists: EventArtist[] = []
  faTrash = faTrash

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventArtists = this.event.eventArtistList
    // this.existArtists = this.event.eventArtistList.map((m: EventArtist) => m.artist)
    this.existArtists = this.event.eventArtistList
  }

  addArtist(artist: Artist) {
    const ea = {
      note: null,
      name: artist.name,
      artistId: artist.id,
      detail: artist.detail
    }
    this.eventArtists.push(ea)
    // this.existArtists.push(ea.artist)
  }

  deleteArtist(artistId) {
    this.eventArtists = this.eventArtists.filter(ea => ea.artistId !== artistId)
    this.existArtists = this.existArtists.filter(a => a.artistId !== artistId)
  }

  save() {
    const data = this.eventArtists.map(ea => {
      return {
        artistId: ea.artistId,
        note: ea.note
      }
    })

    this.eventsService.updateEventArtists(this.event.id, data).subscribe(res => {}, err => {
      console.error(err)
    })
  }

}
