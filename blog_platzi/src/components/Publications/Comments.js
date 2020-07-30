import React from 'react'
import { connect } from 'react-redux'
import { Spinner } from '../General/Spinner'
import { Fatal } from '../General/Fatal'

const mapStateToProps = ({ publicationsReducer }) => publicationsReducer

const CommentsComponent = (props) => {

  if (props.comError) {
    return <Fatal message={props.comError} />
  }

  if (props.comLoading && !props.comments.length) {
    return <Spinner />
  }

  const pushComments = () => (
    props.comments.map( comment => (
      <li key={ comment.id }>
        <b><u>{ comment.email }</u></b>
        <br />
        { comment.body }
      </li>
    ))
  )

  return (
    <ul>
      { pushComments() }
    </ul>
  )
}

export const Comments = connect(mapStateToProps)(CommentsComponent)