/**
 * Created by slashhuang on 16/5/2.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './utils/configureStore';

export default class Root extends Component {
    render() {
        const { Module, reducers} = this.props;
        const store = configureStore(reducers);
        return (
            <Provider store={store}>
                <Module />
            </Provider>
        );
    }
}
