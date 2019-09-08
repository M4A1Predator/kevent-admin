import { Component, OnInit, Input } from '@angular/core'
import { EventsService } from '../../events.service'
import { EventModel } from '../../shared/EventModel'
import { ZoneRequest } from '../../shared/zone-request'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-event-page-zone',
  templateUrl: './event-page-zone.component.html',
  styleUrls: ['./event-page-zone.component.styl']
})
export class EventPageZoneComponent implements OnInit {

  @Input()
  event: EventModel

  price: string
  errorMsg: string

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
  }

  onUploadZone(e: File) {
    this.eventsService.uploadZoneImage(this.event.id, e).subscribe(() => {},
      (err: HttpErrorResponse) => {
        this.errorMsg = err.message
      })
  }

  onUpdate() {
    const data: ZoneRequest = new ZoneRequest()
    data.priceDetail = this.price
    this.eventsService.updateZoneDetail(this.event.id, data).subscribe(() => {
      this.errorMsg = null
    },
      (err: HttpErrorResponse) => {
        this.errorMsg = err.message
      }
    )
  }

}
