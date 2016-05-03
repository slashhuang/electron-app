/**
 * Created by slashhuang on 16/5/2.
 */
/**
 * 定义store数据结构
 */
const shopInitialStatus = {
    msg:"hello you are using redux + react resolution",
    code:200
};

function indexReducer(state = shopInitialStatus,action){
    switch (action.type){
        case 'init':
            return Object.assign({},{data:action.data});
        default:
            return state;
    }
}

export {
    indexReducer
}

