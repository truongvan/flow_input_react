const initState = {
    pages: [],
    page:[],
    tags:[],
    categories: [
        {
            "name": "Some"
        },
        {
            "name": "onething"
        },
        {
            "name": "say"
        },
        {
            "name": "chart"
        },
        {
            "name": "anh oi"
        }
    ],
}

const pageReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_PAGES':
            return {
                ...state,
                pages:[ 
                    ...action.pages
                ]
            }
        case 'GET_TAGS':
            return {
                ...state,
                tags:[ 
                    ...action.tags
                ]
            }
        case 'GET_CATEGORIES':
            return {
                ...state,
                categories:[ 
                    ...action.categories
                ]
            }
        case 'GET_PAGE':
            return {
                ...state,
                page: {
                    ...state.page,
                    [action.page.meta.slug]: action.page
                }
            }
        default:
            return state
    }
}

export default pageReducer