import React from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Image,
    Menu,
} from 'semantic-ui-react'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import CategoryMenu from '../page/CategoryMenu'

const Navbar = () => {

    return(
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header as={Link} to='/'>
                    <Image size='mini' src='/logo.svg' style={{ marginRight: '1.5em' }} />
                    domogram
                        </Menu.Item>
                <Menu.Item as={Link} to='/dashboard'>Dashboard</Menu.Item>
                <CategoryMenu />
                <SignedInLinks />
                <SignedOutLinks />
            </Container>
        </Menu>
    )

}

export default Navbar