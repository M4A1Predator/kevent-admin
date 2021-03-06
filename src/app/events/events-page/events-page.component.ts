import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.styl']
})
export class EventsPageComponent implements OnInit {

  events:any;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEvents().subscribe(data => {
      this.events = data;
    })
  }

}
