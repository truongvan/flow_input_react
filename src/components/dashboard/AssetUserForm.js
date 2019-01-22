import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import { TimeInput, DateInput } from 'semantic-ui-calendar-react'
import { connect } from 'react-redux'

import addAsset from '../../store/action/assetAction'

class AssetUserForm extends Component {
    constructor() {
        super()
        var moment = require('moment')
        this.state = {
            assetList: [],
            assetURL: [],
            submitResult: '',
            date: moment().format('DD-MM-YYYY'),
            time: moment().format('H:mm'),
            base: null,
            asset: null,
            amount: null,
            price: null,
            price_type: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        var assetURL = {}
        const url = new URL(`http://127.0.0.1:9000/api/assets/`)
        fetch(url).then(res => res.json()).then(data => {
            const assetList = data.results.map(item => {
                assetURL = Object.assign(assetURL, { [item.pk]: item.name })
                return {
                    text: item.name ? item.name : item.symbol,
                    value: item.pk,
                }
            })
            this.setState({ assetList: assetList, assetURL: assetURL })
        })
    }

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const asset = {
            price_type: this.state.price_type,
            base: this.state.base,
            asset: this.state.asset,
            price: this.state.price,
            amount: this.state.amount,
            timestamp: this.state.date + ' ' + this.state.time
        }
        this.props.addAsset(asset)
        this.setState({
            base: null,
            asset: null,
            price: null,
            amount: null,
            price_type: null,
        })
    }

    render() {
        const typePrice = [
            { text: 'Buy', value: 'buy' },
            { text: 'Sell', value: 'sell' },
        ]
        const assetList = "assetList" in this.state ? this.state.assetList : []

        return (
            <Form onSubmit={e => { this.handleSubmit(e, this.props.requestMethod, this.props.assetUserNumber)}}>
                <Report data={this.state} />
                <Form.Group widths='equal'>
                    <Form.Select
                        search
                        selection
                        name='base'
                        label='Base'
                        placeholder='Base'
                        onChange={this.handleChange}
                        options={assetList}
                        value={this.state.base}
                    />
                    <Form.Select
                        search
                        selection
                        name='asset'
                        label='Asset'
                        placeholder='Asset'
                        onChange={this.handleChange}
                        options={assetList}
                        value={this.state.asset}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input label='Price' type='number' name='price' onChange={this.handleChange} />
                    <Form.Input label='Amount' type='number' name='amount' onChange={this.handleChange} />
                    <Form.Select
                        name='price_type'
                        label='Type'
                        placeholder='Type'
                        onChange={this.handleChange}
                        options={typePrice}
                        value={this.state.price_type}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <div className="field">
                        <label>Date</label>
                        <DateInput
                            name="date"
                            value={this.state.date}
                            iconPosition="left"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="field">
                        <label>Time</label>
                        <TimeInput
                            name="time"
                            value={this.state.time}
                            iconPosition="left"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="field">
                        <label style={{ minHeight: '19px'}}></label>
                        <Issubmit data={this.state} />
                    </div>
                </Form.Group>
            </Form>
        )
    }
    
}

const Report = (props) => {
    const { base, asset, amount, price_type, date, time, price, assetURL } = props.data
    const baseName = assetURL[base]
    const assetName = assetURL[asset]
    if (!(base, asset, price_type === null) &&
        date.length * time.length > 0 &&
        !(amount, price === null)) {
        const toDo = price_type === 'buy' ? 'mua' : 'bán'
        return (
            <Segment>
                Tôi <b>{toDo}</b> <b>{amount}</b> <b>{assetName}</b> bằng <b>{baseName}</b> với giá là <b>{price}</b> vào lúc <b>{time}</b> ngày <b>{date}</b>.
            </Segment>
        )
    } else if (props.data.submitResult) {
        const report = 'detail' in props.data.submitResult ? ['You must login [again]'] : props.data.submitResult
        return (
            <Segment>
                <p>{JSON.stringify(report)}</p>
            </Segment>
        )
    }
    return (
        <div style={{ minHeight: '51px', marginBottom: '14px' }}></div>
    )
}

const Issubmit = (props) => {
    const { base, asset, amount, price_type, date, time, price } = props.data
    if ( !(base, asset, price_type === null) &&
        date.length * time.length > 0 &&
        ! (amount, price === null)) {
        return (
            <Form.Button content='Submit' />
        )
    }
    return (
        <Form.Button content='Submit' disabled />
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAsset: (asset) => dispatch(addAsset(asset))
    }
}

export default connect(null, mapDispatchToProps)(AssetUserForm)