<<<<<<< HEAD
import React, { Component, useState, useCallback, useRef } from 'react';
import axios from 'axios';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { NavLink, useHistory } from 'react-router-dom';
import google from '../../../../assets/icon/google.svg';
import facebook from '../../../../assets/icon/facebookreg.svg';
import view from '../../../../assets/icon/view.svg';
import check from '../../../../assets/icon/checked.svg';
import '../../../../style/css/singup.css';
import Navbar from '../Navbar';
import InputErrorMsg from './inputErrorMsg';
import Axios from '../../../../utils/axios';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import Loader from 'react-js-loader';
import { Spin, message } from 'antd';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../../../../store/actions/authActions';
import Swal from 'sweetalert2';
=======
import React, { Component, useState, useCallback, useRef,useEffect } from "react";
import axios from "axios";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { NavLink, useHistory } from "react-router-dom";
import google from "../../../../assets/icon/google.svg";
import facebook from "../../../../assets/icon/facebookreg.svg";
import view from "../../../../assets/icon/view.svg";
import check from "../../../../assets/icon/checked.svg";
import "../../../../style/css/singup.css";
import Navbar from "../Navbar";
import InputErrorMsg from "./inputErrorMsg";
import Axios from "../../../../utils/axios";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import Loader from "react-js-loader";
import { Spin, message } from "antd";
import { useDispatch } from "react-redux";
import { signUpAction } from "../../../../store/actions/authActions";
import Swal from "sweetalert2";
import { Autocomplete } from "@material-ui/lab";
import TextField from '@material-ui/core/TextField';

>>>>>>> 3b24bf54270a1c25cbdee0ae12e2f2a6ae0bc890

function SingUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const[region,setRegion] = useState()
  const inputRef = useRef();
  const buttonRef = useRef();
  const statsuRef = useRef();
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(true);
<<<<<<< HEAD
  const [error, setError] = useState('');
=======
  const [error, setError] = useState("");
  const [countries, setCountry] = useState("");
  const [citiess, setCities] = useState("");
>>>>>>> 3b24bf54270a1c25cbdee0ae12e2f2a6ae0bc890
  const [length, setLength] = useState();
  const [status, setStatus] = useState('');
  const [loginData, setLoginData] = useState({
<<<<<<< HEAD
    first_name: '',
    last_name: '',
    password_1: '',
    password_2: '',
=======
    first_name: "",
    last_name: "",
    middle_name:"",
    password_1: "",
    password_2: "",
>>>>>>> 3b24bf54270a1c25cbdee0ae12e2f2a6ae0bc890
    phone_number: '',
  });

  const handleInputChange = useCallback(
    (e) => {
      console.log(e);
      const { name, value } = e.target;
      setLoginData((state) => ({ ...state, [name]: value }));
      if (name === 'password_1' && !value.length) {
        setStatus('error');
        setLength(0);
      } else if (name === 'password_1' && value.length < 2) {
        setStatus('error');
        setLength(12.5);
      } else if (name === 'password_1' && value.length < 3) {
        setStatus('error');
        setLength(25);
      } else if (name === 'password_1' && value.length < 4) {
        setStatus('error');
        setLength(37.5);
      } else if (name === 'password_1' && value.length < 5) {
        setStatus('error');
        setLength(50);
      } else if (name === 'password_1' && value.length < 6) {
        setStatus('error');
        setLength(62.5);
      } else if (name === 'password_1' && value.length < 8) {
        const { current } = inputRef;
        current.style = 'background:red';
        setStatus('error');
        setLength(75);
      } else if (name === 'password_1' && value.length == 8) {
        setStatus('success');
        setLength(100);
      }
    },
    [loginData]
  );
<<<<<<< HEAD
  const onSuccess = (res) => {
    console.log('Successfull', res);
  };
  const onFailure = (res) => {
    console.log('Failure', res);
  };
