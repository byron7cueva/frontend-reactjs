import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as tasksActions from '../../actions/tasksActions'
import { Spinner } from '../General/Spinner'
import { Fatal } from '../General/Fatal'
import { Link } from 'react-router-dom'

class TasksComponent extends Component {
  componentDidMount() {
    // Cargar las tareas solo cuando estas todavia no se han cargado
    if (!Object.keys(this.props.tasks).length) {
      this.props.getAll()
    }
  }

  componentDidUpdate() {
    const {
      tasks,
      loading,
      getAll
    } = this.props
    // En el caso que se actualizo
    if (!Object.keys(tasks).length && !loading) {
      getAll()
    }
  }

  showContent = () => {
    const { tasks, loading, error } = this.props

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <Fatal message={ error } />
    }

    return Object.keys(tasks).map( userId => (
      <div key={userId}>
        <h2>Usuario { userId }</h2>
        <div className='task__container'>
          { this.pushTasks(userId) }
        </div>
      </div>
    ))
  }

  pushTasks = userId => {
    const {
      tasks,
      changeCheck,
      deleteTask
    } = this.props
    const byUser = {
      ...tasks[userId]
    }
    return Object.keys(byUser).map(taskId => (
      <div key={taskId}>
        <input
          type='checkbox'
          defaultChecked={byUser[taskId].completed}
          onChange={ () => changeCheck(userId, taskId) }
        />
        { byUser[taskId].title }
        <button className='m-left'>
          <Link to={`/tareas/guardar/${userId}/${taskId}`}>Editar</Link>
        </button>
        <button className='m-left' onClick={ () => deleteTask(taskId) }>
          Eliminar
        </button>
      </div>
    ))
  } 

  render() {
    return (
      <div>
        <button>
          <Link to='/tareas/guardar'>Agregar</Link>
        </button>
        { this.showContent() }
      </div>
    )
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export const Tasks = connect(mapStateToProps, tasksActions)(TasksComponent)