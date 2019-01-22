import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'


export default class SearchExampleStandard extends Component {
    componentWillMount() {
        this.resetComponent()
    }

    componentDidMount() {
        if (this.state.value) {
            const e = { value: this.state.value }
            this.handleSearchChange(e)
        }
    }

    resetComponent = () => {
        const search = this.props.location.search.split('=')
        if (search[0] === '?q') {
            this.setState({ isLoading: false, results: [], value: search[1] })
        } else {
            this.setState({ isLoading: false, results: [], value: '' })
        }
    }

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    searchURL = (value) => {
        const search = (value === undefined) ? [''] : value.split(':')
        if (search.length === 2) {
            console.log(search[0])
            switch (search[0]) {
                case 'tag':
                    return `http://127.0.0.1:9000/api/page/pages/?type=pages.NewsPage&fields=tags&tags=${search[1]}`
                case 'category':
                    return `http://127.0.0.1:9000/api/page/pages/?type=pages.NewsPage&fields=tags&category=${search[1]}`
                default:
                    return `http://127.0.0.1:9000/api/page/pages/?search=${this.state.value}&type=pages.NewsPage&fields=feed_image_thumbnail`
            }

        } else {
            return `http://127.0.0.1:9000/api/page/pages/?search=${this.state.value}&type=pages.NewsPage&fields=feed_image_thumbnail`
        }
    }

    handleSearchChange = ( e, { value } ) => {
        this.setState({
            isLoading: true,
            value: value
        })
        const url = this.searchURL(value)
        fetch(url).then(res => res.json()).then(data => {
            console.log(data)
            this.setState({
                isLoading: false,
                results: data.items
            })
        })
    }

    render() {
        const { isLoading, value, results } = this.state

        return (
            <Grid>
                <Grid.Column width={6}>
                    <Search
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(this.handleSearchChange, 1500, { leading: true })}
                        results={results}
                        value={value}
                        {...this.props}
                    />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Segment>
                        <Header>State</Header>
                        <pre style={{ overflowX: 'auto' }}>{JSON.stringify(this.state, null, 2)}</pre>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}
