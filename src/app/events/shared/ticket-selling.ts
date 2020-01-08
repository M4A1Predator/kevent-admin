import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap'

export class TicketSelling {
  ticketStartTime: Date
  ticketEndTime: Date
  approach: string
  note: string
}

export class TicketSellingForm {
  ticketStartDate: NgbDateStruct
  ticketStartTime: NgbTimeStruct
  ticketEndDate: NgbDateStruct
  ticketEndTime: NgbTimeStruct
  approach: string
  note: string
}
