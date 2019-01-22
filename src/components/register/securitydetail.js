import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class Securitydetail extends Component {
    render() {
        const { value } = this.props
        return (
            <Form>
                <Form.Field>
                    <label>Username</label>
                    <input defaultValue={value.username} onChange={this.props.onChange('username')} placeholder='Username' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type='password' placeholder='Password' defaultValue={value.password} onChange={this.props.onChange('password')} />
                </Form.Field>
                <Form.Field>
                    <label>Confim Password</label>
                    <input type='password' placeholder='Confim Password' defaultValue={value.password2} onChange={this.props.onChange('password2')} />
                </Form.Field>
                <Button onClick={this.props.nextStep}>Next</Button>
            </Form>
        )
    }
}
