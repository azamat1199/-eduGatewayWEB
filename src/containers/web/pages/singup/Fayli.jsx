import React, { Component, useRef, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import folder_icon from "../../../../assets/icon/folder_icon.svg"
import Navbar from '../Navbar';




function Fayli () {
	const history = useHistory();
	const [data,setData] = useState()
	const [doc,setDoc] = useState()

	const handleInputChange = (e)=>{
		console.log(e);
         setData({ data: e.target.files[0] })
	}
	const handleChange = (e)=>{
		console.log(e);
         setDoc({ doc: e.target.files[0] })
	}

	const inputEl1 = useRef(null);
	const inputEl2 = useRef(null);
	const inputEl3 = useRef(null);
	const inputEl4 = useRef(null);
	const inputEl5 = useRef(null);

	console.log(data);
	console.log(doc);
	const submitHandler = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("files", inputEl1.current.files[0]);
		formData.append("files", inputEl2.current.files[0]);
		formData.append("files", inputEl3.current.files[0]);
		formData.append("files", inputEl4.current.files[0]);
		formData.append("files", inputEl5.current.files[0]);
	
		console.log(formData, Array.from(formData), "file input");
	  };
		return ( 
			<React.Fragment>
				<div className="navRegist">
					<Navbar/>
				</div>
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
						<h2 className="singup_pass">Профайл</h2>
						<svg id="svg_pass" width="82" height="10" viewBox="0 0 82 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M82 5L74.5 0.669873V9.33013L82 5ZM0 5.75H5.125V4.25H0V5.75ZM15.375 5.75H25.625V4.25H15.375V5.75ZM35.875 5.75H46.125V4.25H35.875V5.75ZM56.375 5.75H66.625V4.25H56.375V5.75Z" fill="#5C7C8A"/>
						</svg>
						<h2 className="singup_active2">Файлы</h2>
						<svg width="82" height="10" viewBox="0 0 82 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M82 5L74.5 0.669873V9.33013L82 5ZM0 5.75H5.125V4.25H0V5.75ZM15.375 5.75H25.625V4.25H15.375V5.75ZM35.875 5.75H46.125V4.25H35.875V5.75ZM56.375 5.75H66.625V4.25H56.375V5.75Z" fill="#5C7C8A"/>
						</svg>
						<h2>Оплата</h2>
					</div>
					<form onSubmit={(e) => submitHandler(e)} className="main_singup" >
						<h1>Файлы</h1>
						<div className="form_div">
							<p className="long_p">*Загружаемый файл не должен превышать 5 Мб, чтобы время загрузки было оптимальным. Большие документы должны быть разделены на отдельные файлы и помечены как часть 1, часть 2 и т.д. Разрешение 200dpi, как правило, подходит для черно-белых изображений.</p>
						</div>
						<div className="form_div">
							<p>Документы об образовании  <span>Школьный аттестат, диплом колледжа, вуза.</span></p>
							<div className="importFile">
								<img src={folder_icon} alt="" />
								<p>
									Drop your files here or a    
									<input ref={inputEl1} type="file" 	id="chFile"  name="diplom"/> 
									<label htmlFor="chFile">choose file</label>
								</p>
							</div>
						</div>
						<div className="form_div">
							<p>Сертификаты IELTS, TOEFL, GMAT, SAT</p>
							<div className="importFile">
								<img src={folder_icon} alt="" />
								<p>
									Drop your files here or a    
									<input ref={inputEl2} type="file"   id="chFile2" 	 name="ielts"/> 
									<label htmlFor="chFile2">choose file</label>
								</p>
							</div>
						</div>
						<div className="form_div">
							<p>Грамоты и сертификаты</p>
							<div className="importFile">
								<img src={folder_icon} alt="" />
								<p>
									Drop your files here or a    
									<input ref={inputEl3} type="file"  id="chFile3" 	 name="certificate"/> 
									<label htmlFor="chFile3">choose file</label>
								</p>
							</div>
						</div>
						<div className="form_div">
							<p>Резюме, эссе, мотивационные и рекомендовательные письма</p>
							<div className="importFile">
								<img src={folder_icon} alt="" />
								<p>
									Drop your files here or a    
									<input ref={inputEl4} type="file"  id="chFile4" 	 name="resume"/> 
									<label htmlFor="chFile4">choose file</label>
								</p>
							</div>
						</div>
						<div className="form_div">
							<p>Договор с компанией <span>Документ должен быть подписан заявителем</span></p>
							<div className="importFile">
								<img src={folder_icon} alt="" />
								<p>
									Drop your files here or a    
									<input ref={inputEl5} type="file"   id="chFile5"	 name="document"/> 
									<label htmlFor="chFile5">choose file</label>
								</p>
							</div>
						</div>
						<div className="btn_div">
							<button onClick={()=> history.push('/payment-click')} className="reg_btn">Завершить</button>
						</div>
					</form>
				</div>
			</React.Fragment>
		 );
}
 
export default Fayli;