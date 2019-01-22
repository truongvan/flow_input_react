import React, { Component } from 'react'
import { Button, Form, Select } from 'semantic-ui-react'
import { isoLangs } from './isoLang'

export default class Personaldetail extends Component {
    render() {
        const { value } = this.props
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label>First name</label>
                        <input defaultValue={value.firstName} onChange={this.props.onChange('firstName')} placeholder='First name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Last name</label>
                        <input placeholder='Last name' defaultValue={value.lastName} onChange={this.props.onChange('lastName')} />
                    </Form.Field>
                </Form.Group>
                <Form.Field
                    control={Select}
                    options={isoLangs}
                    label={{ children: 'Langague', htmlFor: 'langagueform' }}
                    placeholder='Langague'
                    search
                    searchInput={{ id: 'langagueform' }}
                    onChange={this.props.onChangeSec('language')}
                    defaultValue={value.language}
                />
                <Form.Field>
                    <label>Birthday</label>
                    <input type="number" min='0' max='2019' placeholder='Birthday' defaultValue={value.birthDay} onChange={this.props.onChange('birthDay')} />
                </Form.Field>
                <Button onClick={this.props.nextStep}>Next</Button>
            </Form>
        )
    }
}
