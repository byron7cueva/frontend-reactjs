import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as tasksActions from '../../actions/tasksActions'
import { Spinner } from '../General/Spinner'
import { Fatal } from '../General/Fatal'
import { Redirect } from 'react-router-dom'

class SaveComponent extends Component {

  componentDidMount() {
    const {
      match: { params: { userId, taskId }},
      tasks,
      changeUserId,
      changeTitle,
      cleanForm
    } = this.props

    if (userId && taskId) {
      const task = tasks[userId][taskId]
      changeUserId(task.userId)
      changeTitle(task.title)
    } else {
      cleanForm()
    }
  }

  changeUserId = (event) => {
    this.props.changeUserId(event.target.value)
  }

  changeUserTitle = event => {
    this.props.changeTitle(event.target.value)
  }

  guardar = () => {
    const {
      match: { params: { userId: paramUserId, taskId }},
      tasks,
      userId,
      title,
      add,
      edit
    } = this.props

    const newTask = {
      userId,
      title,
      completed: false
    }

    // Si vienen los parametos entonces editamos
    if (paramUserId && taskId) {
      const task = tasks[paramUserId][taskId]
      const editedTask = {
        ...newTask,
        completed: task.completed,
        id: taskId
      }
      edit(editedTask)
    } else {
      // Caso contrario guardamos un nuevo
      add(newTask)
    }

  }

  disabled = () => {
    const { userId, title, loading } = this.props
    if (loading || !userId || !title) return true
    return false
  }

  showAction = () => {
    const { error, loading } = this.props

    if (loading) return <Spinner />
    if (error) return <Fatal message={error} />
  }

  render() {
    return (
      <div>
        { (this.props.back) ? <Redirect to='/tareas' />: null}
        <h1>Guardar Tarea</h1>
        Usuario id:
        <input
          type='number'
          value={this.props.userId}
          onChange={this.changeUserId}
        />
        <br /><br/>
        Titulo: 
        <input
          type='text'
          value={this.props.title}
          onChange={this.changeUserTitle}
        />
        <br /><br/>
        <button
          onClick={this.guardar}
          disabled={this.disabled()}
        >
          Guardar
        </button>
        { this.showAction() }
      </div>
    )
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer

export const Save = connect(mapStateToProps, tasksActions)(SaveComponent)