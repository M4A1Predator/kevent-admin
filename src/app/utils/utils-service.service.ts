import { Injectable } from '@angular/core';
import {NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class UtilsServiceService {

  constructor() { }

  getDateTimeString(date: NgbDateStruct, time: NgbTimeStruct) {
    return `${date.year}-${date.month}-${date.day}:${time.hour}-${time.minute}`
  }
}
