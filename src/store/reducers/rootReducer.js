import { combineReducers } from 'redux'

import assetReducer from './assetReducer'
import authReducer from './authReducer'
import pageReducer from './pageReducer'

const rootReducer = combineReducers ({
    auth: authReducer,
    asset: assetReducer,
    page: pageReducer
}) 

export default rootReducer