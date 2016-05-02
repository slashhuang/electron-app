/**
 * Created by slashhuang on 16/4/7.
 */

import React from 'react';
import ReactDom from 'react-dom';
import Root from './root.js';
import IndexModule from './containers/index.js';
import * as Reducers from './reducers/reducer.js';
require('../less/index.less');
ReactDom.render(<Root Module={IndexModule} reducers={Reducers}/>,
    document.getElementById('root'));