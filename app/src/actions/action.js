/**
 * Created by slashhuang on 16/5/2.
 */

export default function init(){
   return (dispatch)=>{
      dispatch({
          type:"init",
          data:[]
      })
   }
};