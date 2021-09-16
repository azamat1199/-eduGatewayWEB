import {AUTH_SIGN_UP,AUTH_SIGN_OUT}from '../actionTypes'

const initialState = {
   access:'',
   refresh:'',
   data:{

   },
   role:''
}

const userReducer = (state=initialState,action)=>{
    console.log(action);
    const {payload} = {...action};
    console.log(payload);
    switch (action.type){
        case AUTH_SIGN_UP:{
            return{...state,payload}
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