import { take, put, call, fork } from 'redux-saga/effects'
import { REQUEST_ALL_USER, receiveData, failureData,
         CREATE_USER, successCreateUser, failureCreateUser,
         REQUEST_USER
       } from '../actions'
import fetch from 'isomorphic-fetch'
import { push } from 'react-router-redux'

export function* handleRequestUsers() {
  while(true) {
    const action = yield take(REQUEST_ALL_USER)
    const data = yield call(fetchAllUser)

    if(data) {
      yield put(receiveData(data))
    } else {
      yield put(failureData())
    }
  }
}

export function fetchAllUser() {
  const url = 'http://localhost:3001/users'
  return fetch(url)
    .then(res => res.json())
    .catch(err => {
      console.error(`ERROR: ${err}`)
      throw new Error('ERROR')
    })
}

export function createNewUser(data) {
  const url = 'http://localhost:3001/user/new'

  return fetch(url, {
    body: JSON.stringify(data),
    cache: 'no-chahe',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer',
  })
  .then(res => res.json())
}

export function* handleCreateUser() {
  while(true) {
    const action = yield take(CREATE_USER)
    const data = yield call(createNewUser, action.data)

    if(data) {
      yield put(successCreateUser(data))
    } else {
      yield put(failureCreateUser(data))
    }
  }
}

export function* handleRequestUser() {
  while(true) {
    const action = yield take(REQUEST_USER)
    const data = yield call(fetchUser, action.userId)

    if(data) {
      yield put(receiveData(data))
    } else {
      yield put(failureData())
    }
  }
}

export function fetchUser(id) {
  const url = `http://localhost:3001/user/${id}`
  return fetch(url)
    .then(res => res.json())
    .catch(err => {
      console.error(`ERROR: ${err}`)
      throw new Error('ERROR')
    })
}

export default function* root() {
  yield fork(handleRequestUsers)
  yield fork(handleCreateUser)
  yield fork(handleRequestUser)
}
