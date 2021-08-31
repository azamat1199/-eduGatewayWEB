import React, { Component, useState } from 'react';
import {Link} from "react-router-dom";


import logo_education from "../../../assets/icon/Logo_education.svg"
import eye_login from  "../../../assets/icon/eye_login.svg" 
import "../../../style/css/Login.css"

const Login = () => {
    const [wiew, setWiew] = useState(false);
    return ( 
        <div className="Login">

            <div className="background_login"></div>
            
            <div className="container">
                <div className="title">
                    <img src={logo_education} alt="" />
                    <h2>Education Gateway</h2>
                </div>
                <div className="block">
                    <div className="blockBox">
                        <h3>Войти</h3>
                        <div className="radioBlock">
                            <label><input type="radio" name="name1" id="" />Абитуриент</label>
                            <label><input type="radio" name="name1" id="" />Партнер</label>
                            <label><input type="radio" name="name1" id="" />Университет</label>
                            <label><input type="radio" name="name1" id="" />Админ</label>
                        </div>
                        {/* Login kiritish */}
                        <div className="loginInput">
                            <p>Логин</p>
                            <div>
                                <input type="text" />
                            </div>
                        </div>
                        {/* Parol kiritish */}
                        <div className="loginInput">
                            <p>Логин</p>
                            <div>
                                <input type={wiew === false ? "password" : "text"} />
                                <img src={eye_login} alt="" onClick={ () => {setWiew(!wiew)} }/>
                            </div>
                        </div>
                        {/* eslab qolish */}
                        <div className="loginRemberMe">
                            <label className='custom-checkbox'>
                                <input type="checkbox" name="" id="" />
                                <span></span>
                                <p>
                                    Запомнить меня
                                </p>
                            </label>
                        </div>
                        {/* kirish */}
                        <Link to="/home/glavny">Войти</Link>
                        {/* parolni unutdim */}
                        <div className="forgetPass">
                            <p>Забыли пароль? <Link to="/loginStaff">Восстановить</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Login;


