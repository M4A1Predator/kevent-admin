import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AddEventForm } from "./shared/AddEventForm";
import { Store } from "@ngrx/store";
import { map, mergeMap, take } from 'rxjs/operators'
import { AuthService } from '../auth/shared/auth.service';
import { Observable, of } from 'rxjs';
import { EventModel } from './shared/EventModel';

@Injectable({
  providedIn: "root"
})
export class EventsService {
  constructor(private http: HttpClient, private store: Store<any>, private authService: AuthService) {}

  getEvents() {
    return this.http.get(environment.API_URL + "/events");
  }

  getEventById(eventId: string) {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        }
      };
      return this.http.get(environment.API_URL + "/events/" + eventId, options)
      // return of(data)
    }))
  }

  addEvent(addEventForm: AddEventForm): Observable<Object> {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        }
      };
      return this.http.post(environment.API_URL + "/events", addEventForm, options)
    }))
  }

  updateEvent(eventId: string, eventModel: EventModel) {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        }
      };
      return this.http.put(environment.API_URL + "/events/" + eventId, eventModel, options)
    }))
  }
}
