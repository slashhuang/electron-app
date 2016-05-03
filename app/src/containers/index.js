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
    componentDidMount(){
        this.props.init();
    }
    render(){
        let hint = this.props.test;
        return (
            <dl>
                <dt>{hint.msg}</dt>
                {hint.data && hint.data.map(function(data){
                    return <dd key={data}>{data}</dd>
                })}
            </dl>
        )
    }
}
export default connect(state=>{
    return {
        test:state['indexReducer']
    }

},AllActions)(IndexModule)