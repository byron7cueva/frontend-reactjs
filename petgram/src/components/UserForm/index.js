import React, { Fragment } from 'react'

import { Form, Input, Title, Error } from './styles'
import { useInputValue } from '../../hooks/useInputValue'
import { SubmitButton } from '../../components/SubmitButton'

export const UserForm = ({ error, onSubmit, title, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input placeholder="Email" {...email} disabled={disabled} />
        <Input
          placeholder="Password"
          type="password"
          {...password}
          disabled={disabled}
        />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  )
}
