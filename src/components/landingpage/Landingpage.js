import React, { Component } from 'react'
import { Container, Header, Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getPages } from '../../store/action/pageAction'

class Landingpage extends Component {
    componentDidMount() {
        if (this.props.pages.length === 0) {
            this.props.getPages()
        }
    }

    render() {
        const { pages } = this.props
        console.log(pages)
        const cards = pages &&
            pages.map(page => <Link key={page.id} to={'/page/' + String(page.meta.slug)}>
                <Card
                    key={page.id}
                    header={page.title}
                    meta={page.meta.slug}
                    description={page.meta.first_published_at} />
            </Link>)

        return (
            <Container>
                <Header as='h2'>News</Header>
                <Card.Group>
                    {cards}
                </Card.Group>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pages: state.page.pages,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPages: () => dispatch(getPages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landingpage)