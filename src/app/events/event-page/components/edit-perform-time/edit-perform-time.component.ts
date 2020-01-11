import { Component, OnInit, Input } from '@angular/core';
import { PerformDateTime } from 'src/app/events/shared/PerformDateTime';
import { UtilsServiceService } from 'src/app/utils/utils-service.service';
import * as moment from 'moment'
import { MyTimeService } from 'src/app/utils/MyTimeService';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { MyDateService } from 'src/app/utils/MyDateService';

@Component({
  selector: 'app-edit-perform-time',
  templateUrl: './edit-perform-time.component.html',
  styleUrls: ['./edit-perform-time.component.styl']
})
export class EditPerformTimeComponent implements OnInit {

  @Input()
  performDateTimes: any[] = []

  performDateTimeList: PerformDateTime[] = []

  constructor(private utilsService: UtilsServiceService,
    private myDateService: MyDateService,
    private myTimeService: MyTimeService) { }

  ngOnInit() {
    // this.utilsService.getDateTimeString

    this.performDateTimes.forEach((pd: any) => {
      const performDate = this.myDateService.fromModel(pd.datetime)
      const performTime = this.myTimeService.fromModel(pd.datetime)

      const p: PerformDateTime = new PerformDateTime()
      p.date = performDate
      p.time = performTime
      p.note = pd.note
      this.performDateTimeList.push(p);
    });
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