=======
const onSuccess = (res)=>{
  console.log("Successfull",res);

}
const onFailure = (res)=>{
  console.log("Failure",res);
}
const fetchCountries = async() =>{
  try {
    const data = await Axios.get('/common/country/')
    console.log(data);
    const {status} = data
    const {results} = data.data
    console.log(results);
    
    if(status === 200){
      setCountry(results)
      const newData = []
      for (let x=0; x<results.length; x++) {
      newData.push(results[x].cities[0])
     }
     setCities(newData)
     }
      console.log(data);
  } catch (error) {
    console.log(error.response);
  }
}
const handleRegion = (event,newValue) =>{
  setRegion(newValue)
}
const handleCountry = (event,newValue) =>{
  setCountry(newValue)
}
const id1 = countries?.id
const id2 = region?.id
const finalData = {
  first_name: loginData.first_name,
  last_name:loginData.last_name,
  middle_name:loginData.middle_name,
  citizenship	:id1,
  phone_number:loginData.phone_number,
  city:id2,
  password_1:loginData.password_1,
  password_2:loginData.password_2,
}
console.log(finalData);
>>>>>>> 3b24bf54270a1c25cbdee0ae12e2f2a6ae0bc890
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('enrolle-user',loginData.first_name)
    setLoading(true);
    try {
<<<<<<< HEAD
      const res = await Axios.post('enrollee/enrollee-user/', loginData);
=======
      const res = await Axios.post("/enrollee/enrollee-user/", finalData);
      console.log(res)
>>>>>>> 3b24bf54270a1c25cbdee0ae12e2f2a6ae0bc890
      const { status } = res;
      const { data } = res;
      console.log(data);
      if (status == 201) {
<<<<<<< HEAD
        dispatch(signUpAction({ data: data }));
=======
        dispatch(signUpAction({data:data}))
        localStorage.setItem('profile',JSON.stringify(data))
>>>>>>> 3b24bf54270a1c25cbdee0ae12e2f2a6ae0bc890
        Swal.fire({
          icon: 'success',
          text: 'Успешно зарегистрирован',
          showCancelButton: false,
        }).then(() => history.push('/my-account'));
      }
      console.log(data);
      setLoading(false);
    } catch (err) {
      console.log(err.response)
      const { error } = err.response?.data;
      Swal.fire({
<<<<<<< HEAD
        icon: 'error',
        text: 'На этот номер все готовы зарегистрироваться, выберите другой или войдите',
        showCancelButton: true,
      });
      // console.log(error[0]?.error[0]);
      // setError(error[0]?.error[0]);
=======
        icon:"error",
        text:"На этот номер все готовы зарегистрироваться, выберите другой или войдите",
        showCancelButton:true
      })
