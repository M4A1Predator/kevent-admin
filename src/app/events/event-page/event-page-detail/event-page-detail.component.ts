import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core'
import { EventModel } from '../../shared/EventModel'
import { UpdateEventForm } from '../../shared/UpdateEventForm'
import { NgbDateStruct, NgbTimeStruct, NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap'
import { ActivatedRoute } from '@angular/router'
import * as moment from 'moment'
import { EventsService } from '../../events.service'
import { UtilsServiceService } from 'src/app/utils/utils-service.service'
import { MyDateService } from 'src/app/utils/MyDateService'
import { MyTimeService } from 'src/app/utils/MyTimeService'
import { NgForm } from '@angular/forms'
import { ImageSnippet } from '../../shared/ImageSnippet'
import { EditPerformTimeComponent } from '../components/edit-perform-time/edit-perform-time.component'
import { TicketSelling } from '../../shared/ticket-selling'

@Component({
  selector: 'app-event-page-detail',
  templateUrl: './event-page-detail.component.html',
  styleUrls: ['./event-page-detail.component.styl']
})
export class EventPageDetailComponent implements OnInit {

  eventId: string
  @Input()
  public event: EventModel
  updateEventForm: UpdateEventForm
  performDate: NgbDateStruct
  performTime: NgbTimeStruct
  ticketStartDate: NgbDateStruct
  ticketStartTime: NgbTimeStruct
  ticketEndDate: NgbDateStruct
  ticketEndTime: NgbTimeStruct
  coverSrc: ArrayBuffer
  ticketSellingList: TicketSelling[]

  private selectedFile: ImageSnippet

  errorMsg: string
  isSaveSuccess: boolean

  @Output()
  onUpdated: EventEmitter<any> = new EventEmitter<any>()

  @ViewChild(EditPerformTimeComponent)
  editTime: EditPerformTimeComponent

  constructor(private route: ActivatedRoute,
    private eventsService: EventsService,
    private utilsService: UtilsServiceService,
    private myDateService: MyDateService,
    private myTimeService: MyTimeService,
    private timeConfig: NgbTimepickerConfig) {
      timeConfig.seconds = false
      timeConfig.spinners = false
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.eventId = params.get('eventId')
      this.getEvent()
    })
  }

  getEvent() {
    this.updateEventForm = new UpdateEventForm()
    Object.assign(this.updateEventForm, this.event)

    // set date time fields
    const performDateStruct: NgbDateStruct = this.myDateService.fromModel(this.updateEventForm.performTime)
    this.performDate = performDateStruct
    this.performTime = this.myTimeService.fromModel(this.updateEventForm.performTime)

    const ticksetStartDateStruct: NgbDateStruct = this.myDateService.fromModel(this.updateEventForm.ticketStartTime)
    this.ticketStartDate = ticksetStartDateStruct
    this.ticketStartTime = this.myTimeService.fromModel(this.updateEventForm.ticketStartTime)

    const ticksetEndDateStruct: NgbDateStruct = this.myDateService.fromModel(this.updateEventForm.ticketEndTime)
    this.ticketEndDate = ticksetEndDateStruct
    this.ticketEndTime = this.myTimeService.fromModel(this.updateEventForm.ticketEndTime)

    // Get cover img
    // if (this.event['coverPath']) {
    this.eventsService.getCover(this.event.id).subscribe((res) => {
      this.utilsService.createImageFromBlob(res).subscribe(t => {
        this.coverSrc = t
      })
    })
    // }
  }

  updateEvent(f: NgForm) {
    this.updateEventForm.name = f.value.name
    this.updateEventForm.description = f.value.description
    this.updateEventForm.location = f.value.location
    this.updateEventForm.performDateTimeList = this.editTime.getResult()

    try {
      if (f.value.ticketStartDate) {
        const ticketStartTimeText = this.utilsService.getDateTimeString(f.value.ticketStartDate, f.value.ticketStartTime)
        const ticketStartTime = moment(ticketStartTimeText, 'YYYY-MM-DD:hh-mm')
        this.updateEventForm.ticketStartTime = ticketStartTime.toISOString()
      } else {
        this.updateEventForm.ticketStartTime = null
      }

      if (f.value.ticketEndDate) {
        const ticksetEndTimeText = this.utilsService.getDateTimeString(f.value.ticketEndDate, f.value.ticketEndTime)
        const ticksetEndTime = moment(ticksetEndTimeText, 'YYYY-MM-DD:hh-mm')
        this.updateEventForm.ticketEndTime = ticksetEndTime.toISOString() 
      } else {
        this.updateEventForm.ticketEndTime = null
      }

    } catch (error) {
      this.errorMsg = 'Cannot save'
      return
    }

    this.eventsService.updateEvent(this.eventId, this.updateEventForm).subscribe(data => {
      // this.getEvent();
      this.onUpdated.emit()
      this.isSaveSuccess = true
    },
    err => {
      console.error(err)
      this.errorMsg = 'Cannot save'
    })
  }

  uploadCover(imageInput: any) {
    const file: File = imageInput.files[0]
    const reader = new FileReader()

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file)
      this.coverSrc = reader.result as ArrayBuffer
    })

    reader.readAsDataURL(file)
  }

  onClickUpload() {
    this.eventsService.uploadCover(this.event.id, this.selectedFile.file).subscribe(res => {})
  }

  onUploadCover(file: File) {
    this.eventsService.uploadCover(this.event.id, file).subscribe(() => {})
  }

}
