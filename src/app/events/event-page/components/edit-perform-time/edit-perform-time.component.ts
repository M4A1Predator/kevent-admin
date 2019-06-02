import { Component, OnInit, Input } from '@angular/core';
import { PerformDateTime } from 'src/app/events/shared/PerformDateTime';
import { UtilsServiceService } from 'src/app/utils/utils-service.service';
import * as moment from 'moment'

@Component({
  selector: 'app-edit-perform-time',
  templateUrl: './edit-perform-time.component.html',
  styleUrls: ['./edit-perform-time.component.styl']
})
export class EditPerformTimeComponent implements OnInit {

  @Input()
  performDateTimeList: PerformDateTime[] = []

  constructor(private utilsService: UtilsServiceService) { }

  ngOnInit() {
  }

  onAddPerformance() {
    this.performDateTimeList.push(new PerformDateTime())
  }

  onRemove(i) {
    this.performDateTimeList.splice(i, 1)
  }

  getResult() {

    const result = this.performDateTimeList.map((v: PerformDateTime) => {
      const text = this.utilsService.getDateTimeString(v.date, v.time)
      const datetime = moment(text, 'YYYY-MM-DD:hh-mm')
      return {
        datetime: datetime.toISOString(),
        note: null
      }
    });

    return result
  }

}
