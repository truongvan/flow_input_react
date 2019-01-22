import React from 'react'
import { Icon, Button, Menu, Table, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import AssetUserForm from './AssetUserForm'
import { getAssets } from '../../store/action/assetAction'

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            currentPage:1
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {        
        if ( !(this.state.currentPage in this.props.userAssets.page)) {
            this.props.getAssets(this.state.currentPage)
        }
    }

    handleClick(e, { value }) {
        this.setState({
            currentPage: value
        })
        if (!(value in this.props.userAssets.page)) {
            console.log('getasset', value)
            this.props.getAssets(value)
        }

    }
    
    render() {
        const { userAssets } = this.props
        const page = userAssets.page[this.state.currentPage]
        const { listNumber } = userAssets
        var moment = require('moment')
        const assetList = page && page.map(asset => {
            return (
                <Table.Row key={asset.pk}>
                    <Table.Cell>{asset.base}</Table.Cell>
                    <Table.Cell>{asset.asset}</Table.Cell>
                    <Table.Cell>{asset.price}</Table.Cell>
                    <Table.Cell>{asset.amount}</Table.Cell>
                    <Table.Cell>{asset.price_type}</Table.Cell>
                    <Table.Cell>{moment(asset.timestamp).fromNow()}</Table.Cell>
                </Table.Row>
            )
        })
        const menuItem = listNumber.map(number => {
            return (
                <Menu.Item key={number} onClick={this.handleClick} value={number} as='a'>{number}</Menu.Item>
            )
        })

        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Base</Table.HeaderCell>
                        <Table.HeaderCell>Asset</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                        <Table.HeaderCell>Price Type</Table.HeaderCell>
                        <Table.HeaderCell>Timestamp</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {assetList}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='6'>
                            <Modal trigger={
                                <Button floated='left' icon labelPosition='left' primary size='small'>
                                    <Icon name='plus' /> Add Asset
                            </Button>
                            } centered={false}>
                                <Modal.Header>Add asset</Modal.Header>
                                <Modal.Content>
                                    <AssetUserForm
                                        style={{ margin: '3rem' }}
                                    />
                                </Modal.Content>
                            </Modal>
                            <Menu size='mini' floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                {menuItem}
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        userAssets: state.asset.userAssets,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAssets: (currentPage) => dispatch(getAssets(currentPage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
