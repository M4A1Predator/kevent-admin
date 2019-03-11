import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from '../../shared/EventModel';
import { Artist } from 'src/app/artists/shared/Artist';

@Component({
  selector: 'app-event-page-artists',
  templateUrl: './event-page-artists.component.html',
  styleUrls: ['./event-page-artists.component.styl']
})
export class EventPageArtistsComponent implements OnInit {

  @Input()
  event: EventModel
  eventArtists: any[]

  constructor() { }

  ngOnInit() {
    this.eventArtists = this.event["eventArtists"]
  }

  addArtist(artist: Artist) {
    const ea = {
      note: null,
      artist
    }
    this.eventArtists.push(ea)
  }

}
