import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';
import { EventModel } from '../shared/EventModel';
import { NgForm } from '@angular/forms';
import { UpdateEventForm } from '../shared/UpdateEventForm';
import {NgbDateStruct, NgbTimeStruct, NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { UtilsServiceService } from 'src/app/utils/utils-service.service';
import * as moment from 'moment'
import { MyDateService } from 'src/app/utils/MyDateService';
import { MyTimeService } from 'src/app/utils/MyTimeService';
import { EventPageArtistsComponent } from './event-page-artists/event-page-artists.component';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.styl'],
  providers: [ MyDateService, MyTimeService ],
})
export class EventPageComponent implements OnInit {

  eventId: string
  event: EventModel
  updateEventForm: UpdateEventForm
  performDate: NgbDateStruct
  performTime: NgbTimeStruct
  ticketStartDate: NgbDateStruct
  ticketStartTime: NgbTimeStruct
  ticketEndDate: NgbDateStruct
  ticketEndTime: NgbTimeStruct

  constructor(private route: ActivatedRoute,
    private eventsService: EventsService,
    private utilsService: UtilsServiceService,
    private myDateService: MyDateService,
    private myTimeService: MyTimeService,
    private timeConfig: NgbTimepickerConfig) {
      timeConfig.seconds = false;
      timeConfig.spinners = false;
    }

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
}
