import React, { Component } from 'react'
import { getCategories } from '../../store/action/pageAction'
import { Link } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'


class CategoryMenu extends Component {
    render() {
        const categories_list = this.props.categories.map(item => {
            const url = `/search?q=category:${item.name}`
            return <Dropdown.Item key={item.name} as={Link} to={url}>{item.name}</Dropdown.Item>
        }

        )
        return (
            <Dropdown item simple text='Categories'>
                <Dropdown.Menu>
                    {categories_list}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.page.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => dispatch(getCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu)