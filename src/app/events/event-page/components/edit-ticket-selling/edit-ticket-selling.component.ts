import { Component, OnInit, ViewChild } from '@angular/core'
import { TicketSelling, TicketSellingForm } from 'src/app/events/shared/ticket-selling'
import { NgbTimepicker } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-edit-ticket-selling',
  templateUrl: './edit-ticket-selling.component.html',
  styleUrls: ['./edit-ticket-selling.component.styl']
})
export class EditTicketSellingComponent implements OnInit {

  ticketSellingList: TicketSelling[] = []
  ticketFormList: TicketSellingForm[] = []

  @ViewChild('tp')
  timepickers: NgbTimepicker[]

  constructor() { }

  ngOnInit() {
    this.ticketFormList.push(new TicketSellingForm())
  }

  addTickSelling() {
    this.ticketFormList.push(new TicketSellingForm())
    console.log(this.ticketFormList);
    
  }

}
