export const REQUEST_ALL_USER = 'REQUEST_ALL_USER'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const FAILURE_DATA = 'FAILURE_DATA'

export const CREATE_USER = 'CREATE_USER'
export const SUCCESS_CREATE_USER = 'SUCCESS_CREATE_USER'
export const FAILURE_CREATE_USER = 'FAILURE_CREATE_USER'

export function requestAllUser(data) {
  return {
    type: REQUEST_ALL_USER
  }
}

export function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data
  }
}

export function failureData() {
  return {
    type: FAILURE_DATA
  }
}

export function createUser(data) {
  return {
    type: CREATE_USER,
    data 
  }
}

export function successCreateUser(data) {
  return {
    type: SUCCESS_CREATE_USER,
    data
  }
}

export function failureCreateUser(data) {
  return {
    type: FAILURE_CREATE_USER,
    data
  }
}
