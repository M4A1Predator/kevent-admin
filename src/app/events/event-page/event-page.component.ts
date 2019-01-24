import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';
import { EventModel } from '../shared/EventModel';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.styl']
})
export class EventPageComponent implements OnInit {

  eventId: string
  event: EventModel

  constructor(private route: ActivatedRoute,
    private eventsService: EventsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.eventId = params.get('eventId')
      this.eventsService.getEventById(this.eventId).subscribe(data => {
        this.event = new EventModel()
        Object.assign(this.event, data)
      });
    })
  }

}
