import React from 'react'
import { Link } from 'react-router-dom'
import {
    Dropdown,
    Menu,
} from 'semantic-ui-react'

const SignedInLinks = () => {

    return (
        <Menu.Menu position='right'>
            <Dropdown item simple text='User'>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/login'>
                        Logout
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to='/logout'>Logout</Dropdown.Item>
                    <Dropdown.Item as={Link} to='/profile'>Profile</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Menu>
    )

}

export default SignedInLinks