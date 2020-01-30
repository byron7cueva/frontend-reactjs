import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'

import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <Fragment>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables }).then(({ data }) => {
              const { signup } = data
              console.log(data)
              activateAuth(signup)
            })
          }
          const errorMsg = error && 'El usuario ya existe o hay algun problema'

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              onSubmit={onSubmit}
              title="Registrarse"
            />
          )
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
            })
          }
          const errorMsg =
            error && 'El contraseña es incorrecta o el usuario no existe'
          return (
            <UserForm
              error={errorMsg}
              disabled={loading}
              onSubmit={onSubmit}
              title="Iniciar sesión"
            />
          )
        }}
      </LoginMutation>
    </Fragment>
  )
}
