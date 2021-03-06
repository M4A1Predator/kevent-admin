import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddEventForm } from '../shared/AddEventForm';
import { EventsService } from '../events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.styl']
})
export class EventAddComponent implements OnInit {

  event: AddEventForm = new AddEventForm()

  constructor(private eventsServuce: EventsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.event.name = f.value.name
    this.event.description = f.value.description
    this.event.location = f.value.location

    this.eventsServuce.addEvent(this.event).subscribe(data => {
      this.router.navigate(["/events"])
    }, err => {
      console.error(err);
    })
  }

}
