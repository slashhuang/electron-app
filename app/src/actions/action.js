/**
 * Created by slashhuang on 16/5/2.
 */

export function init(){
   return (dispatch)=>{
      dispatch({
          type:"init",
          data:["直播平台","你的不二选择","hello world"]
      })
   }
}