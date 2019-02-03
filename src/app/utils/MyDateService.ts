import { NgbDateAdapter, NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment'
import { Injectable } from '@angular/core';

@Injectable()
export class MyDateService extends NgbDateAdapter<String> {
  fromModel(isoString: string): NgbDateStruct {
    try {
      const date = moment(isoString);
      const y = Number.parseInt(date.format('YYYY'))
      const m = Number.parseInt(date.format('MM'))
      const d = Number.parseInt(date.format('DD'))

      const dateStruct = new NgbDate(y, m, d);
      return dateStruct;
    } catch (ex) {
      console.error("parse date error");
      return null
    }
    
  }

  toModel() {
    return null;
  }
}
