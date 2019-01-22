import React, { Component } from 'react'
import { Button, Header, Form, Segment } from 'semantic-ui-react'

export default class Confirmmation extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e, { checked }) {
        this.props.onChangeSec('userConfirmation')(e, { value: !this.props.value.userConfirmation })
    }
    render() {
        const { value } = this.props
        return (
            <div>
                <Segment placeholder>
                    <Header>Thank you</Header>
                </Segment>

            </div>

        )
    }
}
