import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from '../../shared/EventModel';
import { EventsService } from '../../events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-page-danger',
  templateUrl: './event-page-danger.component.html',
  styleUrls: ['./event-page-danger.component.styl']
})
export class EventPageDangerComponent implements OnInit {

  @Input()
  event: EventModel

  constructor(private eventsService: EventsService, private router: Router) { }

  ngOnInit() {
  }

  onClickDelete() {
    this.eventsService.deleteEvent(this.event.id).subscribe(res => {
      this.router.navigate(["/events"])
    })
  }

}
