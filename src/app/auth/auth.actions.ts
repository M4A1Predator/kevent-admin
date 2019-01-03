import { Action } from '@ngrx/store'

export enum ActionTypes {
  LoginSuccess = '[Auth] LoginSuccess'
}

export class LoginSuccess implements Action {
  readonly type = ActionTypes.LoginSuccess

  constructor(public payload:any){}
}

export type ActionsUnion = LoginSuccess

