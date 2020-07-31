import {
  GET_ALL,
  LOADING,
  ERROR,
  SAVE,
  UPDATE,
  CHANGE_USER_ID,
  CHANGE_TITLE,
  CLEAN
} from '../types/tasksTypes'

const INITIAL_STATE = {
  tasks: {},
  loading: false,
  error: '',
  userId: '',
  title: '',
  back: false
}

export const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
        error: '',
        back: false
      }
    
    case LOADING:
      return {
        ...state,
        loading: true
      }
    
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case CHANGE_USER_ID:
      return {
        ...state,
        userId: action.payload
      }

    case CHANGE_TITLE:
        return {
          ...state,
          title: action.payload
        }

    case SAVE:
        return {
          ...state,
          // Limpiamos las tareas para que se vuelva a buscar
          tasks: {},
          loading: false,
          error: '',
          userId: '',
          title: '',
          back: true
        }

    case UPDATE:
      return {
        ...state,
        tasks: action.payload
      }

    case CLEAN:
      return {
        ...state,
        userId: '',
        title: ''
      }

    default: return state
  }
}