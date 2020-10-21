import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store'
import { rootReducer } from '../app.root-reducer'
import { localStorageSync } from 'ngrx-store-localstorage'


// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state)
    console.log('action', action)
    return reducer(state, action)
  }
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['auth'], rehydrate: true})(reducer)
}