>>>>>>> 3b24bf54270a1c25cbdee0ae12e2f2a6ae0bc890
      setLoading(false);
    }
  };

  // console.log(results);
  console.log(countries);
  console.log(citiess);
  console.log(loginData);
  useEffect(()=>{
    fetchCountries()
  },[])
  return (
    <React.Fragment>
      <div className="navRegist">
        <Navbar />
      </div>
      <div className="singup_asos container">
        <form onSubmit={handleSubmit} className="main_singup">
          <h1>Регистрация</h1>
          <div className="form_div">
            <p>Ваша имя </p>
            <input
              onChange={handleInputChange}
              type="text"
              name="first_name"
              placeholder="имя"
              required
            />
            <InputErrorMsg type="first_name" errorObj={error} />
          </div>
          <div className="form_div">
            <p>Ваша фамилия</p>
            <input
              onChange={handleInputChange}
              type="text"
              name="last_name"
              placeholder="фамилия"
              required
            />
            <InputErrorMsg type="last_name" errorObj={error} />
          </div>
          <div className="form_div">
<<<<<<< HEAD
            <p>Ваша фамилия</p>
=======
            <p>Отчество</p>
>>>>>>> 3b24bf54270a1c25cbdee0ae12e2f2a6ae0bc890
            <input
              onChange={handleInputChange}
              type="text"
              name="middle_name"
              placeholder="фамилия"
              required
            />
<<<<<<< HEAD
            <InputErrorMsg type="middle_name" errorObj={error} />
          </div>
=======
            <InputErrorMsg type="last_name" errorObj={error} />
          </div>

          <div className="form_div">
							<p>Гражданство</p>
							<Autocomplete
							aria-required
							onChange = {handleCountry}
							id="profayl_input"
							options={countries}
							getOptionLabel={(option) => option.name}
							style={{ width: 575 }}
							renderInput={(params) => <TextField {...params} label="" variant="outlined"/>}
							/>
						</div>
          <div className="form_div">
							<p>Город</p>
							<Autocomplete
							aria-required
							onChange = {handleRegion}
							id="profayl_input"
							options={citiess}
							getOptionLabel={(option) => option.name}
							style={{ width: 575 }}
							renderInput={(params) => <TextField {...params} label="" variant="outlined"/>}
							/>
						</div>
>>>>>>> 3b24bf54270a1c25cbdee0ae12e2f2a6ae0bc890
          <div className="form_div">
            <p>Ваш телефон номера</p>
            <input
              type="phone"
              onChange={handleInputChange}
              name="phone_number"
              placeholder="+998 90 123 45 67"
              required
            />
          </div>
          <div className="form_div">
            <p>Выберите пароль</p>

            <div className="password">
              <input
                onChange={handleInputChange}
                name="password_1"
                required
                placeholder="пароль"
                ref={inputRef}
                type={type ? 'password' : 'text'}
              />
              <img onClick={() => setType(() => !type)} src={view} alt="" />
            </div>
            <div
              style={
                loginData.password_1.length > 0
                  ? { display: 'flex' }
                  : { display: 'none' }
              }
              ref={statsuRef}
              className="status-bar"
            >
              <Progress ref={inputRef} percent={length} status={status} />
              {loginData.password_1.length < 8 ? (
                <div style={{ marginLeft: '20px' }} className="statusPercent">
                  <div>
                    {' '}
                    <span style={{ color: 'red' }}>
                      {loginData.password_1.length}/
                    </span>
                    <span
                      style={{
                        fontSize: '20px',
                        fontWeight: '500',
                        color: 'red',
                      }}
                    >
                      8
                    </span>{' '}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="form_div">
            <p>Повторите пароль</p>
            <div className="password">
              <input
                placeholder="подтвердить пароль"
                onClick={() =>
                  loginData.password_1.length >= 8 > 0
                    ? (statsuRef.current.style = 'display:none;')
                    : ''
                }
                onChange={handleInputChange}
                type="password"
                name="password_2"
                required
              />
              {loginData.password_1 == loginData.password_2 &&
              loginData.password_2 != '' ? (
                <img src={check} alt="" />
              ) : loginData.password_2.length > 0 ? (
                <Loader type="box-up" bgColor={'black'} size={40} />
              ) : (
                ''
              )}
            </div>
          </div>

          <p style={{ color: 'red', marginBottom: '8px', fontWeight: '600' }}>
            {' '}
            {error}
          </p>
          <button
            ref={buttonRef}
            style={
              loading ? { background: '#8cb4c5' } : { background: '#00587F' }
            }
            className="reg_btn"
          >
            {loading ? (
              <>
                <Spin size="middle" spinning={loading} />
              </>
            ) : (
              'Зарегистрироваться'
            )}
          </button>
          <h2>или</h2>
          <h2>Войдите через</h2>
          <a className="reg_link" href="#">
            <GoogleLogin
              clientId="971142751474-u0fttn4so4e7melu9jlruprvsplget6r.apps.googleusercontent.com"
              buttonText="Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
          </a>
          <a className="reg_link" href="#">
            <img src={facebook} alt="" /> Facebook
          </a>
          <h3>
            Уже есть аккаунт? <NavLink to="/login">Войдите</NavLink>
          </h3>
        </form>
      </div>
    </React.Fragment>
  );
}

export default SingUp;
// 111
