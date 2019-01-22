import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPage } from '../../store/action/pageAction'

import Body from './Body'

class Landingpage extends Component {
    componentDidMount() {
        const slug = this.props.match.params.slug
        if (!(slug in this.props.page)) {
            this.props.getPage(slug)
        }
    }

    render() {
        const slug = this.props.match.params.slug
        const page = this.props.page[slug]

        if (page) {
            return (
                <div><Body data={page} /></div>
            )
        } 
        return (
            <div>
            </div>
        )
       
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page.page,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPage: (slug) => dispatch(getPage(slug))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landingpage)