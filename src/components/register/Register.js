import React, { Component } from 'react'
import Securitydetail from './securitydetail'
import Personaldetail from './PersonalDetail'
import Confirmmation from './Confirmmation'
import Thankyou from './Thankyou'


export default class Register extends Component {

    constructor() {
        super()
        this.state = {
            step: 1,
            user: {
                username: '',
                password: '',
                password2: '',
                firstName: '',
                lastName: '',
                language: '',
                birthDay: 0,
                userConfirmation: false,
            },
            validateError: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleStep = this.handleStep.bind(this)
        this.isValidate = this.isValidate.bind(this)
    }

    isValidate(keys) {
        const { user } = this.state
        let validateError = []
        const result = keys.map(key => {
            switch (key) {
                case 'username':
                    const regex = /^[A-Za-z0-9]{8,}$/
                    const regex_exec = regex.exec(user.username)
                    if (!(regex_exec)) {
                        validateError.push("User just have alphabet and number, minimun lenght is 8 letters.")
                    }
                    break
                case 'password':
                    if (user.password.length < 8) {
                        validateError.push("Password must be longer than 8 charts.")
                    }
                    if (user.password !== user.password2) {
                        validateError.push("Confim password are not correct.")
                    }
                    break
                case 'firstName':
                    if (user.firstName.length < 1) {
                        validateError.push("You must fill First name")
                    }
                    break
                case 'lastName':
                    if (user.lastName.length < 1) {
                        validateError.push("You must fill Last name")
                    }
                    break
                case 'userConfirmation':
                    if (!(user.userConfirmation)) {
                        validateError.push("You must confim")
                    }
                    break
                case 'birthDay':
                    const regexBirthDay = /^[0-9]{4}$/
                    const regex_exec_regexBirthDay = regexBirthDay.exec(user.birthDay)
                    if (!(regex_exec_regexBirthDay)) {
                        validateError.push("Must be 4 digits")
                    }
                    break
                default:
                    validateError.push('')
            }
        })
        this.setState({ validateError })
        return validateError.length === 0 ? true : false
    }

    handleStep() {
        if (this.state.step === 1 && this.isValidate(['username', 'password'])) {
            this.setState({
                step: this.state.step + 1
            })
        }
        if (this.state.step === 2 && this.isValidate(['firstName', 'lastName', 'birthDay'])) {
            this.setState({
                step: this.state.step + 1
            })
        }
        if (this.state.step === 3 && this.isValidate(['userConfirmation'])) {
            this.setState({
                step: this.state.step + 1
            })
        }
    }

    handleChange = (input) => (e) => {
        console.log({ [input]: e.target.value })
        this.setState({
            user: {
                ...this.state.user,
                [input]: e.target.value
            }
        })
    }

    handleChangeSec = (input) => (e, { value }) => {
        console.log('sec', { [input]: value })
        this.setState({
            user: {
                ...this.state.user,
                [input]: value
            }
        })
    }

    render() {
        const { username, password, password2, firstName, lastName, language, birthDay, userConfirmation } = this.state.user
        const value = { username, password, password2, firstName, lastName, language, birthDay, userConfirmation }

        const step = () => {
            switch (this.state.step) {
                case 1:
                    return <Securitydetail
                        nextStep={this.handleStep}
                        onChange={this.handleChange}
                        value={value}
                        isValidate={this.isValidate}
                    />
                case 2:
                    return <Personaldetail
                        nextStep={this.handleStep}
                        onChange={this.handleChange}
                        value={value}
                        isValidate={this.isValidate}
                        onChangeSec={this.handleChangeSec}
                    />
                case 3:
                    return <Confirmmation
                        nextStep={this.handleStep}
                        onChange={this.handleChange}
                        value={value}
                        isValidate={this.isValidate}
                        onChangeSec={this.handleChangeSec}
                    />
                case 4:
                    return <Thankyou />
                default:
                // Do nothing
            }
        }
        return (
            <div>
                {this.state.validateError}
                {step()}
            </div>
        )
    }
}