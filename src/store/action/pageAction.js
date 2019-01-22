export function getPages() {
    return (dispatch, getState) => {
        const initFetch = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'accept': 'application/json',
            },
        }

        const url = `http://127.0.0.1:9000/api/page/pages/?type=pages.NewsPage&fields=feed_image_thumbnail`

        fetch(url, initFetch)
            .then(res => res.json())
            .then(data => {
                const pages = data.items
                dispatch({ type: 'GET_PAGES', pages })
            })
            .catch((err) => console.log(err))
    }
}

export function getTags() {
    return (dispatch, getState) => {
        const initFetch = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'accept': 'application/json',
            },
        }

        const url = `http://127.0.0.1:9000/api/page/tags`

        fetch(url, initFetch)
            .then(res => res.json())
            .then(data => {
                const tags = data.results
                dispatch({ type: 'GET_TAGS', tags })
            })
            .catch((err) => console.log(err))
    }
}
export function getCategories() {
    return (dispatch, getState) => {
        const initFetch = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'accept': 'application/json',
            },
        }

        const url = `http://127.0.0.1:9000/api/page/categories`

        fetch(url, initFetch)
            .then(res => res.json())
            .then(data => {
                const categories = data.results
                dispatch({ type: 'GET_CATEGORIES', categories })
            })
            .catch((err) => console.log(err))
    }
}

export function getPage(slug) {
    return (dispatch, getState) => {
        const initFetch = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'accept': 'application/json',
            },
        }

        const url = `http://127.0.0.1:9000/api/page/pages/?type=pages.NewsPage&fields=image,body,tags,categories&slug=${slug}`

        fetch(url, initFetch)
            .then(res => res.json())
            .then(data => {
                const page = data.items[0]
                dispatch({ type: 'GET_PAGE', page })
            })
            .catch((err) => console.log(err))
    }
}