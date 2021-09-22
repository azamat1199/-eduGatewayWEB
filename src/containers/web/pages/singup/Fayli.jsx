import React, { Component, useRef, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import folder_icon from "../../../../assets/icon/folder_icon.svg"
import Navbar from '../Navbar';
import Axios from '../../../../utils/axios'
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';



function Fayli () {
	const history = useHistory();
	const userID = JSON.parse(localStorage.getItem('userId'))
	console.log(userID);
	console.log(userID);
	const [data,setData] = useState()
	const [doc,setDoc] = useState()
    const files = JSON.parse(localStorage.getItem('files'))
	console.log(files);
	const handleInputChange = (e)=>{
		console.log(e);
         setData({ data: e.target.files[0] })
	}
	

	const inputEl1 = useRef(null);
	const inputEl2 = useRef(null);
	const inputEl3 = useRef(null);
	const inputEl4 = useRef(null);
	const inputEl5 = useRef(null);
	const inputEl6 = useRef(null);
	const inputEl7 = useRef(null);
	const inputEl8 = useRef(null);
	const inputEl9 = useRef(null);
   
	console.log(data);
	console.log(doc);
	
	const submitHandler = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		for (let x in files) {
			formData.append(x, files[x]);
		}
		formData.append("scan_passport_self",inputEl1.current.files[0]);
		formData.append("scan_diploma", inputEl2.current.files[0]);
		formData.append("scan_photo", inputEl3.current.files[0]);
		formData.append("scan_passport_mother_with_residence_permit	", inputEl4.current.files[0]);
		formData.append("cert_marriage", inputEl5.current.files[0]);
		formData.append("cert_birth", inputEl6.current.files[0]);
		formData.append("cert_063", inputEl7.current.files[0]);
		formData.append("cert_086", inputEl8.current.files[0]);
		formData.append("cert_hivs", inputEl9.current.files[0]);
		
		try {
			const data = await Axios.put(`/enrollee/enrollee-profile/${userID}`,formData,{
				headers: {
					'Content-Type': 'multipart/form-data',
				  }
			  })

	         console.log(data);
			 const {status} = data
			 if(status === 200 ){
				 Swal.fire({
					 icon:'success',
					 text:'Файлы загружены успешно'
				 }).then(()=> history.push('/payment-transaction'))
				
			 }
		} catch (error) {
			Swal.fire({
				icon:'error',
				text:'Что-то пошло не так, пожалуйста, повторно загрузите файлы'
			})
			console.log(error);
		}
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
							<p>Сканер с оригинала паспорта</p>
							<div className="importFile">
								<img src={folder_icon} alt="" />
								<p>
									Drop your files here or a    
									<input onChange={handleInputChange} ref={inputEl1} type="file" 	id="chFile"  name="scan_passport_self"/> 
									<label htmlFor="chFile">choose file</label>
								</p>
							</div>
						</div>
						<div className="form_div">
							<p>Сканер диплом или аттестат с приложением</p>
							<div className="importFile">
								<img src={folder_icon} alt="" />
								<p>
									Drop your files here or a    
									<input onChange={handleInputChange} ref={inputEl2} type="file"   id="chFile2" 	 name="scan_passport_self"/> 
									<label htmlFor="chFile2">choose file</label>
								</p>
							</div>
						</div>
						<div className="form_div">
							<p>8 шт. фото 3х4, скан с оригинала</p>
							<div className="importFile">
								<img src={folder_icon} alt="" />
								<p>
									Drop your files here or a    
									<input onChange={handleInputChange} ref={inputEl3} type="file"  id="chFile3" 	 name="scan_diploma"/> 
									<label htmlFor="chFile3">choose file</label>
								</p>
							</div>
						</div>
						<div className="form_div">
							<p>Сканер паспорта матери с оригинала, + прописка</p>
							<div className="importFile">
								<img src={folder_icon} alt="" />
								<p>
									Drop your files here or a    
									<input onChange={handleInputChange} ref={inputEl4} type="file"  id="chFile4" 	 name="resume"/> 
									<label htmlFor="chFile4">choose file</label>
								</p>
							</div>
						</div>
						<div className="form_div">
							<p>Свидетельсво о браке, если в браке (Не обязательно)</p>
							<div className="importFile">
								<img src={folder_icon} alt="" />
								<p>
									Drop your files here or a    
									<input onChange={handleInputChange} ref={inputEl5} type="file"   id="chFile5"	 name="document"/> 
									<label htmlFor="chFile5">choose file</label>
								</p>
							</div>
						</div>
						<div className="form_div">
							<p>Свидетельство о рождении, скан с оригинала </p>
							<div className="importFile">
								<img src={folder_icon} alt="" />
								<p>
									Drop your files here or a    
									<input onChange={handleInputChange} ref={inputEl6} type="file"   id="chFile6"	 name="document"/> 
									<label htmlFor="chFile6">choose file</label>
								</p>
							</div>
						</div>
						<div className="form_div">
							<p>063 мед. справка, скан с оригинала</p>
							<div className="importFile">
								<img src={folder_icon} alt="" />
								<p>
									Drop your files here or a    
									<input onChange={handleInputChange} ref={inputEl7} type="file"   id="chFile7"	 name="document"/> 
									<label htmlFor="chFile7">choose file</label>
								</p>
							</div>
						</div>
						<div className="form_div">
							<p>086 мед. справка, скан с оригинала</p>
							<div className="importFile">
								<img src={folder_icon} alt="" />
								<p>
									Drop your files here or a    
									<input onChange={handleInputChange} ref={inputEl8} type="file"   id="chFile8"	 name="document"/> 
									<label htmlFor="chFile8">choose file</label>
								</p>
							</div>
						</div>
						<div className="form_div">
							<p>Справка о ВИЧ</p>
							<div className="importFile">
								<img src={folder_icon} alt="" />
								<p>
									Drop your files here or a    
									<input onChange={handleInputChange} ref={inputEl9} type="file"   id="chFile9"	 name="document"/> 
									<label htmlFor="chFile9">choose file</label>
								</p>
							</div>
						</div>
						<div className="btn_div">
							<button className="reg_btn">Завершить</button>
						</div>
					</form>
				</div>
			</React.Fragment>
		 );
}
 
export default Fayli;
