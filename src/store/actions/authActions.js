import {AUTH_SIGN_UP,AUTH_SIGN_OUT} from '../actionTypes'

export const signUpAction = (payload) =>{
    console.log(payload);
    return{
        payload,
        type:AUTH_SIGN_UP,
    }
}
export const signOutAction = () =>{
    return{
        type:AUTH_SIGN_OUT,
    }
}