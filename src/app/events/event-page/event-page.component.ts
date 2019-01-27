import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';
import { EventModel } from '../shared/EventModel';
import { NgForm } from '@angular/forms';
import { UpdateEventForm } from '../shared/UpdateEventForm';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.styl']
})
export class EventPageComponent implements OnInit {

  eventId: string
  event: EventModel
  updateEventForm: UpdateEventForm
  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(private route: ActivatedRoute,
    private eventsService: EventsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.eventId = params.get('eventId')
      this.getEvent();
    })
  }

  getEvent() {
    this.eventsService.getEventById(this.eventId).subscribe(data => {
      this.event = new EventModel()
      Object.assign(this.event, data)
      this.updateEventForm = new UpdateEventForm()
      Object.assign(this.updateEventForm, data)
    });
  }

  updateEvent(f: NgForm) {
    console.log(f.value);
    
    this.eventsService.updateEvent(this.eventId, f.value).subscribe(data => {
      this.getEvent();
    },
    err => {
      console.error(err);
    })
  }

}
