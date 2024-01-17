import axios from "axios";

export const POST_LOGIN_USER ="POST_LOGIN_USER";
export const POST_SIGNUP_USER ="POST_SIGNUP_USER";
export const POST_USER_PROFILE ="POST_USER_PROFILE";
export const UPDATE_USER_PROFILE ="UPDATE_USER_PROFILE";

const BASE_URL = "http://localhost:3001";

export const postLoginUser = () =>{
return (dispatch: any) =>{
        return axios.post(BASE_URL+"/user/login").then(
                (res) => {
                        console.log(res);
                }
        )
}
};

export const postSignUpUser = () =>{
return (dispatch: any) =>{
        return axios.post(BASE_URL+"/user/signup").then(
                (res) => {
                        console.log(res);
                }
        )
}
};

export const postUserProfile = () =>{
return (dispatch: any) =>{
        return axios.post(BASE_URL+"​/user​/profile").then(
                (res) => {
                        console.log(res);
                }
        )
}
};

export const updateUserProfile = () =>{
return (dispatch: any) =>{
        return axios.put(BASE_URL+"​/user​/profile").then(
                (res) => {
                        console.log(res);
                }
        )
}
};