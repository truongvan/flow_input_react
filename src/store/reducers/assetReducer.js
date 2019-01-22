const initState = {
    userAssets:{
        listNumber: [1,],
        page: {}
    }

}

const assetReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ASSET':
            return {
                userAsset: [
                ...state.userAsset,
                action.asset
            ]}
        case 'GET_ASSETS':
            return {
                ...state,
                userAssets: {
                    listNumber: action.listNumber,
                    page: {
                        ...state.userAssets.page,
                        [action.currentPage]: action.assets
                    }
                }
            }
        default:
            return state
    }
}

export default assetReducer