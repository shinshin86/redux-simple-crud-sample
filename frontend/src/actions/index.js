export const REQUEST_ALL_USER = 'REQUEST_ALL_USER'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const FAILURE_DATA = 'FAILURE_DATA'

export const CREATE_USER = 'CREATE_USER'
export const SUCCESS_CREATE_USER = 'SUCCESS_CREATE_USER'
export const FAILURE_CREATE_USER = 'FAILURE_CREATE_USER'

export const UPDATE_USER = 'UPDATE_USER'
export const SUCCESS_UPDATE_USER = 'SUCCESS_UPDATE_USER'
export const FAILURE_UPDATE_USER = 'FAILURE_UPDATE_USER'

export const REQUEST_USER = 'REQUEST_USER'

export const DELETE_USER = 'DELETE_USER'
export const SUCCESS_DELETE_USER = 'SUCCESS_DELETE_USER'
export const FAILURE_DELETE_USER = 'FAILURE_DELETE_USER'

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

export function updateUser(data) {
  return {
    type: UPDATE_USER,
    data
  }
}

export function successUpdateUser(data) {
  return {
    type: SUCCESS_UPDATE_USER,
    data
  }
}

export function failureUpdateUser(data) {
  return {
    type: FAILURE_UPDATE_USER,
    data
  }
}

export function requestUser(userId) {
  return {
    type: REQUEST_USER,
    userId
  }
}

export function deleteUser(userId) {
  return {
    type: DELETE_USER,
    userId
  }
}

export function successDeleteUser(data) {
  return {
    type: SUCCESS_DELETE_USER,
    data
  }
}

export function failureDeleteUser(data) {
  return {
    type: FAILURE_DELETE_USER,
    data
  }
}

