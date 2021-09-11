import {AUTH_SIGN_UP,AUTH_SIGN_OUT}from '../actionTypes'

const initialState = {
    access:'',
    user:{

    }
}

const userReducer = (state=initialState,action)=>{
    console.log(action);
    const {user,access} = {...action?.payload};
console.log(user);
    switch (action.type){
        case AUTH_SIGN_UP:{
            return{...state,user,access}
        }
        case AUTH_SIGN_OUT:{
            return initialState;
        }
        default:{
            return state;
        }
    }
}
export default userReducer