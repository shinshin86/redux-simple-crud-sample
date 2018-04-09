import { REQUEST_ALL_USER, RECEIVE_DATA, FAILURE_DATA,
         CREATE_USER, SUCCESS_CREATE_USER, FAILURE_CREATE_USER,
         REQUEST_USER
       } from '../actions'

const initial = {
  data: {
    isFetching: false,
    data: [],
  },
};


export default function userManager(
  state=initial.data,
  action
) {
  switch (action.type) {
    case REQUEST_ALL_USER:
      return { ...state, isFetching: true }
    case RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FAILURE_DATA:
      return {
        ...state,
        isFetching: false,
      }
    case CREATE_USER:
      return {
        ...state,
        isProcessing: true
      }
    case SUCCESS_CREATE_USER:
      return {
        ...state,
        isProcessing: false,
        insertId: action.data.insertId
      }
    case FAILURE_CREATE_USER:
      return {
        ...state,
        isProcessing: false
      }
    case REQUEST_USER:
      return {
        ...state,
        isFetching: true,
        userId: action.userId
      }
    default:
      return state
  }
}
