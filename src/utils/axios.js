import axios from 'axios';
<<<<<<< HEAD
import store from '../store';
import { AUTH_SIGN_OUT } from '../store/actionTypes';

const Axios = axios.create({
  baseURL: 'http://backend.edugateway.uz/api/v1',
  timeout: 30000,
=======
import store from '../store'

const Axios = axios.create({
    baseURL:'http://backend.edugateway.uz/api/v1/',
    timeout: 30000,
    timeoutErrorMessage: 'Connection is lost. Server not responded'
>>>>>>> 3b24bf54270a1c25cbdee0ae12e2f2a6ae0bc890
});

http: Axios.interceptors.request.use(
  (configs) => {
    const token = store.getState().payload.access;
    configs.headers.Authorization = token ? `Berear ${token}` : '';
    return configs;
<<<<<<< HEAD
  },
  (err) => {
    console.log(err);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
=======
},(err)=>{
    console.log(err.response)
})

Axios.interceptors.response.use((response) => {
    return response
},err => {
>>>>>>> 3b24bf54270a1c25cbdee0ae12e2f2a6ae0bc890
    console.log(err);
    return Promise.reject(err);
  }
);

export default Axios;
