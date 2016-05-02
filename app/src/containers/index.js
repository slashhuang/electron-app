/**
 * Created by slashhuang on 16/5/2.
 */

import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as AllActions from '../actions/action.js';
 class IndexModule extends Component{
    constructor(){
        super();
    }
    render(){
        let hint = this.props.test;
        return (
            <div>
                {hint.msg}
            </div>
        )
    }
}
export default connect(state=>{
    return {
        test:state['indexReducer']
    }

},AllActions)(IndexModule)