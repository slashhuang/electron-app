import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

export default function configureStore(reducers, initialState) {
    return createStoreWithMiddleware(combineReducers(reducers
    ), initialState);
}
