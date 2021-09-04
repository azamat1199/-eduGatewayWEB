import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const data = require("../../json/data.json")

class Profayl3 extends Component {
	state = { 
		data:data
	 }
	render() { 
		return ( 
			<React.Fragment>
				<div className="singup_asos container">
					<div className="nav_name">
						<h1>Процесс поступления</h1>
					</div>
					<div className="up_nav">
						<h2 className="singup_pass">Регистрация/Войти</h2>
						<svg id="svg_pass" width="82" height="10" viewBox="0 0 82 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M82 5L74.5 0.669873V9.33013L82 5ZM0 5.75H5.125V4.25H0V5.75ZM15.375 5.75H25.625V4.25H15.375V5.75ZM35.875 5.75H46.125V4.25H35.875V5.75ZM56.375 5.75H66.625V4.25H56.375V5.75Z" fill="#5C7C8A"/>
						</svg>
						<h2 className="singup_pass">Заявка</h2>
						<svg id="svg_pass" width="82" height="10" viewBox="0 0 82 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M82 5L74.5 0.669873V9.33013L82 5ZM0 5.75H5.125V4.25H0V5.75ZM15.375 5.75H25.625V4.25H15.375V5.75ZM35.875 5.75H46.125V4.25H35.875V5.75ZM56.375 5.75H66.625V4.25H56.375V5.75Z" fill="#5C7C8A"/>
						</svg>
						<h2 className="singup_active3">Профайл</h2>
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
						<h1>Профайл</h1>
						<div className="pagination">
							<a className="page page_a"></a>
							<a className="page page_a"></a>
							<div className="page page_a"></div>
						</div>
						<div className="form_div">
							<p>Спортивные достижения</p>
							<input type="text" />
						</div>
						<div className="form_div">
							<p>Активная деятельность</p>
							<Autocomplete
							id="profayl_input"
							options={data}
							getOptionLabel={(option) => option.hobbi}
							style={{ width: 575 }}
							renderInput={(params) => <TextField {...params} label="" variant="outlined"/>}
							/>
						</div>
						<div className="form_div">
							<p>Визы</p>
							<input type="text" />
						</div>
						<div className="form_div">
							<p>Цель получения образования</p>
							<input type="text" />
						</div>
						<div className="btn_div">
							<NavLink to="/files" className="reg_btn">Завершить</NavLink>
						</div>
						
					</div>
				</div>
			</React.Fragment>
		 );
	}
}
 
export default Profayl3;