import React, {  useState,useCallback } from 'react';
import {Link,useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux'
import {signUpAction} from '../../../store/actions/authActions';
import logo_education from "../../../assets/icon/Logo_education.svg";
import eye_login from  "../../../assets/icon/eye_login.svg" ;
import "../../../style/css/Login.css";
import Loader from "react-js-loader";
import { Spin, message } from "antd";
import Axios from '../../../utils/axios';

function  Login () {
    const dispatch = useDispatch()
    const history = useHistory();
    const [wiew, setWiew] = useState(false);
    const[errorMsg,setErrorMsg] = useState('')
    const [loading, setLoading] = useState(false);
    const [state,setState] = useState({
        role:'',
        phone:''
    });
    const [loginData,setLoginData] = useState({
        password:''
    });
    const handleChange = useCallback ((e) => { 
        const {name,value} = e.target;
        setState(state=>({...state,[name]:value}))
    } ,[state])  

    const handleValue = useCallback ((e) => {
        const {name,value} = e.target;
        setLoginData(state=>({...state,[name]:value}))
   },[loginData])
   const dataGo = {
    username:`${state.role}_${state.phone}`,
    password:loginData.password
 }
   
console.log(dataGo);
    const submitData = async (e)=>{
        e.preventDefault()
        setLoading(true);
        try {
            const {data} = await Axios.post('/common/auth/token/obtain',dataGo)
            console.log(data);
            const {access,refresh} = data
            const {user}  = data;
            const {role} = user
            dispatch(signUpAction({access,refresh,role,data:user.data}))
            if(role.startsWith("u")){
               history.push('/univer-backoffice-page')
            }else if(role.startsWith('s')){
                history.push('/my-account')
            }else if(role === 'admin'){
                history.push('/home/main')
            }else{
                history.push('/')
            }
          
           console.log(data);
           setLoading(false);
        } catch (error) {
           console.log(error);
           setLoading(false);
        }
    }
    console.log(loginData);
    return ( 
        <div className="Login">

            <div className="background_login"></div>
            
            <div className="container">
                <div className="title">
                    <img src={logo_education} alt="" />
                    <h2>Education Gateway</h2>
                </div>
                <div className="block">
                    <form onSubmit={submitData} className="blockBox">
                        <h3>Войти</h3>
                      
                        <div onChange={handleChange} className="radioBlock">
                            <label><input type="radio" name="role" value="student" required />Абитуриент</label>
                            <label><input type="radio" name="role" value="partner" required />Партнер</label>
                            <label><input type="radio" name="role" value="university" required />Университет</label>
                            <label><input type="radio" name="role" value="admin" required/>Админ</label>
                        </div>
                        {/* Login kiritish */}
                        <div className="loginInput">
                            <p>Логин</p>
                         
                            <div>
                                <input  onChange={handleChange}  type="phone" name="phone"  placeholder='998 90 123 45 67' required/>
                            </div>
                        </div>
                        {/* Parol kiritish */}
                        <div className="loginInput">
                            <p>пароль</p>
                            <div>
                                <input onChange={(e)=>handleValue(e)} name="password" type={wiew === false ? "password" : "text"} required />
                                <img src={eye_login} alt="" onClick={ () => {setWiew(!wiew)} }/>
                            </div>
                        </div>
                        {/* eslab qolish */}
                        <div className="loginRemberMe">
                            <label className='custom-checkbox'>
                                <input  type="checkbox" name="rememberMe" value="rememberMe"/>
                                <span></span>
                                <p>
                                    Запомнить меня
                                </p>
                            </label>
                        </div>
                        {/* kirish */}
                        <h4 style={{color:"red",margin:'auto'}}>{errorMsg}</h4>
                        <button  type="submit">{loading ?  <>
                <Spin size="middle" spinning={loading} />
              </>:"Войти" }</button>
                        {/* parolni unutdim */}
                        <div className="forgetPass">
                            <p>Забыли пароль? <Link to="/loginStaff">Восстановить</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
    );
}

export default Login;


