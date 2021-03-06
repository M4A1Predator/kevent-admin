import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { EventsService } from '../../events.service'
import { EventModel } from '../../shared/EventModel'
import { ZoneRequest } from '../../shared/zone-request'
import { HttpErrorResponse } from '@angular/common/http'
import { flatMap } from 'rxjs/operators'
import { UtilsServiceService } from 'src/app/utils/utils-service.service'

@Component({
  selector: 'app-event-page-zone',
  templateUrl: './event-page-zone.component.html',
  styleUrls: ['./event-page-zone.component.styl']
})
export class EventPageZoneComponent implements OnInit {

  @Input()
  event: EventModel

  @Output()
  updated: EventEmitter<any> = new EventEmitter()

  imgSrc: ArrayBuffer

  price: string
  errorMsg: string
  msg: string

  constructor(private eventsService: EventsService,
    private utilsService: UtilsServiceService) { }

  ngOnInit() {
    this.eventsService.getZoneImages(this.event.id).pipe(flatMap((img: Blob) => {
      return this.utilsService.createImageFromBlob(img)
    })).subscribe(imgSrc => {
      this.imgSrc = imgSrc
    })

    if (this.event.zoneDetail) {
      this.price = this.event.zoneDetail
    }
  }

  onUploadZone(e: File) {
    this.eventsService.uploadZoneImage(this.event.id, e).subscribe(() => {
      this.msg = 'Saved'
    },
      (err: HttpErrorResponse) => {
        this.errorMsg = err.message
      })
  }

  onUpdate() {
    const data: ZoneRequest = new ZoneRequest()
    data.priceDetail = this.price
    this.eventsService.updateZoneDetail(this.event.id, data).subscribe(() => {
      this.errorMsg = null
      this.updated.emit()
    },
      (err: HttpErrorResponse) => {
        this.errorMsg = err.message
      }
    )
  }

}
