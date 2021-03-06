import { Injectable } from '@angular/core'
import { AuthService } from '../auth/shared/auth.service'
import { Store } from '@ngrx/store'
import { HttpClient } from '@angular/common/http'
import { AddArtistForm } from './shared/AddArtistForm'
import { mergeMap } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { UpdateArtistForm } from './shared/UpdateArtistForm'

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient, private store: Store<any>, private authService: AuthService) {}

  public addArtist(artistForm: AddArtistForm): Observable<Object> {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        }
      }
      return this.http.post(environment.API_URL + '/artists', artistForm, options)
    }))
  }

  public updateArtist(artistId: Number, artistForm: UpdateArtistForm): Observable<any> {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        }
      }
      return this.http.put(`${environment.API_URL}/artists/${artistId}`, artistForm, options)
    }))
  }

  public getArtists() {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        }
      }
      return this.http.get(environment.API_URL + '/artists', options)
    }))
  }

  public getArtistById(artistId: Number): Observable<any> {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        }
      }
      return this.http.get(`${environment.API_URL}/artists/${artistId}`, options)
    }))
  }

  public deleteArtist(artistId: number) {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = this.authService.getBasicHeader(auth)
      return this.http.delete(`${environment.API_URL}/artists/${artistId}`, options)
    }))
  }

  public getArtistCover(artistId: number): Observable<Blob> {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = {
        headers: {
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        },
        responseType: 'blob' as 'json',
      }

      return this.http.get<Blob>(`${environment.API_URL}/artists/${artistId}/images/cover`, options)
    }))
  }

  public uploadArtistCover(artistId: number, file: File) {
    return this.authService.getAuth().pipe(mergeMap(auth => {
      const options = {
        headers: {
          Authorization: `${auth.data.token_type} ${auth.data.access_token}`
        }
      }
      const formData = new FormData()
      formData.append('cover', file)
      return this.http.put(`${environment.API_URL}/artists/${artistId}/images/cover`, formData, options)
    }))
  }
}
