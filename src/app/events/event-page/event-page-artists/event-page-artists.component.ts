import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { EventModel } from '../../shared/EventModel'
import { Artist } from 'src/app/artists/shared/Artist'
import { EventModelArtists } from '../../shared/EventModelArtists'
import { EventArtist } from '../../shared/EventArtist'
import { EventsService } from '../../events.service'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-event-page-artists',
  templateUrl: './event-page-artists.component.html',
  styleUrls: ['./event-page-artists.component.styl']
})
export class EventPageArtistsComponent implements OnInit {

  @Input()
  event: EventModelArtists

  @Output()
  updateEvent: EventEmitter<any> = new EventEmitter()

  eventArtists: EventArtist[]
  faTrash = faTrash

  msg = ''

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventArtists = this.event.eventArtistList
  }

  addArtist(artist: Artist) {
    const ea = {
      note: null,
      name: artist.name,
      artistId: artist.id,
      detail: artist.detail
    }
    this.eventArtists.push(ea)
  }

  deleteArtist(artistId: number) {
    this.eventArtists = this.eventArtists.filter(ea => ea.artistId !== artistId)
  }

  save() {
    const data = this.eventArtists.map(ea => {
      return {
        artistId: ea.artistId,
        note: ea.note
      }
    })

    this.eventsService.updateEventArtists(this.event.id, data).subscribe(res => {
      this.msg = 'saved'
      this.updateEvent.emit()
    }, (err: HttpErrorResponse) => {
      this.msg = err.message
    })
  }

}
