import { Component, OnInit, Input } from '@angular/core';
import { faCoffee, faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.styl']
})
export class EventListComponent implements OnInit {

  @Input()
  events:any = []
  faBook = faBook

  constructor() { }

  ngOnInit() {
  }

}
