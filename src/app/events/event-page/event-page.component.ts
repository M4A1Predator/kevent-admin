import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';
import { EventModel } from '../shared/EventModel';
import { NgForm } from '@angular/forms';
import { UpdateEventForm } from '../shared/UpdateEventForm';
import {NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private route: ActivatedRoute,
    private eventsService: EventsService,
    private utilsService: UtilsServiceService,
    private myDateService: MyDateService,
    private myTimeService: MyTimeService) { }

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
      console.log(this.performTime);
      
    });
  }

  updateEvent(f: NgForm) {
    const performTimeText = this.utilsService.getDateTimeString(f.value.date, f.value.time)
    const performTime = moment(performTimeText, 'YYYY-MM-DD:hh-mm')
    
    this.updateEventForm.name = f.value.name
    this.updateEventForm.description = f.value.description
    this.updateEventForm.location = f.value.location
    this.updateEventForm.performTime = performTime.toISOString();
    
    this.eventsService.updateEvent(this.eventId, this.updateEventForm).subscribe(data => {
      this.getEvent();
    },
    err => {
      console.error(err);
    })
  }

}
