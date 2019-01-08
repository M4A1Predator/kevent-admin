import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes, LoginSuccess } from './auth.actions';
import { LocalStorageService } from '../storage/local-storage.service';
 
@Injectable()
export class AuthEffects {
  // Listen for the 'LOGIN' action
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType<LoginSuccess>(ActionTypes.LoginSuccess),
    // mergeMap(action =>
    //   this.http.post('/auth', action.payload).pipe(
    //     // If successful, dispatch success action with result
    //     map(data => ({ type: 'LOGIN_SUCCESS', payload: data })),
    //     // If request fails, dispatch failed action
    //     catchError(() => of({ type: 'LOGIN_FAILED' }))
    //   )
    // )
    mergeMap(action => {
      return new Observable(observable => {
        this.store.select('auth').subscribe(a => {
          this.localStorageService.setItem('auth', a);
        })
      })
    })
  );

  @Effect()
  logout$: Observable<Action> = this.actions$.pipe(
    ofType<LoginSuccess>(ActionTypes.LogoutSuccess),
    mergeMap(action => {
      return new Observable(observable => {
        this.store.select('auth').subscribe(a => {
          this.localStorageService.setItem('auth', a);
        })
      })
    })
  );
 
  constructor(private http: HttpClient, 
    private store: Store<any>,
    private actions$: Actions, 
    private localStorageService: LocalStorageService) {}
}