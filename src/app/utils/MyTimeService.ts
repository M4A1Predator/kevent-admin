import { NgbTimeAdapter, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class MyTimeService extends NgbTimeAdapter<String> {
  fromModel(isoString: string) {
    try {
      const date = moment(isoString);
      const h = Number.parseInt(date.format('HH'))
      const m = Number.parseInt(date.format('mm'))
      const s = Number.parseInt(date.format('ss'))

      const timeStruct: NgbTimeStruct = {
        "hour": h,
        "minute": m,
        "second": s
      }
      return timeStruct;
    } catch (ex) {
      console.error("parse time error :", ex);
      return null
    }
  }

  toModel() {
    return null
  }
}