import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import imagesReducers from '../reducers/imagesReducers'

const configureStore = () => {
    const store = createStore(combineReducers({
        images : imagesReducers
    }), applyMiddleware(thunk))

    return store
}

export default configureStore