import React from 'react'
import {
    Container,
    Menu,
} from 'semantic-ui-react'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {

    return(
        <Menu fixed='top' inverted>
            <Container>
                <SignedInLinks />
                <SignedOutLinks />
            </Container>
        </Menu>
    )

}

export default Navbar