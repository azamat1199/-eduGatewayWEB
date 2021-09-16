import axios from 'axios';
import store from '../store'
import {AUTH_SIGN_OUT} from '../store/actionTypes'


const Axios = axios.create({
    baseURL:'http://185.107.237.6/api/v1/',
    timeout:30000
});

Axios.interceptors.request.use((configs)=>{
    const token = store.getState().payload.access;
    configs.headers.Authorization = token ? `Berear ${token}`:'';
    return configs;
},(err)=>{
    console.log(err)
})



Axios.interceptors.response.use((response) => {
    return response
},err => {
    console.log(err);
    return Promise.reject(err)
})

export default Axios;