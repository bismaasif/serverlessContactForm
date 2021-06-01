import { Set_user } from "./userdataContants";

var initialstate=null;
var userdataReducer=(state=initialstate,action)=>{
    var {type,payload}=action;
    switch (type) {
      case Set_user:
        return payload.user;
      
     default:
      return state;
    }
}
export default userdataReducer;