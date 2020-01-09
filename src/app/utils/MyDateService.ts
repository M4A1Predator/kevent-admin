import { NgbDateAdapter, NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap'
import * as moment from 'moment'
import { Injectable } from '@angular/core'

@Injectable()
export class MyDateService extends NgbDateAdapter<String> {
  fromModel(isoString: string): NgbDateStruct {
    try {
      const date = moment(isoString)
      const y = Number.parseInt(date.format('YYYY'), 10)
      const m = Number.parseInt(date.format('MM'), 10)
      const d = Number.parseInt(date.format('DD'), 10)

      const dateStruct = new NgbDate(y, m, d)
      return dateStruct
    } catch (ex) {
      console.error('parse date error')
      return null
    }
  }

  toModel() {
    return null
  }
}
