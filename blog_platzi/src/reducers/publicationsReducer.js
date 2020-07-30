import {
  GET_ALL,
  LOADING,
  ERROR,
  UPDATE,
  COM_LOADING,
  COM_ERROR,
  COM_UPDATE
} from '../types/publicationsType'

const INITIAL_STATE = {
  publications: [],
  loading: false,
  error: '',
  comLoading: false,
  comError: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        publications: action.payload,
        loading: false,
        error: ''
      }

    case UPDATE:
      return {
        ...state,
        publications: action.payload,
        loading: false,
        error: ''
      }
    
    case LOADING:
      return { ...state, loading: true}

    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case COM_UPDATE:
      return {
        ...state,
        publications: action.payload,
        comLoading: false,
        comError: ''
      }

    case COM_LOADING:
      return { ...state, comLoading: true}

    case COM_ERROR:
      return {
        ...state,
        comError: action.payload,
        comLoading: false
      }

    default: return state
  }
}