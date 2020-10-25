import { TicketSelling } from './ticket-selling'

export class UpdateEventForm {
  public id: number
  public name: string
  public description: string
  public onlineDetail: string
  public location: string
  public performTime: string
  public ticketStartTime: string
  public ticketEndTime: string
  public performDateTimeList: any[]
  public ticketSellingList: TicketSelling[]
}
