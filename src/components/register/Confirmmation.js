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
                    <Header>Google Chrome Terms of Service</Header>
                    <p>These Terms of Service apply to the executable code version of Google Chrome. Source code for Google Chrome is available free of charge under open source software license agreements at chrome://credits.</p>
                    <p>1. Your relationship with Google</p>
                    <p>1.1 Your use of Google’s products, software, services and web sites (referred to collectively as the “Services” in this document and excluding any services provided to you by Google under a separate written agreement) is subject to the terms of a legal agreement between you and Google. “Google” means Google Inc., whose principal place of business is at 1600 Amphitheatre Parkway, Mountain View, CA 94043, United States. This document explains how the agreement is made up, and sets out some of the terms of that agreement.</p>
                    <p>1.2 Unless otherwise agreed in writing with Google, your agreement with Google will always include, at a minimum, the terms and conditions set out in this document. These are referred to below as the “Universal Terms”. Open source software licenses for Google Chrome source code constitute separate written agreements. To the limited extent that the open source software licenses expressly supersede these Universal Terms, the open source licenses govern your agreement with Google for the use of Google Chrome or specific included components of Google Chrome.</p>
                    <p>1.3 Your agreement with Google will also include the terms set forth below in the Google Chrome Additional Terms of Service and terms of any Legal Notices applicable to the Services, in addition to the Universal Terms. All of these are referred to below as the “Additional Terms”. Where Additional Terms apply to a Service, these will be accessible for you to read either within, or through your use of, that Service.</p>
                    <p>1.4 The Universal Terms, together with the Additional Terms, form a legally binding agreement between you and Google in relation to your use of the Services. It is important that you take the time to read them carefully. Collectively, this legal agreement is referred to below as the “Terms”.</p>
                    <p>1.5 If there is any contradiction between what the Additional Terms say and what the Universal Terms say, then the Additional Terms shall take precedence in relation to that Service.</p>
                </Segment>
                <Form>
                    <Form.Checkbox onChange={this.handleChange} checked={value.userConfirmation} label='I agree to the Terms and Conditions' />
                    <Button onClick={this.props.nextStep}>Next</Button>
                </Form>
            </div>

        )
    }
}
