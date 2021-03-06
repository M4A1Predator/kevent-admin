import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { AddEventForm } from './shared/AddEventForm'
import { Store } from '@ngrx/store'
import { map, mergeMap, take } from 'rxjs/operators'
import { AuthService } from '../auth/shared/auth.service'
import { Observable, of } from 'rxjs'
import { ZoneRequest } from './shared/zone-request'
import { UpdateEventForm } from './shared/UpdateEventForm'
import { cloneDeep } from 'lodash'
import { UtilsServiceService } from '../utils/utils-service.service'

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient, private store: Store<any>,
    private authService: AuthService,
    private utilsService: UtilsServiceService) {}

  getEvents() {
    return this.http.get(environment.API_URL + '/events')
  }

  getEventById(eventId: string) {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        }
      }
      return this.http.get(environment.API_URL + '/events/' + eventId, options)
      // return of(data)
    }))
  }

  addEvent(addEventForm: AddEventForm): Observable<Object> {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        }
      }
      return this.http.post(environment.API_URL + '/events', addEventForm, options)
    }))
  }

  updateEvent(eventId: string, eventModel: UpdateEventForm) {
    // transform data
    console.log(eventModel)
    const data: any = cloneDeep(eventModel)
    data['ticketSellingList'] = eventModel.ticketSellingList.map(t => {
      const transformed: any = { ...t }
      transformed.ticketStartTime = this.utilsService.covertDateToISOString(t.ticketStartTime)
      if (t.ticketEndTime) {
        transformed.ticketEndTime = this.utilsService.covertDateToISOString(t.ticketEndTime)
      }
      return transformed
    })

    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        }
      }
      return this.http.put(environment.API_URL + '/events/' + eventId, data, options)
    }))
  }

  updateEventArtists(eventId: Number, data: any[]) {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        }
      }
      return this.http.put(environment.API_URL + '/events/' + eventId + '/updateArtists', data, options)
    }))
  }

  uploadCover(eventId: Number, image: File) {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const formData = new FormData()
      formData.append('cover', image)

      const options = {
        headers: {
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        }
      }

      return this.http.put(`${environment.API_URL}/events/${eventId}/cover`, formData, options)
    }))
  }

  getCover(eventId: Number) {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = {
        headers: {
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        },
        responseType: 'blob' as 'json',
      }

      return this.http.get<Blob>(`${environment.API_URL}/events/${eventId}/cover`, options)
    }))
  }

  deleteEvent(eventId: Number) {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        }
      }
      return this.http.delete(environment.API_URL + '/events/' + eventId, options)
    }))
  }

  uploadZoneImage(eventId: number, file: File) {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const formData = new FormData()
      formData.append('file', file)

      const options = {
        headers: {
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        }
      }

      return this.http.put(`${environment.API_URL}/events/${eventId}/images/zone`, formData, options)
    }))
  }

  updateZoneDetail(eventId: number, data: ZoneRequest) {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = this.authService.getBasicHeader(auth)
      return this.http.put(environment.API_URL + '/events/' + eventId + '/zone', data, options)
    }))
  }

  getZoneImages(eventId: number) {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = {
        headers: {
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        },
        responseType: 'blob' as 'json',
      }
      return this.http.get(`${environment.API_URL}/events/${eventId}/images/zone`, options)
    }))
  }
}
