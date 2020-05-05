/* Rendeizadp condicional */
import React, { Component } from 'react'

function UserGreting (props) {
    return <h1>Wellcome back!</h1>
}

function GuestGreting (props) {
    return <h1>Plese singin up.</h1>
}

function Gretting (props) {
    const isLoggedIn = props.isLoggedIn

    // Renderizado condicional a traves de if y el return del componente
    if (isLoggedIn) {
        return <UserGreting />
    }
    return <GuestGreting />
}

function LoginButton (props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton (props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

class LoginControl extends Component {
    constructor (props) {
        super(props)
        this.state = {isLoggedIn: false}

        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }

    handleLoginClick () {
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick () {
        this.setState({isLoggedIn: false})
    }

    render () {
        const isLoggedIn = this.state.isLoggedIn

        // Renderizado condicional a atraves de una variable
        let button
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return (
            <div>
                { isLoggedIn && <p>Logged</p>}
                <Gretting isLoggedIn={isLoggedIn} />
                {button}
                <div>
                    The user is <b>{isLoggedIn ? 'currenly' : 'not' }</b> logged in
                </div>
            </div>
        )
    }
}

export {
    LoginControl
}