import { take, put, call, fork } from 'redux-saga/effects'
import { REQUEST_ALL_USER, receiveData, failureData, requestAllUser,
         CREATE_USER, successCreateUser, failureCreateUser,
         UPDATE_USER, successUpdateUser, failureUpdateUser,
         REQUEST_USER,
         DELETE_USER, successDeleteUser, failureDeleteUser,
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

export function updateUser(data, userId) {
  const url = `http://localhost:3001/user/${userId}`

  return fetch(url, {
    body: JSON.stringify(data),
    cache: 'no-chahe',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json'
    },
    method: 'PUT',
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
      yield put(push('/users'))
    } else {
      yield put(failureCreateUser(data))
    }
  }
}

export function* handleUpdateUser() {
  while(true) {
    const action = yield take(UPDATE_USER)
    const { userId, name, role } = action.data
    const query = {
      name: name,
      role: role
    }
    const data = yield call(updateUser, query, userId)

    if(data) {
      const res = {changedRows: data.changedRows,
                   id: userId,
                   name: name,
                   role: role}
      yield put(successUpdateUser(res))
    } else {
      yield put(failureUpdateUser(data))
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

export function* handleDeleteUser() {
  while(true) {
    const action = yield take(DELETE_USER)
    const data = yield call(deleteUser, action.userId)

    if(data) {
      yield put(successDeleteUser(data))
      yield put(requestAllUser())
    } else {
      yield put(failureDeleteUser(data))
    }
  }
}

export function deleteUser(id) {
  const url = `http://localhost:3001/user/${id}`

  return fetch(url, {
    cache: 'no-chahe',
    credentials: 'same-origin',
    method: 'DELETE',
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer',
  })
  .then(res => res.json())
}

export default function* root() {
  yield fork(handleRequestUsers)
  yield fork(handleCreateUser)
  yield fork(handleUpdateUser)
  yield fork(handleRequestUser)
  yield fork(handleDeleteUser)
}
