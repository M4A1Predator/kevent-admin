import { Injectable } from '@angular/core';
import {NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { Observable, observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilsServiceService {

  constructor() { }

  getDateTimeString(date: NgbDateStruct, time: NgbTimeStruct) {
    return `${date.year}-${date.month}-${date.day}:${time.hour}-${time.minute}`
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    return new Observable(observable => {
      let arrBuf = null
      reader.addEventListener("load", () => {
        arrBuf = reader.result;
        observable.next(arrBuf)
      }, false);

      if (image) {
        reader.readAsDataURL(image);
      }
    }).pipe(mergeMap(v => {
      return of(v)
    }))
  }
}
