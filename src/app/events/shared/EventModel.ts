import { TicketSelling } from './ticket-selling'

export class EventModel {
  public id: number
  public name: string
  public description: string
  public location: string
  public performTime: string
  public performDateTimeList: any[]
  public zoneDetail: string
  public ticketSellingList: TicketSelling[]
}
