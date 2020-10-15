import axios from 'axios'
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

export const getAll = () => {
  return async (dispatch) => {
    dispatch({
      type: LOADING
    })

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

      const tasks = {}
      response.data.map((task) => {
        // Inmutabilidad
        // Agregando por id de usuario
        tasks[task.userId] = {
          // Agregando todos los que ya tiene
          ...tasks[task.userId],
          // Agregando por id de la tarea
          [task.id]: {
            ...task
          }
        }
      })

      dispatch({
        type: GET_ALL,
        payload: tasks
      })

    } catch (error) {
      dispatch({
        type: ERROR,
        payload: 'Información de tareas no disponoble'
      })
    }
  }
}

export const add = (newTask) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING
    })

    try {
      await axios
        .post('https://jsonplaceholder.typicode.com/todos', newTask)
      
      dispatch({
        type: SAVE
      })
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: 'Intente más tarde.'
      })
    }
  }
}

export const edit = (editedTask) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING
    })

    try {
      await axios
        .put(`https://jsonplaceholder.typicode.com/todos/${editedTask.id}`, editedTask)

      dispatch({
        type: SAVE
      })

    } catch (error) {
      dispatch({
        type: ERROR,
        payload: 'Intente más tarde.'
      })
    }
  }
}

export const deleteTask = (taskId) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING
    })

    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${taskId}`)

      dispatch({
        type: GET_ALL,
        payload: {}
      })

    } catch (error) {
      dispatch({
        type: ERROR,
        payload: 'El servicio no se encuentra disponible.'
      })
    }
  }
}

export const changeUserId = (userId) => {
  return dispatch => {
    dispatch({
      type: CHANGE_USER_ID,
      payload: userId
    })
  }
}

export const changeTitle = (title) => {
  return dispatch => {
    dispatch({
      type: CHANGE_TITLE,
      payload: title
    })
  }
}

export const changeCheck = (userId, taskId) => {
  return (dispatch, getState) => {
    // Inmutabilidad
    const { tasks } = getState().tasksReducer
    const selectedTask = tasks[userId][taskId]
    // No se debe alterar directamente el estado
    const updated = {
      // spread operator (...) solo pone el primer nivel
      ...tasks
    }
    updated[userId] = {
      ...tasks[userId]
    }
    updated[userId][taskId] = {
      ...tasks[userId][taskId],
      completed: !selectedTask.completed
    }

    // El dispatch es el unico que debe alterar el estado
    dispatch({
      type: UPDATE,
      payload: updated
    })
  }
}

export const cleanForm = () => {
  return dispatch => {
    dispatch({
      type: CLEAN
    })
  }
}