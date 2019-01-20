import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from './login-form.model';
import { environment } from 'src/environments/environment';
import { async } from 'q';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store<any>,private http:HttpClient) { }

  isAuthenticated() {
    return this.store.select('auth')
  }

  login(credential: LoginForm) {
    const formData: URLSearchParams = new URLSearchParams();
    formData.append('username', credential.username)
    formData.append('password', credential.password)
    formData.append('grant_type', 'password')
    formData.append('client_id', 'kevent_client')

    return this.http.post(`${environment.API_URL}/oauth/token`, formData.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${environment.CLIENT_ID}:${environment.CLIENT_SECRET}`)}`
      }
    })
  }

  getAuth(): Observable<any> {
    return this.store.select('auth')
  }
}
