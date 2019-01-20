import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AddEventForm } from "./shared/AddEventForm";
import { Store } from "@ngrx/store";
import { map, mergeMap } from 'rxjs/operators'
import { AuthService } from '../auth/shared/auth.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class EventsService {
  constructor(private http: HttpClient, private store: Store<any>, private authService: AuthService) {}

  getEvents() {
    return this.http.get(environment.API_URL + "/events");
  }

  addEvent(addEventForm: AddEventForm): Observable<Object> {
    // return this.authService.getAuth().pipe(map(auth => {
    //   const options = {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `${auth.data.token_type} ${auth.data.access_token}`
    //     }
    //   };
    //   return this.http.post(environment.API_URL + "/events", addEventForm, options)
    // }))

    // return new Observable(() => {
    //   return this.authService.getAuth().subscribe(auth => {

    //   })
    // })

    const myob = new Observable(obs => {
      obs.next(1);
    })

    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        }
      };
      return this.http.post(environment.API_URL + "/events", addEventForm, options)
      // return of(data)
    }))
  }
}
