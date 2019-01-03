import { Action } from '@ngrx/store';
import * as AuthActions from './auth.actions';
 
export const initialState = {
  attemps: 0,
  isAuthenticated: false,
  data: {}
};
 
export function authReducer(state = initialState, action: AuthActions.ActionsUnion) {
  switch (action.type) {
    case AuthActions.ActionTypes.LoginSuccess: {
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload
      }
    }
 
    default:
      return state;
  }
}