import getcookie from '../../Utilities/GetCookie'

export default function addAsset(asset) {
    return (dispatch, getState) => {
        const initFetch = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getcookie('csrftoken')
            },
            body: JSON.stringify(asset),
        }

        const url = `http://127.0.0.1:9000/api/ua/`

        fetch(url, initFetch)
            .then(res => res.json())
            .then(asset => {
                dispatch({ type: 'ADD_ASSET', asset })
            })
            .catch((err) => console.log(err))
    }
}

export function getAssets(currentPage=1) {
    return (dispatch, getState) => {
        const initFetch = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'accept': 'application/json',
            },
        }

        const url = `http://127.0.0.1:9000/api/portfolio/asset?page=${currentPage}`

        fetch(url, initFetch)
            .then(res => res.json())
            .then(data => {
                const totalPage = Math.ceil(data.count / 10)
                const listNumber = Array.from(new Array(totalPage), (_, index) => index + 1);
                const assets = data.results
                dispatch({ type: 'GET_ASSETS', listNumber, currentPage, assets })
            })
            .catch((err) => console.log(err))
    }
}