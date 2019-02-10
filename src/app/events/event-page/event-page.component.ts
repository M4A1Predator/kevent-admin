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
      
      // set date time fields
      const performDateStruct: NgbDateStruct = this.myDateService.fromModel(this.updateEventForm.performTime)
      this.performDate = performDateStruct;
      this.performTime = this.myTimeService.fromModel(this.updateEventForm.performTime)

      const ticksetStartDateStruct: NgbDateStruct = this.myDateService.fromModel(this.updateEventForm.ticketStartTime)
      this.ticketStartDate = ticksetStartDateStruct;
      this.ticketStartTime = this.myTimeService.fromModel(this.updateEventForm.ticketStartTime)
    });
  }

  updateEvent(f: NgForm) {
    this.updateEventForm.name = f.value.name
    this.updateEventForm.description = f.value.description
    this.updateEventForm.location = f.value.location

    try {
      const performTimeText = this.utilsService.getDateTimeString(f.value.date, f.value.time)
      const performTime = moment(performTimeText, 'YYYY-MM-DD:hh-mm')
      this.updateEventForm.performTime = performTime.toISOString();

      const ticketStartTimeText = this.utilsService.getDateTimeString(f.value.ticketStartDate, f.value.ticketStartTime)
      const ticketStartTime = moment(ticketStartTimeText, 'YYYY-MM-DD:hh-mm')
      this.updateEventForm.ticketStartTime = ticketStartTime.toISOString();

      const ticksetEndTimeText = this.utilsService.getDateTimeString(f.value.ticketEndDate, f.value.ticketEndTime)
      const ticksetEndTime = moment(ticksetEndTimeText, 'YYYY-MM-DD:hh-mm')
      this.updateEventForm.ticketEndTime = ticksetEndTime.toISOString(); 
    } catch (error) { 
      console.error(error);
    }
    
    this.eventsService.updateEvent(this.eventId, this.updateEventForm).subscribe(data => {
      this.getEvent();
    },
    err => {
      console.error(err);
    })
  }

}
