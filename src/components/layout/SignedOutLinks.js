import React from 'react'
import {
    Menu,
} from 'semantic-ui-react'

const SignedOutLinks = () => {

    return (
        <Menu.Item href="/api/api-auth/login" to='/api/api-auth/login'>Login</Menu.Item>
    )

}

export default SignedOutLinks