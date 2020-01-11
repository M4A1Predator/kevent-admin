import { Component, OnInit, ViewChild, Input } from '@angular/core'
import { TicketSelling, TicketSellingForm } from 'src/app/events/shared/ticket-selling'
import { NgbTimepicker } from '@ng-bootstrap/ng-bootstrap'
import { MyTimeService } from 'src/app/utils/MyTimeService'
import { MyDateService } from 'src/app/utils/MyDateService'
import { UtilsServiceService } from 'src/app/utils/utils-service.service'
import * as moment from 'moment'

@Component({
  selector: 'app-edit-ticket-selling',
  templateUrl: './edit-ticket-selling.component.html',
  styleUrls: ['./edit-ticket-selling.component.styl']
})
export class EditTicketSellingComponent implements OnInit {

  @Input()
  ticketSellingList: TicketSelling[] = []

  ticketFormList: TicketSellingForm[] = []

  @ViewChild('tp')
  timepickers: NgbTimepicker[]

  constructor(private myDateService: MyDateService,
    private myTimeService: MyTimeService,
    private utilsService: UtilsServiceService) { }

  ngOnInit() {

    this.ticketFormList = this.ticketSellingList.map((t: TicketSelling) => {
      const tf = new TicketSellingForm()
      tf.approach = t.approach
      tf.note = t.note
      tf.ticketStartDate = this.myDateService.fromModel(t.ticketStartTime.toISOString())
      tf.ticketStartTime = this.myTimeService.fromModel(t.ticketStartTime.toISOString())

      if (t.ticketEndTime) {
        tf.ticketEndDate = this.myDateService.fromModel(t.ticketEndTime.toISOString())
        tf.ticketEndTime = this.myTimeService.fromModel(t.ticketEndTime.toISOString())
      }
      return tf
    })

    if (!this.ticketFormList.length) {
      this.ticketFormList.push(new TicketSellingForm())
    }
  }

  addTickSelling() {
    this.ticketFormList.push(new TicketSellingForm())
  }

  removeTicketSelling(i: number) {
    this.ticketFormList.splice(i, 1)
  }

  getResult(): TicketSelling[] {
    const ticketFormList = this.ticketFormList.filter(t => !!t.approach && !!t.approach.trim())
    const dataList = ticketFormList.map(t => {
      const ts = new TicketSelling()
      ts.approach = t.approach
      ts.note = t.note
      ts.ticketStartTime = moment(this.utilsService.getDateTimeString(t.ticketStartDate, t.ticketStartTime), 'YYYY-MM-DD:hh-mm').toDate()
      if (t.ticketEndDate && t.ticketEndDate.day && t.ticketEndDate.month) {
        ts.ticketEndTime = moment(this.utilsService.getDateTimeString(t.ticketEndDate, t.ticketEndTime), 'YYYY-MM-DD:hh-mm').toDate()
      }
      return ts
    })
    return dataList
  }

}
