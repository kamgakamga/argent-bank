import { POST_LOGIN_USER, POST_SIGNUP_USER, POST_USER_PROFILE, UPDATE_USER_PROFILE } from "../actions/user.action";

const initialState = {user:"Serges KAMGA"};

export default function userReducer(state=initialState,action:any){
  switch (action.type) {
        case POST_LOGIN_USER:
                
                break;
        case POST_SIGNUP_USER:
                
                break;
        case POST_USER_PROFILE:
                
                break;
        case UPDATE_USER_PROFILE:
                if (true) {
                        
                } else {
                        
                }
                break;
  
        default:
                break;
  }

return state;
}