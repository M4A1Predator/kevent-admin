import { Action } from '@ngrx/store'

export enum ActionTypes {
  LoginSuccess = '[Auth] LoginSuccess',
  LogoutSuccess = '[Auth] LogoutSuccess'
}

export class LoginSuccess implements Action {
  readonly type = ActionTypes.LoginSuccess

  constructor(public payload:any){}
}

export class LogoutSuccess implements Action {
  readonly type = ActionTypes.LogoutSuccess
}

export type ActionsUnion = LoginSuccess | LogoutSuccess

