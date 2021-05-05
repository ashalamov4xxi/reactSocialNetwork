import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA'

export type InitialStateTyp = {
  userId: number | null
  email: null | null
  login: null | null
  isAuth: boolean
}

let initialState = {
  userId: null as string | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

type SetAuthUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
})
export const getAuthUserData = () => (dispatch: any) => {
  return authAPI.me().then((response: any) => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data
      dispatch(setAuthUserData(id, email, login, true))
    }
  })
}

export const login = (email: string, password: string, rememberMe: boolean) => (
  dispatch: any
) => {
  authAPI.login(email, password, rememberMe).then((response: any) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : 'Some error'
      dispatch(stopSubmit('login', { _error: message }))
    }
  })
}

export const logout = () => (dispatch: any) => {
  authAPI.logout().then((response: any) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  })
}
export default authReducer
