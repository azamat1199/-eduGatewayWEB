import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import google from   "../../../../assets/icon/google.svg"   
import facebook from   "../../../../assets/icon/facebookreg.svg"  
import view from   "../../../../assets/icon/view.svg"  
import check from   "../../../../assets/icon/check.svg"  
import "../../../../style/css/singup.css"


class SingUp extends Component {
	state = { 
		type:true
	 }
	handletype = () => {
		this.setState({
			type: !this.state.type
		})
	}
	render() { 
		return ( 
			<React.Fragment>
				<div className="singup_asos container">
					<div className="nav_name">
						<h1>Процесс поступления</h1>
					</div>
					<div className="up_nav">
						<h2 className="singup_active1">Регистрация/Войти</h2>
						<svg width="82" height="10" viewBox="0 0 82 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M82 5L74.5 0.669873V9.33013L82 5ZM0 5.75H5.125V4.25H0V5.75ZM15.375 5.75H25.625V4.25H15.375V5.75ZM35.875 5.75H46.125V4.25H35.875V5.75ZM56.375 5.75H66.625V4.25H56.375V5.75Z" fill="#5C7C8A"/>
						</svg>
						<h2>Заявка</h2>
						<svg width="82" height="10" viewBox="0 0 82 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M82 5L74.5 0.669873V9.33013L82 5ZM0 5.75H5.125V4.25H0V5.75ZM15.375 5.75H25.625V4.25H15.375V5.75ZM35.875 5.75H46.125V4.25H35.875V5.75ZM56.375 5.75H66.625V4.25H56.375V5.75Z" fill="#5C7C8A"/>
						</svg>
						<h2>Профайл</h2>
						<svg width="82" height="10" viewBox="0 0 82 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M82 5L74.5 0.669873V9.33013L82 5ZM0 5.75H5.125V4.25H0V5.75ZM15.375 5.75H25.625V4.25H15.375V5.75ZM35.875 5.75H46.125V4.25H35.875V5.75ZM56.375 5.75H66.625V4.25H56.375V5.75Z" fill="#5C7C8A"/>
						</svg>
						<h2>Файлы</h2>
						<svg width="82" height="10" viewBox="0 0 82 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M82 5L74.5 0.669873V9.33013L82 5ZM0 5.75H5.125V4.25H0V5.75ZM15.375 5.75H25.625V4.25H15.375V5.75ZM35.875 5.75H46.125V4.25H35.875V5.75ZM56.375 5.75H66.625V4.25H56.375V5.75Z" fill="#5C7C8A"/>
						</svg>
						<h2>Оплата</h2>
					</div>
					<div className="main_singup">
						<h1>Регистрация</h1>
						<div className="form_div">
							<p>Ваша имя и фамилия</p>
							<input type="text" />
						</div>
						<div className="form_div">
							<p>Ваш телефон номера</p>
							<input type="text" name="" id="" />
						</div>
						<div className="form_div">
							<p>Выберите пароль</p>
							<div className="password">
								<input type={this.state.type ?"password":"text"} />
								<img onClick={this.handletype} src={view} alt="" />
							</div>
						</div>
						<div className="form_div">
							<p>Повторите пароль</p>
							<div className="password">
								<input type="password" />
								<img src={check} alt="" />
							</div>
						</div>
						<NavLink className="reg_btn" to="/zayavka">Зарегистрироваться</NavLink>
						<h2>или</h2>
						<h2>Войдите через</h2>
						<a className="reg_link" href="#"><img src={google} alt="" /> Google</a>
						<a className="reg_link" href="#"><img src={facebook} alt="" /> Facebook</a>
						<h3>Уже есть аккаунт?  <NavLink to="/login" >Войдите</NavLink></h3>
					</div>
				</div>
			</React.Fragment>
		 );
	}
}
 
export default SingUp;